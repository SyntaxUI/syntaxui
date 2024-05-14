'use client'

import { Tabs } from '@/components/reusable/Tabs'
import { useState } from 'react'
import Code from './Code'

/**
 * This is a preview code group component that accepts `code: string`, `language: string`, and `preview: React.ReactNode`.
 * It will render the code with a preview and a tab to switch between the preview and the code block.
 * Serves as an alternative to `ComponentPreview` for code previews where you need to specify the content directly.
 * You should prefer `ComponentPreview` whenever possible.
 *
 * @params preview: React.ReactNode - the preview to render
 * @params language: string - the language of the code
 * @params code: string - the code to render
 *
 * @example view `src/app/docs/animations/hovers/jiggle/page.mdx`
 */
export default function PreviewCodeGroup({
  code,
  language,
  preview,
}: {
  code: string
  language: string
  preview: React.ReactNode
}) {
  const [activeTab, setActiveTab] = useState('preview')

  return (
    <div className="flex w-full flex-col ">
      <div className="ml-auto w-fit">
        <Tabs
          tabs={[
            {
              id: 'preview',
              label: 'Preview',
            },
            {
              id: 'code',
              label: 'Code',
            },
          ]}
          activeTab={activeTab}
          onTabClick={setActiveTab}
        />
      </div>
      {activeTab === 'preview' ? (
        <div className="rounded-2xl border p-6">{preview}</div>
      ) : (
        <Code code={code} language={language} />
      )}
    </div>
  )
}
