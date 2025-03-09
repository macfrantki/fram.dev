#!/bin/bash

# Simple script to manually set up Git hooks when other methods fail

echo "🔧 Setting up Git hooks..."

# Check if git is initialized
if [ ! -d ".git" ]; then
  echo "⚠️ No .git directory found. Initializing git repository..."
  git init
fi

# Ensure .husky directory exists
mkdir -p .husky/_

# Create husky.sh helper
cat > .husky/_/husky.sh << 'EOF'
#!/usr/bin/env sh
if [ -z "$husky_skip_init" ]; then
  debug () {
    if [ "$HUSKY_DEBUG" = "1" ]; then
      echo "husky (debug) - $1"
    fi
  }

  readonly hook_name="$(basename -- "$0")"
  debug "starting $hook_name..."

  if [ "$HUSKY" = "0" ]; then
    debug "HUSKY env variable is set to 0, skipping hook"
    exit 0
  fi

  if [ -f ~/.huskyrc ]; then
    debug "sourcing ~/.huskyrc"
    . ~/.huskyrc
  fi

  readonly husky_skip_init=1
  export husky_skip_init
  sh -e "$0" "$@"
  exitCode="$?"

  if [ $exitCode != 0 ]; then
    echo "husky - $hook_name hook exited with code $exitCode (error)"
  fi

  exit $exitCode
fi
EOF

# Create pre-commit hook
cat > .husky/pre-commit << 'EOF'
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🔍 Running pre-commit checks..."

# Check for TypeScript errors
echo "👮 Checking TypeScript types..."
npm run type-check || (
  echo "❌ Type check failed. Please fix TypeScript errors before committing."
  exit 1
)

# Run lint-staged to check code quality and format files
echo "🧹 Running linters and formatters..."
npx lint-staged || (
  echo "❌ Linting failed. Please fix the issues before committing."
  exit 1
)

echo "✅ Pre-commit checks passed!"
EOF

# Create commit-msg hook
cat > .husky/commit-msg << 'EOF'
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "📝 Validating commit message format..."

# Validate commit message format using commitlint
npx --no -- commitlint --edit $1 || (
  echo "❌ Commit message validation failed. Please use the conventional commit format:"
  echo "  type(scope): subject"
  echo ""
  echo "  Examples:"
  echo "    feat: add user authentication"
  echo "    fix(header): fix navigation on mobile"
  echo "    docs: update README"
  echo ""
  echo "  Types: build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test"
  exit 1
)

echo "✅ Commit message format is valid!"
EOF

# Make scripts executable
chmod +x .husky/_/husky.sh .husky/pre-commit .husky/commit-msg

echo "✅ Git hooks setup completed!"
echo ""
echo "You can now use:"
echo "  - Commitlint to enforce conventional commit messages"
echo "  - Pre-commit hooks to run linters and type checks"
echo ""
echo "To bypass hooks temporarily, use:"
echo "  git commit --no-verify -m \"your message\"" 