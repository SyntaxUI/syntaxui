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
        // Determine priority based on the URL depth
        const depth = baseUrl.split('/').filter(Boolean).length // count the slashes
        let priority: number
        if (baseUrl === '') {
          priority = 1.0 // root
        } else {
          priority = 0.8
        }

        // Adjust path by removing "/(docs)"
        const adjustedUrl = baseUrl.replace('/(docs)', '')

        // Add this page to the sitemap
        urls.push({
          url: `https://syntaxui.com${adjustedUrl || '/'}`,
          lastModified: new Date().toISOString(),
          priority,
        })
      }
    })
  }

  // Initialize the recursive search
  readDirectory(rootDir, '')

  // Sort URLs by priority, descending
  urls.sort((a, b) => b.priority! - a.priority!)

  return urls
}
