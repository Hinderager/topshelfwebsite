# Top Shelf Moving and Junk Removal Website Structure

**Domain:** https://topshelfmovingandjunkremoval.com
**Analysis Date:** October 5, 2025
**Total Pages Discovered:** 100+

---

## 🎯 MIGRATION PLAN SUMMARY

### Overview
This document maps the existing WordPress site at topshelfmovingandjunkremoval.com to guide the development of a replacement Next.js site. The goal is to replicate all pages, preserve backlinks, and eventually migrate the entire website to displace the current WordPress installation.

### Migration Strategy

#### Phase 1: Development (Current)
- **Platform**: Next.js 14 with App Router
- **Development Host**: Vercel
- **Base Domain**: https://topshelfwebsite-nf4z.vercel.app/
- **Goal**: Build complete site with identical URL structure to WordPress site

#### Phase 2: Testing & Validation
- **Test all pages**: Ensure 100% feature parity with WordPress site
- **URL verification**: Confirm all URL paths match exactly
- **SEO validation**: Meta tags, structured data, sitemaps
- **Performance testing**: Lighthouse, Core Web Vitals
- **Content review**: All 195+ pages migrated correctly

#### Phase 3: Migration (Future)
- **Action**: Replace WordPress site with Next.js site at topshelfmovingandjunkremoval.com
- **Method**: Deploy Next.js site to production hosting, update DNS/hosting config
- **Result**: topshelfmovingandjunkremoval.com now serves Next.js site instead of WordPress

### Critical Requirements for Backlink Preservation

#### ✅ What MUST Match:
1. **Domain name**: topshelfmovingandjunkremoval.com (unchanged)
2. **URL paths**: Every URL must match exactly
   - `/junk-removal-services/` → `/junk-removal-services/`
   - `/junk-removal-services/cleanouts/estate-cleanout/` → `/junk-removal-services/cleanouts/estate-cleanout/`
   - `/blog/` → `/blog/`
   - All 195+ pages must have identical paths
3. **HTTP response codes**: All pages return 200 OK (not 301/302 redirects)

#### ❌ What Doesn't Matter:
- Hosting platform (WordPress → Next.js)
- Backend technology (PHP → React/Node.js)
- How the site was built (Elementor → React components)
- Where development happens (Vercel, local, etc.)

### Backlink Guarantee
**As long as the domain stays the same AND the URL paths match exactly, ALL backlinks will continue to work seamlessly.**

Backlinks point to URLs (domain + path), not to the underlying technology. When someone clicks a backlink to:
```
https://topshelfmovingandjunkremoval.com/junk-removal-services/cleanouts/estate-cleanout/
```

It doesn't matter if that page is served by:
- WordPress + PHP + Elementor (current)
- Next.js + React + Vercel (future)

The URL resolves, the page loads, the backlink works. ✅

### Implementation Checklist

#### URL Structure Replication
- [ ] Replicate all main pages with exact URL paths
- [ ] Replicate all service pages (35+) with exact URL paths
- [ ] Replicate all blog posts (150+) with exact URL paths
- [ ] Implement dynamic routing for `/junk-removal-services/[category]/[service]/`
- [ ] Implement blog routing for `/blog/[slug]/` and `/blog/category/[category]/`

#### Content Migration
- [ ] Homepage content
- [ ] All service descriptions and features
- [ ] All blog post content
- [ ] All images optimized and migrated
- [ ] FAQ content
- [ ] Contact information
- [ ] Pricing pages

#### Technical Requirements
- [ ] Meta tags (title, description, OG tags, Twitter cards)
- [ ] Schema.org structured data (LocalBusiness, Article, etc.)
- [ ] XML sitemap matching WordPress structure
- [ ] Robots.txt configuration
- [ ] 404 page for non-existent URLs
- [ ] Proper canonical URLs

#### Features & Functionality
- [ ] Contact forms
- [ ] Booking system integration
- [ ] Google Reviews integration
- [ ] Google Maps integration
- [ ] Mobile responsiveness
- [ ] Performance optimization (Core Web Vitals)

### Migration Timeline
1. **Build Phase**: Develop all pages on Next.js
2. **Review Phase**: Test thoroughly on Vercel staging
3. **Content Phase**: Migrate all copy, images, and media
4. **QA Phase**: Comprehensive testing of all features
5. **Go-Live Phase**: Replace WordPress with Next.js at topshelfmovingandjunkremoval.com

