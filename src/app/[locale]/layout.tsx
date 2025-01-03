import '@mui/material-pigment-css/styles.css';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Metadata, Viewport } from 'next';
import { CssBaseline } from '@mui/material';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import StoreProvider from '@/store/StoreProvider';
import { SITE_NAME } from '@/constants/common';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: SITE_NAME,
  applicationName: SITE_NAME,
  description: 'NextART is a predefined template based on the Netx.js App router.',
  keywords: ['Next.js', 'NextART', 'Template'],
  // icons: { shortcut: '/favicon.png' },
};

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
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <AppRouterCacheProvider options={{ key: 'css' }}>
            <CssBaseline />
            <StoreProvider>{children}</StoreProvider>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
