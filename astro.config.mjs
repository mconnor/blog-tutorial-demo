import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import preact from '@astrojs/preact'
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    site: 'https://www.mikeconnor.tech',
    image: {
        remotePatterns: [
            {
                protocol: 'https',
            },
        ],
    },
    integrations: [preact({ compat: true }), mdx()],
    vite: {
        ssr: {
            noExternal: ['open-props'],
        },
    },
    // adapter: vercel(),
    cacheDir: './my-custom-cache-directory'
})
