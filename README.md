## Candidate_Search

## Description
The Candidate Search Application is a tool designed for employers and recruiters to browse, shortlist, and manage potential candidates fetched from the GitHub API. The application displays candidate information in an easy-to-navigate interface, allowing users to save or reject candidates and view their saved selections.

## Features
- Candidate Search: Fetches and displays candidates from the GitHub API.
- Detailed Candidate Profile: Shows essential information like avatar, name, location, email, and bio.
- Save/Reject Functionality: Allows recruiters to save preferred candidates or skip them.
- Saved Candidates List: Displays saved candidates in a table format with easy access to each profile.
- Responsive Design: Optimized for different screen sizes, including mobile and desktop.
- Local Data Persistence: Uses local storage to persist saved candidates across sessions.

## deployed application
https://candidate-search-vurz.onrender.com



## The URL of the GitHub repository 
https://github.com/raze10339/Candidate_Search.git




















# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md), which uses [Babel](https://babeljs.io/) for Fast Refresh
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc), which uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you're developing a production application, we recommend updating the configuration to enable type-aware lint rules:

* Configure the top-level `parserOptions` property as follows:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

* Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
* Optionally, add `plugin:@typescript-eslint/stylistic-type-checked`.
* Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` and `plugin:react/jsx-runtime` to the `extends` list.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.