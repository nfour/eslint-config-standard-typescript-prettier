export type TsEslintRules = (
    import('eslint/rules/index').ESLintRules
  & typeof import('@typescript-eslint/eslint-plugin/dist/configs/all.json')['rules']
);

