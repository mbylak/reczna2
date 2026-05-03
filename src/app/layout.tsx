import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin", "latin-ext"],
  weight: ["700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://recznarobota2.pl"),
  title: "Ręczna Robota 2.0 Wodnik | Bar nad Jeziorem Zegrzyńskim",
  description:
    "Ręczna Robota 2.0 Wodnik to bar nad Jeziorem Zegrzyńskim z pysznym jedzeniem, zimnymi napojami i najpiękniejszym widokiem.",
  keywords: ["Ręczna Robota 2.0 Wodnik", "bar Nieporęt", "Jezioro Zegrzyńskie", "port Wodnik"],
  openGraph: {
    title: "Ręczna Robota 2.0 Wodnik",
    description:
      "Pyszne jedzenie, orzeźwiające napoje i najlepszy widok na Zalew Zegrzyński.",
    images: ["/images/hero-lake.jpg"],
    locale: "pl_PL",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${caveat.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
