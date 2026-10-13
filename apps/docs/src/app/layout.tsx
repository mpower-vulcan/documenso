import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { BRAND_BY, BRAND_NAME, DOCS_URL } from '@/lib/brand';

import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(DOCS_URL),
  title: {
    template: `%s | ${BRAND_NAME} Docs`,
    default: `${BRAND_NAME} Docs`,
  },
  description: `How to send, sign and manage documents with ${BRAND_NAME} ${BRAND_BY}.`,
  robots: { index: false, follow: false },
  openGraph: {
    siteName: `${BRAND_NAME} Docs`,
    type: 'website',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider search={{ options: { type: 'static' } }}>{children}</RootProvider>
      </body>
    </html>
  );
}
