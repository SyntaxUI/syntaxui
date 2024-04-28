'use client'

import { codeToHtml } from '@/lib/codeToHtml'
import { Suspense, useEffect, useState } from 'react'
import { CopyButton } from '../icons/CopyButton'

export default function Code({
  code: rawCode,
  language: rawLang,
}: {
  code: string
  language: string
}) {
  const [code, setCode] = useState<string | undefined>(undefined)
  useEffect(() => {
    const loadCode = async () => {
      const html = await codeToHtml(
        rawCode.trim(),
        rawLang.replaceAll('language-', ''),
      )
      setCode(html)
    }
    loadCode()
  }, [rawCode, rawLang])

  return (
    <div className="relative  rounded-lg border  pb-0">
      {code === undefined ? (
        <div className="m-4">Loading...</div>
      ) : (
        <>
          <div
            className="overflow-auto p-4"
            dangerouslySetInnerHTML={{ __html: code }}
            style={{
              scrollbarColor: ' #d4d4d4 transparent',
            }}
          ></div>
          <CopyButton
            value={rawCode}
            variant="outline"
            className="text-foreground hover:bg-muted hover:text-foreground absolute right-2 top-2 h-7 w-7 opacity-100 [&_svg]:size-3.5"
          />
        </>
      )}
    </div>
  )
}

export function RawCode({
  children: rawCode,
  className: rawLang,
}: {
  children: string
  className: string
}) {
  console.log('rawCode', rawCode)
  console.log('rawLang', rawLang)

  return <Code code={rawCode} language={rawLang} />
}
