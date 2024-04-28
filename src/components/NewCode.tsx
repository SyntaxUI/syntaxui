import { codeToHtml } from '@/lib/codeToHtml'

export async function Code({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'code'>) {
  if (typeof children === 'string') {
    const code = await codeToHtml(children, className ?? '')
    return (
      <code {...props} className={className}>
        {code}
      </code>
    )
  }

  return <code {...props}>{children}</code>
}

export function Pre({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'pre'>) {
  // return <pre {...props}>{children}</pre>
}
