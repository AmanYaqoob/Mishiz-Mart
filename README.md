# Mishiz Mart — Beauty storefront (frontend)

A React + Vite storefront for a beauty/cosmetics shop. Frontend only for now —
cart and login are stored in the browser (localStorage); no backend yet.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## What's inside

- **26 products** across Skin · Color · Hair · Scent · Tools (see `src/data/products.js`)
- **Add to cart** — slide-out bag with quantities, free-shipping threshold, persisted to localStorage
- **Simple login / signup** — modal, accounts stored in localStorage (`src/store/StoreContext.jsx`)
- **Pages**: Home, Shop (filter + sort), FAQ, Privacy Policy, Refund Policy
- **Visuals**: product imagery is generated as inline SVG cosmetic vessels (`src/components/Vessel.jsx`) — no external image assets needed

## Before launch — fill in business details

All contact/legal details live in one file: **`src/data/site.js`**

| Field     | Replace with                |
|-----------|-----------------------------|
| `email`   | professional email          |
| `phone`   | USA phone number            |
| `llc`     | registered LLC name         |
| `address` | LLC address                 |

These flow automatically into the footer, Privacy Policy, Refund Policy and FAQ.

## Next steps (when ready for a backend)

- Real authentication + order persistence
- Checkout / payments (e.g. Stripe)
- Product images / CMS
