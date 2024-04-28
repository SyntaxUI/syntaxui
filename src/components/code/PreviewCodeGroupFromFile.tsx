'use client';
import { useEffect, useState } from 'react';
import { readFile } from '@/lib/readFile';
import SyntaxHighlighter from './SyntaxHighlighter';
import CodeGroup from './CodeGroup';
import PreviewCodeGroup from './PreviewCodeGroup';

export default function PreviewCodeGroupFromFile({
  path,
  language,
  preview,
  title,
}: {
  path: string;
  language: string;
  preview: React.ReactNode;
  title?: string;
}) {
  const [code, setCode] = useState('');
  useEffect(() => {
    const fetchCode = async () => {
      const code = await readFile(path);
      setCode(code);
      console.log('text', code);
    };

    console.log('fetching code');
    fetchCode();
  }, [path]);

  const lang = path.split('.').pop() ?? '';
  return (
    <PreviewCodeGroup
      title={title}
      code={code}
      language={language}
      preview={preview}
    />
  );
}
