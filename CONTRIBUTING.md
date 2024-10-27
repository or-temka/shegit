# Contributing to the Project

Thank you for your interest in contributing to our project! We welcome new contributors and appreciate your help.

## How to Contribute

1. **Fork the repository**: Click the "Fork" button in the upper right corner of the repository page.

2. **Install Dependencies**: Run:

   ```bash
   npm install
   ```

3. **Create a branch**: Create a new branch for your changes.

   example:

   ```bash
   git checkout -b f/my-new-feature # For new features
   ```

   Always create a new branch for your feature or bugfix.
   Use the conventions outlined in the [Branch Naming Conventions](./RESOURCES/BRANCHING.md) file.

4. **Make your changes**: Make your changes and commit them.

   ```bash
   git commit -m "Add a new feature"
   ```

5. **Write tests**: Ensure that you write tests for your functionality if it is a function, and run the tests using:

   ```bash
   npm test
   ```

6. **Push your changes**: Push your branch to GitHub.

   ```bash
   git push origin f/my-new-feature # Use your branch name
   ```

7. **Create a Pull Request**: Go to the "Pull requests" section and click "New pull request" to `dev` branch.

## Coding Standards

Please adhere to the following standards when making changes:

- Write your code in **TypeScript**.
- Use [Prettier](https://prettier.io/) for code formatting.
- Follow ESLint rules for JavaScript.

## Building the Project

The project is transformed into JavaScript and output into the `dist` directory. You can do this by running:

- `npm run build` for a one-time build.
- `npm run watch` to watch for changes and automatically rebuild the project.

## Acknowledgments

Thank you for your contribution!
