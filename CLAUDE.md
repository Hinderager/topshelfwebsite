# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
**Top Shelf Moving and Junk Removal Website** - A high-performance Next.js 14 website built using the 5 Day Sprint Framework. Focus areas: load speed optimization, SEO best practices, mobile responsiveness, and modern UI/UX design.

## Technology Stack
- **Framework**: Next.js 14.1.0 with App Router
- **Language**: TypeScript 5.3.3 (strict mode enabled)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Database**: Supabase (PostgreSQL)
- **UI Components**: Radix UI primitives via shadcn/ui
- **Icons**: Lucide React
- **Node Version**: >=18.17.0

## Development Commands

### Essential Commands
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run type-check   # TypeScript type checking without emitting files
```

### Code Quality
```bash
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format code with Prettier
```

## Architecture

### Directory Structure
```
src/
├── app/              # Next.js App Router pages and layouts
│   ├── layout.tsx    # Root layout with metadata
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles and Tailwind directives
├── components/
│   └── ui/           # shadcn/ui components (button, card, badge, etc.)
├── lib/
│   └── utils.ts      # Utility functions (cn() for class merging)
└── pages/
    ├── services/
    └── cities/

public/
├── assets/           # Static assets (logos, etc.)
│   └── Logos/
├── images/           # Organized by service type
│   ├── best-of-all/  # Hero and top-tier images
│   ├── junk-removal/ # Junk removal service images
│   │   ├── appliance-removal/
│   │   ├── furniture-removal/
│   │   ├── exercise-equipment/
│   │   └── ... (16 subcategories)
│   ├── demolition/   # Demolition service images
│   └── moving/       # Moving service images
│       ├── residential-moves/
│       └── commercial-moves/
└── logos/            # Brand logos
```


### Import Aliases
- `@/*` maps to `src/*` (configured in tsconfig.json)
- Example: `import { Button } from '@/components/ui/button'`

### Component System
This project uses **shadcn/ui** - a collection of re-usable components built with Radix UI and Tailwind CSS. Components are copied into the project (not npm packages) and can be customized.

**Configuration**: `components.json` defines shadcn/ui settings:
- Style: default
- Base color: slate
- CSS variables: enabled
- Component path: `@/components`
- Utils path: `@/lib/utils`

**Adding new shadcn/ui components**:
```bash
npx shadcn-ui@latest add [component-name]
```

### Styling Approach
- **Tailwind CSS** for utility-first styling
- **CSS Variables** for theming (defined in `src/app/globals.css`)
- **cn() utility** (`src/lib/utils.ts`) for conditional class merging
- Mobile-first responsive design

### Supabase Integration
Supabase credentials are stored in `.env.local` (not committed to git):
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

Image domains for Next.js are pre-configured in `next.config.js` to allow Supabase storage URLs.

## TypeScript Configuration
- **Strict mode** enabled
- **Path aliases**: `@/*` → `src/*`
- **Module resolution**: bundler (Next.js 14 requirement)
- **No emit**: true (Next.js handles compilation)

## Performance Considerations
This project prioritizes load speed:
- Use Next.js Image component for optimized images
- Leverage App Router for automatic code splitting
- Follow React Server Components best practices (default in App Router)
- Monitor bundle size during builds

## SEO Requirements
The project emphasizes SEO optimization:
- Metadata is configured in layout files (see `src/app/layout.tsx`)
- Use Next.js metadata API for page-specific SEO
- Ensure semantic HTML structure
- Optimize for local search (moving and junk removal services)
- my repository for this project is https://github.com/Hinderager/topshelfwebsite.git