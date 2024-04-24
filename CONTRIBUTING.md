# Contributing to SyntaxUI

Thank you for your interest in contributing to SyntaxUI! I welcome contributions from the community to help improve and enhance SyntaxUI.

## Getting Started

To get started with contributing to SyntaxUI, follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine using `git clone`.
3. Install the necessary dependencies by running `npm install`.
4. Start the development server with `npm run dev`.

## Guidelines for Contributions

When contributing to SyntaxUI, please follow these guidelines:

### Coding Standards

- Adhere to the existing codebase's style, formatting, and naming conventions.
- Naming Conventions:
  - Component (jsx and tsx): Follow React's convention using PascalCase (first letter uppercase).
  - Other: Use camelCase (first letter lowercase).
    - Hooks: make sure the first word of your hook is 'use' (ex: useState)

### Commit Messages

Use the following conventions for commit messages:
• feat: New features
• fix: Bug fixes
• docs: Documentation-only changes
• style: Code formatting changes (whitespace, missing semi-colons, etc.)
• refactor: Code changes that neither fix a bug nor add a feature
• test: Adding missing tests
• chore: Changes to the build process or auxiliary tools and libraries (e.g., documentation generation)

### Code Quality

- Ensure your code is properly tested and does not introduce new bugs.

### Adding a component, effect, or hook

If you are adding a new feature then please add it in the appropriate folder in `src/showcase`. For example, if you are making a `NewToggle` component then you would add it to `src/showcase/components/Toggle/NewToggle.tsx`

```
src/
└── showcase/
    ├── components/
    │   └── Toggle/
    │       └── NewToggle.tsx
    ├── effects/
    │   └── ImageFade.tsx
    └── hooks/
        └── useMediaSizes.ts
```

## Reporting Bugs

If you encounter any bugs or issues while using SyntaxUI, please report them by opening an issue on the [GitHub issue tracker](https://github.com/Ansub/syntaxUI/issues). When reporting a bug, please provide a clear description of the problem, steps to reproduce it, and any relevant code snippets or error messages.

## Feature Requests

If you have an idea for a new feature or improvement, I'd love to hear about it! Please submit your feature requests by opening an issue on the [GitHub issue tracker](https://github.com/Ansub/syntaxUI/issues). Provide a detailed description of the feature, its benefits, and any relevant use cases.

## License

By contributing to SyntaxUI, you agree that your contributions will be licensed under the [MIT License](https://opensource.org/licenses/MIT).
