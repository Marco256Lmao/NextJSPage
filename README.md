# NextJSPage

Page displaying different items as would a control-panel using Next.js

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Features

- Responsive design
- Static generation with Next.js
- Integration with Material-UI for UI components
- Dynamic routing for product details
- SEO optimization with meta tags

## Architecture

/components
  /NavDrawer.tsx       # Navigation drawer component, closes when on mobile
  /NavHeader.tsx       # Navigation header component
  /ProductCard.tsx     # Product card component

/data
  /MockedData.ts       # Mocked data for products

/pages
  /index.tsx           # Home page displaying the list of products
  /product/[id].tsx    # Dynamic route for displaying product details

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
