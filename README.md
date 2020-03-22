# Eslint config: StandardJS, Typescript, Prettier

A simple **eslint** config for modern **TypeScript** projects.

This package configures **eslint** with:
- **Typescript** support https://github.com/typescript-eslint/typescript-eslint
- **StandardJs** rules https://github.com/standard/eslint-config-standard
- **Prettier** rules https://github.com/prettier/eslint-plugin-prettier
- **`@typescript-eslint/recommended`** rules https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
- Requires semicolons (from prettier) for consistancy with types
- Disables some opinionated type check rules

> For reference: [./eslint.json](./eslint.json).

----------

+ [Usage](#usage)
+ [Recipes](#recipes)
  + [Eslint cant find my files](#eslint-cant-find-my-files)
  + [I want linting to appear as warnings, not errors](#i-want-linting-to-appear-as-warnings-not-errors)
+ [This project](#this-project)
+ [Potential issues](#potential-issues)

-----------------

## Usage

1. Install all of the peer dependencies listed in [this projects package.json](./package.json)
2. Configure **eslint** like so:
    ```json
    {
      "extends": ["standard-typescript-prettier"],
      "parserOptions": {
        "project": "./tsconfig.json"
      }
    }
    ```
3. Configure prettier in one of two ways:
   - In your `package.json`
      ```json
      {
        "prettier": "eslint-config-standard-typescript-prettier/prettier"
      }
      ```
   - In a `.prettierrc.js` :
      ```js
      module.exports = {
        ...require('eslint-config-standard-typescript-prettier/prettier'),
        semi: false, // This is how you turn off semicolons by the way
      }
      ```

## Recipes

### Eslint cant find my files

On the CLI, `eslint` requires the `--ext` flag (currently):
```
eslint --ext .ts,.tsx .
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