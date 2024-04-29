'use client'

import React from 'react'
import { ComponentPreview } from '@/components/code/ComponentPreview'

export default function Demo() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="h-screen w-full max-w-4xl bg-white">
        <ComponentPreview path="components/toggle/SimpleToggle" />{' '}
      </div>
    </div>
  )
}
