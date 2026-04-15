import { NextResponse } from 'next/server'

export async function GET() {
  const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex" />
    <title>Fancy Pencil — Admin</title>
  </head>
  <body>
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
    <script>
      CMS.init({
        config: {
          backend: {
            name: 'github',
            repo: 'hellojet/pencil_website',
            branch: 'main',
            site_domain: 'pencil-website-rho.vercel.app',
            base_url: 'https://api.netlify.com',
            auth_endpoint: 'auth',
          },
          site_url: 'https://pencil-website-rho.vercel.app',
          media_folder: 'public/images/products',
          public_folder: '/images/products',
          collections: [
            {
              name: 'products',
              label: 'Products',
              folder: 'content/products',
              create: true,
              slug: '{{fields.sku}}',
              fields: [
                { label: 'Product Name', name: 'name', widget: 'string' },
                { label: 'SKU', name: 'sku', widget: 'string' },
                {
                  label: 'Category',
                  name: 'category',
                  widget: 'select',
                  options: [
                    { label: 'Acrylic Marker', value: 'acrylic-marker' },
                    { label: 'Metallic Marker', value: 'metallic-marker' },
                    { label: 'Acrylic Marker (PP Series)', value: 'acrylic-marker-pp' },
                    { label: 'Double Headed Marker', value: 'double-headed' },
                    { label: 'Brush & Soft Pens', value: 'brush-soft-pens' },
                    { label: 'Chalk & Highlighter', value: 'chalk-highlighter' },
                    { label: 'Paint Sticks', value: 'paint-sticks' },
                    { label: 'Crayon Clear', value: 'crayon-clear' },
                  ],
                },
                {
                  label: 'Tip Type',
                  name: 'tipType',
                  widget: 'select',
                  required: false,
                  options: [
                    { label: 'Pointed Brush', value: 'Pointed Brush' },
                    { label: 'Round Brush', value: 'Round Brush' },
                    { label: 'Writing Brush', value: 'Writing Brush' },
                    { label: 'Metal Tip', value: 'Metal Tip' },
                    { label: 'Loft Brush', value: 'Loft Brush' },
                    { label: 'Axe Brush', value: 'Axe Brush' },
                  ],
                },
                { label: 'Cover Image', name: 'coverImage', widget: 'image' },
                {
                  label: 'Product Images',
                  name: 'images',
                  widget: 'list',
                  required: false,
                  field: { label: 'Image', name: 'image', widget: 'image' },
                },
                { label: 'Description', name: 'description', widget: 'text' },
                { label: 'Length', name: 'length', widget: 'string', required: false, hint: 'e.g. 137mm' },
                { label: 'Diameter', name: 'diameter', widget: 'string', required: false, hint: 'e.g. 12.5mm' },
                { label: 'Colors Count', name: 'colors', widget: 'number', required: false },
                { label: 'Package Info', name: 'package', widget: 'string', required: false, hint: 'e.g. 12 boxes / 8 boxes' },
                { label: 'Gross Weight', name: 'grossWeight', widget: 'string', required: false, hint: 'e.g. 12.1 kgs' },
                { label: 'Measurements', name: 'meas', widget: 'string', required: false, hint: 'e.g. 35.2*19.8*32.8cm' },
                { label: 'MOQ', name: 'moq', widget: 'number', default: 0 },
                { label: 'Tags', name: 'tags', widget: 'list', allow_add: true, required: false },
                { label: 'Active', name: 'isActive', widget: 'boolean', default: true },
                { label: 'Sort Order', name: 'sortOrder', widget: 'number', default: 99 },
              ],
            },
          ],
        },
      })
    </script>
  </body>
</html>`

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  })
}
