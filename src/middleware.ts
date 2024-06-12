import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const redirects = [
  {
    from: '/components/features',
    to: '/blocks/features',
  },
  {
    from: `/components/footer`,
    to: '/blocks/footer',
  },
  {
    from: `/components/logo-cloud`,
    to: '/blocks/logo-cloud',
  },
  {
    from: `/components/pricing`,
    to: '/blocks/pricing',
  },
  {
    from: `/components/testimonial`,
    to: '/blocks/testimonial',
  },
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  console.log('pathname', pathname)

  // Redirect /docs directly to /components
  if (pathname === '/docs') {
    return NextResponse.redirect(new URL('/components', request.url))
  }

  // If any path starts with /docs, rewrite it by removing the /docs prefix
  if (pathname.startsWith('/docs/')) {
    const newPathname = pathname.replace('/docs', '')
    return NextResponse.redirect(new URL(newPathname, request.url))
  }

  // Check if any redirects match the current path
  for (const redirect of redirects) {
    if (pathname.startsWith(redirect.from)) {
      return NextResponse.redirect(new URL(redirect.to, request.url))
    }
  }

  // Continue processing for other paths
  return NextResponse.next()
}

// Applies to any route that starts with /docs or just /docs
export const config = {
  matcher: ['/docs/:path*', '/docs', '/components/:path*'],
}
