# ShopBug E-commerce Demo

A simple Next.js e-commerce website with:

- Home page
- Products page
- Cart page
- Payment page (checkout workflow)
- Basic login page

It is intentionally seeded with UI and functional bugs for bugcapture testing.

## Intentional functional bug hints

Current intentional bug count: **12**

1. Login accepts weak credentials (email-only style check).
2. Add-to-cart duplicates items instead of merging quantity.
3. Cart quantity can go negative.
4. Cart total uses wrong quantity math.
5. Removing first cart item removes the wrong item.
6. Coupon `SAVE10` increases total instead of reducing it.
7. Payment amount uses only the first cart item.
8. Payment can proceed even when user is not logged in.
9. Payment can proceed with an empty cart.
10. Payment card validation is too weak.
11. Payment clears only part of the cart after success.
12. Mobile navbar width overflows on small screens.

UI-specific intentional defect currently includes mobile nav overflow.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Deploy on Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Framework preset should auto-detect as **Next.js**.
4. Deploy.

No custom server setup is required.
