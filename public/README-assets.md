# Public Assets — Required Files

The following binary/image assets need to be added to this directory manually before deploying:

## Required Files

- `favicon.ico` — 32x32 and 16x16 multi-size ICO file for browser tab favicon
- `apple-touch-icon.png` — 180x180 PNG for iOS home screen icon
- `og-image.jpg` — 1200x630 JPEG for Open Graph / social sharing preview image
- `logo.png` — 200x60 PNG of the Locksmith In Dubai logo (referenced in schema.ts)

## Already Present

- `icon.svg` — SVG lock icon used as SVG favicon (supported in modern browsers)
- `site.webmanifest` — PWA web manifest

## Notes

- `og-image.jpg` is referenced in `lib/schema.ts` → `localBusinessSchema()` and `articleSchema()`
- `logo.png` is referenced in `lib/schema.ts` → `organizationSchema()` and `app/blog/[slug]/page.tsx`
- Use the blue (#2563eb) brand colour from `icon.svg` as the primary colour for all brand assets
