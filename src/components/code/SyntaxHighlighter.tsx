'use client'

// import theme from './Theme'
import { useContext, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { CodeGroupContext } from './CodeGroup'
import { codeToHtml } from '@/lib/codeToHtml'

export default function SyntaxHighlighter(props: any) {
  const inCodeGroup = useContext(CodeGroupContext)
  const { children: rawCode, className: rawLang, code: forceCode } = props

  const lang = rawLang ? rawLang.replace('language-', '') : ''
  const code = (forceCode ?? rawCode ?? '').trim()

  console.log('code', code)
  console.log('lang', lang)

  // const inline = code.split('\n').length === 1

  // if (inline && !inCodeGroup) {
  //   return (
  //     <code
  //     // style={{
  //     //   backgroundColor: theme.plain.backgroundColor,
  //     //   color: theme.plain.color,
  //     // }}
  //     >
  //       {rawCode}
  //     </code>
  //   )
  // }

  const [codeAsHtml, setCodeAsHtml] = useState<string>('')
  useEffect(() => {
    const loadCode = async () => {
      const html = await codeToHtml(code, lang)
      setCodeAsHtml(html)
    }
    loadCode()
  }, [code, lang])

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: code,
      }}
    ></div>
  )

  // const children = (
  //   <div className={'relative'}>
  //     <div
  //       dangerouslySetInnerHTML={{
  //         __html: codeAsHtml,
  //       }}
  //     />
  //     <CopyButton code={code} />
  //   </div>
  // )

  // return (
  //   <div
  //     className={cn(
  //       'overflow-x-auto p-4',
  //       inCodeGroup ? '' : 'mb-4 rounded-2xl',
  //     )}
  //   >
  //     {children}
  //   </div>
  // )
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

function CopyButton({ code }: { code: string }) {
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
        'group/button obackdrop-blur absolute right-1 top-1 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium transition focus:opacity-100',
        copied
          ? 'bg-red-400/10 ring-1 ring-inset ring-red-400/20'
          : 'bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5',
      )}
      onClick={() => {
        window.navigator.clipboard.writeText(code).then(() => {
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
