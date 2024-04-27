'use client';

import { Highlight, themes } from 'prism-react-renderer';

export const SyntaxHighlighter = (props: any) => {
  const { children, className: rawLang } = props;
  const lang = rawLang.replace('language-', '');
  return (
    <Highlight theme={themes.shadesOfPurple} code={children} language={lang}>
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
  );
};

export const Wrapper = (props: any) => {
  console.log(props);

  return <>{props.children}</>;
};
