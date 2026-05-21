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

const siteUrl = "https://noura-atelier.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Noura Atelier | Cafe e Restaurante Arabe Contemporaneo",
    template: "%s | Noura Atelier"
  },
  description:
    "Landing page premium para cafe e restaurante arabe contemporaneo com foco em hospitalidade, especiarias elegantes e experiencia sensorial sofisticada.",
  keywords: [
    "cafeteria premium",
    "restaurante arabe contemporaneo",
    "brunch levantino",
    "cafe especial",
    "hospitalidade arabe",
    "especiarias",
    "experiencia gastronomica",
    "bauru"
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Noura Atelier | Cafe e Restaurante Arabe Contemporaneo",
    description:
      "Uma experiencia sensorial sofisticada entre cafe de origem, especiarias delicadas e cozinha arabe contemporanea.",
    siteName: "Noura Atelier",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Noura Atelier - Experiencia arabe contemporanea premium"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Noura Atelier | Experiencia Arabe Contemporanea Premium",
    description:
      "Cafe especial, aromas de especiarias e cozinha autoral em uma proposta arabe contemporanea.",
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
