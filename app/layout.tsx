import './globals.css';
import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Detailing Bros | Premium Pre-Owned Vehicles & Auto Detailing in Charlotte',
  description:
    "Charlotte's trusted source for quality pre-owned vehicles and professional auto detailing. Family-owned since 2009. Browse our inventory or book your detail today.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
