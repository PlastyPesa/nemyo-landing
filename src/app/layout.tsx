import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nemyo – Invisible Protection for TikTok, YouTube & Roblox',
  description:
    'Not another spy app. Nemyo softly redirects harmful content to calm alternatives. No blocked screens. No surveillance. Just a gentler internet for your kids.',
  keywords: [
    'parental control',
    'kids safety',
    'TikTok',
    'YouTube',
    'Roblox',
    'screen time',
    'digital wellness',
  ],
  authors: [{ name: 'PLATYPESA S.R.L.' }],
  openGraph: {
    title: 'Nemyo – Protection that feels invisible',
    description:
      'Softly redirects harmful content to calm alternatives. No blocked screens. No surveillance.',
    type: 'website',
    url: 'https://nemyo.uk',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nemyo – Protection that feels invisible',
    description:
      'Not another spy app. Nemyo softly redirects harmful content to calm alternatives.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#0A0A0F] text-white antialiased">{children}</body>
    </html>
  );
}
