import { globalIgnores } from 'eslint/config';
import pluginJs from '@eslint/js';
import pluginTypeScriptESLint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginNext from '@next/eslint-plugin-next';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import parserTypeScript from '@typescript-eslint/parser';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier/recommended';

import globals from 'globals';

export default pluginTypeScriptESLint.config(
  pluginPrettier,
  pluginReact.configs.flat.recommended,
  pluginJs.configs.recommended,
  pluginReactHooks.configs['recommended-latest'],
  pluginTypeScriptESLint.configs.recommended,
  pluginImport.flatConfigs.electron,
  pluginNext.flatConfig.recommended,
  pluginNext.flatConfig.coreWebVitals,
  globalIgnores([
    '**/node_modules',
    '**/.git',
    '**/.next',
    '**/.idea',
    '**/.vscode',
    '**/-lock.json',
    '**/-lock.yaml',
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
        ecmaVersion: 2022,
        tsconfigRootDir: '.',
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
      },
    },
    rules: {
      eqeqeq: 'error',
      'arrow-parens': 'off',
      'consistent-return': 'warn',
      'generator-star-spacing': 'off',
      'no-nested-ternary': 'off',
      'no-tabs': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      'max-len': 'off',
      'no-underscore-dangle': 'off',
      'no-case-declarations': 'off',
      'no-trailing-spaces': 'error',
      'no-unsafe-optional-chaining': 'off',
      'no-control-regex': 'off',
      'react/require-default-props': [
        'error',
        {
          forbidDefaultForRequired: true,
          functions: 'defaultArguments',
        },
      ],
      'react-hooks/exhaustive-deps': 'off',
      'react/prop-types': 'off',
      'react/jsx-key': 'off',
      'react/destructuring-assignment': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-unknown-property': ['warn', { ignore: ['css'] }],
      'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
    },
  },
);
