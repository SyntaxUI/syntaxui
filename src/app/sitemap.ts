import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const rootDir = path.join(process.cwd(), 'src/app')

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = []

  function readDirectory(dir: string, baseUrl: string) {
    const files = fs.readdirSync(dir)

    files.forEach((file) => {
      const filePath = path.join(dir, file)
      const stats = fs.statSync(filePath)

      if (stats.isDirectory()) {
        // Recursively search subdirectories
        readDirectory(filePath, `${baseUrl}/${file}`)
      } else if (file.endsWith('page.tsx') || file.endsWith('page.mdx')) {
        // Adjust path by removing "/(docs)"
        const adjustedUrl = baseUrl.replace('/(docs)', '')

        // Add this page to the sitemap
        urls.push({
          url: `https://syntaxui.com${adjustedUrl || '/'}`,
          lastModified: new Date().toISOString(),
          priority: 1,
          changeFrequency: 'daily',
        })
      }
    })
  }

  // Initialize the recursive search
  readDirectory(rootDir, '')

  return urls
}
