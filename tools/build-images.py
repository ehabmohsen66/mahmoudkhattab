#!/usr/bin/env python3
"""
Rebuild the responsive web images in assets/hero/ from the full-size masters
that sit in the project root.

The masters are 4000-10000 px wide and 4-17 MB each; they must never be served
to a browser. This produces 800 / 1280 / 1920 px variants in JPEG and WebP.

    python3 tools/build-images.py

Requires Pillow:  pip install Pillow
"""
import os
import sys

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("Pillow is required:  pip install Pillow")

Image.MAX_IMAGE_PIXELS = None

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "assets", "hero")

# master filename -> output basename used in CSS/JS
MASTERS = {
    "desert-and-pyramids-2026-03-24-08-01-43-utc.jpg": "hero-desert",
    "man-riding-rearing-white-horse-in-front-of-great-p-2026-06-11-21-15-19-utc.jpg": "hero-horse",
    "nile-in-cairo-2026-03-24-05-15-30-utc.jpg": "hero-nile",
    "a-young-tourist-jumping-for-joy-in-a-blue-turban-a-2026-03-16-05-14-25-utc.jpg": "hero-tourist",
    "minimizing-vertical-view-of-the-temple-of-kom-ombo-2026-03-18-08-00-02-utc.jpg": "hero-komombo",
}

WIDTHS = (1920, 1280, 800)
JPEG_QUALITY = 78
WEBP_QUALITY = 74


def main() -> int:
    os.makedirs(OUT, exist_ok=True)
    total_in = total_out = 0
    missing = []

    for src, name in MASTERS.items():
        path = os.path.join(ROOT, src)
        if not os.path.exists(path):
            missing.append(src)
            continue

        im = ImageOps.exif_transpose(Image.open(path)).convert("RGB")
        size_in = os.path.getsize(path)
        total_in += size_in
        written = []

        for width in WIDTHS:
            if width > im.width:
                continue
            ratio = width / im.width
            resized = im.resize((width, round(im.height * ratio)), Image.LANCZOS)

            jpg = os.path.join(OUT, f"{name}-{width}.jpg")
            resized.save(jpg, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)

            webp = os.path.join(OUT, f"{name}-{width}.webp")
            resized.save(webp, "WEBP", quality=WEBP_QUALITY, method=6)

            written += [jpg, webp]

        size_out = sum(os.path.getsize(f) for f in written)
        total_out += size_out
        print(f"{name:14s} {im.width}x{im.height}  "
              f"{size_in / 1048576:6.1f} MB -> {size_out / 1024:7.0f} KB  "
              f"({len(written)} files)")

    if missing:
        print("\nSkipped (master not present — it is git-ignored):")
        for m in missing:
            print("   ", m)

    if total_in:
        print(f"\nTOTAL  {total_in / 1048576:.1f} MB  ->  {total_out / 1048576:.2f} MB")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
