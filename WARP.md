# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This repository contains "Jess Spicy Stuff" - an e-commerce website for spicy food products (primarily jams and sauces). The project has both a legacy static HTML version and a modern React TypeScript implementation.

## Development Commands

### React TypeScript Application (ts-shop/)

Navigate to the `ts-shop/` directory for React development:

```powershell
cd ts-shop
```

**Development server:**
```powershell
npm run dev
```
- Starts Vite development server
- Typically runs on http://localhost:5173

**Build for production:**
```powershell
npm run build
```
- Compiles TypeScript and builds optimized production assets
- Output goes to `dist/` directory

**Preview production build:**
```powershell
npm run preview
```
- Serves the built production files locally on port 5173

**Install dependencies:**
```powershell
npm install
```

### Static HTML Version

The root directory contains static HTML files that can be served directly:
- `index.html` - Main homepage
- `shop.html` - Product catalog
- `cart.html` - Shopping cart
- `about.html` - About page

## Architecture Overview

### Dual Implementation Structure

The project maintains two parallel implementations:

1. **Legacy Static Site** (root directory)
   - Traditional HTML/CSS/JavaScript
   - Bootstrap-based responsive design
   - Static product showcase
   - Basic cart functionality via JavaScript

2. **Modern React Application** (`ts-shop/` directory)
   - React 18 with TypeScript
   - Vite for fast development and building
   - React Router for client-side routing
   - Context API for state management

### React Application Architecture

**Key Directories:**
- `src/components/` - Reusable UI components (Header, Footer, ProductCard)
- `src/pages/` - Route-specific page components (Home, Shop, Cart, About)
- `src/context/` - React Context providers for global state
- `src/data/` - Static data and product definitions
- `src/types.ts` - TypeScript type definitions

**State Management:**
- Uses React Context API via `CartContext` 
- Cart state persisted to localStorage with key `jss_cart_v1`
- Reducer pattern for cart operations (ADD, REMOVE, SET_QTY, CLEAR)

**Routing:**
- React Router DOM for navigation
- Routes: `/` (Home), `/shop` (Shop), `/cart` (Cart), `/about` (About)

**Data Layer:**
- Products defined in `src/data/products.ts`
- Static product catalog with spicy jams and sauces
- Images referenced from parent directory (`../images/`)

### Asset Organization

**Shared Assets (root directory):**
- `images/` - Product photos, banners, icons
- `css/` - Stylesheets (Bootstrap, custom styles)
- `js/` - JavaScript files and libraries

**Vite Configuration:**
- Configured to allow file system access to parent directory
- Enables React app to reference shared assets in `../images/`, `../css/`

### Product Data Structure

Products follow this TypeScript interface:
```typescript
type Product = {
  id: string
  name: string
  price: number
  image: string
  description?: string
}
```

Current product lineup focuses on spicy jams:
- Sizzlin Strawberry
- Raspberry One  
- Blackberry One
- Not So Raging variations

### Development Workflow

1. **For React development:** Work in `ts-shop/` directory
2. **For static site updates:** Edit HTML files in root directory
3. **Shared assets:** Update `images/`, `css/`, `js/` directories as needed
4. **Adding products:** Update `src/data/products.ts` and add corresponding images

### Browser Compatibility

- React app targets ES2020+ browsers
- Uses modern JavaScript features (modules, async/await)
- Bootstrap 5 for responsive design compatibility

## File Structure Context

The unusual dual structure exists because:
- Static HTML version provides immediate functionality and SEO benefits
- React version offers modern development experience and enhanced interactivity  
- Shared asset directories reduce duplication
- Vite configuration bridges the gap between implementations