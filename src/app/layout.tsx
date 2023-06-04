import Head from 'next/head';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BPSky',
  description:
    'With more than 20+ tools and all elements of BPMN 2.0 that we provide, you can create any process that you want',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>BPSky</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
