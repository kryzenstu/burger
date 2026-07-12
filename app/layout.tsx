import type { Metadata } from 'next';
import './globals.css';
import LoadingScreen from '@/components/LoadingScreen';

export const metadata: Metadata = {
  title: 'Smoke & Grill — Budapest',
  description: 'Kézműves hamburgerek, füstölt ízek, amerikai lélek.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Anton&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
