'use client'

import { Tabs } from '@/components/reusable/Tabs'
import { useState } from 'react'

const SimpleTabs = () => {
  const [activeTab, setActiveTab] = useState('ansub')

  const tabs = [
    { id: 'ansub', label: 'Ansub' },
    { id: 'syntax', label: 'Syntax UI' },
  ]

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
  }

  return (
    <div>
      <Tabs tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
      {activeTab === 'ansub' && <div>Ansub is working on syntaxUI</div>}
      {activeTab === 'syntax' && (
        <div>syntaxUI is for people who want to start rapid development.</div>
      )}
    </div>
  )
}

export default SimpleTabs
