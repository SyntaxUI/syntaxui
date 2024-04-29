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
          'relative mb-4 max-h-full overflow-hidden rounded-2xl transition-[max-height] duration-500 ',
          minimized ? 'max-h-[300px]' : '',
        )}
      >
        {title && (
          <div className="border border-zinc-700  bg-zinc-800 px-5 py-3 text-xs font-semibold text-white">
            {title}
          </div>
        )}
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
