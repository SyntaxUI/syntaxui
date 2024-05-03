import { CSSProperties } from 'react'

/*

We can implement more tokens from Prism's token list here:

https://prismjs.com/tokens.html

*/

const prismTheme: { [key: string]: CSSProperties } = {
  /* Overall styles */
  'code[class*="language-"]': {
    backgroundColor: 'transparent',
  },
  'pre[class*="language-"]': {
    padding: '1em',
  },
  /* Token styles */
  text: {
    color: 'var(--prism-color-text)',
  },
  constant: {
    color: 'var(--prism-token-constant)',
  },
  string: {
    color: 'var(--prism-token-string)',
  },
  comment: {
    color: 'var(--prism-token-comment)',
  },
  keyword: {
    color: 'var(--prism-token-keyword)',
  },
  parameter: {
    color: 'var(--prism-token-parameter)',
  },
  function: {
    color: 'var(--prism-token-function)',
  },
  'string-expression': {
    color: 'var(--prism-token-string-expression)',
  },
  punctuation: {
    color: 'var(--prism-token-punctuation)',
  },
  property: {
    color: 'var(--prism-token-property)',
  },
  tag: {
    color: 'var(--prism-token-tag)',
  },
  'attr-name': {
    color: 'var(--prism-token-attr-name)',
  },
  'attr-value': {
    color: 'var(--prism-token-attr-value)',
  },
  'class-name': {
    color: 'var(--prism-token-class-name)',
  },
  'property-access': {
    color: 'var(--prism-token-property-access)',
  },
}

export default prismTheme
