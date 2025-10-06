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

### Brand Colors
The project uses specific brand colors defined in `tailwind.config.js`:

**Primary Active Colors:**
- `light-blue`: #0b7fb6 - Used in hero "TOP SHELF" text
- `dark-blue`: #10477d - Used in header/menu bar and borders
- `brand-yellow` / `ub-yellow`: #FFC845 - Primary CTA button color

**Brand Guide Colors:**
- `polar-blue`: #4589A6
- `horizon-blue`: #55AAD2
- `evening-blue`: #1F5F8B
- `gunmetal`: #1F201D
- `burnished-bronze`: #4A4237
- `cta-rose`: #F66256
- `citrus`: #CCFF99
- `sandstone`: #B7A99A
- `fog`: #F4F5F6

**Usage:**
Use Tailwind utility classes like `bg-dark-blue`, `text-light-blue`, `border-brand-yellow` throughout the project.

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

## Troubleshooting

### Development Server Issues
If the Next.js development server gets stuck or crashes repeatedly due to corrupted cache:

#### Quick Fix Scripts
Two helper scripts are available in the project root:

1. **PowerShell Script** (`fix-dev-server.ps1`):
   ```powershell
   # Run from PowerShell:
   .\fix-dev-server.ps1
   # Or from npm:
   npm run dev:fix  # If configured in package.json
   ```
   - Provides detailed colored output
   - Kills Node processes
   - Clears all caches (.next, node_modules/.cache, npm cache)
   - Sets memory allocation to 4GB
   - Restarts development server

2. **Batch Script** (`fix-dev-server.bat`):
   ```batch
   # Double-click the file or run from Command Prompt:
   fix-dev-server.bat
   ```
   - Simple and fast execution
   - Same cleanup operations as PowerShell script
   - Works on any Windows system

#### Manual Fix Steps
If scripts don't work, manually execute:
```bash
# 1. Kill all Node processes
taskkill /F /IM node.exe /T

# 2. Remove cache folders
rmdir /s /q .next
rmdir /s /q node_modules\.cache

# 3. Clear npm cache
npm cache clean --force

# 4. Set memory allocation
set NODE_OPTIONS=--max-old-space-size=4096

# 5. Restart development server
npm run dev
```

#### Prevention Tips
- Always stop the server properly with `Ctrl+C` instead of closing the terminal
- Clear cache periodically if you notice slowdowns
- Consider adding these scripts to package.json:
  ```json
  "scripts": {
    "dev:clean": "rmdir /s /q .next 2>nul && npm run dev",
    "dev:fix": "powershell -ExecutionPolicy Bypass -File fix-dev-server.ps1"
  }
  ```

### Common Issues
- **Port 3000 already in use**: Kill Node processes using the fix scripts
- **Cache corruption**: Use `fix-dev-server.bat` or `fix-dev-server.ps1`
- **Memory issues**: Increase NODE_OPTIONS memory allocation (default: 4096MB)