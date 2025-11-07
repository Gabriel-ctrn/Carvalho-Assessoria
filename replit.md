# Consórcios Ademicon - Institutional Website

## Overview

This is an institutional website for Consórcios Ademicon, a Brazilian consortium advisory service. The application is designed to help customers understand consortium products (real estate, vehicles, services) and submit simulation requests. The site features a professional, trust-building design with a burgundy (#670f22) and white color scheme inspired by financial institutions like Nubank combined with traditional banking credibility.

The application is built as a full-stack web application with a React frontend and Express backend, featuring a simple contact form system for lead generation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**: React 18 with Wouter for client-side routing. The application uses a single-page architecture with the following routes:
- `/` - Home page with hero section and product overview
- `/produtos` - Detailed product listings (Imóveis, Veículos, Serviços)
- `/sobre` - About us page introducing the founders
- `/como-funciona` - How consortium works educational content
- `/faq` - Frequently asked questions
- `/contato` - Contact/simulation form

**UI Component System**: Shadcn/ui component library configured in "new-york" style with:
- Radix UI primitives for accessible components
- Tailwind CSS for styling with custom design tokens
- Custom color palette centered around primary burgundy (#670f22)
- Typography using Montserrat (headers) and Open Sans (body) from Google Fonts

**State Management**: 
- TanStack React Query (v5) for server state management
- React Hook Form with Zod validation for form handling
- No global client state management (props and hooks only)

**Design System**:
- Custom CSS variables for theming (light mode focused)
- Elevation system using opacity-based overlays (`--elevate-1`, `--elevate-2`)
- Consistent spacing using Tailwind's spacing scale
- Shadow and border styling for card-based layouts

### Backend Architecture

**Server Framework**: Express.js with TypeScript running in ESM mode

**API Structure**: RESTful API with two endpoints:
- `POST /api/contact` - Creates new contact submission with validation
- `GET /api/contacts` - Retrieves all contact submissions

**Data Validation**: Zod schemas for runtime type validation integrated with Drizzle ORM

**Storage Layer**: 
- Currently using in-memory storage (`MemStorage` class) with Map-based data structure
- Designed with interface (`IStorage`) for easy migration to persistent database
- Schema defined for PostgreSQL using Drizzle ORM (ready for database integration)

**Request Handling**:
- JSON body parsing with raw body preservation for webhooks
- Request logging middleware for API routes
- Error handling with appropriate HTTP status codes

### Database Schema (Prepared but not connected)

**ORM**: Drizzle ORM configured for PostgreSQL with Neon serverless driver

**Tables**:
- `contacts` table with fields:
  - `id` (UUID, auto-generated)
  - `name` (text, required)
  - `whatsapp` (text, required)
  - `email` (text, required)
  - `objective` (text, required - consortium type)
  - `creditValue` (text, required - desired credit amount)
  - `createdAt` (timestamp, auto-generated)

**Note**: Database connection is configured but the application currently uses in-memory storage. The schema is ready for migration when `DATABASE_URL` environment variable is provided.

### Build & Development Setup

**Development Mode**: Vite dev server with HMR, proxied through Express backend
- React Fast Refresh enabled
- Source maps for debugging
- Replit-specific plugins for error overlays and development tools

**Production Build**:
- Vite builds frontend to `dist/public`
- ESBuild bundles backend to `dist/index.js`
- Serves static files from Express in production

**Module System**: Full ESM across frontend and backend with path aliases:
- `@/*` - Frontend source files
- `@shared/*` - Shared types and schemas
- `@assets/*` - Static assets

## External Dependencies

### Core Framework Dependencies
- **React 18** - Frontend UI framework
- **Express.js** - Backend web server
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety across the stack

### Database & ORM (Configured, not yet connected)
- **Drizzle ORM** (v0.39.1) - Type-safe database toolkit
- **@neondatabase/serverless** (v0.10.4) - Serverless Postgres driver
- **drizzle-kit** - Database migrations and schema management

### UI Component Libraries
- **Shadcn/ui** - Component library built on Radix UI
- **Radix UI** - Accessible component primitives (20+ packages)
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

### Form & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Integration between React Hook Form and Zod
- **drizzle-zod** - Generate Zod schemas from Drizzle tables

### Data Fetching
- **TanStack React Query** (v5.60.5) - Server state management and caching

### Routing
- **Wouter** - Lightweight client-side routing (alternative to React Router)

### Utilities
- **date-fns** - Date manipulation
- **clsx** & **tailwind-merge** - Conditional CSS class management
- **class-variance-authority** - Component variant management

### Google Fonts
- Montserrat (headers, CTAs)
- Open Sans (body text)
- DM Sans, Fira Code, Geist Mono (configured but may not be actively used)

### Session Management (Configured, not actively used)
- **connect-pg-simple** - PostgreSQL session store for Express

### Development Tools
- **@replit/vite-plugin-runtime-error-modal** - Error overlay
- **@replit/vite-plugin-cartographer** - Development tools
- **@replit/vite-plugin-dev-banner** - Development banner