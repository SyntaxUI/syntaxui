'use client'

import codeToHtml from '@/lib/codeToHtml'
import { Suspense, useContext, useEffect, useMemo, useState } from 'react'
import { CodeGroupContext } from './CodeGroup'
import { cn } from '@/lib/utils'
import { CopyButton } from './CopyButton'

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
  const inCodeGroup = useContext(CodeGroupContext)
  const inline = useMemo(() => {
    return (rawCode ?? '').trim().split('\n').length === 1 && !inCodeGroup
  }, [inCodeGroup])

  const [code, setCode] = useState<string | undefined>(undefined)
  useEffect(() => {
    const loadCode = async () => {
      const html = await codeToHtml(
        (rawCode ?? '').trim(),
        rawLang ? rawLang.replaceAll('language-', '') : '',
      )
      setCode(html)
    }
    loadCode()
  }, [rawCode, rawLang])

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
      {code === undefined ? (
        <div className="p-4 text-white">Loading...</div>
      ) : (
        <>
          <div
            className="text-wrap p-4"
            dangerouslySetInnerHTML={{ __html: code }}
            style={{
              scrollbarColor: ' #d4d4d4 transparent',
            }}
          ></div>
          <CopyButton
            value={rawCode}
            // className="text-foreground hover:bg-muted hover:text-foreground absolute right-2 top-2 h-7 w-7 opacity-100 [&_svg]:size-3.5"
          />
        </>
      )}
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

export function ClipboardIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeWidth="0"
        d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
      />
      <path
        fill="none"
        strokeLinejoin="round"
        d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
      />
    </svg>
  )
}
