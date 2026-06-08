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
    // Path under /public, e.g. "/journals/nature.svg"
    journalLogo: z.string().optional(),
    // Path under /public, e.g. "/infographics/2024-community-notes.png"
    infographic: z.string().optional(),
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

export const collections = { publications };
