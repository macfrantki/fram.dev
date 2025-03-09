#!/usr/bin/env node

/**
 * This script helps to set up git hooks when the project is cloned for the first time.
 * It ensures that Husky hooks are properly installed and executable.
 */

import { execSync } from 'child_process';
import { existsSync, chmodSync } from 'fs';
import path from 'path';

console.log('🔧 Setting up Git hooks...');

try {
  // Check if .git directory exists
  if (!existsSync(path.join(process.cwd(), '.git'))) {
    console.log('⚠️ No .git directory found. Initializing git repository...');
    execSync('git init', { stdio: 'inherit' });
  }

  // Make sure dependencies are installed
  console.log('📦 Checking if node_modules exists...');
  if (!existsSync(path.join(process.cwd(), 'node_modules'))) {
    console.log('📦 Installing dependencies first...');
    execSync('npm install', { stdio: 'inherit' });
  }

  // Ensure husky is installed in node_modules
  console.log('📦 Installing Husky...');
  if (!existsSync(path.join(process.cwd(), 'node_modules', '.bin', 'husky'))) {
    console.log('⚠️ Husky not found in node_modules, installing it...');
    execSync('npm install husky --save-dev', { stdio: 'inherit' });
  }

  // Create the husky directory if it doesn't exist
  const huskyDir = path.join(process.cwd(), '.husky');
  if (!existsSync(huskyDir)) {
    console.log('📁 Creating .husky directory...');
    execSync('mkdir -p .husky', { stdio: 'inherit' });
  }

  // Initialize husky
  console.log('🔧 Initializing Husky...');
  execSync('npx husky init', { stdio: 'inherit' });

  // Create pre-commit hook if it doesn't exist
  const preCommitPath = path.join(huskyDir, 'pre-commit');
  if (!existsSync(preCommitPath)) {
    console.log('📝 Creating pre-commit hook...');
    execSync('npx husky add .husky/pre-commit "echo \\"🔍 Running pre-commit checks...\\" && npm run type-check || (echo \\"❌ Type check failed.\\" && exit 1) && npx lint-staged || (echo \\"❌ Linting failed.\\" && exit 1) && echo \\"✅ Pre-commit checks passed!\\""', { stdio: 'inherit' });
  }

  // Create commit-msg hook if it doesn't exist
  const commitMsgPath = path.join(huskyDir, 'commit-msg');
  if (!existsSync(commitMsgPath)) {
    console.log('📝 Creating commit-msg hook...');
    execSync('npx husky add .husky/commit-msg "echo \\"📝 Validating commit message format...\\" && npx --no -- commitlint --edit $1 || (echo \\"❌ Commit message validation failed.\\" && exit 1) && echo \\"✅ Commit message format is valid!\\""', { stdio: 'inherit' });
  }

  // Make sure hook files are executable
  const hookFiles = [
    '.husky/pre-commit',
    '.husky/commit-msg',
    '.husky/_/husky.sh'
  ];

  hookFiles.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (existsSync(filePath)) {
      console.log(`📎 Making ${file} executable...`);
      chmodSync(filePath, 0o755);
    } else {
      console.warn(`⚠️ Warning: ${file} does not exist.`);
    }
  });

  console.log('✅ Git hooks setup completed!');
  console.log('');
  console.log('You can now use:');
  console.log('  - Commitlint to enforce conventional commit messages');
  console.log('  - Pre-commit hooks to run linters and type checks');
  console.log('');
  console.log('To bypass hooks temporarily, use:');
  console.log('  git commit --no-verify -m "your message"');
} catch (error) {
  console.error('❌ Error setting up git hooks:', error);
  process.exit(1);
} 