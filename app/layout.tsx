import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = 'https://nithish-bharathwaj.dev';
const ogImage = `${siteUrl}/images/nithish-photo.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Nithish Bharathwaj N — Cybersecurity × AI × Full-Stack Engineer',
  description:
    'Portfolio of Nithish Bharathwaj N — Cybersecurity-focused engineer building AI-powered, full-stack, real-time and 3D Digital Twin systems at Chennai Institute of Technology.',
  keywords: [
    'Nithish Bharathwaj N',
    'Cybersecurity Engineer',
    'AI Developer',
    'Full-Stack Engineer',
    'Three.js',
    'Digital Twin',
    'Chennai Institute of Technology',
    'React',
    'Python',
    'FastAPI',
    'LeetCode',
    'Aerothon 2026',
  ],
  authors: [{ name: 'Nithish Bharathwaj N' }],
  creator: 'Nithish Bharathwaj N',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Nithish Bharathwaj N — Cybersecurity × AI × Full-Stack',
    description: 'Building intelligent, secure, real-time software systems.',
    siteName: 'Nithish Bharathwaj N',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Nithish Bharathwaj N — Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nithish Bharathwaj N — Engineer',
    description: 'Cybersecurity × AI × Full-Stack Engineer',
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-[#0d0d0d] text-white">
        {children}
      </body>
    </html>
  );
}
