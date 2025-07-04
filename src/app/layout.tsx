import './globals.css';
import { PrimeProvider } from '@/providers/prime-react-provider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daily Orb',
  description: 'A mystical daily orb for magical insights',
  viewport: 'width=device-width, initial-scale=1',
  keywords: ['daily orb', 'mystical', 'zodiac', 'fortune', 'astrology'],
  themeColor: '#4CAF50',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <PrimeProvider>{children}</PrimeProvider>
      </body>
    </html>
  );
}
