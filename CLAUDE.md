# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**SathiPro** — English-language website for an independent China sourcing partner. The conversion goal is inquiry form submissions across sourcing, design, and industry-specific requests. Contact email: sathiprobusiness@gmail.com.

## Commands

- `npm run dev` — Next.js dev server on `:3000`
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint via flat config (`eslint.config.mjs`, extends `eslint-config-next` core-web-vitals + typescript)
- No test framework is configured.

## Stack

Next.js 16 App Router · React 19 · TypeScript 5 strict · Tailwind CSS v4 (via `@tailwindcss/postcss`, no `tailwind.config.*`) · Resend for email delivery. Path alias `@/*` → repo root.

## Architecture

### Page topology

- `/` (`app/page.tsx`) — Hero banner, "Why work with SathiPro?" value props, CTA. Server component.
- `/about` (`app/about/page.tsx`) — Server component with metadata; renders `AboutContent` client component (has Design Inquiry modal via `useState`).
- `/services` (`app/services/page.tsx`) — 6-step procurement process. Static server component.
- `/industries` (`app/industries/page.tsx`) — Server component with metadata; renders `IndustriesContent` client component (has Industry Inquiry modal). 4 industry verticals: Stationery, Apparel, Machinery, Medical.
- `/contact` (`app/contact/page.tsx`) — Contact info + main inquiry form. Server component wrapping client `InquiryForm`.
- `/api/contact` (`app/api/contact/route.ts`) — POST endpoint handling all form types (contact, design, industry). Uses Resend when `RESEND_API_KEY` is set, otherwise logs to console (mock mode).

Layout (`app/layout.tsx`) sets default + template metadata (`%s | SathiPro`), loads Inter via `next/font/google`, and wraps every page with `Header`/`Footer` + `WhatsAppButton`.

### Component organization

`components/` is grouped by feature surface:
- `layout/` — Header, Footer (site chrome)
- `home/` — HeroBanner (homepage hero)
- `about/` — AboutContent (client component with design form modal)
- `industries/` — IndustriesContent (client component with industry inquiry modal)
- `common/` — InquiryForm, WhatsAppButton, DesignInquiryForm, IndustryInquiryForm

### Forms and email

Three form types all POST to `/api/contact` with a `formType` discriminator:
- `contact` — main sourcing inquiry (Contact page)
- `design` — design/3D inquiry (About page modal)
- `industry` — industry-specific inquiry (Industries page modals)

The API route dynamically imports Resend only when `RESEND_API_KEY` is set. Without the key, forms still work but emails are logged to console instead of sent.

### WhatsApp

A floating WhatsApp button (`components/common/WhatsAppButton.tsx`) appears on every page, linking to `wa.me/8618067814371`.

## Conventions

- **Tailwind v4, no config file.** Styles via utility classes in JSX; design tokens come from defaults.
- **`'use client'` only when needed.** Pages that need interactivity (modals) use a server page wrapper with metadata + a client content component.
- **No env files in repo.** `.env*` is gitignored. Set `RESEND_API_KEY` in Vercel env vars for production email delivery.
- **Placeholder images.** Hero and industry sections use gray placeholder divs — replace with real photos when available.

## Deployment

Production hosted on **Vercel** — domain `www.sathiart.com` points to Vercel. Netlify is no longer used (CMS was removed).

Required Vercel env var for email: `RESEND_API_KEY`
