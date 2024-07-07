export const metadata = {
  title: 'Banner',
  description:
    'A banner is a prominent message or notification that appears at the top of a page, Add a banner to your website to attract attention and encourage users to take action built using Tailwind CSS for React and libraries like Next.js',
}

import React from 'react'
import { ComponentPreview } from '@/components/code/ComponentPreview'

const Banner = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 py-12">
      <ComponentPreview path="blocks/banner/CollapsibleBanner" />
      <ComponentPreview path="blocks/banner/SimpleBanner" />
    </div>
  )
}

export default Banner
