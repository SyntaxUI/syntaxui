import glob from 'fast-glob'
import { Layout } from '@/components/Layout'
import { type Section } from '@/components/SectionProvider'
import '@/styles/tailwind.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let pages = await glob('/docs/**/*.mdx', { cwd: 'src/app' })
  let allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ]),
  )) as Array<[string, Array<Section>]>
  let allSections = Object.fromEntries(allSectionsEntries)

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="flex min-h-full bg-white antialiased dark:bg-zinc-900">
        <div className="w-full">
          <Layout allSections={allSections}>{children}</Layout>
        </div>
      </body>
    </html>
  )
}
