import type { Metadata } from 'next';
import { Provider } from '../components/ui/provider';
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
        <footer>
          Made with 🩶 by <a href="http://martindm.uk">Martin</a>
          {' | '}
          View on{' '}
          <a href="https://github.com/MartinDM/Book-lookup-AWS-lambda?tab=readme-ov-file#-author-lookup-app">
            GitHub
          </a>
        </footer>
      </body>
    </html>
  );
}
