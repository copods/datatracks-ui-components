# DataTracks UI Components

A standardized React component library for internal web applications. Built with TypeScript, Vite, and [shadcn/ui](https://ui.shadcn.com/), this library provides production-ready, type-safe, and consistent UI components to accelerate development and ensure design consistency across projects.

> **Note:** Many foundational components and styles are based on [shadcn/ui](https://ui.shadcn.com/), ensuring modern design, accessibility, and easy extensibility.

## Features

- **Enterprise Standards:** Components follow established design patterns and coding standards for consistency across projects.
- **shadcn/ui Foundation:** Built on top of shadcn/ui, providing accessible, customizable, and well-tested primitives for rapid development.
- **Type Safety:** Full TypeScript implementation with comprehensive type definitions for reliable development workflow.
- **Production Ready:** Optimized components with minimal bundle impact and efficient rendering for production applications.
- **Dark/Light Theme Support:** Complete theme system with automatic system preference detection and manual theme switching.

## Quick Start

### Access Component Library

1. **Launch Storybook**
   ```bash
   npm run storybook
   ```
   Access the component documentation and interactive examples.
2. **Review Components**
   Navigate through available components and their usage patterns.
3. **Configure Properties**
   Use the controls panel in Storybook to test different component configurations.

### Theme System

The application includes a comprehensive theme system with:

- **Automatic System Detection:** Automatically detects and applies the user's system theme preference
- **Manual Theme Switching:** Users can manually switch between light, dark, and system themes
- **Persistent Storage:** Theme preference is saved in localStorage and persists across sessions
- **Smooth Transitions:** All theme changes include smooth transitions for a polished user experience

To switch themes, use the theme toggle button in the header (sun/moon icon).

## Documentation

- Access full documentation and implementation examples via Storybook.
- For more details, see the [Component Docs] and [Storybook] links in the landing page.

---

_This project uses React, TypeScript, Vite, and shadcn/ui. For linting and code style, see the ESLint configuration in the repository._
