import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Yıldız Deri Direksiyon | Düzce Bolu Deri Direksiyon Kaplama",
  description:
    "Düzce, Bolu ve çevresinde araç başına gelerek profesyonel deri direksiyon kaplama hizmeti. Direksiyonu sökmeden, yerinde dikiş.",
  keywords:
    "deri direksiyon, direksiyon kaplama, düzce direksiyon kaplama, bolu deri direksiyon, araç başına direksiyon dikimi, mobil direksiyon kaplama",
  openGraph: {
    title: "Yıldız Deri Direksiyon | Düzce Bolu Deri Direksiyon Kaplama",
    description:
      "Düzce, Bolu ve çevresinde araç başına gelerek profesyonel deri direksiyon kaplama hizmeti.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${manrope.variable} ${inter.variable} dark`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
