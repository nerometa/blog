import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            pubDate: z.date(),
            draft: z.boolean().default(false),
            description: z.string().optional(),
            tags: z.array(z.string()).optional(),
            author: z.string().default("nerometa"),
        }),
});

export const collections = { blog };
