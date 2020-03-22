# Eslint config: StandardJS, Typescript, Prettier

A simple **eslint** config for modern **TypeScript** projects.

This package configures **eslint** with:
- **Typescript** support https://github.com/typescript-eslint/typescript-eslint
- **StandardJs** rules https://github.com/standard/eslint-config-standard
- **Prettier** rules https://github.com/prettier/eslint-plugin-prettier
- **`@typescript-eslint/recommended`** rules https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
- Requires semicolons (from prettier) for consistancy with types
- Disables some opinionated type check rules
- All the dependencies are **peerDependencies** so you shouldnt have to update this package often

> For reference: [./eslint.json](./eslint.json).

----------

+ [Usage](#usage)
  + [1. Install dependencies](#1-install-dependencies)
  + [2. Configure eslint](#2-configure-eslint)
  + [3. Configure prettier](#3-configure-prettier)
+ [FAQ](#faq)
  + [Eslint cant find my files](#eslint-cant-find-my-files)
  + [I want fine grained control](#i-want-fine-grained-control)
  + [I want linting to appear as warnings, not errors](#i-want-linting-to-appear-as-warnings-not-errors)
+ [This project](#this-project)
+ [Potential issues](#potential-issues)

-----------------

## Usage

### 1. Install dependencies

Install all of the peer dependencies listed in [this projects package.json](./package.json).

### 2. Configure eslint

Configure eslint like so:

```json
{
  "extends": "standard-typescript-prettier",
  "parserOptions": { "project": "./tsconfig.json" }
}
```

### 3. Configure prettier

Configure prettier in one of two ways:

1. In your `package.json`
    ```json
    {
      "prettier": "eslint-config-standard-typescript-prettier/prettier"
    }
    ```

2. In a `.prettierrc.js` :
    ```js
    module.exports = {
      ...require('eslint-config-standard-typescript-prettier/prettier'),
      semi: false, // This is how you turn off semicolons, by the way
    }
    ```

All done!

## FAQ

### Eslint cant find my files

On the CLI, `eslint` requires the `--ext` flag (currently):
```
eslint --ext .ts,.tsx .
```

### I want fine grained control

The packages exports a plain object, go nuts!

In an `.eslintrc.js`:

```js
const config = require('eslint-config-standard-typescript-prettier');

module.exports = {
  ...config,
  parserOptions: { project: "./tsconfig.json" },
  rules: {
    ...config.rules,
    "@typescript-eslint/no-explicit-any": "error",
  },
};
```

> Eslint might be changing their config, which is why a `.eslintrc.js` format is recommended.
> 
> More info: https://github.com/eslint/rfcs/pull/9

In a `.prettierrc.js`:

```js
module.exports = {
  ...require('eslint-config-standard-typescript-prettier/prettier'),
  semi: false, // This is how you turn off semicolons, by the way
}
```

### I want linting to appear as warnings, not errors

By default, lint errors can become mixed with TypeScript errors during development.

Install `eslint-plugin-only-warn`, then add it to the mix:

```json
{
  "plugins": ["only-warn"],
  "extends": ["standard-typescript-prettier"],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

Want your lint warnings turned into errors?

> `yarn eslint --max-warnings 1`

## This project

The Javascript churn is real. This project will be kept up to date for as long as its necessary to keep this abstraction

I hope it becomes more simple in future to configure stuff like this.

## Potential issues

The peerDependencies listed are versioned for compatibility. Because you maintain these dependencies in your project, you'll have to keep them all in sync or you could have issues.