import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z
      .date()
      .transform((date) =>
        date.toLocaleDateString("en-US", { dateStyle: "medium" })
      ),
    draft: z.boolean().default(false),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string(),
    slug: z.string(),
  }),
});

export const collection = { blog: blogCollection };
