import { NextResponse } from 'next/server'

export async function GET() {
  // Only show if the env vars are set, not their values for security
  return NextResponse.json({
    GOOGLE_PLACES_API_KEY_EXISTS: !!process.env.GOOGLE_PLACES_API_KEY,
    GOOGLE_PLACE_ID_EXISTS: !!process.env.GOOGLE_PLACE_ID,
    // Show first 5 chars of each to verify they're being read
    GOOGLE_PLACES_API_KEY_PREFIX: process.env.GOOGLE_PLACES_API_KEY?.substring(0, 5) || 'NOT_SET',
    GOOGLE_PLACE_ID_PREFIX: process.env.GOOGLE_PLACE_ID?.substring(0, 5) || 'NOT_SET',
    NODE_ENV: process.env.NODE_ENV,
    VERCEL: process.env.VERCEL,
  })
}