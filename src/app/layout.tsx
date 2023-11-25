import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aymen Daouadji Personal Portfolio',
  description: 'Aymen Daouadji is a software developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth " suppressHydrationWarning={true}>
      <body
        className={`${inter.className} bg-white text-gray-950 relative pt-28 sm:pt-36
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 transition
        `}
      >
        {children}
      </body>
    </html>
  );
}
