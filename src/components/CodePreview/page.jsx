import { getHighlighter } from 'shiki'
import CodePreviewComponent from './CodePreviewComponent'

const PreviewCodeTabs = async ({ previewContent, codeContent, language }) => {
  const highlighter = await getHighlighter({
    theme: 'css-variables',
    langs: [language],
  })

  const highlighted = highlighter.codeToHtml(codeContent, {
    lang: language,
    theme: 'css-variables',
  })

  return (
    <>
      {highlighted && (
        <CodePreviewComponent
          previewContent={previewContent}
          highlighted={highlighted}
          code={codeContent}
        />
      )}
    </>
  )
}

export default PreviewCodeTabs
