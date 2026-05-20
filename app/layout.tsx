import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"]
});

const siteUrl = "https://ateliercafe-premium.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Atelier Cafe | Cafeteria e Restaurante Contemporaneo",
    template: "%s | Atelier Cafe"
  },
  description:
    "Landing page premium para cafeteria e restaurante contemporaneo com foco em experiencia gastronomica sofisticada, brunch artesanal e cafes especiais.",
  keywords: [
    "cafeteria premium",
    "restaurante contemporaneo",
    "brunch artesanal",
    "cafe especial",
    "experiencia gastronomica",
    "bauru"
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Atelier Cafe | Cafeteria e Restaurante Contemporaneo",
    description:
      "Uma experiencia sensorial sofisticada entre cafes especiais, brunch autoral e ambiente exclusivo.",
    siteName: "Atelier Cafe",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Atelier Cafe - Experiencia gastronomica premium"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Cafe | Experiencia Gastronomica Premium",
    description:
      "Cafes especiais, brunch autoral e ambiente sofisticado em uma proposta contemporanea.",
    images: ["/opengraph-image"]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${sans.variable} antialiased`}>{children}</body>
    </html>
  );
}
