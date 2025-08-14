# 🚀 Mini Website Builder

A modern, responsive website builder built with Next.js 15, TypeScript, and Tailwind CSS. Create beautiful websites with drag-and-drop sections, real-time preview, and export/import functionality.

![Website Builder](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Zustand](https://img.shields.io/badge/Zustand-5.0-orange?style=for-the-badge)

## ✨ Features

### 🎯 Core Functionality

- **📚 Section Library**: Click-to-add pre-made sections (Header, Hero, Content, CTA, Footer)
- **👀 Live Preview**: Real-time preview of your website as you build
- **📥📤 Import/Export**: Save and load your designs as JSON files
- **✏️ Editable Sections**: Customize text, images, colors, and properties
- **🔄 Drag & Drop**: Reorder sections with smooth animations
- **🗑️ Section Management**: Delete unwanted sections with confirmation

### 📱 Responsive Design

- **🖥️ Desktop Layout**: Traditional sidebar layout with section library and editor
- **📱 Mobile/Tablet**: Floating action buttons with slide-out panels
- **🎯 Touch-Friendly**: Optimized interactions for mobile devices
- **🔄 Adaptive UI**: Seamlessly adapts to all screen sizes

### ⚡ Performance & UX

- **🚀 SSR-Friendly**: Server-side rendering for better SEO and performance
- **🎭 Smooth Animations**: Subtle transitions and hover effects
- **⚡ Optimized Rendering**: React.memo and useCallback for minimal re-renders
- **🎨 Visual Feedback**: Selection rings, hover states, and drag indicators

### 🧪 Testing & Quality

- **✅ Jest Testing**: Comprehensive test coverage for all components
- **🔧 TypeScript**: Full type safety throughout the application
- **📏 ESLint**: Code quality and consistency
- **🎨 Prettier**: Automated code formatting

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Drag & Drop**: [@hello-pangea/dnd](https://github.com/hello-pangea/dnd)
- **Icons**: Custom SVG icons
- **Testing**: [Jest](https://jestjs.io/) + [Testing Library](https://testing-library.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MohAlkurdi/website-builder.git
   cd website-builder
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 How to Use

### 🎨 Building Your Website

1. **Add Sections**: Click on any section template in the library or use the mobile + button
2. **Customize Content**: Click on any section to edit its properties in the sidebar
3. **Reorder Sections**: Drag and drop sections to rearrange them
4. **Preview Mode**: Toggle preview mode to see how your site looks to visitors
5. **Save Your Work**: Export your design as JSON and import it later

### 🖥️ Desktop Experience

- **Left Sidebar**: Section library with available templates
- **Center Area**: Live preview of your website
- **Right Sidebar**: Section editor (appears when a section is selected)

### 📱 Mobile Experience

- **Full Screen Preview**: Maximum screen real estate for your content
- **Floating Action Button**: Add new sections
- **Edit Button**: Appears when a section is selected
- **Slide-out Panels**: Access section library and editor

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout (SSR)
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── builder/           # Main builder components
│   │   ├── BuilderLayout.tsx        # Server component wrapper
│   │   ├── ClientBuilderLayout.tsx  # Client-side logic
│   │   ├── Toolbar.tsx              # Top toolbar
│   │   ├── SectionLibrary.tsx       # Section templates
│   │   ├── PreviewArea.tsx          # Live preview
│   │   └── SectionEditor.tsx        # Property editor
│   ├── sections/          # Individual section types
│   │   ├── SectionRenderer.tsx      # Section router
│   │   ├── HeaderSection.tsx        # Header component
│   │   ├── HeroSection.tsx          # Hero component
│   │   ├── ContentSection.tsx       # Content component
│   │   ├── CTASection.tsx           # Call-to-action component
│   │   └── FooterSection.tsx        # Footer component
│   └── ui/                # Reusable UI components
│       └── Button.tsx     # Button component
├── store/                 # State management
│   └── builderStore.ts    # Zustand store
├── types/                 # TypeScript definitions
│   └── index.ts           # Type definitions
├── data/                  # Static data
│   └── sectionTemplates.ts # Section templates
├── lib/                   # Utilities
│   ├── utils.ts           # General utilities
│   └── generateId.ts      # ID generation
├── hooks/                 # Custom hooks
│   └── useInitializeStore.ts # Store initialization
└── __tests__/             # Test files
    ├── components/        # Component tests
    └── store/             # Store tests
```

## 🧪 Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode

## 🎨 Customization

### Adding New Section Types

1. **Create the section component** in `src/components/sections/`
2. **Add the section type** to `src/types/index.ts`
3. **Update the SectionRenderer** to handle the new type
4. **Add a template** to `src/data/sectionTemplates.ts`

### Styling Customization

The project uses Tailwind CSS for styling. Customize:

- **Colors**: Update the Tailwind config or use CSS custom properties
- **Animations**: Modify `src/app/globals.css` for custom animations
- **Responsive Breakpoints**: Adjust Tailwind breakpoints as needed
