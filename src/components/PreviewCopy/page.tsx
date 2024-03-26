'use client'

import React, { useState, ReactNode, useEffect } from 'react'
import { ClipboardIcon } from '../icons/ClipboardIcon'
import clsx from 'clsx'

interface CopyButtonProps {
  code: string
}

const CopyButton: React.FC<CopyButtonProps> = ({ code }) => {
  let [copyCount, setCopyCount] = useState<number>(0)
  let copied = copyCount > 0

  return (
    <button
      type="button"
      className={clsx(
        'group relative flex items-center gap-2 rounded-md p-2',
        copied ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800',
      )}
      onClick={() => {
        window.navigator.clipboard.writeText(code).then(() => {
          setCopyCount(1)
          setTimeout(() => setCopyCount(0), 2000)
        })
      }}
    >
      {copied ? 'Code Copied!' : 'Copy Code'}
      <ClipboardIcon className="h-5 w-5" />
    </button>
  )
}

interface SimpleCodePreviewComponentProps {
  component: ReactNode
}

const PreviewCopy: React.FC<SimpleCodePreviewComponentProps> = ({
  component,
}) => {
  const child = React.Children.only(component)
  const componentCode = React.isValidElement(child) ? child.type.toString() : ''
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div>{component}</div>
      <CopyButton code={componentCode} />
    </div>
  )
}

export default PreviewCopy
