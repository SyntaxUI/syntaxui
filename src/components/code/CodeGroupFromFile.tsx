'use client'
import { useEffect, useState } from 'react'
import { readFile } from '@/lib/readFile'
import CodeGroup from './CodeGroup'
import Code from './Code'

export default function CodeGroupFromFile({
  title,
  path,
}: {
  title: string
  path: string
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
