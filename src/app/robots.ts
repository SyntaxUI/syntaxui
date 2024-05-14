const baseUrl = 'https://syntaxui.com'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: `${baseUrl}`,
  }
}
