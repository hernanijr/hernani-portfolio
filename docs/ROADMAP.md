# Project roadmap

> Last reviewed: 2026-11-20  
> This is a high-level snapshot, not a release commitment. GitHub Issues remain the source of truth for scope, acceptance criteria, and current task status.

## Product direction

The portfolio is evolving into a personal engineering hub: a clear, factual presentation of professional experience, selected engineering work, and technical writing. It should communicate how the author builds and thinks, rather than behave like an agency or freelance sales site.

### Product principles

- **Preserve the site's identity.** External portfolios are references for exploring alternatives, not specifications. Do not replace the current palette, typography, layout language, or visual identity without an explicit decision.
- **Prefer substance over decoration.** Add a feature only when it improves clarity, usefulness, or discoverability.
- **Keep claims factual.** Do not invent metrics, business impact, responsibilities, dates, ownership, or outcomes. Validate sensitive professional details before publication.
- **Keep the implementation proportionate.** Prefer Astro's static generation and the existing stack. New infrastructure, a backend, a database, a CMS, paid services, or dependencies need a concrete justification and approval.
- **Protect the fundamentals.** Accessibility, responsive behavior, performance, privacy, and SEO are acceptance criteria, not optional polish.
- **Keep navigation unified.** Do not split the experience into separate Hiring / Building audience modes.

## Approved work

These items have an explicit implementation decision. Their GitHub Issues contain the detailed scope and acceptance criteria.

| Priority | Work | Issue | Status |
| --- | --- | --- | --- |
| 1 | Expandable professional experience details | [#14](https://github.com/hernanijr/hernani-portfolio/issues/14) | Approved for implementation |
| 2 | Downloadable CV in Portuguese and English | [#15](https://github.com/hernanijr/hernani-portfolio/issues/15) | Approved for implementation |

Approval of an item does not authorize unverified content or unrelated visual changes. Professional details and CV content must be checked before publication.

## Under discussion

These ideas are intentionally not implementation commitments.

| Topic | Issue | Current decision |
| --- | --- | --- |
| Professional timeline | [#16](https://github.com/hernanijr/hernani-portfolio/issues/16) | Exploratory. Implement only if it communicates useful progression without duplicating the experience section. |
| Light / dark theme | [#5](https://github.com/hernanijr/hernani-portfolio/issues/5) | Compare alternatives before deciding: keep the current light theme, add an optional dark theme, or follow system preference with an explicit selector. Preserve the current light identity as an option. |
| Personal engineering hub direction | [#12](https://github.com/hernanijr/hernani-portfolio/issues/12) | Product direction and design discussion. Review options and trade-offs before changing the current experience. |

## Explicitly not planned for now

- A professional metrics section. It was considered and declined for now.
- Separate Hiring and Building modes. Keep one navigation and one coherent portfolio experience.
- Copying another portfolio's palette, typography, components, or layout as a default redesign.

These decisions can be revisited, but require a new explicit discussion before implementation.

## How to use this roadmap

- Use this file for direction, priorities, and decisions that affect more than one task.
- Use GitHub Issues for implementation scope, acceptance criteria, discussion, and task status.
- Do not duplicate every issue or maintain a second checklist here.
- Update this page when priorities or product decisions materially change.
- Keep proposals, explorations, and approved work clearly distinct.
