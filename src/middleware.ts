// import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

/**
 * Define any middleware inside here, or follow any guides for auth, header rules, etc
 * This function can be marked `async` if using `await` inside
 * @link https://nextjs.org/docs/app/building-your-application/routing/middleware
 */
export function middleware(request: NextRequest) {
  return request
}
 
// https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
}