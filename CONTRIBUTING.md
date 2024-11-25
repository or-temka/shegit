# Contributing to the Project

Thank you for your interest in contributing to our project! We welcome new contributors and appreciate your help.

## How to Contribute

1. **Fork the repository**:

   Click the "Fork" button in the upper right corner of the repository page.

2. **Clone your forked repository on your computer**:

   ```bash
   git clone <your-link-for-clone>
   ```

3. **Install Dependencies**:

   Run in root directory:

   ```bash
   npm install
   ```

4. **Create a branch**:

   Create a new branch for your changes.

   example:

   ```bash
   git checkout -b f/my-new-feature # For new features
   ```

   Always create a new branch for your feature or bugfix.
   Use the conventions outlined in the [Branch Naming Conventions](./RESOURCES/BRANCHING.md) file.

5. **Make your changes**:

   Make your changes and commit them.

   ```bash
   git add .
   git commit -m "Add a new feature"
   ```

6. **Write tests**:

   Ensure that you write tests for your functionality if it is a function, then run build and run the tests using:

   ```bash
   npm run build
   npm test
   ```

7. **Push your changes**:

   Push your branch to GitHub.

   ```bash
   git push origin f/my-new-feature # Use your branch name
   ```

8. **Create a Pull Request**:

   Go to the "Pull requests" section and click "New pull request" to `dev` branch.

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
