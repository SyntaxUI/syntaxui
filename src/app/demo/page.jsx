'use client'

import React from 'react'
import { ComponentPreview } from '@/components/ComponentPreview'

export default function Demo() {
  return (
    <div className="h-screen w-screen bg-white">
      <ComponentPreview
        name="components/toggle/SimpleToggle"
        className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
        description="An accordion with items"
      />{' '}
    </div>
  )
}
