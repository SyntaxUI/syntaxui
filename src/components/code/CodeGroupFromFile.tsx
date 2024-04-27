'use client';
import { useEffect, useState } from 'react';
import { readFile } from '@/lib/readFile';
import SyntaxHighlighter from './SyntaxHighlighter';
import CodeGroup from './CodeGroup';

export default function CodeGroupFromFile({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  const [code, setCode] = useState('');
  useEffect(() => {
    const fetchCode = async () => {
      const code = await readFile(path);
      setCode(code);
      // console.log('text', code);
    };

    // console.log('fetching code');
    fetchCode();
  }, [path]);

  const lang = path.split('.').pop() ?? '';
  return (
    <CodeGroup title={title}>
      <SyntaxHighlighter className={lang} path={path} code={code} />
    </CodeGroup>
  );
}
