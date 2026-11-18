import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/writing',
  }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    locale: z.enum(['pt-BR', 'en']).default('pt-BR'),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).optional(),
  }),
});

export const collections = { writing };
