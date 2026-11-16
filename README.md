# Hernani — Software Engineering Portfolio

A professional profile and selected-work portfolio for Hernani Junior, a software engineer in Belo Horizonte, Brazil. The site focuses on backend engineering, APIs, system integration, reliability, and technical projects, with a detailed case study of the Talk BH website.

All published page content is written in Brazilian Portuguese. Code, identifiers, comments, and technical documentation are written in English.

## Technology

- Astro and TypeScript for a statically generated site.
- Tailwind CSS 4 and project-specific CSS for the visual system.
- Cloudflare Workers Static Assets for deployment.
- GitHub Actions for validation on pull requests and pushes to `main`.

The site does not require a database, application server, analytics service, or paid hosting subscription.

## Architecture

- `src/data/site.ts` centralizes profile details, contact links, technical focus areas, technologies, selected case studies, and experiments.
- `src/pages/index.astro` composes the single public page from reusable Astro components.
- `src/components/ProjectCaseStudy.astro` renders project data so future case studies can be added without rebuilding the page structure.
- `src/layouts/SiteLayout.astro` provides document metadata, canonical URLs, Open Graph and Twitter metadata, and Person structured data.
- `src/styles/global.css` contains the responsive design system, accessibility states, and reduced-motion behavior.
- `src/pages/sitemap.xml.ts` generates the production sitemap; `public/robots.txt` points crawlers to it.
- `wrangler.jsonc` configures the `dist` directory as Cloudflare static assets.

The architecture uses explicit route files and content modules. The public site is currently written in Brazilian Portuguese; an English version can be added as a separate localization task.

## Requirements

- Node.js `22.23.4` (see `.nvmrc`)
- npm

## Local development

```sh
npm ci
npm run dev
```

Astro serves the site at `http://localhost:4321` by default.

## Build and quality checks

```sh
npm run check
npm run build
npm test
npm run validate:deploy
```

`npm test` checks the generated production pages, SEO metadata, structured data, required content, internal links, sitemap, robots file, and static social assets. Run it after `npm run build`.

To preview the production build locally:

```sh
npm run preview
```

The same checks run in GitHub Actions for pull requests and pushes to `main`.

## Cloudflare Workers Builds deployment

The repository is prepared for Cloudflare Workers Builds, but connecting a Cloudflare account, repository, and domain requires account-owner setup:

1. Push the repository to GitHub and connect it in the Cloudflare dashboard under **Workers & Pages → Create application → Workers Builds**.
2. Select the production branch (`main`) and enable builds for pull requests if preview deployments are desired.
3. Use `npm ci && npm run build` as the build command. The generated static output is `dist`.
4. Use `npx wrangler deploy` as the deploy command. `wrangler.jsonc` points Wrangler to `./dist` and names the Worker `hernani-portfolio`.
5. Add `hernani.dev` as a custom domain for the deployed Worker. Cloudflare will require the domain to be active in the account's DNS; follow the dashboard's instructions for the required nameserver or DNS changes at the domain registrar. No DNS records or account identifiers are hardcoded in this repository.
6. Confirm the deployment at `https://hernani.dev` and verify the canonical URL, sitemap, and custom domain in production.

Cloudflare plan limits and product terms can change; confirm that the account's current Workers Builds and Workers Static Assets allowances meet the intended use before enabling production builds. No paid hosting dependency is configured.

For pull requests, review the Cloudflare preview before merging. Merging reviewed changes into `main` is the production release process.

## Content

### Add a project

Add a selected case study to the `projects` array in `src/data/site.ts`. Provide its factual description, engineering decisions, technology details, public links, and attribution. The page renders each entry with `ProjectCaseStudy.astro`. Add smaller prototypes and technical experiments to the `experiments` array and label their maturity accurately. Do not add results, client claims, or ownership details that have not been confirmed.

### Configure contact links

Edit `siteConfig.links` in `src/data/site.ts`. The contact section uses the professional email address and links to LinkedIn and GitHub. Update these values in `siteConfig.links` when the public destinations change.

### Update the production domain

The production URL appears in `astro.config.mjs` and `src/data/site.ts`. Update both if the domain changes; canonical metadata, structured data, the sitemap, and generated `robots.txt` use the configured site URL.

## Analytics readiness

No analytics service is installed and the site does not collect visitor data. Key links expose stable `data-analytics-event` identifiers for a future, consent-appropriate integration:

- `contact_click` — professional email links.
- `project_click` — Talk BH website and repository links.
- `github_click` — footer GitHub profile link.

Any analytics implementation should preserve these identifiers and document its data collection before activation.
