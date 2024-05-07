import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect /docs directly to /components
  if (pathname === '/docs') {
    return NextResponse.redirect(new URL('/components', request.url))
  }

  // If any path starts with /docs, rewrite it by removing the /docs prefix
  if (pathname.startsWith('/docs/')) {
    const newPathname = pathname.replace('/docs', '')
    return NextResponse.redirect(new URL(newPathname, request.url))
  }

  // Continue processing for other paths
  return NextResponse.next()
}

// Applies to any route that starts with /docs or just /docs
export const config = {
  matcher: ['/docs/:path*', '/docs'],
}
