# Contributing to Frama

Thank you for considering contributing to Frama! This document outlines the standards and workflow we follow.

## Development Workflow

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make changes following our code style guidelines
4. Write or update tests as necessary
5. Run tests locally to ensure they pass
6. Submit a pull request

## Code Style

This project uses:

- ESLint for JavaScript/TypeScript linting
- Prettier for code formatting
- TypeScript for type checking

Before committing, ensure your code passes all the checks:

```bash
npm run lint
npm run format
npm run type-check
```

Pre-commit hooks will automatically run these checks on staged files.

## Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages. This leads to more readable messages that are easy to follow when looking through the project history.

### Commit Message Format

Each commit message consists of a **header**, an optional **body**, and an optional **footer**:

```
<type>(<optional scope>): <description>

[optional body]

[optional footer(s)]
```

The **header** is mandatory and must conform to the following format:

- **type**: What kind of change this commit is making. Must be one of:

  - **build**: Changes that affect the build system or external dependencies
  - **chore**: Maintenance tasks and other non-user-facing changes
  - **ci**: Changes to CI configuration files and scripts
  - **docs**: Documentation only changes
  - **feat**: A new feature
  - **fix**: A bug fix
  - **perf**: A code change that improves performance
  - **refactor**: A code change that neither fixes a bug nor adds a feature
  - **revert**: Reverts a previous commit
  - **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc)
  - **test**: Adding missing tests or correcting existing tests

- **scope** (optional): The scope of the change (e.g., component or file name)
- **description**: A brief description of the change, using imperative mood

### Examples

```
feat: add user authentication feature
```

```
fix(header): correct responsive behavior on mobile devices
```

```
docs: update installation instructions in README
```

```
refactor(auth): improve error handling in login process

Replaced generic error messages with more descriptive ones.
Added proper validation before submission.
```

## Pull Request Process

1. Update the README.md or documentation with details of changes where appropriate
2. Update the types if you're changing component props or API structure
3. Add tests for new features
4. The PR needs at least one approval from a maintainer
5. Follow up on any requested changes

## Testing

Write tests for all new features and bug fixes. We use Jest and React Testing Library.

Run tests with:

```bash
npm test
```

## Questions?

Feel free to open an issue with questions or suggestions about the contributing process.
