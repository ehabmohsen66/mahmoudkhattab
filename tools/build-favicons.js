const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const zlib = require('zlib');

const ROOT_DIR = path.resolve(__dirname, '..');
const MASTER_SRC = path.join(ROOT_DIR, 'assets/branding/egypt-heritage-logo.png');
const MASTER_CROPPED = path.join(ROOT_DIR, 'assets/branding/favicon-master.png');

console.log('--- Generating Favicons for Mahmoud Khattab ---');

// 1. Crop 2048x2048 master if not already present
execSync(`sips -c 2048 2048 "${MASTER_SRC}" -o "${MASTER_CROPPED}"`, { stdio: 'inherit' });

// 2. Generate standard PNG sizes
const sizes = [
  { file: 'favicon-16x16.png', size: 16 },
  { file: 'favicon-32x32.png', size: 32 },
  { file: 'favicon-48x48.png', size: 48 },
  { file: 'favicon-96x96.png', size: 96 },
  { file: 'web-app-manifest-192x192.png', size: 192 },
  { file: 'web-app-manifest-512x512.png', size: 512 },
];

for (const { file, size } of sizes) {
  const dest = path.join(ROOT_DIR, file);
  execSync(`sips -z ${size} ${size} "${MASTER_CROPPED}" -o "${dest}"`, { stdio: 'inherit' });
  console.log(`Generated ${file} (${size}x${size})`);
}

// 3. Generate Apple Touch Icon (180x180) with solid luxury dark navy background (#0b1519)
// Apple devices do not support transparent icons for apple-touch-icon
const tempEmblem = path.join(ROOT_DIR, 'assets/branding/emblem-136.png');
execSync(`sips -z 136 136 "${MASTER_CROPPED}" -o "${tempEmblem}"`, { stdio: 'inherit' });

// Decode temp emblem PNG
function decodePng(buf) {
  let offset = 8;
  let idatBuffers = [];
  let width = 0, height = 0;

  while (offset < buf.length) {
    const len = buf.readUInt32BE(offset);
    const type = buf.slice(offset + 4, offset + 8).toString('ascii');
    if (type === 'IHDR') {
      width = buf.readUInt32BE(offset + 8);
      height = buf.readUInt32BE(offset + 12);
    } else if (type === 'IDAT') {
      idatBuffers.push(buf.slice(offset + 8, offset + 8 + len));
    }
    offset += 8 + len + 4;
  }

  const decompressed = zlib.inflateSync(Buffer.concat(idatBuffers));
  const bpp = 4;
  const raw = Buffer.alloc(width * height * 4);
  const stride = width * 4 + 1;

  let prevRow = Buffer.alloc(width * 4);
  for (let y = 0; y < height; y++) {
    const filter = decompressed[y * stride];
    const srcRow = decompressed.slice(y * stride + 1, y * stride + 1 + width * 4);
    const dstRow = raw.slice(y * width * 4, (y + 1) * width * 4);
    for (let x = 0; x < width * 4; x++) {
      const a = (x >= bpp) ? dstRow[x - bpp] : 0;
      const b = prevRow[x];
      const c = (x >= bpp) ? prevRow[x - bpp] : 0;
      let val = srcRow[x];
      if (filter === 0) dstRow[x] = val;
      else if (filter === 1) dstRow[x] = (val + a) & 0xff;
      else if (filter === 2) dstRow[x] = (val + b) & 0xff;
      else if (filter === 3) dstRow[x] = (val + Math.floor((a + b) / 2)) & 0xff;
      else if (filter === 4) {
        const p = a + b - c;
        const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
        let pr = (pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c);
        dstRow[x] = (val + pr) & 0xff;
      }
    }
    prevRow = dstRow;
  }
  return { width, height, raw };
}

// Encode PNG
function encodePng(width, height, rgbaBuffer) {
  const stride = width * 4 + 1;
  const uncompressed = Buffer.alloc(stride * height);
  for (let y = 0; y < height; y++) {
    uncompressed[y * stride] = 0;
    rgbaBuffer.copy(uncompressed, y * stride + 1, y * width * 4, (y + 1) * width * 4);
  }
  const idatData = zlib.deflateSync(uncompressed, { level: 9 });

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    crcTable[n] = c >>> 0;
  }
  function crc32(buf) {
    let c = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
    }
    return (c ^ 0xffffffff) >>> 0;
  }

  function makeChunk(type, data) {
    const len = data.length;
    const buf = Buffer.alloc(8 + len + 4);
    buf.writeUInt32BE(len, 0);
    buf.write(type, 4, 4, 'ascii');
    data.copy(buf, 8);
    const crc = crc32(buf.slice(4, 8 + len));
    buf.writeUInt32BE(crc, 8 + len);
    return buf;
  }

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', idatData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const emblemDecoded = decodePng(fs.readFileSync(tempEmblem));
const touchIconSize = 180;
const touchIconRaw = Buffer.alloc(touchIconSize * touchIconSize * 4);

// Background: deep luxury midnight navy (#0b1519 -> r:11, g:21, b:25, a:255)
// with a subtle concentric gradient and golden ring
const bgR = 11, bgG = 21, bgB = 25;
const center = touchIconSize / 2;
const maxRadius = touchIconSize / 2;

for (let y = 0; y < touchIconSize; y++) {
  for (let x = 0; x < touchIconSize; x++) {
    const idx = (y * touchIconSize + x) * 4;
    const dx = x - center;
    const dy = y - center;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    // Subtle radial glow in the center
    const glow = Math.max(0, 1 - dist / (maxRadius * 0.9));
    const r = Math.min(255, Math.round(bgR + glow * 14));
    const g = Math.min(255, Math.round(bgG + glow * 24));
    const b = Math.min(255, Math.round(bgB + glow * 32));
    
    touchIconRaw[idx] = r;
    touchIconRaw[idx + 1] = g;
    touchIconRaw[idx + 2] = b;
    touchIconRaw[idx + 3] = 255;
  }
}

