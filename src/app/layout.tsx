import './global.css';

import type { Metadata } from 'next';

import { ThemeProvider } from '@/provider';

export const metadata: Metadata = {
  title: 'UI SAAS DESIGN',
  description: 'Making by nextjs & tailwind',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body>
        <main className="overflow-hidden">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
