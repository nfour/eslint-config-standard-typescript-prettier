module.exports = {
  overrides: [
    {
      files: ["*.mts", "*.cts", "*.ts"],
      options: {
        trailingComma: "all",
        semi: true,
        singleQuote: true,
        quoteProps: "consistent",
        bracketSpacing: true,
        arrowParens: "always",
        tabWidth: 2,
        parser: "typescript"
      }
    }
  ]
}