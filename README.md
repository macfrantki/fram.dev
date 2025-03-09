# Frama - Next.js Project

A modern Next.js project with professional configuration and best practices.

## Features

- **Modern Stack**: Next.js 14+ with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Code Quality**: ESLint, Prettier, TypeScript for type checking
- **Testing**: Prepared for Cypress (to be added later)
- **CI/CD**: GitHub Actions workflows for continuous integration and deployment
- **Pre-commit Hooks**: Using Husky and lint-staged to ensure code quality

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/frama.git
   cd frama
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
frama/
├── .github/               # GitHub Actions workflows
├── .husky/                # Git hooks for pre-commit
├── src/                   # Source code
│   ├── app/               # Next.js App Router
│   ├── components/        # React components
│   ├── contexts/          # React contexts
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility libraries
│   ├── services/          # API services
│   ├── styles/            # Global styles
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions
├── public/                # Static assets
├── .env.example           # Example environment variables
├── .eslintrc.mjs          # ESLint configuration
├── .prettierrc            # Prettier configuration
└── tsconfig.json          # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Lint the code
- `npm run format` - Format the code
- `npm run type-check` - Check TypeScript types
- `npm test` - Run tests

## Deployment

This project is configured for easy deployment to Vercel, but can be deployed to any hosting service that supports Next.js applications.

The GitHub Actions workflow in `.github/workflows/deploy.yml` demonstrates how to set up CI/CD for production deployments.

## Best Practices

- Use TypeScript for all new files
- Follow the ESLint rules
- Write tests for new features
- Use path aliases for imports (`@/components/...` instead of relative paths)
- Keep components small and focused
- Use the provided folder structure to organize code

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Website

Production website is available at [fram.dev](https://fram.dev)

## License

MIT
