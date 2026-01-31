# Project Instructions: Portfolio

This file contains local instructions and rules for the Antigravity agent when working on this Portfolio project. These rules are synced with the project's official coding guidelines and the latest directory structure.

## Technology Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **State Management**: React Hooks
- **Package Manager**: **yarn** (Mandatory: do not use npm)

## Directory Structure (Private/Internal Convention)
- Use the underscore prefix for internal directories:
  - `app/_components/` for UI components.
  - `app/_assets/` for data and images.
  - `app/_hooks/` for custom hooks.
  - `app/_lib/` for configuration and logic.
  - `app/_types/` for TypeScript definitions.
  - `app/_utils/` for utility functions.
  - `app/_variants/` for Framer Motion variants.

## General Coding Standards
- **Indentation**: Use **Tabs** (not spaces).
- **Function Style**: Always use **arrow functions** (`=>`).
- **Conditionals**: Always surround loop and conditional bodies with curly braces. Open curly braces go on the same line.
- **Components**: Use functional components and React Hooks exclusively.
- **Comments**: Use JSDoc style for functions, types, enums, and classes. Avoid unnecessary comments.

## Naming Conventions
- **Types/Enums**: PascalCase.
- **Functions/Methods/Variables**: camelCase.
- **Files (.tsx)**: PascalCase.
- **Files (.ts) and Folders**: snake-case (e.g., `utility-functions.ts`).
- **Boolean Variables**: Prefix with `is`, `has`, `should`, etc.

## TypeScript Rules
- **No `any`**: Never use the `any` type.
- **Definitions**: Always use `type` instead of `interface`.
- **Location**: Store all global/shared types in the `app/_types` folder.
- **Exports**: Do not export types or functions unless they are shared across multiple components.

## UI & Styling (Tailwind + CSS Variables)
- **Primary Action**: `var(--violet-primary)` / `bg-violet-primary`
- **Innovation Accent**: `var(--yellow-innovation)` / `bg-yellow-innovation`
- **Success Accent**: `var(--green-success)` / `bg-green-success`
- **Attention/Warning**: `var(--red-attention)` / `bg-red-attention`
- **Text**: `var(--text-primary)`, `var(--text-secondary)`, `var(--text-muted)`
- **Corners**: Use rounded corners for all components. **Rounded full** for buttons.
- **Animations**: Prefer `framer-motion`.

## Accessibility & Localization
- Use **cursor pointer** for all clickable elements.
- Use **double quotes** for user-facing strings that need localization.
- Use **single quotes** for internal strings.
- Always use semantic HTML tags.

## Workflow Rules
- Always use **yarn** for package management.
- Place components in the **`app/_components/`** directory using PascalCase for filenames.
- Ensure all new pages follow Next.js App Router conventions in the `app/` directory.
- Verify changes with `yarn dev` or `yarn build`.
