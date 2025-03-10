import type { Metadata, Viewport } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import '@/styles/globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BackgroundPaths from '@/components/BackgroundPaths';
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'fram.dev',
  description: 'Webdev Studio z szerokim spektrum usług',
  metadataBase: new URL('https://fram.dev'),
};

// Separate viewport export as recommended by Next.js
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} bg-yellow-500 font-grotesk antialiased`}>
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
