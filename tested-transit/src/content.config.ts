import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({
        base: './src/content/blog',
        pattern: '**/*.{md,mdx}',
    }),

    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            heroImage: z.optional(image()),

            language: z.enum(['en', 'nl']).default('en'),
            tags: z.array(z.string()).default([]),
            draft: z.boolean().default(false),
        }),
});

const publications = defineCollection({
    loader: glob({
        base: './src/content/publications',
        pattern: '**/*.{md,mdx}',
    }),

    schema: z.object({
        title: z.string(),

        // Full abstract or publication description
        description: z.string(),

        // Short text used on the Publications overview
        summary: z.string().optional(),

        // Used internally for chronological sorting
        pubDate: z.coerce.date(),

        // Human-readable publication date, e.g. "Issue 5, 2025"
        displayDate: z.string().optional(),

        type: z.enum([
            'academic',
            'professional',
            'conference',
        ]),

        outlet: z.string(),

        // Free-form because author lists differ between publications
        authors: z.string().optional(),

        externalUrl: z.string().url(),
        externalLabel: z.string().default('View publication'),

        language: z.enum(['en', 'nl']).default('en'),
        tags: z.array(z.string()).default([]),

        draft: z.boolean().default(false),
    }),
});

export const collections = {
    blog,
    publications,
};