### Post-Migration Verification
- [ ] All 195+ URLs return 200 OK
- [ ] No broken links
- [ ] All backlinks resolve correctly
- [ ] Google Search Console shows no crawl errors
- [ ] Google Analytics tracking works
- [ ] Contact forms submit successfully
- [ ] Performance meets or exceeds WordPress site

---

## 📋 WEBSITE STRUCTURE ANALYSIS

---

## Table of Contents
1. [Main Pages](#main-pages)
2. [Moving Services](#moving-services)
3. [Junk Removal Services](#junk-removal-services)
4. [Cleanout Services](#cleanout-services)
5. [Demolition Services](#demolition-services)
6. [Heavy Item Removal](#heavy-item-removal)
7. [Appliance Removal](#appliance-removal)
8. [Furniture Removal](#furniture-removal)
9. [Bulk Material & Trash Removal](#bulk-material--trash-removal)
10. [Hazardous Waste Removal](#hazardous-waste-removal)
11. [Commercial Services](#commercial-services)
12. [Pricing & Booking](#pricing--booking)
13. [Blog](#blog)
14. [Other Pages](#other-pages)

---

## Main Pages

### Primary Navigation
```
├── Home
│   └── https://topshelfmovingandjunkremoval.com/
│
├── About Us
│   └── https://topshelfmovingandjunkremoval.com/about-us/
│
├── Services (Dropdown Menu)
│   ├── Moving Services
│   ├── Junk Removal Services
│   ├── Cleanouts
│   └── Demolition
│
├── Gallery
│   └── https://topshelfmovingandjunkremoval.com/gallery/
│
├── Blog
│   └── https://topshelfmovingandjunkremoval.com/blog/
│
├── Service Area
│   └── https://topshelfmovingandjunkremoval.com/service-area/
│
├── Contact Us
│   └── https://topshelfmovingandjunkremoval.com/contact-us/
│
└── Book Now (CTA Button)
    └── https://topshelfmovingandjunkremoval.com/book-now/

```

---

## Moving Services

### Main Moving Page
```
└── Moving Services
    └── https://topshelfmovingandjunkremoval.com/moving-services/
        └── Title: "Residential and Commercial Moving Services"
        └── Description: Professional, stress-free moving services
```

### Moving Related
- **Moving Appointment**: `/moving-appointment/`
- **Moving Pricing**: Available (linked from multiple pages)

### Blog Posts - Moving
- How Much Does a Moving Company Cost? Factors That Influence Pricing
- DIY Moving Options: Budget-Friendly Ways to Move
- Choosing the Best Local Movers Near You
- Tips for a Smooth Moving Day Experience
- Long Distance Moving Companies: What to Expect
- The Advantages of Full-Service Movers

---

## Junk Removal Services

### Main Junk Removal Page
```
└── Junk Removal Services
    └── https://topshelfmovingandjunkremoval.com/junk-removal-services/
        └── Title: "Top Shelf Junk Removal | Fast & Affordable Junk Hauling"
        └── All Junk Services Section: #all-junk-services
```

---

## Cleanout Services

### Main Cleanouts Page
```
└── Cleanouts
    └── https://topshelfmovingandjunkremoval.com/junk-removal-services/cleanouts/
        └── Title: "Top Shelf Cleanout Services | Fast & Reliable Property Cleanout"
```

### Cleanout Subcategories
```
├── Estate Cleanout
│   └── https://topshelfmovingandjunkremoval.com/junk-removal-services/cleanouts/estate-cleanout/
│
├── Garage Cleanout
│   └── https://topshelfmovingandjunkremoval.com/junk-removal-services/cleanouts/garage-cleanout/
│
├── Office Cleanout
│   └── https://topshelfmovingandjunkremoval.com/junk-removal-services/cleanouts/office-cleanout/
│
├── Property Cleanout
│   └── https://topshelfmovingandjunkremoval.com/junk-removal-services/cleanouts/property-cleanout/
│
├── Yard Cleanout
│   └── https://topshelfmovingandjunkremoval.com/junk-removal-services/cleanouts/yard-cleanout/
│
├── Shop Cleanout
│   └── https://topshelfmovingandjunkremoval.com/junk-removal-services/cleanouts/shop-cleanout/
│
├── Hoarding Cleanup
│   └── https://topshelfmovingandjunkremoval.com/junk-removal-services/cleanouts/hoarding-cleanup/
│
├── Eviction Cleanout
│   └── https://topshelfmovingandjunkremoval.com/junk-removal-services/cleanouts/eviction-cleanout/
│
├── Garage Sale Cleanup
│   └── https://topshelfmovingandjunkremoval.com/junk-removal-services/cleanouts/garage-sale-cleanup/
│
└── Manure Removal
    └── https://topshelfmovingandjunkremoval.com/junk-removal-services/cleanouts/manure-removal/
```

### Cleanout Blog Posts
- Professional Estate Cleanout Services: When and Why to Hire Experts
- How Much Does Estate Cleanout Cost? Factors That Influence Pricing
- How Much Does Garage Cleanout Cost? Factors That Influence Pricing
- Eco-Friendly Garage Cleanout Practices
- How Much Does Hoarding Cleanout Cost? Factors That Influence Pricing
- Benefits of Hiring a Professional Hoarding Cleanout Service

---

## Demolition Services

### Main Demolition Page
```
└── Demolition
    └── https://topshelfmovingandjunkremoval.com/junk-removal-services/demolition/
        └── Title: "Top Shelf Demolition Services | Safe & Efficient Structure Removal"
```

### Demolition Subcategories
```
├── Mobile Home Demolition
│   └── https://topshelfmovingandjunkremoval.com/junk-removal-services/demolition/mobile-home-demolition/
│
├── Shed Removal and Demolition
│   └── https://topshelfmovingandjunkremoval.com/junk-removal-services/demolition/shed-removal-and-demolition/
│
└── Concrete Removal and Demolition
    └── https://topshelfmovingandjunkremoval.com/junk-removal-services/demolition/concrete-removal-and-demolition/
```

### Demolition Blog Posts
- Understanding Different Methods of Mobile Home Demolition
- DIY Mobile Home Demolition: A Step-by-Step Guide
- Environmental Considerations in Mobile Home Demolition
- Camper Demolition: When Repairs Are No Longer Worth It
- Hiring Professional Concrete Removal Services: Pros and Cons
- DIY Options for Post Construction Debris Removal
- Demolition Alternatives: Deconstruction, Donation, and Repurposing
- Environmental Considerations in Shed Removal

---

## Heavy Item Removal

### Main Heavy Items Page
```
└── Heavy Item Removal
    └── https://topshelfmovingandjunkremoval.com/junk-removal-services/heavy-items/
        └── Title: "Top Shelf Heavy Item Removal Services | Fast & Affordable Hauling"
```

### Heavy Item Subcategories
```
├── Piano Removal
│   └── https://topshelfmovingandjunkremoval.com/junk-removal-services/heavy-items/pianos/
│       └── Title: "Safe & Professional Piano Disposal"
│
└── Spa and Hot Tub Removal
    └── https://topshelfmovingandjunkremoval.com/junk-removal-services/heavy-items/spa-and-hot-tub-removal/
```

### Heavy Item Blog Posts
- How Much Does It Cost to Remove a Piano or Organ?

---

## Appliance Removal

### Main Appliance Removal Page
```
└── Appliance Removal
    └── https://topshelfmovingandjunkremoval.com/junk-removal-services/appliance-removal/
        └── Title: "Appliance Removal | Top Shelf Moving & Junk Removal"
```

### Appliance Subcategories
```
└── Oven Removal
    └── https://topshelfmovingandjunkremoval.com/junk-removal-services/appliance-removal/oven-removal/
```

### Appliance Blog Posts
- Preparing for Appliance Removal: Tips for a Smooth Process
- Choosing the Right Service for Appliance Removal
- Free Appliance Removal Services: How They Work and When to Use Them (2 versions)

---

## Furniture Removal

### Main Furniture Removal Page
```
└── Furniture Removal
    └── https://topshelfmovingandjunkremoval.com/junk-removal-services/furniture-removal/
        └── Title: "Furniture Removal Services | Fast and Affordable"
```

### Furniture Blog Posts
- How Much Does Furniture Removal Cost? Factors That Influence Pricing
- DIY Furniture Removal: How to Get Rid of Furniture on Your Own
- The Benefits of Hiring Professional Furniture Removal Services
- Choosing the Right Furniture Removal Service
- Understanding the Furniture Removal Process from Start to Finish
- Eco-Friendly and Sustainable Furniture Removal Options

---

## Bulk Material & Trash Removal

### Bulk Trash Removal
```
└── Bulk Trash Removal
    └── https://topshelfmovingandjunkremoval.com/junk-removal-services/bulk-trash-removal/
        └── Title: "Bulk Trash Removal Services"
```

### Bulk Trash Subcategories
```
└── Event Cleanup
    └── https://topshelfmovingandjunkremoval.com/junk-removal-services/bulk-trash-removal/event-cleanup/
```

### Bulk Material Removal
```
└── Bulk Material Removal
    └── https://topshelfmovingandjunkremoval.com/junk-removal-services/bulk-material-removal/
        └── Title: "Bulk Material Removal Services"
```

### Bulk Material Subcategories
```
├── Sod Removal
│   └── https://topshelfmovingandjunkremoval.com/junk-removal-services/bulk-material-removal/sod-removal/
│
└── Gravel Removal
    └── https://topshelfmovingandjunkremoval.com/junk-removal-services/bulk-material-removal/gravel-removal/
```

---

## Hazardous Waste Removal

### Main Hazardous Waste Page
```
└── Hazardous Waste Removal
    └── https://topshelfmovingandjunkremoval.com/junk-removal-services/hazardous-waste-removal/
        └── Title: "Hazardous Waste Removal | Fast, Safe Disposal Services"
```

### Hazardous Waste Subcategories
```
└── Tire Removal
    └── https://topshelfmovingandjunkremoval.com/junk-removal-services/hazardous-waste-removal/tire-removal/
```

### Hazardous Waste Blog Posts
- Careers in Hazardous Materials Removal and Management
- Environmental Impact of Tire Disposal and Recycling Solutions
- Safety Tips and Best Practices for Handling and Disposing of Tires
- Tools and Equipment Needed for Tire Hauling and Disposal
- Professional Tire Removal and Disposal Services
- DIY Tire Removal Options: How to Remove and Dispose of Tires Yourself
- How Much Does Tire Removal Cost? Factors That Influence Pricing

---

## Commercial Services

### Main Commercial Page
```
└── Commercial Junk Removal
    └── https://topshelfmovingandjunkremoval.com/junk-removal-services/commercial-junk-removal/
        └── Title: "Commercial Junk Removal | Office & Business Cleanouts"
```

### Construction Cleanup
```
└── Construction Cleanup Service
    └── https://topshelfmovingandjunkremoval.com/junk-removal-services/construction-cleanup-service/
        └── Title: "Construction Cleanup Services | Top Shelf Junk Removal"
```

### Commercial Blog Posts
- How Much Does Construction Junk Removal Cost? Factors That Influence Pricing

---

## Pricing & Booking

### Pricing Pages
```
├── Moving Pricing
│   └── Referenced in navigation (exact URL needs confirmation)
│
├── Junk Removal Pricing
│   └── https://topshelfmovingandjunkremoval.com/junk-removal-pricing/
│   └── Also: https://www.topshelfstorage.com/pricing/junk-removal-pricing/
│
└── Book Now
    └── https://topshelfmovingandjunkremoval.com/book-now/
```

### FAQ Pages
```
├── Junk Removal FAQ
│   └── https://topshelfmovingandjunkremoval.com/faq/junk-removal/
│
└── Moving FAQ
    └── https://topshelfmovingandjunkremoval.com/faq/moving/
```

---

## Blog

### Main Blog Page
```
└── Blog
    └── https://topshelfmovingandjunkremoval.com/blog/
        └── Title: "Blog - Top Shelf Moving And Junk Removal"
        └── 17 pages of blog posts (pagination)
```

### Blog Categories
```
├── All
├── Cleanout Services
├── Heavy Item
├── Junk Removal
└── Moving
```

### Blog Category Pages
```
└── Junk Removal Category
    └── https://topshelfmovingandjunkremoval.com/blog/category/junk-removal/
```

### General Blog Posts
- Comparing Junk Removal Companies: What to Look For
- How Much Does Junk Removal Cost? Factors That Influence Pricing

---

## Other Pages

### Informational
```
├── Service Area
│   └── https://topshelfmovingandjunkremoval.com/service-area/
│       └── Covers: Metro Boise, Southwest Idaho
│
├── Gallery
│   └── https://topshelfmovingandjunkremoval.com/gallery/
│       └── Categories: All, Moving, Junk Removal
│
└── Contact Us
    └── https://topshelfmovingandjunkremoval.com/contact-us/
        └── Address: 1755 N Westgate Dr, Suite 110, Boise, ID 83704
        └── Phone: (208) 897-4981
        └── Email: info@topshelfpros.com
```

---

## URL Patterns & Structure

### Service URL Structure
```
Main Service:
/[service-type]/

Subcategories:
/[service-type]/[subcategory]/

Specific Services:
/[service-type]/[subcategory]/[specific-service]/

Examples:
- /junk-removal-services/
- /junk-removal-services/cleanouts/
- /junk-removal-services/cleanouts/estate-cleanout/
- /junk-removal-services/demolition/mobile-home-demolition/
```

### Blog URL Structure
```
Main Blog:
/blog/

Blog Posts:
/blog/[post-slug]/

Blog Categories:
/blog/category/[category-name]/

Pagination:
/blog/#page=[number]
```

---

## Service Hierarchy

```
Top Shelf Moving and Junk Removal
│
├── Moving Services
│   ├── Residential Moves
│   └── Commercial Moves
│
├── Junk Removal Services
│   ├── General Junk Removal
│   ├── Furniture Removal
│   ├── Appliance Removal
│   │   └── Oven Removal
│   ├── Heavy Items
│   │   ├── Piano Removal
│   │   └── Spa/Hot Tub Removal
│   ├── Bulk Trash Removal
│   │   └── Event Cleanup
│   ├── Bulk Material Removal
│   │   ├── Sod Removal
│   │   └── Gravel Removal
│   ├── Hazardous Waste Removal
│   │   └── Tire Removal
│   ├── Commercial Junk Removal
│   └── Construction Cleanup
│
├── Cleanouts
│   ├── Estate Cleanout
│   ├── Garage Cleanout
│   ├── Office Cleanout
│   ├── Property Cleanout
│   ├── Yard Cleanout
│   ├── Shop Cleanout
│   ├── Hoarding Cleanup
│   ├── Eviction Cleanout
│   ├── Garage Sale Cleanup
│   └── Manure Removal
│
└── Demolition
    ├── Mobile Home Demolition
    ├── Shed Removal & Demolition
    └── Concrete Removal & Demolition
```

---

## External Links & Integrations

### Social Media
- Facebook: https://www.facebook.com/TopShelfPros/
- Instagram: https://www.instagram.com/topshelfmovingandjunkremoval/
- YouTube: https://www.youtube.com/@topshelfmovingandjunkremoval

### Related Sites
- Top Shelf Storage: https://www.topshelfstorage.com/
  - Containers: /pricing/containers/
  - Dumpster Rental: /pricing/dumpster-rental/
  - Contact: /contact-us/

### Third-Party Integrations
- Google Maps: https://maps.app.goo.gl/MqDJh33BKg2duFtUA
- Google Reviews: Multiple review widgets on homepage

---

## Technical Notes

### Platform
- **CMS**: WordPress 6.8.3
- **Page Builder**: Elementor 3.32.4
- **Features**: e_font_icon_svg, additional_custom_breakpoints

### SEO Structure
- Open Graph tags implemented
- Twitter Card tags implemented
- Proper meta descriptions on all pages
- Schema markup for local business
- Article structured data on blog posts

### Performance
- Favicon: erasebg-transformed-1-150x150.webp
- Images optimized with WebP format
- Responsive design (mobile-first)

---

## Content Statistics

### Estimated Page Count
- **Main Pages**: 8
- **Service Pages**: 35+
- **Blog Posts**: 150+ (17 pages × ~9 posts per page)
- **Total Discoverable Pages**: 195+

### Service Categories
- **Moving**: 1 main page
- **Junk Removal**: 8 main categories
- **Cleanouts**: 10 types
- **Demolition**: 3 types
- **Heavy Items**: 2 types
- **Appliance**: 2 pages
- **Furniture**: 1 page
- **Bulk Material**: 3 pages
- **Hazardous Waste**: 2 pages
- **Commercial**: 2 pages

---

## Notes for Development

### Current Website (WordPress)
- Fully built WordPress site with Elementor
- Comprehensive service structure
- Active blog with 150+ posts
- Strong SEO implementation
- Local business focus (Boise/SW Idaho)

### New Website (Next.js) Considerations
1. **Content Migration**: Need to migrate 195+ pages
2. **Blog Migration**: 150+ blog posts to convert
3. **URL Structure**: Maintain same URL patterns for SEO
4. **Service Hierarchy**: Replicate 4-level deep service structure
5. **Dynamic Routes**: Implement for services and blog
6. **Image Migration**: All images need to be optimized and migrated
7. **Social Proof**: Google Reviews integration
8. **Contact Forms**: Multiple CTAs throughout site
9. **Local SEO**: Maintain location-specific content

---

**Document Created**: October 5, 2025
**Last Updated**: October 5, 2025
**Created By**: Claude Code Analysis
