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
- `draft`: keep `true` while the text must remain unpublished; use `false` when it is ready for the public site.
- `locale`: managed automatically by the CMS collection (`pt-BR` or `en`).
- `body`: Markdown article body, edited with the rich-text editor.

The `body` field is intentionally named `body`: Decap uses that name to write the Markdown after the YAML frontmatter. The editor supports headings, emphasis, links, quotes, lists, images, and code blocks. It also provides a raw Markdown mode for precise formatting.

## Drafts and publication

The CMS uses Decap's editorial workflow:

1. Create or edit an article in the correct language collection.
2. Keep `draft: true` while the text is still being written. Draft articles are excluded from the public archive, static routes, and sitemap.
3. Use the editorial workflow to submit the content for review. Decap stores the change in its Git workflow and opens a GitHub pull request for publication.
4. Review the changed Markdown and the generated site preview. Check both language routes when editing a translation.
5. Merge the content pull request when the article is ready. Cloudflare Workers Builds then rebuilds and deploys the static site.

The CMS workflow is for content review; code changes continue to use the repository's normal pull-request process.

**Repository visibility:** this is a public GitHub repository. Article text, images, branches, and pull requests can be visible to the public before publication. Do not put confidential employer, client, coworker, or personal information into drafts.

## Images

Images uploaded through the rich-text editor are stored in `public/images/writing/` and referenced from Markdown using `/images/writing/{filename}`. Keep image files optimized for the web and add meaningful alternative text when inserting an image. The Free plan uses Git-backed media; an external media library is not configured.

## Decap Turbo setup

The CMS config includes a temporary `turbo_site_id` placeholder. After this code is merged into `main`:

1. In Decap Turbo, open your organization and lock the old Talk BH site. Locking makes it read-only but frees the site slot without deleting the site record or touching the GitHub repository.
2. Confirm the GitHub connection has access to `hernanijr/hernani-portfolio`.
3. Create a site with provider **GitHub**, repository `hernanijr/hernani-portfolio`, branch `main`, config path `public/admin/config.yml`, and admin URL `https://hernani.dev/admin/`.
4. Copy the Site ID from the new site's Overview page.
5. Replace `SET_AFTER_CREATING_HERNANI_DEV_SITE` in `public/admin/config.yml` with that UUID in a follow-up pull request. The UUID is an identifier, not a credential.
6. After the follow-up change is deployed, open `https://hernani.dev/admin/` and sign in with Decap Turbo.

Keep the organization on Free. Do not activate the Pro trial, add a paid seat, or enable the paid media library. The Free tier has one site and one seat; a manually locked site does not count against the site limit.

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