// Composite 136x136 emblem centered on 180x180 canvas
const offsetX = Math.round((touchIconSize - emblemDecoded.width) / 2);
const offsetY = Math.round((touchIconSize - emblemDecoded.height) / 2);

for (let ey = 0; ey < emblemDecoded.height; ey++) {
  for (let ex = 0; ex < emblemDecoded.width; ex++) {
    const eIdx = (ey * emblemDecoded.width + ex) * 4;
    const er = emblemDecoded.raw[eIdx];
    const eg = emblemDecoded.raw[eIdx + 1];
    const eb = emblemDecoded.raw[eIdx + 2];
    const ea = emblemDecoded.raw[eIdx + 3] / 255;

    if (ea > 0) {
      const tx = offsetX + ex;
      const ty = offsetY + ey;
      const tIdx = (ty * touchIconSize + tx) * 4;
      const tr = touchIconRaw[tIdx];
      const tg = touchIconRaw[tIdx + 1];
      const tb = touchIconRaw[tIdx + 2];

      touchIconRaw[tIdx] = Math.round(er * ea + tr * (1 - ea));
      touchIconRaw[tIdx + 1] = Math.round(eg * ea + tg * (1 - ea));
      touchIconRaw[tIdx + 2] = Math.round(eb * ea + tb * (1 - ea));
      touchIconRaw[tIdx + 3] = 255;
    }
  }
}

const touchIconPng = encodePng(touchIconSize, touchIconSize, touchIconRaw);
fs.writeFileSync(path.join(ROOT_DIR, 'apple-touch-icon.png'), touchIconPng);
fs.writeFileSync(path.join(ROOT_DIR, 'apple-touch-icon-precomposed.png'), touchIconPng);
console.log('Generated apple-touch-icon.png (180x180, luxury navy background)');
if (fs.existsSync(tempEmblem)) fs.unlinkSync(tempEmblem);

// 4. Generate multi-resolution favicon.ico (16x16, 32x32, 48x48)
function createIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = ICO
  header.writeUInt16LE(images.length, 4); // count

  let offset = 6 + 16 * images.length;
  const entries = [];

  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bit count
    entry.writeUInt32LE(img.data.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    entries.push(entry);
    offset += img.data.length;
  }

  return Buffer.concat([header, ...entries, ...images.map(i => i.data)]);
}

const icoImages = [
  { width: 16, height: 16, data: fs.readFileSync(path.join(ROOT_DIR, 'favicon-16x16.png')) },
  { width: 32, height: 32, data: fs.readFileSync(path.join(ROOT_DIR, 'favicon-32x32.png')) },
  { width: 48, height: 48, data: fs.readFileSync(path.join(ROOT_DIR, 'favicon-48x48.png')) },
];

const icoBuf = createIco(icoImages);
fs.writeFileSync(path.join(ROOT_DIR, 'favicon.ico'), icoBuf);
console.log('Generated favicon.ico (multi-resolution 16x16, 32x32, 48x48)');

// 5. Generate scalable vector favicon.svg with embedded base64 and dark/light mode styling
const base64Emblem = fs.readFileSync(path.join(ROOT_DIR, 'favicon-96x96.png')).toString('base64');
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffbf1f" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#ffbf1f" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="goldGlow" cx="50%" cy="50%" r="45%">
      <stop offset="70%" stop-color="#d18c42" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#ffbf1f" stop-opacity="0" />
    </radialGradient>
  </defs>
  <style>
    .bg-disc { fill: #0b1519; }
    .gold-border { stroke: #d18c42; stroke-width: 8; fill: none; opacity: 0.7; }
    @media (prefers-color-scheme: light) {
      .bg-disc { fill: #075b78; }
      .gold-border { stroke: #ffbf1f; opacity: 0.9; }
    }
  </style>
  <rect width="512" height="512" rx="112" class="bg-disc" />
  <rect x="16" y="16" width="480" height="480" rx="96" class="gold-border" />
  <circle cx="256" cy="256" r="220" fill="url(#sunGlow)" />
  <circle cx="256" cy="256" r="180" fill="url(#goldGlow)" />
  <image href="data:image/png;base64,${base64Emblem}" x="64" y="64" width="384" height="384" preserveAspectRatio="xMidYMid meet"/>
</svg>
`;

fs.writeFileSync(path.join(ROOT_DIR, 'favicon.svg'), svgContent);
fs.writeFileSync(path.join(ROOT_DIR, 'assets/branding/favicon.svg'), svgContent);
console.log('Generated favicon.svg and assets/branding/favicon.svg');

// 6. Generate site.webmanifest
const manifest = {
  name: "Махмуд Хаттаб — Частный Русский Гид в Египте",
  short_name: "Mahmoud Khattab",
  description: "Лицензированный русскоговорящий частный гид в Египте с 20-летним опытом. VIP туры по Каиру, Луксору, Гизе и Сахаре.",
  start_url: "/",
  display: "standalone",
  background_color: "#0b1519",
  theme_color: "#087ea4",
  icons: [
    {
      src: "/favicon-96x96.png",
      sizes: "96x96",
      type: "image/png"
    },
    {
      src: "/web-app-manifest-192x192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any maskable"
    },
    {
      src: "/web-app-manifest-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable"
    },
    {
      src: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    }
  ]
};

fs.writeFileSync(path.join(ROOT_DIR, 'site.webmanifest'), JSON.stringify(manifest, null, 2) + '\n');
console.log('Generated site.webmanifest');
console.log('Favicon generation completed successfully!');
