// @ts-check
import eslint from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import regexpPlugin from 'eslint-plugin-regexp';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    ignores: [
      'dist/',
      'node_modules/',
      'repos/',
      '**/*.d.ts',
      'eslint.config.mjs',
      'vite.config.ts',
      'vitest.config.ts',
      '**/*.config.js',
      '**/*.config.mjs',
      '.dependency-cruiser.cjs',
      'vitest-setup.ts',
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  eslintPluginPrettierRecommended,
  regexpPlugin.configs.recommended,
  eslintPluginUnicorn.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    files: ['**/*.test.ts'],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },

  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        { assertionStyle: 'never' },
      ],
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'unicorn/prefer-top-level-await': 'off',
    },
  },
);
