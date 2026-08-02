# Create With Siva — Portfolio Landing Page

A premium, single-page portfolio website for **Create With Siva**, an AI-powered
product catalog and photography service for e-commerce sellers (Amazon, Shopify,
Flipkart, Meesho, Myntra, Etsy, and Instagram shops).

Built with plain HTML5, CSS3, and vanilla JavaScript — no frameworks, no build
step, no dependencies to install. Ready to upload directly to GitHub Pages.

---

## 📁 Project Structure

```
create-with-siva/
├── index.html              → the entire website (all sections)
├── style.css               → all styling, design tokens, responsive rules
├── script.js                → all interactivity (menu, filters, accordion, etc.)
├── robots.txt               → search engine crawling rules
├── sitemap.xml               → search engine sitemap
├── README.md                 → this file
├── assets/
│   └── site.webmanifest      → mobile "add to home screen" config
└── images/
    ├── logo-create-with-siva.png     → your brand logo (nav + footer)
    ├── favicon.ico, favicon-16x16.png,
    │   favicon-32x32.png, apple-touch-icon.png  → browser tab / home screen icons
    ├── og-cover.jpg                   → preview image for social media shares
    ├── icons-sprite.svg               → all UI icons (single file, referenced via <use>)
    ├── hero-*.jpg                     → hero section images (3 files)
    ├── service-*.jpg                  → one image per service card (7 files)
    ├── portfolio-*.jpg                → portfolio gallery images (10 files)
    └── before-*.jpg / after-*.jpg     → before & after comparison pairs (6 files)
```

---

## 🎨 Design System

- **Colors**: pulled directly from the brand logo (electric blue → aqua mint →
  volt lime gradient) — defined as CSS variables at the top of `style.css`
- **Fonts**: Space Grotesk (headings), Inter (body text), JetBrains Mono
  (prices, stats, labels) — loaded from Google Fonts, no local font files needed
- **Signature motif**: a rotated diamond frame (echoing the logo's diamond
  outline) used for every image container across the site

---

## 🖼️ Current Images Are Placeholders

Every photo in `images/` right now is a **generated placeholder** — a labeled
brand-colored graphic marking where a real photo belongs (e.g. "Lifestyle —
Bags"). The site is fully functional and looks complete as-is, but for a real
launch you should replace these with actual before/after and portfolio samples
of your delivered work.

**Replacing an image never requires touching the code** — just upload a new
file with the *exact same filename* into `images/` (see the GitHub Pages guide
for the mobile-friendly steps).

---

## 🔖 Favicon Guidance

The favicon (the small icon in a browser tab) was generated from your uploaded
logo and already includes:

| File | Used for |
|---|---|
| `favicon.ico` | Older/general browser support |
| `favicon-16x16.png` | Browser tab, small size |
| `favicon-32x32.png` | Browser tab, standard size |
| `apple-touch-icon.png` | iPhone/iPad "Add to Home Screen" icon |

To replace these with a different logo crop later: generate new versions at
the same file names and sizes (16×16, 32×32, 180×180, plus a `.ico`) using any
free favicon generator (e.g. search "favicon generator" and upload your logo),
then re-upload them into `images/` with the same filenames.

---

## ⚙️ Features

- Fully responsive: desktop, laptop, tablet, and mobile
- Sticky glass navigation with mobile hamburger menu
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Filterable portfolio gallery
- Draggable before/after comparison sliders
- Tabbed pricing (Indian / International clients)
- Accordion FAQ
- SEO: meta tags, Open Graph, Twitter Card, and JSON-LD structured data built in
- Zero external JS dependencies — everything is hand-written vanilla JS

---

## 🛠️ Updating Content Later

- **Pricing** → edit the numbers directly inside the `<section class="pricing">`
  block in `index.html`
- **Contact links** → update the `href` values in the `<section class="contact">`
  block and in the footer
- **Text/copy** → edit directly inside the relevant `<section>` in `index.html`

See the GitHub Pages upload guide for full step-by-step instructions on all of
the above, written for editing directly from a phone.

---

## 📄 License

This project was built for the exclusive use of the Create With Siva brand.
