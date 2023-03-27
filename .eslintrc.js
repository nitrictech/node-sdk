module.exports = {
  parser: '@typescript-eslint/parser',
  ignorePatterns: [
    'src/gen/**/*.ts',
    'src/**/*.test.ts',
  ],
  env: {
    node: true,
  },
  plugins: [
    "jsdoc",
  ],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended-typescript-error',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'jsdoc/tag-lines': 'off', // not documented on jsdoc plugin site, unsure how to correct.
  },
};
