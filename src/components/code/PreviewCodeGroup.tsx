'use client'

import { Tabs } from '@/components/reusable/Tabs'
import { useState } from 'react'
import CodeGroup from './CodeGroup'
import Code from './Code'

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
          <Code code={code} language={language} />
        </CodeGroup>
      )}
    </div>
  )
}
