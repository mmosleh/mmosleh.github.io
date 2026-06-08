import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const publications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number().int(),
    featured: z.boolean().default(false),
    links: z
      .object({
        publisher: z.string().url().optional(),
        doi: z.string().url().optional(),
        pdf: z.string().url().optional(),
        arxiv: z.string().url().optional(),
      })
      .optional(),
    order: z.number().int().default(100),
    draft: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    link: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { publications, news };
