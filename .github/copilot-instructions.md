# Coding Guidelines

## Introduction

This document outlines the coding guidelines and best practices for our project. It is essential to follow these guidelines to ensure consistency, readability, and maintainability of the codebase.

## Indentation

We use tabs, not spaces.

## Naming Conventions

- Use PascalCase for `type` names
- Use PascalCase for `enum` values
- Use camelCase for `function` and `method` names
- Use camelCase for `property` names and `local variables`
- Use whole words in names when possible
- Use PascalCase for `.tsx` files
- Use snake-case for `.ts` files and folders

## Accessibility

- Use cursor pointer for clickable elements

## Instructions

- Use the new CSS variables from `globals.css` instead of hardcoded colors
- Store all the types in the [types](../app/types) folder
- Don't add unnecessary comments to the code
- Use the `useCallback` hook for all the functions that are passed as props to child components or used in `useEffect` dependencies.
- Use rounded corners for all the components. Rounded full for buttons.

## Color Scheme Usage 🎨

### Primary Color Variables (Use These First)

- `var(--violet-primary)` - Main brand color for primary actions
- `var(--violet-secondary)` - Enhanced violet for hover states
- `var(--violet-tertiary)` - Blue-violet for tech elements
- `var(--violet-soft)` - Light backgrounds and subtle elements

### Strategic Accent Colors

- `var(--yellow-innovation)` - For AI/ML projects and innovation highlights
- `var(--green-success)` - For achievements, success states, and completion
- `var(--red-attention)` - For warnings and important notices

### Text & Background Colors

- `var(--text-primary)` - Main content text
- `var(--text-secondary)` - Supporting text and descriptions
- `var(--text-muted)` - Placeholders and less important text
- `var(--background-primary)` - Main page background
- `var(--background-secondary)` - Cards and secondary backgrounds

### Tailwind Classes (Preferred Approach)

```css
/* Primary Brand Colors */
bg-violet-primary text-violet-primary border-violet-primary

/* Strategic Accents */
bg-yellow-innovation text-yellow-innovation
bg-green-success text-green-success

/* Semantic Usage */
bg-bg-primary text-text-primary
bg-bg-secondary text-text-secondary
```

### Component-Specific Color Mapping

- **Hero Section**: Use `bg-gradient-hero` or `bg-violet-soft`
- **Skills Cards**: Use `bg-violet-primary` with `text-white`
- **Project Cards**: Use `bg-yellow-innovation` for featured projects
- **Achievement Badges**: Use `bg-green-success` with appropriate shadows
- **Interactive Elements**: Use `hover:bg-violet-secondary` and `focus:ring-violet-primary`

### Legacy Color Support (Phase Out Gradually)

- Continue using `light-*` colors only where necessary for backward compatibility
- Gradually replace with new CSS variables during updates

## Types

- Never use `any` type
- Always use `type` instead of `interface`
- Do not export `types` or `functions` unless you need to share it across multiple components
- Do not introduce new `types` or `values` to the global namespace

## Comments

- When there are comments for `functions`, `interfaces`, `enums`, and `classes` use JSDoc style comments

## Strings

- Use "double quotes" for strings shown to the user that need to be externalized (localized)
- Use 'single quotes' otherwise
- All strings visible to the user need to be externalized

## Style

- Always use arrow functions for all the functions
- Use arrow functions `=>` over anonymous function expressions
- Only surround arrow function parameters when necessary. For example, `(x) => x + x` is wrong but the following are correct:

```javascript
x => x + x
(x, y) => x + y
<T>(x: T, y: T) => x === y
```

- Always surround loop and conditional bodies with curly braces
- Open curly braces always go on the same line as whatever necessitates them
- Parenthesized constructs should have no surrounding whitespace. A single space follows commas, colons, and semicolons in those constructs. For example:

```javascript
for (let i = 0, n = str.length; i < 10; i++) {
    if (x < 10) {
        foo();
    }
}

function f(x: number, y: string): void { }
```

## Additional Guidelines

- Follow the [cleanup](./prompts/cleanup.prompt.md) guidelines for code cleanup.
- Follow the [visual-overhaul](./prompts/visual-overhaul.prompt.md) guidelines for UI design.
- Follow the [refactor](./prompts/refactor.prompt.md) guidelines for code refactoring.
