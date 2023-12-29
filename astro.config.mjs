import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
    output: 'server',
    site: 'https://example.com',
    image: {
        remotePatterns: [
            {
                protocol: 'https',
            },
        ],
    },
    integrations: [preact({ compat: true })],
    vite: {
        ssr: {
            noExternal: ['open-props'],
        },
    },
    adapter: vercel(),
    cacheDir: './my-custom-cache-directory'
})
