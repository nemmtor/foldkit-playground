/**
 * @type {import("prettier").Config}
 */
const config = {
  singleQuote: true,
  importOrder: [
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '^@pages/(.*)$',
    '^@features/(.*)$',
    '^@shared/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};

export default config;
