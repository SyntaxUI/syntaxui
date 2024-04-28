'use client'

import * as React from 'react'

import { CopyButton } from '@/components/icons/CopyButton'
import { Icons } from '@/components/icons/Icons'
import { cn } from '@/lib/utils'
import AnimatedTabs from '@/components/reusable/AnimatedTabs'
import { Eye, Code } from 'lucide-react'

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  extractClassname?: boolean
  extractedClassNames?: string
  align?: 'center' | 'start' | 'end'
  description?: string
}

export function ComponentPreview({
  name,
  children,
  className,
  extractClassname,
  extractedClassNames,
  align = 'center',
  description,
  ...props
}: ComponentPreviewProps) {
  const Preview = React.useMemo(() => {
    try {
      const Component = require(`../showcase/${name}.tsx`).default
      return <Component />
    } catch (error) {
      console.error(`Failed to load component ${name}:`, error)
      return (
        <p className="text-muted-foreground text-sm">
          Component{' '}
          <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{' '}
          not found.
        </p>
      )
    }
  }, [name])

  const codeString = React.useMemo(() => {
    try {
      return require(`!!raw-loader!../showcase/${name}.tsx`).default
    } catch (error) {
      console.error(`Failed to load code for component ${name}:`, error)
      return null
    }
  }, [name])

  const [selectedTab, setSelectedTab] = React.useState('preview')

  return (
    <div
      className={cn('group relative my-4 flex flex-col space-y-2', className)}
      {...props}
    >
      <AnimatedTabs
        tabs={['preview', 'code']}
        selected={selectedTab}
        setSelected={setSelectedTab}
        customID={name}
        icons={[Eye, Code]}
      />
      {selectedTab === 'preview' && (
        <div className="relative rounded-md border">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <CopyButton
                value={codeString}
                variant="outline"
                className="text-foreground hover:bg-muted hover:text-foreground h-7 w-7 opacity-100 [&_svg]:size-3.5"
              />
            </div>
          </div>
          <div>
            <div
              className={cn(
                'preview flex min-h-[350px] w-full justify-center p-10',
                {
                  'items-center': align === 'center',
                  'items-start': align === 'start',
                  'items-end': align === 'end',
                },
              )}
            >
              <React.Suspense
                fallback={
                  <div className="text-muted-foreground flex items-center text-sm">
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                  </div>
                }
              >
                {Preview}
              </React.Suspense>
            </div>
          </div>
        </div>
      )}
      {selectedTab === 'code' && (
        <div className="flex flex-col space-y-4">
          <div className="w-full rounded-md border p-4">{codeString}</div>
        </div>
      )}
    </div>
  )
}
