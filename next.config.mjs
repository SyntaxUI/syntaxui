import nextMDX from '@next/mdx'

import { recmaPlugins } from './src/mdx/recma.mjs'
import { rehypePlugins } from './src/mdx/rehype.mjs'
import { remarkPlugins } from './src/mdx/remark.mjs'
import withSearch from './src/mdx/search.mjs'

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],

  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://git.new/syntax',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.com/invite/P8GXYyH3ZU',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ansubkhan.com',
      },
    ],
  },
}

export default withSearch(withMDX(nextConfig))
