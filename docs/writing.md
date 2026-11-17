# Writing and technical articles

The Writing section is a small, file-based publishing workflow. Articles are authored by Hernani in Markdown, reviewed like any other code change, and generated as static pages by Astro. There is no CMS, database, newsletter provider, or paid publishing service.

## Add an article

1. Copy `src/content/writing/ARTICLE-TEMPLATE.md` to a new Markdown file in `src/content/writing/`.
2. Use a lowercase, hyphen-separated filename. The filename becomes the URL slug.
3. Add the required frontmatter.
4. Write the article in Markdown.
5. Run `npm run check`, `npm run build`, and `npm test`.
6. Open a pull request and review the generated page before merging.

Example frontmatter:

```yaml
---
title: "A practical title for the article"
description: "A concise summary used in the article page and search metadata."
pubDate: 2026-11-17
updatedDate: 2026-11-20
tags:
  - Backend
  - Node.js
draft: false
---
```

Required fields are `title`, `description`, and `pubDate`. `updatedDate` and `tags` are optional. Articles are published unless `draft: true` is set. Drafts are excluded from the public index, static article routes, and sitemap.

## Writing guidelines

- Prefer first-hand investigations, concrete examples, decisions, trade-offs, and lessons learned.
- Distinguish facts, assumptions, and personal conclusions.
- Link to primary documentation when explaining tool or platform behavior.
- Keep code examples small, reproducible, and free of credentials.
- Do not publish employer, client, or coworker confidential information, internal code, architecture, datasets, screenshots, or incidents.
- Do not add a publishing schedule. Publish when an article is useful and ready.

The site currently publishes in Brazilian Portuguese. An English version can be considered when there is enough content to justify the translation and ongoing maintenance.
