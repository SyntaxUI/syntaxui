'use client'
import { useEffect, useState } from 'react'
import { readFile } from '@/lib/readFile'
import CodeGroup from './CodeGroup'
import Code from './Code'

/**
 * This is a code group component that accepts a `title: string` and a `path: string`.
 * It will load the code from the file path and renders a `CodeGroup` for the title
 * and a `Code` component for the code.
 *
 * @prop path: string - the path to the code file
 * @prop title?: string - the title of the code block
 */
export default function CodeGroupFromFile({
  path,
  title,
}: {
  path: string
  title?: string
}) {
  const [code, setCode] = useState('')
  useEffect(() => {
    const fetchCode = async () => {
      const code = await readFile(path)
      setCode(code)
    }
    fetchCode()
  }, [path])

  const lang = path.split('.').pop() ?? ''
  return (
    <CodeGroup title={title}>
      <Code code={code} language={lang} />
    </CodeGroup>
  )
}
