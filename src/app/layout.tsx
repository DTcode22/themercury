import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';
import { SectionThemeProvider } from '@/context/SectionThemeContext'; // Added import

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'theMERCURY.ai | Advanced Video Management & Analysis',
  description:
    'Intelligent video analytics for security and operational efficiency across multiple industries.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <SectionThemeProvider>
          {' '}
          {/* Added SectionThemeProvider wrapper */}
          <ThemeProvider attribute="class" defaultTheme="dark">
            <div className="relative min-h-screen">
              <div className="absolute inset-0 bg-[url('/images/grid.png')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
              <div className="relative">
                <Navbar />
                <main>{children}</main>
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </SectionThemeProvider>
      </body>
    </html>
  );
}
