import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
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
  }),
});

export const collection = { blog: blogCollection };
