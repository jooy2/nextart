import { redirect } from 'next/navigation';
import { supportLocales } from '@/i18n/routing';

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect(`/${supportLocales[0]}`);
}
