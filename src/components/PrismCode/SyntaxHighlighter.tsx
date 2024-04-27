'use client';

import { Highlight } from 'prism-react-renderer';
import theme from './Theme';
import {
  ReactNode,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../mdx';

// function extractText(node: ReactNode): string {
//   if (typeof node === 'string') {
//     return node;
//   } else if (Array.isArray(node)) {
//     return node.map(extractText).join('');
//   } else if (isValidElement(node) && node.props.children) {
//     return extractText(node.props.children);
//   }
//   return '';
// }

export const SyntaxHighlighter = (props: any) => {
  const { children: rawCode, className: rawLang } = props;
  const lang = rawLang ? rawLang.replace('language-', '') : '';
  const code = rawCode.trim();

  const inline = code.split('\n').length === 1;

  if (inline) {
    return (
      <code
        style={{
          backgroundColor: theme.plain.backgroundColor,
          color: theme.plain.color,
        }}
      >
        {rawCode}
      </code>
    );
  }

  const children = (
    <div className="relative">
      <Highlight theme={theme} code={code} language={lang}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {/* <span>{i + 1}</span> */}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>

      <CopyButton code={code} />
    </div>
  );

  const inCodeGroup = useContext(CodeGroupContext);

  return (
    <div
      className={cn(
        'overflow-x-auto bg-zinc-900 p-4',
        inCodeGroup ? '' : 'rounded-2xl',
      )}
    >
      {children}
    </div>
  );
};

function ClipboardIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeWidth="0"
        d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
      />
      <path
        fill="none"
        strokeLinejoin="round"
        d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
      />
    </svg>
  );
}

export function CopyButton({ code }: { code: string }) {
  let [copyCount, setCopyCount] = useState(0);
  let copied = copyCount > 0;

  useEffect(() => {
    if (copyCount > 0) {
      let timeout = setTimeout(() => setCopyCount(0), 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [copyCount]);

  return (
    <button
      type="button"
      className={cn(
        'group/button obackdrop-blur absolute right-1 top-1 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium transition focus:opacity-100',
        copied
          ? 'bg-red-400/10 ring-1 ring-inset ring-red-400/20'
          : 'bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5',
      )}
      onClick={() => {
        window.navigator.clipboard.writeText(code).then(() => {
          setCopyCount((count) => count + 1);
        });
      }}
    >
      <span
        aria-hidden={copied}
        className={cn(
          'pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300',
          copied && '-translate-y-1.5 opacity-0',
        )}
      >
        <ClipboardIcon className="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400" />
        Copy
      </span>
      <span
        aria-hidden={!copied}
        className={cn(
          'pointer-events-none absolute inset-0 flex items-center justify-center text-red-400 transition duration-300',
          !copied && 'translate-y-1.5 opacity-0',
        )}
      >
        Copied!
      </span>
    </button>
  );
}

const CodeGroupContext = createContext(false);

export const CodeGroup = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  const [minimized, setMinimized] = useState(false);
  // const code = extractText(children);
  // console.log('minimized', minimized);

  return (
    <CodeGroupContext.Provider value={true}>
      <div
        className={cn(
          'relative max-h-[2000px] overflow-hidden rounded-2xl transition-[max-height] duration-500 ',
          minimized ? 'max-h-[300px]' : '',
        )}
      >
        <div className="border border-zinc-700  bg-zinc-800 px-5 py-3 text-xs font-semibold text-white">
          {title}
        </div>
        <div className="">{children}</div>
        <Button
          className="w-xs absolute bottom-0 left-0 right-0 block rounded-2xl bg-transparent p-0 text-sm font-medium text-white"
          onClick={() => setMinimized(!minimized)}
        >
          {minimized ? 'Expand' : 'Collapse'}
        </Button>
      </div>
    </CodeGroupContext.Provider>
  );
};
