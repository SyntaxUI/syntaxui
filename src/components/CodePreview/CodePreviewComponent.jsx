'use client'

import { useEffect, useState } from 'react'
import { ClipboardIcon } from '../icons/ClipboardIcon'
import clsx from 'clsx'

function CopyButton({ code }) {
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
      className={clsx(
        'group/button obackdrop-blur absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium transition focus:opacity-100',
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
        className={clsx(
          'pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300',
          copied && '-translate-y-1.5 opacity-0',
        )}
      >
        <ClipboardIcon className="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400" />
        Copy
      </span>
      <span
        aria-hidden={!copied}
        className={clsx(
          'pointer-events-none absolute inset-0 flex items-center justify-center text-red-400 transition duration-300',
          !copied && 'translate-y-1.5 opacity-0',
        )}
      >
        Copied!
      </span>
    </button>
  )
}

const CodePreviewComponent = ({ previewContent, highlighted, code }) => {
  const [activeTab, setActiveTab] = useState('preview')

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            className={`${
              activeTab === 'preview'
                ? 'border-red-500 text-red-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            } whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium`}
            onClick={() => handleTabClick('preview')}
          >
            Preview
          </button>
          <button
            className={`${
              activeTab === 'code'
                ? 'border-red-500 text-red-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            } whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium`}
            onClick={() => handleTabClick('code')}
          >
            Code
          </button>
        </nav>
      </div>
      <div className="group mt-4 rounded-lg border">
        {activeTab === 'preview' && (
          <div className="px-4 py-10">{previewContent}</div>
        )}
        {activeTab === 'code' && (
          <div className="relative rounded-md bg-black p-4 text-left">
            <div>
              <CopyButton code={code} />
            </div>
            <div className="">
              <div dangerouslySetInnerHTML={{ __html: highlighted }} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CodePreviewComponent
