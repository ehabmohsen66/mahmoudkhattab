# Handoff — Mahmoud Khattab site

Context for the next agent/developer picking this up. Written after a UX audit
and a fix pass. **Read this before editing CSS.**

---

## 1. What this project is

Static marketing site for a licensed private tour guide in Egypt.
Russian-primary, with English and Chinese. Plain HTML/CSS/vanilla JS —
**no build step, no framework, no bundler.** Deploys to cPanel Apache + PHP.

```
index.html            single page, ~82 KB, all sections inline
css/                  5 stylesheets, cascade order matters (see §3)
js/                   vanilla, no deps; *-data.js files hold all content
contact.php           the only backend file
assets/hero/          generated responsive images (see §4)
tools/build-images.py regenerates assets/hero/ from the masters
server.js             local static preview only — NOT deployed
```

---

## 2. What was changed in this pass

### Blockers fixed

| Issue | Evidence before | Now |
|---|---|---|
| Mobile menu unreachable | toggle rendered at `x=379` + 40px wide = right edge 419 on a 390px viewport; `document.scrollWidth` 419 | 44×44, on-screen, drawer opens; `scrollWidth === 390` |
| Dead primary CTA | nav link **and** a hero button both `href="#trip-builder"`; that section is `display:none !important` (`human-redesign.css:2081`) | both repointed to `#contact` |
| No persistent contact | `.floating-contact-bar` was inside a 21-selector `display:none` block | re-enabled; bottom bar on mobile, right rail on desktop, WhatsApp as the primary |
| Image weight | 5 stock masters, 4000–10000px, **49 MB**, one served as a CSS background (never lazy-loaded) | `assets/hero/` — 800/1280/1920 in JPEG+WebP, **3.5 MB** |

### Correction to an earlier claim

An earlier audit reported "13.2 s load time" as a site defect. **That was wrong** —
it was the audit sandbox having no outbound internet, so the Google Fonts
request hung for the full timeout. Do not treat that number as real.

Chasing it down did surface a genuine issue: the Google Fonts `<link>` was
render-blocking with no fallback, and **fonts.googleapis.com is blocked in
mainland China** — an audience this site explicitly serves (中文 switcher).
Measured with fonts unreachable: **FCP 13,288 ms → 412 ms** after switching to
`media="print" onload` + a metric-similar system font stack.

### Other fixes

- **9 dead gallery entries** — `photo_28`–`photo_35` and `mahmoud_guide_pyramids.jpg`
  were deleted from disk but still referenced in `js/media-data.js`. Entries removed
  (gallery 88 → 79 items). No spare Instagram photos existed to remap to.
- **6 reviewer avatars** pointed at root files with spaces in the name
  (`WhatsApp Image 2026-08-16 at 2.09.36 PM.jpeg`). Those are `.gitignore`d, so they
  would have 404'd on deploy. Replaced with `assets/avatars/*.jpg`, 160px centre-crops.
  869 KB → 49 KB.
- **Review card**: rating block was absolutely positioned over the reviewer name
  (one card rendered `Санкт-Петербург, Россия5.0★4-10-05`). Now a flex row.
- **Truncation**: all four "about" credentials, destination highlight lists and
  reviewer names ended in `…` mid-word. Un-clamped. Review quotes keep a
  deliberate 12-line clamp with a fade (9 of 20 exceed it; the source link in the
  card footer is the "read all" affordance).
- **Contrast/type**: every WCAG AA failure resolved. `--muted` darkened
  `#617078 → #4e6068`; 9px badges → 12px; language pills 34×32 → 44×44;
  nav links 41px → 52px on mobile.
- **Decorative videos**: two `.webm` overlays (3.2 MB, 62% of page weight) now
  `preload="none"` + IntersectionObserver, and pause off-screen.
  Respects `prefers-reduced-motion`.
- **CLS**: none of the 192 `<img>` tags carry `width`/`height`. Rather than
  editing JS-generated markup, `aspect-ratio` is set on the containers in
  `fixes.css §6`. If you ever templatise the images, add real attributes and
  delete that block.
- One `<h1>` now, not two (brand demoted to `.brand-name` div).

**Net: 5.35 MB → 3.05 MB page weight, 0 console errors, 0 4xx, 0 broken images.**

---

## 3. CSS architecture — READ THIS FIRST

Load order in `index.html`, and it matters:

```
style.css          58 KB  dark + gold "imperial" theme, Cinzel serif
responsive.css      5 KB
redesign.css       42 KB
human-redesign.css 75 KB  light "Nile blue" theme
fixes.css          15 KB  ← this pass (overrides only)
```

**`human-redesign.css` redefines `style.css`'s design tokens rather than
replacing the file.** The consequence:

```css
/* style.css */          --gold-500: #b89125;      /* actually gold */
/* human-redesign.css */ --gold-500: var(--nile);  /* now BLUE  */
                         --text-white: var(--ink); /* now BLACK */
```

So **token names lie about their values.** `--gold-*` is blue, `--text-white`
is near-black. This is the single biggest source of surprise when editing.

`human-redesign.css` also carries a `display:none !important` block (~line 76)
that deletes whole features, and `.quick-plan-section` is hard-disabled at
line 2081 ("hidden per user request" — that was intentional, leave it off unless
the owner asks).

### Rules for editing

1. **Put new work in `css/fixes.css`.** It loads last and is override-only, so
   it's revertible by deleting one `<link>`. It's organised in numbered sections
   with a comment on each explaining *what was broken*, not just what changed.
