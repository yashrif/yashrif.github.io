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

- Use colors from the `globals.css` instead of hardcoded colors
- Store all the types in the [types](../app/types) folder
- Don't add unnecessary comments to the code
- Use the `useCallback` hook for all the functions that are passed as props to child components or used in `useEffect` dependencies.
- Use rounded corners for all the components. Rounded full for buttons.

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

### Feature-Color Mapping

- **Home**: Use `ocean` as the main colorscheme and all the other color schemes occasionally for a more vibrant look
- **Maps**: Use `ocean`
- **Itinerary**: Use `ocean`
- **Journals**: Use `ocean`
- **Social**: Use `lavender`
- **Profile Headers**: Use `ocean`
- **Social Profile**: Use `lavender`

## Additional Guidelines

- Follow the [cleanup](./prompts/cleanup.prompt.md) guidelines for code cleanup.
- Follow the [visual-overhaul](./prompts/visual-overhaul.prompt.md) guidelines for UI design.
- Follow the [refactor](./prompts/refactor.prompt.md) guidelines for code refactoring.
