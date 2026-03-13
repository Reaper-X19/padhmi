import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from 'next/font/google';
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
  weight: ['400', '400italic'], 
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
      <body className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable} ${dmSans.className}`}>
        {/* Placeholder for future Global Header */}
        <main>{children}</main>
        {/* Placeholder for future Global Footer */}

        {/* Snipcart Setup - Hidden div for the checkout modal */}
        <div hidden id="snipcart" data-api-key="Y2JiNTYwZjAtZmEyMi00MzY2LWI4ZDMtMTBhNzBhNmIyMWM4NjM4NDMzNDY3Nzk5ODAxMzM2"></div>
        <script async src="https://cdn.snipcart.com/themes/v3.4.1/default/snipcart.js"></script>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.4.1/default/snipcart.css" />
      </body>
    </html>
  );
}
