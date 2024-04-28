import { bundledLanguages, getHighlighter } from 'shiki'

export const codeToHtml = async (code: string, language: string) => {
  const highlighter = await getHighlighter({
    themes: ['github-light', 'github-dark'],
    langs: [...Object.keys(bundledLanguages)],
  })

  return highlighter.codeToHtml(code, {
    lang: language,
    themes: {
      dark: 'github-dark',
      light: 'github-light',
    },
  })
}
