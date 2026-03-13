import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans'
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant'
});

export const metadata: Metadata = {
  title: 'Padhmi | Luxury Indian Artisanal Collections',
  description: 'A celebration of Indian artistry curated for you. Handwoven sarees, elegant jewelry, and bespoke home decor.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.4.1/default/snipcart.css" />
      </head>
      <body className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable} ${dmSans.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Snipcart Setup */}
        <Script src="https://cdn.snipcart.com/themes/v3.4.1/default/snipcart.js" strategy="afterInteractive" />
        <div 
          hidden 
          id="snipcart" 
          data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY || "YOUR_SNIPCART_PUBLIC_TEST_KEY"}
          data-config-modal-style="side"
        ></div>
      </body>
    </html>
  );
}
