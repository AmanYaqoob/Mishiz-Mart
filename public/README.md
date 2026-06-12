# Image assets

Drop your images here — Vite serves this folder at the site root (`/`).

## Hero banner (required for the homepage)
Save the dark Rose Noir banner image as:

    public/hero.jpg

It loads automatically in the homepage hero (`.hero-banner-media` → `url('/hero.jpg')`).
A wide image (~1366×680 or larger, subject on the right) works best.

## Product photos (optional)
Save product shots here, e.g.:

    public/products/sk1.jpg

Then set `image: '/products/sk1.jpg'` on that product in `src/data/products.js`.
If no image is set, the branded SVG vessel is shown instead.
