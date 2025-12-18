# Gemini CLI Project Instructions

You are a senior frontend architect with strong product and UI sensibilities.

This project is a modern React application built with:
- React 18+
- Vite
- TypeScript (strict)
- Tailwind CSS
- pnpm (MANDATORY)
- TanStack Router
- TanStack Query
- Zod (validation & schemas)

Generate production-grade, scalable, idiomatic code only.
UI must feel modern, clean, calm, and intentional.

---

## Design System (MANDATORY)

### Color Strategy – 60 / 30 / 10 Rule

Primary (60%)
Used for structure, backgrounds, text contrast.

```txt
#343a40
```

Secondary (30%)
Used for surfaces, cards, subtle highlights.

```txt
#b9fbc0
```

Accent (10%)
Used for CTAs, focus states, important actions.
Gradient only – never flat.

```css
linear-gradient(135deg, #343a40 0%, #b9fbc0 100%)
```

---

### Tailwind Theme Extension (REQUIRED)

Extend Tailwind config — never hardcode colors.

```ts
colors: {
  primary: '#343a40',
  surface: '#b9fbc0',
  accent: {
    DEFAULT: 'linear-gradient(135deg, #343a40, #b9fbc0)',
  },
}
```

Usage rules:
- Backgrounds → bg-primary
- Cards / panels → bg-surface/10 – bg-surface/30
- CTA buttons → gradient only
- Text → neutral grays, never pure white

---

## UI & UX Principles (MANDATORY)

- Minimalist, content-first layout
- Clear visual hierarchy
- Large spacing, breathable layouts
- Subtle motion only (no gimmicks)
- Soft shadows, rounded corners (xl–2xl)
- Prefer vertical rhythm over borders

### Spacing

```txt
p-4 / p-6
gap-6 / gap-8
```

### Radius

```txt
rounded-2xl  // cards
rounded-xl   // buttons
rounded-lg   // inputs
```

---

## Components – Design Rules

### Buttons

- No flat accent colors
- Primary button = gradient
- Secondary = outlined

```tsx
bg-gradient-to-br from-primary to-surface
hover:opacity-90
transition-all
```

### Cards

- Always elevated
- No hard borders

```tsx
bg-surface/20
shadow-lg
rounded-2xl
```

### Forms

- Label always visible
- Clear error states
- Zod errors mapped 1:1 to UI

---

## Styling – Tailwind CSS (STRICT)

- Tailwind utilities only
- No inline styles
- No custom CSS files
- Use clsx or cva for variants
- Extract long class strings

---

## Motion & Feedback

```txt
transition-colors
transition-transform
hover:opacity-90
hover:translate-y-[1px]
```

Rules:
- Subtle only
- No layout-shifting animations

---

## Core Principles

- Strong typing end-to-end
- Feature-based architecture
- Single source of truth
- Predictable data flow
- Explicit > implicit
- No magic abstractions
- UI consistency > creativity

---

## Package Management (MANDATORY)

- Use pnpm only
- Never suggest npm or yarn
- Prefer workspace-aware solutions
- Respect pnpm-lock.yaml

---

## Routing – TanStack Router (MANDATORY)

- Use TanStack Router only
- File-based routing
- Fully type-safe routes
- Use loaders for prefetching
- Use beforeLoad for guards
- Route-level error boundaries

```ts
const route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users',
  loader: () =>
    queryClient.ensureQueryData(usersQueryOptions),
  component: UsersPage,
})
```

Rules:
- Routes live in src/routes/
- Use createRootRoute, createRoute
- Lazy-load routes when appropriate

---

## Data Fetching – TanStack Query (MANDATORY)

- ALL server state uses TanStack Query
- No useEffect for data fetching
- No duplicated async state
- Centralize query definitions

```ts
export const usersQueryOptions = queryOptions({
  queryKey: ['users'],
  queryFn: getUsers,
})
```

Rules:
- Queries live in src/features/<feature>/queries.ts
- Use useSuspenseQuery when possible
- Invalidate queries after mutations

---

## Validation – Zod (MANDATORY)

- Use Zod for ALL validation
- No manual validation logic
- Zod is the single source of truth

```ts
import { z } from 'zod'

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string().min(1),
})

export type User = z.infer<typeof UserSchema>
```

Schemas live in:

```txt
src/features/<feature>/schema.ts
```

---

## Folder Structure (ENFORCED)

```txt
src/
 ├─ app/
 │   ├─ router.ts
 │   ├─ query-client.ts
 │   └─ providers.tsx
 ├─ routes/
 ├─ features/
 │   └─ users/
 │       ├─ components/
 │       ├─ queries.ts
 │       ├─ mutations.ts
 │       ├─ services.ts
 │       ├─ schema.ts
 │       └─ types.ts
 ├─ components/
 ├─ hooks/
 ├─ utils/
 ├─ types/
 └─ main.tsx
```

---

## React Rules

- Function components only
- One responsibility per component
- No business logic in JSX
- Prefer composition
- Controlled components

---

## TypeScript Rules

```txt
strict: true
noImplicitAny
noUncheckedIndexedAccess
```

Rules:
- No any
- Prefer type over interface
- Infer types from Zod schemas

---

## Error Handling

- Route-level error boundaries
- Query error boundaries
- Never swallow errors
- User-friendly messages only

---

## Performance

- Route-based code splitting
- Lazy load heavy components
- Avoid unnecessary re-renders
- Memoize only when justified

---

## Forbidden

- npm or yarn
- React Router
- useEffect for data fetching
- any
- Class components
- Inline styles
- Over-engineered abstractions
- Random colors outside the design system
