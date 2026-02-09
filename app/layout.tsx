import type { Metadata } from "next";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carrillo ABGD - Coming Marzo 2026",
  description: "Carrillo ABGD SAS - 23 años de experiencia legal en Cali. Especialistas en marcas, patentes, derecho corporativo y contratación estatal. Coming Marzo 2026.",
  keywords: "Abogados Cali, Registro de marcas Colombia, Patentes Colombia, Propiedad intelectual Cali, Abogados propiedad industrial, Derecho corporativo Cali, Contratación estatal, Superintendencia Industria Comercio, Derecho de marcas, Abogados empresariales Cali, Legal tech Colombia, Bufete especializado Cali, Derecho administrativo Colombia, Telecomunicaciones legal, Derecho de competencias",
  authors: [{ name: "Carrillo ABGD SAS" }],
  openGraph: {
    title: "Carrillo ABGD - Legal Tech Coming Marzo 2026",
    description: "23 años protegiendo tu marca. Nueva plataforma digital próximamente.",
    type: "website",
    locale: "es_CO",
    url: "https://carrilloabgd.com",
    siteName: "Carrillo ABGD SAS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carrillo ABGD - Legal Tech Coming Marzo 2026",
    description: "23 años protegiendo tu marca. Nueva plataforma digital próximamente.",
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
  verification: {
    google: '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-lato">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
