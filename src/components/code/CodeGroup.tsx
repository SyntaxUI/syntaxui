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

/**
 * This is a code group component that accepts `children` which should be a `RawCode` or a `Code` component and an optional `title: string`.
 * It will render the code with a title and a button to expand/collapse the code block.
 *
 * @params children: React.ReactNode - the code block to render
 * @params title?: string - the title of the code block
 *
 * @example view `src/app/docs/animations/skewed-infinite-scroll/page.mdx`
 */
export default function CodeGroup({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  const [minimized, setMinimized] = useState(true)
  const codeRef = useRef<HTMLDivElement>(null)

  // const canExpand = (codeRef.current?.clientHeight ?? 0) > 300;
  // console.log('canExpand', codeRef.current?.clientHeight);

  return (
    <CodeGroupContext.Provider value={true}>
      <div
        className={cn(
          'relative mb-4 mt-8 max-h-full overflow-hidden rounded-2xl transition-[max-height] duration-500',
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
        <a
          className="w-full absolute bottom-0 left-0 right-0 block rounded-2xl bg-transparent p-0 text-sm font-medium text-white no-underline cursor-pointer"
          onClick={() => setMinimized(!minimized)}
        >
          {minimized ? 'Expand' : 'Collapse'}
        </a>
        {/* )} */}
      </div>
    </CodeGroupContext.Provider>
  )
}
