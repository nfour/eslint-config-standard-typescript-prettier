export type TsEslintPluginRules = Record<
  keyof typeof import('@typescript-eslint/eslint-plugin/dist/configs/all.json')['rules'],
  any
>;

export type EslintRules = import('eslint/rules/index').ESLintRules;
export type TsEslintRules = EslintRules & TsEslintPluginRules;

export type TsEslintConfig = {
  rules?: TsEslintRules;
};
