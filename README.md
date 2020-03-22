# eslint-config-standard-typescript-prettier

This project has no dependencies. 

The package emits a `eslint.json`, configured to connect together the various necessary eslint plugins and configs to provide:

- standardjs config https://github.com/standard
- typescript support https://github.com/typescript-eslint/typescript-eslint
- prettier recommended config 

This does not include any opinionated type rules - see the recipes section below.

> For reference: [./eslint.json](./eslint.json).

----------

+ [Usage](#usage)
+ [Recipes](#recipes)
  + [I want linting to appear as warnings, not errors](#i-want-linting-to-appear-as-warnings-not-errors)
  + [I want my to lint my types](#i-want-my-to-lint-my-types)
+ [This project](#this-project)
+ [Potential issues](#potential-issues)

-----------------

## Usage

1. Install all of the peer dependencies listed in [this projects package.json](./package.json)
2. Configure your `.eslintrc.json` to look like this:
    ```json
    {
      "extends": ["standard-typescript-prettier"],
      "parserOptions": {
        "project": "./tsconfig.json"
      }
    }
    ```

## Recipes

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

### I want my to lint my types

Here is how to throw in the recommended type rules from `@typescript-eslint`:
```json
{
  "extends": [
    "standard-typescript-prettier",
    "plugin:@typescript-eslint/recommended"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

Check out https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin for more details on how to configure type linting in your project.

## This project

The Javascript churn is real. This project will be kept up to date for as long as its necessary to keep this abstraction

I hope it becomes more simple in future to configure stuff like this.

## Potential issues

The peerDependencies listed are versioned for compatibility. Because you maintain these dependencies in your project, you'll have to keep them all in sync or you could have issues.