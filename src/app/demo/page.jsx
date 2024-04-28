'use client'

import React from 'react'
import { ComponentPreview } from '@/components/ComponentPreview'

export default function Demo() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="h-screen w-full max-w-4xl bg-white">
        <ComponentPreview
          name="components/toggle/SimpleToggle"
          description="An accordion with items"
        />{' '}
      </div>
    </div>
  )
}
