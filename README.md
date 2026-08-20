# Vyshnavi Enterprises

A responsive editorial storefront for the Vyshnavi Enterprises shirt collection.

## Development

- `npm run dev` starts the Vite development server.
- `npm run lint` checks the React source with ESLint.
- `npm run build` creates the production bundle.

## Adding shirts

The collection automatically includes every supported image in
`src/assets/shirts/`. The storefront does not display a fixed collection count.

1. Add the product photos to `src/assets/shirts/` using unique, sequential
   filenames such as `shirt-09.jpg`, `shirt-10.jpg`, and `shirt-11.jpg`.
2. Deploy the update. The new shirts automatically appear in the collection and
   receive their own product links.

JPG, JPEG, PNG, WebP, and AVIF images are supported. Sequential `shirt-##`
filenames automatically generate matching names and product codes. For example,
`shirt-09.jpg` appears as `Style 09` with code `VE-09`.

### Customizing shirt information

Adding metadata is optional. To replace the generated name, category,
description, or details, add an entry to `shirtMetadata` in
`src/data/shirts.js`. Use the image filename without its extension as the key:

   ```js
   "shirt-09": {
     name: "The New Style",
     code: "VE-09",
     category: "Everyday tailoring",
     description: "A short description of the shirt.",
     details: ["First detail", "Second detail", "Multiple sizes available"],
   },
   ```

Keep every filename and custom product code unique.
