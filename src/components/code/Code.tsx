'use client'

import codeToHtml from '@/lib/codeToHtml'
import { Suspense, useContext, useEffect, useMemo, useState } from 'react'
import { CodeGroupContext } from './CodeGroup'
import { cn } from '@/lib/utils'

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

function ClipboardIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
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

function CopyButton({ value }: { value: string }) {
  let [copyCount, setCopyCount] = useState(0)
  let copied = copyCount > 0

  useEffect(() => {
    if (copyCount > 0) {
      let timeout = setTimeout(() => setCopyCount(0), 1000)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [copyCount])

  return (
    <button
      type="button"
      className={cn(
        'group/button obackdrop-blur absolute right-2 top-2 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium transition focus:opacity-100',
        copied
          ? 'bg-red-400/10 ring-1 ring-inset ring-red-400/20'
          : 'bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5',
      )}
      onClick={() => {
        window.navigator.clipboard.writeText(value).then(() => {
          setCopyCount((count) => count + 1)
        })
      }}
    >
      <span
        aria-hidden={copied}
        className={cn(
          'pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300',
          copied && '-translate-y-1.5 opacity-0',
        )}
      >
        <ClipboardIcon className="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400" />
        Copy
      </span>
      <span
        aria-hidden={!copied}
        className={cn(
          'pointer-events-none absolute inset-0 flex items-center justify-center text-red-400 transition duration-300',
          !copied && 'translate-y-1.5 opacity-0',
        )}
      >
        Copied!
      </span>
    </button>
  )
}
