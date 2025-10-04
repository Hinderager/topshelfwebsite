import { NextResponse } from 'next/server'

// Enable static generation with ISR (Incremental Static Regeneration)
export const revalidate = 3600 // Revalidate every hour

interface GoogleReview {
  author_name: string
  author_url?: string
  language: string
  profile_photo_url?: string
  rating: number
  relative_time_description: string
  text: string
  time: number
}

interface GooglePlacesResponse {
  result: {
    reviews?: GoogleReview[]
    rating?: number
    user_ratings_total?: number
  }
  status: string
}

export async function GET() {
  // Hardcoded values since environment variables aren't working in Vercel
  const apiKey = process.env.GOOGLE_PLACES_API_KEY || 'AIzaSyDBafSUJynrWTFAJnv-hnYoeXlBlJeWd9U'
  const placeId = process.env.GOOGLE_PLACE_ID || 'ChIJz63bo0O3r1QRufHW9IJKKUk'

  if (!apiKey) {
    return NextResponse.json(
      { error: 'Google Places API key not configured' },
      { status: 500 }
    )
  }

  if (!placeId) {
    return NextResponse.json(
      { error: 'Google Place ID not configured' },
      { status: 500 }
    )
  }

  try {
    const apiResponse = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    )

    if (!apiResponse.ok) {
      throw new Error('Failed to fetch from Google Places API')
    }

    const data: GooglePlacesResponse = await apiResponse.json()

    if (data.status !== 'OK') {
      throw new Error(`Google Places API error: ${data.status}`)
    }

    // Filter for 5-star reviews only and sort by most recent
    const fiveStarReviews = (data.result.reviews || [])
      .filter((review) => review.rating === 5)
      .sort((a, b) => b.time - a.time) // Sort by timestamp, newest first

    const response = NextResponse.json({
      reviews: fiveStarReviews,
      rating: data.result.rating || 5.0,
      totalReviews: data.result.user_ratings_total || 0,
    })

    // Add cache headers for better performance
    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200')

    return response
  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    )
  }
}
