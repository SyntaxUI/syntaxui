import {
  bundledLanguages,
  createCssVariablesTheme,
  getHighlighter,
} from 'shiki'

const theme = createCssVariablesTheme({
  name: 'css-variables',
  variablePrefix: '--shiki-',
  variableDefaults: {},
  fontStyle: true,
})

export default async function codeToHtml(code: string, language: string) {
  const highlighter = await getHighlighter({
    themes: [theme],
    langs: [...Object.keys(bundledLanguages)],
  })

  return highlighter.codeToHtml(code, {
    lang: language,
    theme: 'css-variables',
    transformers: [
      {
        span(node, line, col) {
          node.properties['data-token'] = `token:${line}:${col}`
          node.properties['class'] = `${node.properties['class']} text-wrap`
        },
      },
    ],
  })
}
