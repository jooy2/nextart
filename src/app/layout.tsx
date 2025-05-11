import { ReactNode } from 'react';
import { globalCss } from '@mui/material-pigment-css';
import { Metadata } from 'next';

type Props = {
  children: ReactNode;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: { canonical: './' },
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
globalCss`
  html, body {
    height: 100vh;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}
