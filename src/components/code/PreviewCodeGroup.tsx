'use client'

import { Tabs } from '@/components/reusable/Tabs'
import { useState } from 'react'
import SyntaxHighlighter from './SyntaxHighlighter'
import CodeGroup from './CodeGroup'

export default function PreviewCodeGroup({
  code,
  language,
  preview,
  title,
}: {
  code: string
  language: string
  preview: React.ReactNode
  title?: string
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
        <CodeGroup title={title}>
          <SyntaxHighlighter code={code} className={language} />
        </CodeGroup>
      )}
    </div>
  )
}
