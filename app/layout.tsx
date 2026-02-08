import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carrillo Abogados - Servicios Legales Profesionales",
  description: "Despacho de abogados especializado en servicios legales profesionales. Asesoría legal, representación jurídica y consultoría legal de excelencia.",
  keywords: "abogados, servicios legales, asesoría legal, derecho, bufete de abogados, Carrillo Abogados",
  authors: [{ name: "Carrillo Abogados" }],
  openGraph: {
    title: "Carrillo Abogados - Servicios Legales Profesionales",
    description: "Despacho de abogados especializado en servicios legales profesionales",
    type: "website",
    locale: "es_ES",
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
      <body>{children}</body>
    </html>
  );
}
