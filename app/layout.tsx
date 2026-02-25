import type { Metadata } from "next";
import SmoothScroll from "./components/SmoothScroll";
import JsonLd from "./components/JsonLd";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";

const siteUrl = "https://carrilloabgd.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Carrillo Abogados — Firma Legal Digital | Cali, Colombia",
    template: "%s | Carrillo Abogados",
  },
  description:
    "Carrillo ABGD SAS — 23 años de experiencia legal en Cali. Especialistas en registro de marcas, propiedad intelectual, contratación estatal y licitación pública. Primera firma legal 100% digital de Colombia. Relanzamiento Abril 2026.",
  keywords: [
    "Abogados Cali",
    "Registro de marcas Colombia",
    "Patentes Colombia",
    "Propiedad intelectual Cali",
    "Abogados propiedad industrial",
    "Derecho corporativo Cali",
    "Contratación estatal",
    "Superintendencia Industria Comercio",
    "Derecho de marcas",
    "Abogados empresariales Cali",
    "Legal tech Colombia",
    "Bufete especializado Cali",
    "Derecho administrativo Colombia",
    "Licitación pública Colombia",
    "Abogados licitaciones Cali",
    "Carrillo Abogados",
    "Firma legal digital",
  ],
  authors: [{ name: "Carrillo ABGD SAS", url: siteUrl }],
  creator: "Carrillo ABGD SAS",
  publisher: "Carrillo ABGD SAS",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Carrillo Abogados — Firma Legal Digital | Cali, Colombia",
    description:
      "23 años protegiendo tu marca. Primera firma legal 100% digital de Colombia. Especialistas en marcas, patentes y derecho corporativo.",
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "Carrillo Abogados",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carrillo Abogados — Firma Legal Digital",
    description:
      "23 años protegiendo tu marca. Primera firma legal 100% digital de Colombia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  category: "Legal Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo-carrillo.jpg" />
        <meta name="theme-color" content="#51679C" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
        <GoogleAnalytics />
      </head>
      <body className="font-lato">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
