# Agent instructions

These instructions apply to the entire repository. Follow them when inspecting, planning, implementing, reviewing, or documenting changes.

## Project context

This repository contains a personal software engineering portfolio and technical writing site. Its purpose is to present professional experience, selected engineering work, and authored technical content accurately and clearly.

The project currently uses:

- Astro with static output.
- TypeScript.
- Tailwind CSS 4 and project-specific CSS.
- Cloudflare Workers Static Assets for deployment.
- GitHub Actions for pull-request and `main` validation.
- Markdown content collections for the Writing section.
- Decap CMS with Decap Turbo Free for the Writing editor; it manages Markdown and Git-backed article media only.

The Astro configuration declares `pt-BR` as the default locale and `en` as an additional locale. Check the actual routes and content before assuming a page is fully translated.

## Sources of truth

- `src/data/site.ts`: profile, professional experience, links, technologies, and project data.
- `src/pages/`: route composition.
- `src/components/`: reusable page components.
- `src/layouts/SiteLayout.astro`: shared document metadata and structured data.
- `src/styles/global.css`: global styles and visual tokens.
- `src/content/writing/` and `docs/writing.md`: technical articles and their authoring workflow.
- `astro.config.mjs` and `wrangler.jsonc`: routing, static output, and deployment configuration.
- `README.md`: setup, architecture overview, checks, and deployment guidance.
- `docs/ROADMAP.md`: high-level product direction and prioritization.
- GitHub Issues: detailed scope, acceptance criteria, discussion, and task status.

When documentation and implementation disagree, inspect the implementation and update the documentation rather than preserving an outdated description.

## Product and design guardrails

- Treat external portfolios and screenshots as inspiration, not requirements. Present alternatives and trade-offs before proposing a redesign.
- Do not automatically replace the existing palette, typography, visual identity, information hierarchy, or navigation.
- Keep a single navigation. Do not add separate Hiring / Building audience modes.
- Do not add a professional metrics section unless it is explicitly reconsidered and approved.
- A visual professional timeline and a dark theme remain exploratory; do not implement either without an explicit decision.
- Expandable professional experience details and downloadable CVs in Portuguese and English are approved work. Stay within their issue scopes.
- Do not invent employers, roles, dates, responsibilities, technologies, metrics, business outcomes, ownership, or project claims. Ask for confirmation when source material does not support a public claim.
- Do not publish employer, client, colleague, or other confidential information.

## Architecture and dependency constraints

- Preserve Astro static generation and the existing Cloudflare deployment model unless a concrete requirement justifies a change and it is approved.
- The approved Decap CMS + Decap Turbo Free integration is restricted to the Writing section. Do not add CMS-managed collections for other site content without a separate decision or enable a paid CMS/media plan.
- Do not introduce a database, application server, paid service, analytics provider, or new dependency merely for convenience or trend alignment.
- Prefer native HTML, Astro components, and existing project utilities over adding a UI framework or client-side JavaScript.
- Keep content in the existing data modules and Markdown collections instead of duplicating it across components.
- There is currently no analytics service configured. Preserve existing `data-analytics-event` identifiers when touching those links; do not start collecting visitor data without an explicitly approved provider, purpose, and privacy approach.
- Never commit credentials, access tokens, private keys, personal account data, or local environment files.

## Implementation quality

- Use semantic HTML and native controls where practical.
- Ensure keyboard operation, visible focus, appropriate accessible names, and sensible screen-reader semantics.
- Respect reduced-motion preferences and maintain responsive layouts.
- Check text and UI contrast when changing colors; maintain WCAG AA contrast for normal text.
- Preserve page titles, descriptions, canonical URLs, locale alternates, Open Graph / Twitter metadata, structured data, sitemap, and robots behavior when changing routes or content.
- Keep essential page content in generated HTML. Avoid unnecessary client-side rendering.
- Update or add tests when behavior, generated pages, SEO metadata, structured data, or content contracts change.

## Working procedure

1. Inspect the current branch, working tree, relevant source files, related Issues, and open pull requests before editing.
2. Confirm whether a requested item is approved, exploratory, or only a proposal. Do not turn an idea into an implementation requirement.
3. Keep each change focused. Do not bundle unrelated refactors, visual redesigns, dependency upgrades, or content changes.
4. Prefer a dedicated branch and a pull request for changes. Do not push directly to `main`, merge, or deploy unless explicitly requested.
5. Describe what changed, what was intentionally left unchanged, and any assumptions or follow-up decisions in the pull request.
6. Do not claim that checks passed unless they were actually run and their results were observed.

## Validation commands

Use the repository's npm scripts:

```sh
npm ci
npm run check
npm run build
npm test
```

Run `npm test` after `npm run build`, because the tests inspect generated production pages. Run `npm run validate:deploy` when changing deployment configuration or when specifically validating the Cloudflare deployment setup.

For documentation-only changes, check Markdown structure and local links. Run application checks when documentation changes code examples, setup instructions, or behavior in a way that warrants validation.