2. Don't add new `!important` unless you're beating an existing one — most of
   `fixes.css` needs it only because `human-redesign.css` used it first.
3. **After editing any `css/` or `js/` file, bump the `?v=` query string in
   `index.html`.** `.htaccess` caches these for a year.

### The real cleanup, not done here

Merge all four stylesheets into one, with `human-redesign.css` as the source of
truth, and rename tokens to what they actually are (`--accent`, `--accent-warm`,
`--surface`). ~133 KB should land near 45 KB. This was deliberately **not** done
in this pass because it's a large blast radius and the blockers were more urgent.

---

## 4. Images

`tools/build-images.py` reads the 5 masters from the project root and writes
800/1280/1920 JPEG+WebP into `assets/hero/`. The masters are `.gitignore`d —
if you clone fresh they won't be there and the script will skip them with a
clear message. That's expected; the generated output *is* committed.

```bash
python3 tools/build-images.py   # needs Pillow
```

References were rewritten in `css/human-redesign.css`, `js/media-data.js` and
`index.html`. Nothing points at a root master any more — verify with:

```bash
grep -rn "2026-03-24-08-01-43-utc\|man-riding-rearing" index.html css js
```

---

## 5. Backend — `contact.php`

Replaced `<form action="mailto:...">`, which opened the visitor's desktop mail
client and lost the lead outright on phones and webmail.

- Honeypot (`name="website"`), 3-second time trap, per-IP rate limit (12/hr, temp
  files, no DB), header-injection guard on name/contact
- Returns JSON to `fetch`, a styled HTML page without JS — **the form works with
  JavaScript disabled**
- Appends every enquiry to `storage/enquiries.log` even when `mail()` fails, so a
  hosting problem never costs a booking
- Config in `config.php` (git-ignored, `.htaccess`-blocked); template is
  `config.example.php`

**Deployment prerequisite:** `from` must be a real mailbox on the site's own
domain (create it in cPanel → Email Accounts). If it sends from Gmail or a
fictional address, SPF/DMARC will cause Gmail/Mail.ru/Yandex to drop everything
silently.

All 7 paths were tested against `php -S`: 405 on GET, silent-success on honeypot,
422 on missing fields, 400 on injection, 500 + WhatsApp fallback when `mail()`
is unavailable, HTML fallback for no-JS, log written in every case.

---

## 6. Deployment

`.htaccess` handles: HTTPS + non-www canonical, gzip/brotli, 1-year immutable
caching for assets and no-cache for HTML, **MIME types for `.webp`/`.avif`/
`.webm`/`.lottie`** (many shared hosts omit these and the assets fail silently),
security headers, transparent WebP substitution via `Accept`, blocks on
`config.php`/dotfiles/`*.md`/`*.log`, directory listing off.

Works as-is on Apache and LiteSpeed (most cPanel hosts). **Ignored on
nginx-fronted hosts** — you'd need an equivalent server block there.

Cloudflare is planned in front of this. Note that Cloudflare Polish recompresses
but does **not** downscale, so the `assets/hero/` resize still does the heavy
lifting; don't assume the CDN makes it redundant.

### Git

`git init` has been run; nothing committed yet. `.gitignore` excludes the 49 MB
masters, `config.php`, `storage/`, `.DS_Store`, `.agent/` and the ~30 unsorted
`WhatsApp Image *.jpeg` files in the root. **Tracked set: 33 MB of 105 MB.**

---

## 7. Known-remaining work, roughly in value order

1. **Merge the four stylesheets** and rename the lying tokens (§3). Unblocks
   everything else.
2. **Delete hidden markup.** `index.html` still ships `.messenger-hub-strip`
   (30 nodes) and `#trip-builder-legacy` (102 nodes) purely to hide them in CSS.
3. **Page length.** 10,943 px desktop / 14,253 px mobile — still ~17 phone
   screens. Destination cards are ~700 px each at 2-up; a compact expand-on-tap
   card would roughly halve the page.
4. **No pricing signal anywhere.** Likely the biggest single conversion lever
   left. Even "from $X/day, all-inclusive, no hidden fees" reinforces the
   existing "no shops, no commissions" copy.
5. **Hero does one-of-everything** — five messenger icons, two buttons and a
   carousel competing. One primary action would convert better.
6. **Reviews are the strongest asset and sit at ~60% scroll depth.** Move one
   hand-picked quote with a guest photo directly under the hero.
7. Tidy the ~30 loose `WhatsApp Image *.jpeg` files in the project root into
   `assets/photos/`.

---

## 8. How to verify a change didn't regress anything

The audit was done with headless Chromium at 1440×900 and 390×844, checking:
`document.scrollWidth` vs viewport, menu-toggle bounding box, nav anchors
resolving to non-zero-height targets, tap targets ≥44 px, clamped elements whose
`scrollHeight > clientHeight`, WCAG AA contrast on every leaf text node, 4xx
responses, `pageerror`, and `img.naturalWidth === 0`.

Quick smoke test before any deploy:

```bash
php -S localhost:8080          # serves static files AND contact.php
```

- 390 px wide: hamburger visible, drawer opens, all 3 language pills legible,
  no horizontal scroll
- Sticky WhatsApp bar present at every scroll depth
- Console clean, no broken images
- Submit the contact form; check `storage/enquiries.log`
