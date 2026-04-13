import type { Metadata } from 'next';
import { ThemeProvider } from './contexts/ThemeContext';
import { TypographyProvider } from './contexts/TypographyContext';
import { FontSizeProvider } from './contexts/FontSizeContext';
import { Navigation } from './components/Navigation';
import '../styles/index.css';

export const metadata: Metadata = {
  title: 'Alento | Poesia',
  description: 'Um abraço no peito em forma de poesia.',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#252525' }
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Alento',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <ThemeProvider>
          <TypographyProvider>
            <FontSizeProvider>
              <div className="min-h-screen bg-background text-foreground">
                <Navigation />
                {children}
              </div>
            </FontSizeProvider>
          </TypographyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}