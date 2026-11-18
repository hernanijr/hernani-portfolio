# Writing and technical articles

The Writing section is a file-based publishing workflow. Articles are authored in Markdown, reviewed like any other code change, and generated as static pages by Astro. There is no CMS, database, newsletter provider, or paid publishing service.

## Add a Portuguese article

1. Copy `src/content/writing/ARTICLE-TEMPLATE.md` to a new Markdown file in `src/content/writing/`.
2. Use a lowercase, hyphen-separated filename. The filename becomes the URL slug unless a `slug` frontmatter value is provided.
3. Add the required frontmatter. Articles without a `locale` are treated as Brazilian Portuguese.
4. Write the article in Markdown.
5. Run `npm run check`, `npm run build`, and `npm test`.
6. Open a pull request and review the generated page before merging.

## Add an English article

1. Create a Markdown file under `src/content/writing/en/`.
2. Use the same slug as its Portuguese counterpart in frontmatter (for example, `slug: my-article`).
3. Set `locale: en`.
4. Keep translated articles aligned by slug. The language switcher and alternate SEO links use this shared slug to connect translations.

Example frontmatter:

```yaml
---
title: "A practical title for the article"
description: "A concise summary used in the article page and search metadata."
pubDate: 2026-11-17
updatedDate: 2026-11-20
locale: en
slug: my-article
tags:
  - Backend
  - Node.js
draft: false
---
```

Required fields are `title`, `description`, and `pubDate`. `updatedDate`, `tags`, `draft`, `locale`, and `slug` are optional. Articles are published unless `draft: true` is set. Drafts are excluded from public indexes, static article routes, and the sitemap.

## Writing guidelines

- Prefer first-hand investigations, concrete examples, decisions, trade-offs, and lessons learned.
- Distinguish facts, assumptions, and personal conclusions.
- Link to primary documentation when explaining tool or platform behavior.
- Keep code examples small, reproducible, and free of credentials.
- Do not publish employer, client, or coworker confidential information, internal code, architecture, datasets, screenshots, or incidents.
- Do not add a publishing schedule. Publish when an article is useful and ready.
