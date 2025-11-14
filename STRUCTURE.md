# Project Structure Overview

## 📁 Directory Structure

```
stitch2/
│
├── 📂 app/                          # Next.js App Router directory
│   ├── 📄 layout.tsx               # Root layout component
│   ├── 📄 page.tsx                 # Landing/loading page (/)
│   ├── 📄 globals.css              # Global styles & Tailwind config
│   │
│   ├── 📂 home/                    # Home page (/home)
│   │   └── page.tsx
│   │
│   ├── 📂 login/                   # Login page (/login)
│   │   └── page.tsx
│   │
│   ├── 📂 find/                    # Property search (/find)
│   │   └── page.tsx
│   │
│   ├── 📂 professionals/           # Browse professionals (/professionals)
│   │   └── page.tsx
│   │
│   ├── 📂 details/                 # Property details (/details)
│   │   └── page.tsx
│   │
│   ├── 📂 calendar/                # Schedule viewing (/calendar)
│   │   └── page.tsx
│   │
│   ├── 📂 profile/                 # User profile (/profile)
│   │   └── page.tsx
│   │
│   ├── 📂 dashboard/               # Professional dashboard (/dashboard)
│   │   └── page.tsx
│   │
│   ├── 📂 activity/                # Activity/notifications (/activity)
│   │   └── page.tsx
│   │
│   ├── 📂 appearance/              # Appearance settings (/appearance)
│   │   └── page.tsx
│   │
│   ├── 📂 saveditems/              # Saved items (/saveditems)
│   │   └── page.tsx
│   │
│   ├── 📂 terms/                   # Terms of service (/terms)
│   │   └── page.tsx
│   │
│   └── 📂 privacy/                 # Privacy policy (/privacy)
│       └── page.tsx
│
├── 📂 components/                  # Reusable React components
│   ├── 📂 layout/                  # Layout components
│   │   ├── 📄 Navbar.tsx          # Main navigation bar
│   │   ├── 📄 Sidebar.tsx         # Sidebar navigation
│   │   ├── 📄 Footer.tsx          # Site footer
│   │   └── 📄 index.ts            # Barrel export
│   │
│   └── 📂 ui/                      # UI components
│       └── 📄 index.ts             # Barrel export (ready for UI components)
│
├── 📂 lib/                         # Utility functions & helpers
│   └── 📄 utils.ts                 # Utility functions (cn, formatDate, etc.)
│
├── 📂 types/                       # TypeScript type definitions
│   └── 📄 index.ts                # Type definitions (User, Property, etc.)
│
├── 📂 hooks/                       # Custom React hooks
│   └── 📄 useDarkMode.ts          # Dark mode hook
│
├── 📂 public/                      # Static assets
│   ├── 📂 images/                  # Image assets
│   └── 📂 icons/                   # Icon assets
│
├── 📂 archive/                     # Archived HTML files (converted to Next.js)
│   └── *.html                      # Original HTML files
│
├── 📄 package.json                 # Dependencies & scripts
├── 📄 tsconfig.json                # TypeScript configuration
├── 📄 tailwind.config.ts           # Tailwind CSS configuration
├── 📄 next.config.ts               # Next.js configuration
├── 📄 postcss.config.mjs           # PostCSS configuration
├── 📄 .gitignore                   # Git ignore rules
├── 📄 README.md                    # Project documentation
└── 📄 STRUCTURE.md                 # This file
```

## 🎯 Key Features

### Components Organization
- **Layout Components**: Navbar, Sidebar, Footer (reusable across pages)
- **UI Components**: Ready for buttons, inputs, cards, etc.

### Utilities
- `cn()` - Merge Tailwind classes
- `formatDate()` - Date formatting
- `truncate()` - Text truncation
- `formatCurrency()` - Currency formatting

### Type Safety
- Centralized type definitions in `types/index.ts`
- TypeScript enabled throughout the project

### Custom Hooks
- `useDarkMode()` - Dark mode state management

## 📦 Dependencies

### Core
- Next.js 16.0.0
- React 19.2.0
- TypeScript 5.x

### Styling
- Tailwind CSS 4.1.17
- PostCSS
- Autoprefixer

### Utilities
- clsx - Class name utility
- tailwind-merge - Merge Tailwind classes

## 🚀 Usage Examples

### Using Layout Components
```tsx
import { Navbar, Sidebar, Footer } from "@/components/layout";

export default function Page() {
  return (
    <>
      <Navbar />
      <Sidebar menuItems={menuItems} />
      {/* Page content */}
      <Footer />
    </>
  );
}
```

### Using Utilities
```tsx
import { cn, formatDate, formatCurrency } from "@/lib/utils";

const className = cn("base-class", condition && "conditional-class");
const date = formatDate(new Date());
const price = formatCurrency(1000);
```

### Using Custom Hooks
```tsx
import { useDarkMode } from "@/hooks/useDarkMode";

export default function Component() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  // ...
}
```

## 📝 Notes

- All HTML files have been moved to `/archive` folder
- Components are organized by feature (layout, ui)
- Type definitions are centralized for easy maintenance
- Public assets are organized by type (images, icons)
- Ready for scaling with additional components and features

