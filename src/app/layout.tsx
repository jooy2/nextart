import { ReactNode } from 'react';
import { Metadata } from 'next';
import { BASE_URL } from '@/constants/common';

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: './' },
  };
}

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: {
  children: ReactNode;
}) {
  return children;
}
