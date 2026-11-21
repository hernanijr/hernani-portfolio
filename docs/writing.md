# Writing and technical articles

The Writing section uses Decap CMS for article authoring, while Markdown files remain the source of truth in GitHub. Astro reads the content collection and generates static pages for Portuguese and English. No database, application server, newsletter provider, or paid media service is required.

Open the editor at [https://hernani.dev/admin/](https://hernani.dev/admin/) after the Decap Turbo site has been configured. The CMS uses Decap Turbo's Free tier for authentication and GitHub access; article text and uploaded images stay in this repository.

## Article collections

The CMS shows two collections:

| Collection | Repository folder | Public route |
| --- | --- | --- |
| Writing — Português | `src/content/writing/pt-BR/` | `/writing/{slug}/` |
| Writing — English | `src/content/writing/en/` | `/en/writing/{slug}/` |

Create an article in its language collection. The filename is generated from the title and becomes the URL slug. Keep the same slug for translations so the site can connect their language switchers and alternate SEO links.

Each article stores the following frontmatter:

- `title`: article title.
- `description`: concise summary used in the archive and search metadata.
- `pubDate`: publication date in `YYYY-MM-DD`.
- `updatedDate`: optional date of the latest meaningful revision.
- `tags`: optional list of topics.
- `draft`: a separate static-site switch. Leave it `false` for normal articles so the article is rendered in the pull request preview; set it to `true` only when you intentionally want Astro to omit the page from archives, routes, and the sitemap, even after merge.
- `locale`: managed automatically by the CMS collection (`pt-BR` or `en`).
- `body`: Markdown article body, edited with the rich-text editor.

The `body` field is intentionally named `body`: Decap uses that name to write the Markdown after the YAML frontmatter. The editor supports headings, emphasis, links, quotes, lists, images, and code blocks. It also provides a raw Markdown mode for precise formatting.

## Drafts and publication

The CMS uses Decap's editorial workflow:

1. Create or edit an article in the correct language collection.
2. Use Decap's editorial stages (Draft → In review → Ready) while writing and reviewing. The unmerged content stays outside the production branch.
3. Submit the entry for review. Decap stores the change in its Git workflow and opens a GitHub pull request.
4. Keep the frontmatter field `draft` set to `false` for an ordinary article. This lets the Cloudflare pull request preview render the complete article page so you can review the real site layout. The Astro `draft` flag is not the Decap editorial status.
5. Review the changed Markdown and the generated site preview. Check both language routes when editing a translation.
6. Merge the content pull request when the article is ready. Cloudflare Workers Builds then rebuilds and deploys the static site.

The CMS workflow is for content review; code changes continue to use the repository's normal pull-request process.

**Repository visibility:** this is a public GitHub repository. Article text, images, branches, and pull requests can be visible to the public before publication. Do not put confidential employer, client, coworker, or personal information into drafts.

## Images

Images uploaded through the rich-text editor are stored in `public/images/writing/` and referenced from Markdown using `/images/writing/{filename}`. Keep image files optimized for the web and add meaningful alternative text when inserting an image. The Free plan uses Git-backed media; an external media library is not configured.

## Decap Turbo setup

The Hernani.dev site has already been created in the existing Decap Turbo organization. Its Site ID is configured in `public/admin/config.yml` on the CMS implementation branch. The Turbo dashboard reads the config from `main`, so its status may remain **Couldn't check** until this pull request is merged and deployed.

After merging:

1. In the Turbo site's Overview, confirm the repository is `hernanijr/hernani-portfolio`, branch is `main`, config path is `public/admin/config.yml`, and the admin interface URL is `https://hernani.dev/admin/`.
2. Reload or save the site settings so Turbo can read the config from `main`.
3. Open [https://hernani.dev/admin/](https://hernani.dev/admin/) and verify that the Decap Turbo sign-in flow loads.
4. Create a test article in a Draft state and confirm Decap creates the expected Git-backed change/PR. Do not merge test content just to validate the editor.

Keep the organization on Free. Do not activate the Pro trial, add a paid seat, or enable the paid media library. The Free plan is intended for this single-site, single-seat setup.
## Manual Markdown fallback

You can still author an article directly in the repository:

1. Create a Markdown file under `src/content/writing/pt-BR/` or `src/content/writing/en/`.
2. Add the frontmatter fields above. Omit `updatedDate` when the article has not been revised.
3. Write the article body in Markdown.
4. Run `npm run check`, `npm run build`, `npm test`, and `npm run validate:deploy`.
5. Open a pull request and review the generated page before merging.

Example frontmatter:

```yaml
---
title: "A practical title for the article"
description: "A concise summary used in the article page and search metadata."
pubDate: 2026-11-21
locale: en
tags:
  - Backend
  - Node.js
draft: true
---
```

## Writing guidelines

- Prefer first-hand investigations, concrete examples, decisions, trade-offs, and lessons learned.
- Distinguish facts, assumptions, and personal conclusions.
- Link to primary documentation when explaining tool or platform behavior.
- Keep code examples small, reproducible, and free of credentials.
- Do not publish employer, client, or coworker confidential information, internal code, architecture, datasets, screenshots, or incidents.
- Do not add a publishing schedule. Publish when an article is useful and ready.
