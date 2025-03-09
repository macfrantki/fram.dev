# Verification Guide

## Git Hooks Verification

The project uses Husky to set up git hooks for enforcing code quality and commit message format. To verify that the git hooks are working correctly:

### 1. Set up the hooks

If you're setting up the project for the first time, or if the hooks aren't working, you have two options:

#### Option A: Using the Node.js setup script
```bash
npm run setup-hooks
```

#### Option B: Using the direct shell script (if you encounter errors with Option A)
```bash
./install-hooks.sh
```

Either of these methods will ensure that all hooks are properly installed and executable.

### 2. Verify the pre-commit hook

Make a change to any file, then try to commit it:

```bash
git add .
git commit -m "test: verify pre-commit hook"
```

The pre-commit hook should:
- Run TypeScript type checking
- Run ESLint on staged files
- Format staged files with Prettier

If there are any issues, the commit will be blocked until they are fixed.

### 3. Verify the commit message format

Try committing with an invalid commit message format:

```bash
git commit -m "adding a feature"
```

You should receive an error because the commit message doesn't follow the conventional format.

Now try with a valid commit message:

```bash
git commit -m "feat: add new feature"
```

This should pass the commit message validation if there are no other issues.

### Bypassing Hooks (When Necessary)

In certain situations (like a quick WIP commit), you can temporarily bypass the hooks:

```bash
git commit --no-verify -m "feat: work in progress feature"
```

However, this should be used sparingly and not as a regular practice. 