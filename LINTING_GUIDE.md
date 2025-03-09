# ESLint Guide for this Project

This guide helps you handle common ESLint issues in the project and explains how to resolve them.

## Common ESLint Issues and Solutions

### 1. Unescaped Entities (`react/no-unescaped-entities`)

Error message: ``'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.``

**Solution:**
Replace apostrophes and quotes in JSX with their HTML entity equivalents:

```jsx
// ❌ Wrong
<p>Don't use plain apostrophes in JSX text</p>
<p>This isn't right</p>

// ✅ Correct
<p>Don&apos;t use plain apostrophes in JSX text</p>
<p>This isn&apos;t right</p>
```

### 2. Console Statements (`no-console`)

Error message: `Unexpected console statement. Only these console methods are allowed: warn, error.`

**Solution:**
Replace `console.log` statements with `console.warn` or `console.error`, or remove them entirely:

```jsx
// ❌ Wrong
console.log("This data was submitted:", data);

// ✅ Correct
console.warn("This data was submitted:", data); // For development/debugging
console.error("An error occurred:", error); // For errors
// Or remove console statements entirely in production code
```

### 3. Unused Variables (`@typescript-eslint/no-unused-vars`)

Error message: `'variableName' is defined but never used. Allowed unused args must match /^_/u.`

**Solution:**
Either use the variable or prefix it with an underscore:

```jsx
// ❌ Wrong
function Component({ items, index }) {
  // 'index' is never used
  return (
    <div>
      {items.map((item) => (
        <span>{item}</span>
      ))}
    </div>
  );
}

// ✅ Correct
function Component({ items, _index }) {
  // Prefixed with underscore to indicate it's intentionally unused
  return (
    <div>
      {items.map((item) => (
        <span>{item}</span>
      ))}
    </div>
  );
}
```

## How to Run ESLint

### Check for Issues

```bash
npm run lint
```

### Automatically Fix Issues

```bash
npm run lint:fix
```

## Pre-commit Hooks

ESLint runs automatically on staged files before commits. If you encounter errors during commit:

1. Fix the issues manually following this guide
2. Run `npm run lint:fix` to autofix simple issues
3. Try committing again

## CI/CD Pipeline

Our CI/CD pipeline includes a step to automatically fix linting errors. If the pipeline fails with ESLint errors:

1. Pull the latest changes
2. Run `npm run lint:fix` locally
3. Fix any remaining issues
4. Commit and push the fixes

## Disabling Rules (Use Sparingly)

If you need to disable a rule for a specific line:

```jsx
// eslint-disable-next-line react/no-unescaped-entities
<p>I don't want to escape this apostrophe</p>
```

For a whole file (avoid if possible):

```jsx
/* eslint-disable react/no-unescaped-entities */
```
