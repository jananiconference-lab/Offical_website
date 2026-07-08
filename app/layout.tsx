import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "JANANI 2026 | Honouring Mothers. Empowering Women. Building Nations.",
    template: "%s | JANANI 2026",
  },
  description: "Join JANANI 2026, a transformative movement organised by Dr. A.P.J. Abdul Kalam International Foundation. Honouring mothers, empowering women, and building nations.",
  keywords: ["Janani 2026", "Women Empowerment", "Dr APJ Abdul Kalam Foundation", "Conference", "India", "Women Leaders", "Mothers"],
  openGraph: {
    title: "JANANI 2026 | Honouring Mothers. Empowering Women.",
    description: "Be part of a transformative movement shaping the future of India. Join thousands of changemakers, leaders, and visionaries.",
    url: "https://sparkly-kashata-730a12.netlify.app", // User's deployed domain
    siteName: "JANANI 2026",
    images: [
      {
        url: "/images/janani-logo.png",
        width: 800,
        height: 600,
        alt: "Janani 2026 Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JANANI 2026",
    description: "Honouring Mothers. Empowering Women. Building Nations.",
    creator: "@jananiconf",
    images: ["/images/janani-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}