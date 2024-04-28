'use client'

import { CopyButton } from '@/components/icons/CopyButton'
import { Icons } from '@/components/icons/Icons'
import AnimatedTabs from '@/components/reusable/AnimatedTabs'
import { codeToHtml } from '@/lib/codeToHtml'
import { cn } from '@/lib/utils'
import { Code as CodeIcon, Eye } from 'lucide-react'
import Code from '@/components/code/Code'
import * as React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  path: string
  extractClassname?: boolean
  extractedClassNames?: string
  align?: 'center' | 'start' | 'end'
  description?: string
}

const formatName = (path: string) => {
  const parts = path.split('/')
  const componentName = parts[parts.length - 1]
  return componentName.replace(/([a-z])([A-Z])/g, '$1 $2')
}

export function ComponentPreview({
  path,
  children,
  className,
  extractClassname,
  extractedClassNames,
  align = 'center',
  description,
  ...props
}: ComponentPreviewProps) {
  const name = formatName(path)

  const Preview = React.useMemo(() => {
    try {
      const Component = require(`../showcase/${path}.tsx`).default
      return <Component />
    } catch (error) {
      console.error(`Failed to load component ${path}:`, error)
      return (
        <p className="text-muted-foreground text-sm">
          Component{' '}
          <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {path}
          </code>{' '}
          not found.
        </p>
      )
    }
  }, [path])

  const codeString = React.useMemo(() => {
    try {
      const code = require(`!!raw-loader!../showcase/${path}.tsx`).default
      const filteredCode = code.replace(/'use client'\n/, '')
      return filteredCode
    } catch (error) {
      console.error(`Failed to load code for component ${path}:`, error)
      return null
    }
  }, [path])

  const [selectedTab, setSelectedTab] = React.useState('preview')

  const [code, setCode] = React.useState<string>('')
  React.useEffect(() => {
    const loadCode = async () => {
      const code = await codeToHtml(codeString, 'tsx')
      setCode(code)
    }
    loadCode()
  }, [codeString])

  return (
    <div
      className={cn(
        'group relative my-10 flex w-full max-w-5xl flex-col space-y-2',
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-md m-0 font-medium text-gray-800">{name}</h2>
        <AnimatedTabs
          tabs={['preview', 'code']}
          selected={selectedTab}
          setSelected={setSelectedTab}
          customID={path}
          icons={[Eye, CodeIcon]}
        />
      </div>
      {selectedTab === 'preview' && (
        <div className="relative rounded-md border">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <CopyButton
                value={codeString}
                variant="outline"
                className="text-foreground hover:bg-muted hover:text-foreground absolute right-2 top-2 h-7 w-7 opacity-100 [&_svg]:size-3.5"
              />
            </div>
          </div>
          <div>
            <div
              className={cn(
                'preview flex min-h-[250px] w-full justify-center p-10',
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
        <div className="relative w-full">
          <div>
            {/* <div className="flex items-center gap-2">
              <CopyButton
                value={codeString}
                variant="outline"
                className="text-foreground hover:bg-muted hover:text-foreground absolute right-2 top-4 h-7 w-7 opacity-100 [&_svg]:size-3.5"
              />
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: code,
              }}
            ></div> */}
            <Code code={codeString} language="tsx" />
          </div>
        </div>
      )}
    </div>
  )
}
