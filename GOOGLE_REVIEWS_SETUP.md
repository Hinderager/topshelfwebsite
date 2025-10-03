# Google Reviews Live Integration Setup

## Overview
Your website now fetches live Google reviews automatically, showing the most recent 5-star reviews first. The reviews update hourly and are cached for optimal performance.

## Setup Instructions

### 1. Get Google Places API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Places API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Places API"
   - Click "Enable"
4. Create an API Key:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the API key

### 2. Restrict Your API Key (Recommended)

For security, restrict your API key:

1. Click on your API key in the Credentials page
2. Under "Application restrictions":
   - Select "HTTP referrers (websites)"
   - Add your domains:
     - `localhost:3000/*` (for development)
     - `your-production-domain.com/*`
3. Under "API restrictions":
   - Select "Restrict key"
   - Choose "Places API"
4. Click "Save"

### 3. Add API Key to Your Project

Open `.env.local` and add your API key:

```env
GOOGLE_PLACES_API_KEY=your-api-key-here
```

The Place ID is already configured:
```env
GOOGLE_PLACE_ID=ChIJz63LoyO3r1QRudLWgqJKKUk
```

### 4. Start Your Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` and scroll to the "What Our Customers Say" section. The reviews should load automatically.

## How It Works

### API Route (`src/app/api/reviews/route.ts`)
- Fetches reviews from Google Places API
- Filters for 5-star reviews only
- Sorts by most recent first (based on timestamp)
- Caches responses for 1 hour to reduce API calls
- Returns review data with rating and total count

### Component (`src/components/GoogleReviews.tsx`)
- Fetches reviews on page load via `/api/reviews`
- Shows loading spinner while fetching
- Displays 4 reviews per page with carousel navigation
- Updates automatically when new reviews are posted (hourly cache refresh)
- Shows profile photos from Google if available
- Displays relative time (e.g., "2 weeks ago")

## Features

✅ **Live Updates**: Reviews update hourly with latest data from Google
✅ **5-Star Only**: Only shows 5-star reviews to highlight best feedback
✅ **Most Recent First**: Automatically sorted by timestamp, newest first
✅ **Profile Photos**: Shows reviewer profile pictures when available
✅ **Cached for Performance**: 1-hour cache to minimize API calls
✅ **Error Handling**: Graceful fallback if API fails
✅ **Loading States**: Shows spinner during initial load

## Pricing

Google Places API has a generous free tier:
- **First 28,500 requests per month**: FREE
- **After 28,500**: $17 per 1,000 requests

With hourly caching, your site will make approximately:
- **720 requests per month** (24 hours × 30 days)
- **Well within the free tier** ✅

## Testing

To test the integration:

1. Make sure your API key is added to `.env.local`
2. Restart your dev server: `npm run dev`
3. Open the browser console (F12)
4. Look for any errors related to `/api/reviews`
5. Check that reviews are displaying with correct data

## Troubleshooting

### Reviews not loading?
- Check browser console for errors
- Verify API key is correct in `.env.local`
- Ensure Places API is enabled in Google Cloud Console
- Check API key restrictions aren't blocking localhost

### Error: "Failed to fetch reviews"?
- Verify your API key has Places API enabled
- Check that you haven't exceeded API quota
- Ensure Place ID is correct

### Reviews showing but outdated?
- Cache refreshes hourly automatically
- To force refresh, restart the dev server
- In production, wait up to 1 hour for new reviews to appear

## Next Steps

Before deploying to production:
1. ✅ Add your production domain to API key restrictions
2. ✅ Set `GOOGLE_PLACES_API_KEY` in your hosting platform (Vercel, etc.)
3. ✅ Test on production to ensure reviews load correctly
4. Consider increasing cache time to reduce API calls if needed

## Files Modified

- ✅ `.env.local` - Added Google API credentials
- ✅ `src/app/api/reviews/route.ts` - New API endpoint
- ✅ `src/components/GoogleReviews.tsx` - Updated to fetch live data
