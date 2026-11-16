# Project conventions

- Keep the public website in natural Brazilian Portuguese. Write code, identifiers, comments, and technical documentation in English.
- Keep personal details and editable site content in `src/data/site.ts`; do not repeat contact or profile values in components.
- Use Astro components and static output. Add client-side JavaScript only when a user-facing requirement cannot be met with HTML and CSS.
- Keep semantic landmarks, a single page-level `h1`, visible keyboard focus, reduced-motion support, and descriptive link names.
- Use canonical metadata from the configured production domain. Do not invent personal details, clients, testimonials, results, metrics, or contact channels.
- Add projects to the `projects` content collection and render them through the reusable project component.
- Keep deployment static and compatible with Cloudflare Workers Static Assets. Never commit credentials or account identifiers.
- Run `npm run check`, `npm run build`, `npm test`, and `npm run validate:deploy` before submitting changes.
