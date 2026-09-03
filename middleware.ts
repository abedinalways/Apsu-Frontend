import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware for route protection
 * 
 * This middleware protects authenticated routes and redirects
 * unauthenticated users to the login page.
 * 
 * To integrate with backend:
 * - Replace localStorage check with cookie/token validation
 * - Add API call to verify token with backend
 */

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('apsu_auth_token')?.value;
  
  const { pathname } = request.nextUrl;

  // Protected routes that require authentication
  const isProtectedRoute = ['/profile', '/assessment', '/dashboard'].some(route => 
    pathname.startsWith(route)
  );

  // If accessing protected route without token, redirect to login
  if (isProtectedRoute && !token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If accessing login page with valid token, redirect to profile
  if (pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/profile', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};