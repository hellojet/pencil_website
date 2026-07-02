# SathiArt — Premium Acrylic Markers & Paint Sets

B2B product showcase site for SathiArt (ANHUI BB-FOX STATIONERY). Not e-commerce — the conversion goal is inquiry form submissions.

Live site: https://www.sathiart.com

## Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript 5
- **Styling**: Tailwind CSS v4
- **CMS**: Sveltia CMS (Git-based, headless)
- **Content**: Markdown files with YAML frontmatter (no database)

## Getting Started

```bash
npm install
npm run dev        # dev server on :3000
npm run build      # production build
npm run lint       # ESLint
```

## Deployment

| Service | Role |
|---------|------|
| **Vercel** | Hosts the website, serves `www.sathiart.com`, runs Next.js builds |
| **Netlify** | OAuth proxy only — provides GitHub OAuth for the CMS admin panel |

**Important**: Netlify does NOT host the website. Netlify-specific features (Forms, Functions, etc.) will not work. The `config.yml` fields `base_url` and `site_domain` are for CMS OAuth authentication only.

## CMS Admin

Access at `/admin`. Uses Sveltia CMS, authenticates via Netlify's GitHub OAuth proxy. CMS edits commit directly to `main` on GitHub, which triggers a Vercel rebuild.

## Project Structure

```
content/products/    # Product markdown files ({sku}.md)
public/images/       # Product images
app/                 # Next.js App Router pages
components/          # React components (layout/, home/, products/, common/)
lib/                 # Data layer (products.ts, categories.ts)
types/               # TypeScript types
public/admin/        # CMS config (config.yml)
```
