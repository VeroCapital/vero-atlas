# VERO Atlas

This repository provides a simple starting point for a VERO Atlas dashboard built with Next.js 14 and TypeScript. It demonstrates how you can organise a few domain pages (Shipping, Energy, Metals) together with a shared component for top‑level KPIs and a lightweight API proxy.

## Features

- **App Router** (`app/` directory) with static pages for shipping, energy, metals and about.
- Placeholder data modules in `lib/data/*` for loading domain‑specific metrics. Replace the example functions with your own data sources (e.g. APIs, CSV files or databases).
- A simple KPI helper (`lib/kpis.ts`) that aggregates high-level metrics for display on the homepage.
- An example API route under `pages/api/proxy.ts` that you can extend as a server-side fetcher or proxy. It's currently a stub.
- GitHub Actions CI workflow in `.github/workflows/ci.yml` that installs dependencies and runs a production build.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser.

## Next steps

- Replace the data fetching functions in `lib/data/` with real implementations for your use‑case (e.g. call external APIs, query a database, or read files).
- Surface those metrics on the respective pages (`app/shipping/page.tsx`, etc.) in a way that suits your needs (charts, tables, text).
- Expand the proxy at `pages/api/proxy.ts` if you want to fetch data from external services without exposing API keys to the client.

Feel free to adapt this structure as you grow your project.
