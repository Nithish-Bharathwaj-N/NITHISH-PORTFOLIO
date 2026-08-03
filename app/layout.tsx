import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = 'https://nithishbharathwajn-portfolio.vercel.app';
const ogImage = `${siteUrl}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nithish Bharathwaj N | AI • Cybersecurity • Full-Stack Developer',
    template: '%s | Nithish Bharathwaj N',
  },
  description:
    'Portfolio of Nithish Bharathwaj N, a Computer Science (Cyber Security) student specializing in Artificial Intelligence, Cybersecurity, and Full-Stack Development. Explore projects, certifications, hackathons, and technical achievements.',
  keywords: [
    'Nithish Bharathwaj N',
    'AI developer',
    'Cybersecurity',
    'Full-Stack Developer',
    'Computer Science',
    'Portfolio',
    'React',
    'Node.js',
    'LeetCode',
    'Hackathon',
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
    title: 'Nithish Bharathwaj N | AI • Cybersecurity • Full-Stack Developer',
    description:
      'Portfolio of Nithish Bharathwaj N, a Computer Science (Cyber Security) student specializing in Artificial Intelligence, Cybersecurity, and Full-Stack Development.',
    siteName: 'Nithish Bharathwaj N',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Nithish Bharathwaj N — Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nithish Bharathwaj N | AI • Cybersecurity • Full-Stack Developer',
    description:
      'Computer Science (Cyber Security) student focused on AI, Cybersecurity, and Full-Stack Development.',
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/favicon.svg',
  },
};

export const themeColor = '#2563eb';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`light ${inter.variable}`} style={{ colorScheme: 'light' }}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-blue-500/20 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
