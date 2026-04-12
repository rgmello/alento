import type { Metadata } from 'next';
import { ThemeProvider } from './contexts/ThemeContext';
import { TypographyProvider } from './contexts/TypographyContext';
import { Navigation } from './components/Navigation';
import '../styles/index.css';

export const metadata: Metadata = {
  title: 'Poetry App',
  description: 'A beautiful poetry reading experience',
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
            <div className="min-h-screen bg-background text-foreground">
              <Navigation />
              {children}
            </div>
          </TypographyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}