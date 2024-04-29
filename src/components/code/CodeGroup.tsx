'use client'

import { cn } from '@/lib/utils'
import {
  createContext,
  createRef,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Button } from '../mdx'

interface CodeBlock {
  language?: string
  code: string
}
function extractCodeBlock(markdown: string) {
  // Regular expression to find a single code block, capturing optional language and code content
  const regex = /```(\w+)?\s*([\s\S]*?)```|`([^`]+)`/
  const match = regex.exec(markdown)

  if (match) {
    if (match[1]) {
      // Fenced code block with language
      return { language: match[1], code: match[2].trim() }
    } else if (match[3]) {
      // Inline code block (no language specified)
      return { language: undefined, code: match[3].trim() }
    }
  }

  return undefined // No code block found
}

export const CodeGroupContext = createContext(false)

export default function CodeGroup({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  const [minimized, setMinimized] = useState(false)
  const codeRef = useRef<HTMLDivElement>(null)

  // const canExpand = (codeRef.current?.clientHeight ?? 0) > 300;
  // console.log('canExpand', codeRef.current?.clientHeight);

  return (
    <CodeGroupContext.Provider value={true}>
      <div
        className={cn(
          'relative mb-4 max-h-[2000px] overflow-hidden rounded-2xl transition-[max-height] duration-500 ',
          minimized ? 'max-h-[300px]' : '',
        )}
      >
        <div className="border border-zinc-700  bg-zinc-800 px-5 py-3 text-xs font-semibold text-white">
          {title}
        </div>
        <div ref={codeRef}>{children}</div>
        {/* {canExpand && ( */}
        <Button
          className="w-xs absolute bottom-0 left-0 right-0 block rounded-2xl bg-transparent p-0 text-sm font-medium text-white"
          onClick={() => setMinimized(!minimized)}
        >
          {minimized ? 'Expand' : 'Collapse'}
        </Button>
        {/* )} */}
      </div>
    </CodeGroupContext.Provider>
  )
}
