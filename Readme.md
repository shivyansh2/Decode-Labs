# Grove & Roast — Responsive Frontend Interface

A lightweight, single-page coffee and pour-over gear storefront built with pure HTML5, CSS3, and vanilla JavaScript (no frameworks or build steps required).

---

## Key Features

* **Interactive Cart Drawer:** State-driven cart managed entirely client-side with single-source-of-truth DOM rendering (`renderCart()`).
* **Accessible UI Components:** Vanilla JS accordion FAQ, client-side validated newsletter form, and full keyboard navigation with visible focus states (`:focus-visible`).
* **Fluid & Responsive Layout:** CSS Grid and Flexbox with `clamp()` typography scaling smoothly across mobile, tablet, and 4-column desktop views.
* **Hybrid Media & Fallbacks:** High-resolution product photography paired with original, multi-layer SVG artwork—including automatic SVG fallbacks if image network requests fail.
* **Accessibility Focus:** Complete `aria-live` announcements, `aria-hidden`/`aria-expanded` drawer sync, screen-reader text equivalents, and `prefers-reduced-motion` support.

---

## Color Palette & Typography

* **Mocha Mousse (`#A5936F`)** — Decorative accents & UI components
* **Mocha Deep (`#6E5D42`)** — Accessible high-contrast interactive text & buttons (4.5:1 AA compliance)
* **Ethereal Blue (`#A0D4E0`)** — Dark/light surface accents
* **Moonlit Grey (`#F2F0EA`)** — Base background
* **Typography:** Montserrat (Headings) & Roboto (Body)

---

## File Structure

```text
├── index.html
|
├── css/
│   └── styles.css
|
├── js/
│   └── script.js
|
├── images/
│   └── .jpg
|
└── README.md

```
Live Link: https://coffeestorefront.netlify.app/
