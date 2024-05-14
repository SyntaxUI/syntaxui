'use client'

import { useContext, useEffect, useMemo, useState } from 'react'
import { CodeGroupContext } from './CodeGroup'
import { cn } from '@/lib/utils'
import { CopyButton } from './CopyButton'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import theme from './theme'
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

/**
 * This is a code block component that accepts `code: string` and a `language: string`.
 * It will render the code block with syntax highlighting and a copy button.
 *
 * Render Types:
 * - if in a CodeGroup, it will style accordingly in a multi-line code block
 * - else, if the code is a single line, it will render as an inline code block
 * - else, it will render as a multi-line code block
 *
 * @params code: string - the code to render
 * @params language: string - the language of the code
 *
 * @example view `src/components/code/CodeGroupFromFile.tsx`
 */
export default function Code({
  code: rawCode,
  language: rawLang,
}: {
  code: string
  language: string
}) {
  const code = useMemo(() => (rawCode ?? '').trim(), [rawCode])
  const inCodeGroup = useContext(CodeGroupContext)
  const inline = useMemo(() => {
    return code.trim().split('\n').length === 1 && !inCodeGroup
  }, [inCodeGroup, code])

  const lang = useMemo(
    () => (rawLang ? rawLang.replace('language-', '') : 'plaintext'),
    [rawLang],
  )

  if (inline) {
    return (
      <pre className="inline-block rounded-lg bg-zinc-800 px-2 text-sm text-white">
        {rawCode}
      </pre>
    )
  }

  return (
    <div
      className={cn(
        'relative bg-zinc-900 pb-0',
        inCodeGroup ? 'rounded-b-lg rounded-t-none' : 'rounded-lg',
      )}
    >
      <CopyButton value={code} className="z-10 border-none" />
      <SyntaxHighlighter language={lang} wrapLines wrapLongLines style={theme}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

/**
 * This is a raw code block component that accepts code as `className: string`
 * and a language as `children: string`.
 * It will render the code block as a `Code` component.
 *
 * @params children: string - the language of the code
 * @params className: string - the code to render
 *
 * @example view any pair of ``` or ` in `src/app/docs/`
 */
export function RawCode({
  children: rawCode,
  className: rawLang,
}: {
  children: string
  className: string
}) {
  return <Code code={rawCode} language={rawLang} />
}
