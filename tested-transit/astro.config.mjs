// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
    site: 'https://nicknieuwenhuis.com',

    adapter: vercel({
        staticHeaders: true,
    }),

    integrations: [
        mdx(),
        sitemap(),
    ],

    security: {
    csp: {
        directives: [
            "object-src 'none'",
            "base-uri 'self'",
        ],
    },
},

    markdown: {
        syntaxHighlight: 'prism',
    },

    fonts: [
        {
            provider: fontProviders.local(),
            name: 'Atkinson',
            cssVariable: '--font-atkinson',
            fallbacks: ['sans-serif'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/atkinson-regular.woff'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                    {
                        src: ['./src/assets/fonts/atkinson-bold.woff'],
                        weight: 700,
                        style: 'normal',
                        display: 'swap',
                    },
                ],
            },
        },
        {
            provider: fontProviders.fontsource(),
            name: 'Inter',
            cssVariable: '--font-inter',
            fallbacks: ['Arial', 'sans-serif'],
        },
    ],
});
