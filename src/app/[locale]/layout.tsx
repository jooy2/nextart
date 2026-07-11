import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Metadata, ResolvingMetadata, Viewport } from 'next';
import { CssBaseline } from '@mui/material';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing, supportLocales, fallbackLocale } from '@/i18n/routing';
import StoreProvider from '@/store/StoreProvider';
import { BASE_URL, SITE_NAME } from '@/constants/common';
import ClientThemeProvider from '@/components/ClientThemeProvider';
import '../../styles/globals.css';
import { clsx } from 'clsx';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(
  {
    params,
  }: {
    params: Promise<{ locale: string }>;
  },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { alternates } = await parent;
  const { locale } = await params;

  // Derive the current page path from the parent's resolved canonical ('./'),
  // strip the locale prefix, then build a self-referencing canonical plus
  // hreflang alternates (including x-default) for every supported locale.
  const resolvedCanonical = alternates?.canonical?.url?.toString();
  const pathname = resolvedCanonical
    ? new URL(resolvedCanonical, BASE_URL).pathname
    : `/${locale}`;
  const barePath = pathname.startsWith(`/${locale}`)
    ? pathname.slice(locale.length + 1)
    : pathname;

  const languages: Record<string, string> = {};
  for (const loc of supportLocales) {
    languages[loc] = `${BASE_URL}/${loc}${barePath}`;
  }
  languages['x-default'] = `${BASE_URL}/${fallbackLocale}${barePath}`;

  return {
    title: SITE_NAME,
    applicationName: SITE_NAME,
    description: 'NextART is a predefined template based on the Next.js App router.',
    keywords: ['Next.js', 'NextART', 'Template'],
    authors: [{ name: SITE_NAME, url: BASE_URL }],
    alternates: {
      canonical: `${BASE_URL}/${locale}${barePath}`,
      languages,
    },
    twitter: {
      card: 'summary_large_image',
    },
    // icons: { shortcut: '/favicon.png' },
  };
}

export const viewport: Viewport = {
  themeColor: '#efefef',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={clsx(inter.className, 'h-screen wrap-anywhere break-keep')}>
        <NextIntlClientProvider messages={messages}>
          <AppRouterCacheProvider>
            <ClientThemeProvider>
              <CssBaseline />
              <StoreProvider>{children}</StoreProvider>
            </ClientThemeProvider>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
