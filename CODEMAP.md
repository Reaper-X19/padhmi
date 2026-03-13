# Padhmi Project Code Map

This document maps out what each file does in the Padhmi e-commerce website to make the codebase modular and easily maintainable.

## 📂 Source Code (`src/`)

### `src/app/` — [App Router & Pages]
The Next.js App Router directory. Each folder with a `page.tsx` represents a route.
- `layout.tsx` — The **Global Root Layout**: Loads fonts, sets up CSS variables, includes Snipcart script, and wraps the app with Header/Footer.
- `page.tsx` — The **Homepage**: Contains the main landing experience.
- *(Future)* `shop/page.tsx` — The **Shop Page**: Product grid and filters.
- *(Future)* `vrushaahi/page.tsx` — The **Vrushaahi Bridal Collection Layout**.
- *(Future)* `about/page.tsx` — The **About Us Story Page**.
- *(Future)* `contact/page.tsx` — The **Contact Us Support Page**.
- *(Future)* `faq/page.tsx` — The **Frequently Asked Questions Page**.

### `src/components/` — [Reusable UI Components]
Modular UI elements used across different pages.
- *(Future)* `Header.tsx` — Top navigation bar with logo and cart trigger.
- *(Future)* `Footer.tsx` — Bottom navigation with links and newsletter.
- *(Future)* `ProductCard.tsx` — Individual product tile (image, title, price, badges).
- *(Future)* `Button.tsx` — Standardized button component matching design system.

### `src/styles/` — [CSS & Design System]
- `globals.css` — Global CSS resets and CSS variable definitions (colors, fonts, spacing).
- `variables.css` — The Padhmi Design System CSS variables.

### `src/data/` — [Mock Database / Content]
Temporary static data storage before connecting a real database.
- *(Future)* `products.ts` — The JSON representation of the product catalog.

## 📂 Public Assets (`public/`)
Static files served directly at the root level.
- `images/` — Contains all product and lifestyle photography.

---
*Note: This file will be updated as new features and files are added.*
