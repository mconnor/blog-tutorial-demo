import { defineConfig } from 'astro/config'

import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
    output: 'static',
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
})
