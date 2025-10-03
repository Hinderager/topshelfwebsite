'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

interface Review {
  author_name: string
  profile_photo_url?: string
  relative_time_description: string
  rating: number
  text: string
  time: number
}

interface ReviewsData {
  reviews: Review[]
  rating: number
  totalReviews: number
}

export function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [reviewsData, setReviewsData] = useState<ReviewsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [expandedReviews, setExpandedReviews] = useState(false)
  const reviewsPerPage = 4

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews')
        if (!response.ok) {
          throw new Error('Failed to fetch reviews')
        }
        const data: ReviewsData = await response.json()
        setReviewsData(data)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching reviews:', err)
        setError('Unable to load reviews')
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  const nextSlide = () => {
    if (!reviewsData) return
    setCurrentIndex((prev) =>
      prev + reviewsPerPage >= reviewsData.reviews.length ? 0 : prev + reviewsPerPage
    )
  }

  const prevSlide = () => {
    if (!reviewsData) return
    setCurrentIndex((prev) =>
      prev - reviewsPerPage < 0
        ? Math.max(0, reviewsData.reviews.length - reviewsPerPage)
        : prev - reviewsPerPage
    )
  }

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#4a90e2]"></div>
            <p className="mt-4 text-gray-600">Loading reviews...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error || !reviewsData) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600">{error || 'Unable to load reviews'}</p>
          </div>
        </div>
      </section>
    )
  }

  const visibleReviews = reviewsData.reviews.slice(currentIndex, currentIndex + reviewsPerPage)
  const totalReviews = reviewsData.totalReviews

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-8">
            What Our Customers Say
          </h2>

          {/* Google Reviews Badge */}
          <div className="inline-block bg-slate-50 rounded-2xl px-8 py-6 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl font-bold">
                <span className="text-[#4285f4]">G</span>
                <span className="text-[#ea4335]">o</span>
                <span className="text-[#fbbc04]">o</span>
                <span className="text-[#4285f4]">g</span>
                <span className="text-[#34a853]">l</span>
                <span className="text-[#ea4335]">e</span>
              </span>
              <span className="text-2xl font-semibold text-gray-800">Reviews</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl font-bold text-gray-900">{reviewsData.rating.toFixed(1)}</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#fbbc04] text-[#fbbc04]" />
                ))}
              </div>
              <span className="text-gray-600 ml-2">({totalReviews})</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleReviews.map((review) => (
              <Card key={review.time} className="bg-slate-50 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  {/* Reviewer Info */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="relative">
                      {review.profile_photo_url ? (
                        <img
                          src={review.profile_photo_url}
                          alt={review.author_name}
                          className="w-12 h-12 rounded-full"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4a90e2] to-[#1e3a5f] flex items-center justify-center text-white font-semibold text-lg">
                          {review.author_name.charAt(0)}
                        </div>
                      )}
                      {/* Google Icon */}
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md">
                        <span className="text-xs font-bold">
                          <span className="text-[#4285f4]">G</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <h3 className="font-semibold text-gray-900 truncate">{review.author_name}</h3>
                        <svg className="w-4 h-4 text-[#4285f4] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                      <p className="text-sm text-gray-500">{review.relative_time_description}</p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#fbbc04] text-[#fbbc04]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <div className="relative">
                    <p className={`text-gray-700 leading-relaxed ${!expandedReviews ? 'line-clamp-4' : ''}`}>
                      {review.text}
                    </p>
                    {!expandedReviews && review.text.length > 150 && (
                      <button
                        onClick={() => setExpandedReviews(true)}
                        className="text-[#4285f4] hover:text-[#1e3a5f] font-semibold text-sm mt-2 transition-colors"
                      >
                        Read more
                      </button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          {reviewsData.reviews.length > reviewsPerPage && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentIndex === 0}
                aria-label="Previous reviews"
              >
                <ChevronLeft className="w-6 h-6 text-[#1e3a5f]" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentIndex + reviewsPerPage >= reviewsData.reviews.length}
                aria-label="Next reviews"
              >
                <ChevronRight className="w-6 h-6 text-[#1e3a5f]" />
              </button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        {reviewsData.reviews.length > reviewsPerPage && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(reviewsData.reviews.length / reviewsPerPage) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx * reviewsPerPage)}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / reviewsPerPage) === idx
                    ? 'bg-[#4a90e2] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review page ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* CTA to Google */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Top+Shelf+Moving+and+Junk+Removal/@43.620604,-116.281153,17z/data=!4m8!3m7!1s0x54afb743a3dbadcf:0x49294a82f4d6f1b9!8m2!3d43.620604!4d-116.281153!9m1!1b1!16s%2Fg%2F11t1jdtjbr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#4285f4] hover:text-[#1e3a5f] font-semibold text-lg transition-colors"
          >
            Read all {totalReviews} reviews on Google
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
