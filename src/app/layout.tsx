import type { Metadata, Viewport } from 'next';
import { Space_Grotesk } from 'next/font/google';
import '@/styles/globals.css';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import BackgroundPaths from '@/components/background/BackgroundPaths';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fram.dev'),
  title: {
    default: 'FRAM.DEV | Web Development Studio',
    template: '%s | FRAM.DEV',
  },
  description:
    'Modern web development studio specializing in high-performance websites and applications',
  keywords: ['web development', 'frontend', 'backend', 'react', 'next.js', 'typescript'],
  authors: [{ name: 'FRAM.DEV Team' }],
  creator: 'FRAM.DEV',
  publisher: 'FRAM.DEV',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fram.dev',
    siteName: 'FRAM.DEV',
    title: 'FRAM.DEV | Web Development Studio',
    description:
      'Modern web development studio specializing in high-performance websites and applications',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FRAM.DEV Web Development Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FRAM.DEV | Web Development Studio',
    description:
      'Modern web development studio specializing in high-performance websites and applications',
    creator: '@framdev',
    images: ['/images/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://fram.dev',
  },
};

// Separate viewport export as recommended by Next.js
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ec003f',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${spaceGrotesk.variable} bg-backgroundary font-grotesk antialiased`}>
        <div className="absolute inset-0 z-0 overflow-visible">
          <BackgroundPaths />
        </div>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
