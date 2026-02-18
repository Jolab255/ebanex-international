

# Ebanex International

A modern React + TypeScript single-page application for Ebanex International, delivering professional development, cybersecurity training, and institutional advisory services.

## Tech Stack

- **Frontend Framework:** React 19.2.4 with TypeScript 5.8.2
- **Build Tool:** Vite 6.2.0
- **Routing:** React Router DOM 7.13.0 (HashRouter)
- **Styling:** Tailwind CSS 4.1.18
- **Animations:** Framer Motion 12.34.0, Lenis (smooth scroll)
- **3D Graphics:** Three.js, @react-three/fiber, cobe (globe)
- **Icons:** Lucide React
- **Testing:** Vitest + React Testing Library
- **Linting/Formatting:** ESLint + Prettier

## Project Structure

```
src/
├── components/          # Shared UI components (Navbar, Footer, etc.)
│   ├── layout/         # Layout components (ScrollToTop, Footer)
│   └── ui/              # Reusable UI primitives (Globe, carousel, etc.)
├── features/            # Feature-based organization
│   └── home/            # Home page feature components
│       ├── components/  # Feature-specific sub-components
│       └── *.tsx        # Section components (Hero, Services, etc.)
├── lib/                 # Utilities and shared logic
│   ├── api.ts          # Central API/service layer
│   └── utils.ts        # Helper functions
├── pages/               # Page-level components
├── types/               # TypeScript type definitions
└── constants.tsx        # Static data and constants
```

## Getting Started

### Prerequisites

- Node.js 22+ (recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ebanex-international
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm test` - Run test suite (Vitest)
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting without modifying files

## Environment Variables

**Important:** This is a frontend-only application. Any API keys or secrets must be handled by a backend/proxy service, not exposed in the client bundle.

If you need to add environment variables for public configuration (e.g., feature flags, public API endpoints), create a `.env.local` file:

```env
# Example: Public configuration only
VITE_API_BASE_URL=https://api.example.com
```

**Never commit secrets or private API keys to this repository.** All sensitive operations should be routed through a backend service.

## Architecture

### Code Organization

- **Feature-based structure:** Components are organized by feature (e.g., `features/home/`) rather than by type
- **Centralized API layer:** All network calls go through `src/lib/api.ts` for easy backend integration
- **Type safety:** Shared types are defined in `src/types/` to ensure consistency
- **Error boundaries:** Routes are wrapped with error boundaries to prevent full app crashes

### Performance Optimizations

- **Route-based code splitting:** Pages are lazy-loaded using `React.lazy()` and `Suspense`
- **Image lazy loading:** Non-critical images use `loading="lazy"` attribute
- **Animation cleanup:** Animation frames and listeners are properly cleaned up in `useEffect` hooks

### Testing

Tests are located alongside components using the `*.test.tsx` naming convention. The test suite uses:

- **Vitest** for test runner
- **React Testing Library** for component testing
- **jsdom** for DOM simulation

Run tests with `npm test` or `npm test -- --watch` for watch mode.

## Contributing

### Code Standards

- **TypeScript:** Use proper types; avoid `any` without justification
- **Formatting:** Code is automatically formatted with Prettier
- **Linting:** ESLint rules are enforced; fix lint errors before committing
- **Testing:** Add tests for new features and components

### Workflow

1. Create a feature branch from `main`
2. Make your changes
3. Run `npm run lint` and `npm test` to ensure everything passes
4. Commit with clear, descriptive messages
5. Open a pull request

### Pull Request Checklist

- [ ] Code passes linting (`npm run lint`)
- [ ] Tests pass (`npm test`)
- [ ] Build succeeds (`npm run build`)
- [ ] No TypeScript errors
- [ ] Code follows project conventions

## Deployment

The application builds to static files in the `dist/` directory. Deploy the contents of `dist/` to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

```bash
npm run build
# Deploy the dist/ directory
```

## License

[Add your license information here]
