# Mahmoud Khattab — Private Tour Guide, Egypt

Marketing site for a licensed private guide operating in Cairo, Giza, Luxor,
Aswan, Alexandria and the White Desert. Russian / English / Chinese.

Plain HTML, CSS and vanilla JavaScript — **no build step, no framework, no
Node.js required in production.** It drops straight into a cPanel `public_html`
folder and runs on any Apache + PHP host.

---

## Stack

| Layer | What it is |
|---|---|
| Markup | A single static `index.html` |
| Styling | 5 stylesheets in `css/`, loaded in cascade order |
| Behaviour | Vanilla JS in `js/`, no bundler, no dependencies |
| Content | Data-driven: venues, reviews and media live in `js/*-data.js` |
| Backend | One file — `contact.php` — for the enquiry form |
| Local dev | `server.js` (optional convenience only; never deployed) |

---

## Deploying to cPanel

### 1. Create the sending mailbox first

cPanel → **Email Accounts** → create `noreply@yourdomain.com`.

PHP's `mail()` must send *from an address on your own domain*. If it sends from
a Gmail or a made-up address, your host's SPF/DMARC record will not authorise
it and Gmail, Mail.ru and Yandex will silently drop every enquiry.

### 2. Configure

```bash
cp config.example.php config.php
```

Edit `config.php` and set `to`, `from` and `from_name`. This file is
git-ignored and blocked by `.htaccess`, so it never reaches the repo or the web.

### 3. Upload

Copy everything **except** the git-ignored items into `public_html/`:

```
public_html/
├── index.html
├── 404.html
├── contact.php
├── config.php          ← you created this, not in git
├── .htaccess
├── robots.txt
├── sitemap.xml
├── assets/
├── css/
└── js/
```

Easiest route: cPanel → **Git™ Version Control** → clone this repository
straight into `public_html`, then `git pull` for every future update.
Otherwise upload a zip via **File Manager** and extract.

### 4. Permissions

```
files       644
folders     755
storage/    755   (created automatically on first enquiry)
```

### 5. Check it

- Visit `https://yourdomain.com` — should redirect to HTTPS and non-www.
- Visit `https://yourdomain.com/nope` — should show the styled 404.
- Send a test enquiry. It should arrive by email **and** be appended to
  `storage/enquiries.log`.
- Run the URL through PageSpeed Insights.

---

## What `.htaccess` does

- Forces HTTPS and a canonical non-www host
- Gzip / Brotli compression for text assets
- One-year immutable caching for images, CSS and JS; no caching for HTML
- Correct MIME types for `.webp`, `.avif`, `.webm`, `.lottie` — many shared
  hosts omit these and the assets fail silently without them
- Transparently serves `image.webp` when the browser sends `Accept: image/webp`
  and the file exists next to the JPEG
- Security headers (`nosniff`, `SAMEORIGIN`, HSTS, Referrer-Policy)
- Blocks `config.php`, dotfiles, `*.md` and `*.log` from the web
- Disables directory listing

If your host runs **LiteSpeed** (most cPanel hosts do) everything above is
supported as-is. On nginx-fronted hosts you'll need the equivalent server block
instead — `.htaccess` is ignored there.

---

## The enquiry form

`contact.php` replaced a `<form action="mailto:...">`, which opened the
visitor's desktop mail client and lost the lead entirely on phones and webmail.

It includes:

- **Honeypot field** — hidden from people, filled by bots, answered with a fake
  success so the bot doesn't retry
- **Time trap** — anything submitted within 3 seconds of page render is a bot
- **Per-IP rate limit** — 12/hour, stored in the system temp dir, no database
- **Header-injection guard** on name and contact
- **Local log fallback** — every enquiry is appended to `storage/enquiries.log`
  even if `mail()` fails, so a hosting problem never costs you a booking
- **Works without JavaScript** — posts natively and renders a styled
  confirmation page; with JS it posts in the background and answers inline

---

## Images

The five stock masters in the project root are **8000 px, 49 MB in total**, and
were being loaded directly — one of them as a CSS background, which browsers
never lazy-load.

`assets/hero/` holds the web build: each master at 800 / 1280 / 1920 px in both
JPEG and WebP. **49 MB → 3.5 MB**, visually identical at any real viewport.

The masters are git-ignored. To regenerate the web build after adding a new
master:

```bash
python3 tools/build-images.py
```

---

## Local development

```bash
node server.js          # http://localhost:8080  — static only, no PHP
```

To exercise the contact form locally you need PHP:

```bash
php -S localhost:8080   # serves the static files *and* contact.php
```

`server.js` is a convenience for previewing markup. It is **not** used in
production and does not need to be uploaded.

---

## Editing content

No build step — edit and reload.

| To change | Edit |
|---|---|
| Destinations & landmarks | `js/venues-data.js` |
| Guest reviews | `js/reviews-data.js` |
| Gallery photos & videos | `js/media-data.js` |
| Interface text (RU/EN/ZH) | `js/translations.js` |
| Layout & visual fixes | `css/fixes.css` (loaded last, safest place) |

After editing any `css/` or `js/` file, bump the `?v=` query string in
`index.html` so returning visitors get the new version instead of the
one-year-cached copy.

---

## Known cleanup still worth doing

- Four stylesheets override one another; `human-redesign.css` redefines
  `style.css`'s design tokens, so `--gold-500` currently resolves to blue.
  They should be merged into one.
- ~30 unsorted `WhatsApp Image *.jpeg` files sit in the project root. They're
  git-ignored, but the useful ones should be moved into `assets/photos/`.
- `index.html` still ships markup for two sections that CSS hides
  (`.messenger-hub-strip`, `#trip-builder-legacy`). Deleting them would cut
  ~130 DOM nodes from every page load.
