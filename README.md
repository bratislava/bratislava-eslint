# @bratislava/eslint-plugin-no-raw-text-or-elements

ESLint plugin for enforcing rules related to raw text and HTML elements.

## Installation

Install the package using either npm or yarn:

```bash
# With npm
npm install @bratislava/eslint-plugin-no-raw-text-or-elements --save-dev

# With yarn
yarn add @bratislava/eslint-plugin-no-raw-text-or-elements --dev
```

## Configuration

1. Add the plugin to your ESLint configuration file (e.g., .eslintrc.js):

```
module.exports = {
  // Other ESLint configurations...

  plugins: [
    // Add the plugin
    '@bratislava/no-raw-text-or-elements',
  ],

  rules: {
    // Configure rules provided by the plugin
    '@bratislava/no-raw-text-or-elements/no-html-elements': 'error',
    '@bratislava/no-raw-text-or-elements/string-literal-wrapped-in-typography': 'error',
    
    // Other rules...
  },
};

```

2. Ensure the rules are configured according to your preferences.

## Rules

`@bratislava/no-raw-text-or-elements/no-html-elements`

Detect usage of HTML elements.

Example Configuration:

```
module.exports = {
  rules: {
    '@bratislava/no-raw-text-or-elements/no-html-elements': 'error',
  },
};
```

`@bratislava/no-raw-text-or-elements/string-literal-wrapped-in-typography`

Enforce wrapping text in a Typography component.

```
module.exports = {
  rules: {
    '@bratislava/no-raw-text-or-elements/string-literal-wrapped-in-typography': 'error',
  },
};
```


