import { defineRouting } from 'next-intl/routing';

export const supportLocales = ['en', 'ko'];

export const fallbackLocale = supportLocales[0];

export const routing = defineRouting({
  locales: supportLocales,
  localePrefix: 'always',
  defaultLocale: fallbackLocale,
});
