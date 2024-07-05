'use client'

import React from 'react'
import { ComponentPreview } from '@/components/code/ComponentPreview'

const Banner = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 py-12">
      <ComponentPreview path="blocks/banner/CollapsibleBanner" />
    </div>
  )
}

export default Banner
