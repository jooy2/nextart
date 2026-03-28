import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('prettier').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  useTabs: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: 'always',
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf',
  printWidth: 100,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
};
