import { defineCollection, z } from 'astro:content';

const sections = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    items: z.array(z.string()).optional(),
    // Allow any other fields for flexibility in different sections
  }).passthrough(),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  sections,
  blog,
};
