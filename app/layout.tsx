import type { Metadata } from 'next';
import { Inter, Anton } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Ignite Games | Unblocked & Straight Fire',
  description: 'The ultimate unblocked game portal for school. High performance, curated itch.io titles, and built-in stealth mode.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable}`}>
      <body className="bg-[#050505] text-white antialiased selection:bg-[#FF4D00] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
