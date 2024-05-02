'use client'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function ClipboardIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 6v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1l-.447.894A2 2 0 0 1 11.263 6H8.737a2 2 0 0 1-1.789-1.106L6.5 4h-1a2 2 0 0 0-2 2Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m13.5 4-.447.894A2 2 0 0 1 11.263 6H8.737a2 2 0 0 1-1.789-1.106L6.5 4l.724-1.447A1 1 0 0 1 8.118 2h3.764a1 1 0 0 1 .894.553L13.5 4Z"
      />
    </svg>
  )
}

export function CopyButton({ value }: { value: string }) {
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
