import type { Metadata } from 'next';
import { Provider } from '@/components/ui/provider';

import './globals.scss';

export const metadata: Metadata = {
  title: 'Book lookup',
  description: 'Book lookup',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
