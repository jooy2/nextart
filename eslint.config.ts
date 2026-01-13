import { defineConfig, globalIgnores } from 'eslint/config';
import pluginJs from '@eslint/js';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';

import parserTypeScript from '@typescript-eslint/parser';

import globals from 'globals';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  pluginJs.configs.recommended,
  globalIgnores([
    '**/node_modules',
    '**/.git',
    '**/.next',
    '**/.idea',
    '**/.vscode',
    '**/*-lock.json',
    '**/*-lock.yaml',
    '**/*.d.ts',
  ]),
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        parser: parserTypeScript,
        project: 'tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
      },
    },
    rules: {
      eqeqeq: 'error',
      'no-underscore-dangle': 'off',
      'no-case-declarations': 'off',
      'no-trailing-spaces': 'error',
      'no-unsafe-optional-chaining': 'off',
      'no-control-regex': 'off',
      'no-unused-vars': 'off',
      'react/require-default-props': [
        'error',
        {
          forbidDefaultForRequired: true,
          functions: 'defaultArguments',
        },
      ],
      'react-hooks/exhaustive-deps': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  prettier,
]);
