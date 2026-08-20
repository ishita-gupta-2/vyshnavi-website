# Vyshnavi Enterprises

A responsive editorial storefront for the Vyshnavi Enterprises shirt collection.

## Development

- `npm run dev` starts the Vite development server.
- `npm run lint` checks the React source with ESLint.
- `npm run build` creates the production bundle.

## Adding shirts

The collection is generated from `src/data/shirts.js`, so it can grow whenever
new styles are ready. The storefront does not display a fixed collection count.

1. Add the product photo to `src/assets/shirts/` using a unique filename, such
   as `shirt-09.jpg`.
2. Import the image near the top of `src/data/shirts.js`:

   ```js
   import shirt09 from "../assets/shirts/shirt-09.jpg";
   ```

3. Add a new item at the end of the exported `shirts` array:

   ```js
   {
     id: "shirt-09",
     name: "The New Style",
     code: "VE-09",
     category: "Everyday tailoring",
     description: "A short description of the shirt.",
     details: ["First detail", "Second detail", "Multiple sizes available"],
     image: shirt09,
   },
   ```

Keep each `id`, `code`, and image import unique. The new shirt then appears in
the collection grid and gets its own shareable product URL automatically.
