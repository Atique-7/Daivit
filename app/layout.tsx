import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/source-sans-3";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://daivithospital.com"),
  title: {
    default: "Daivit Hospital | Maternity & Orthopaedic Care in Adajan, Surat",
    template: "%s | Daivit Hospital",
  },
  description:
    "Maternity, women’s health and orthopaedic care in Adajan, Surat. Daivit Hospital is open 24 hours on LP Savani Road.",
  applicationName: "Daivit Hospital",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Daivit Maternity & Orthopaedic Hospital",
    description: "Women’s health, maternity and orthopaedic care in Adajan, Surat.",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/images/daivit/reception.jpg", width: 900, height: 1200, alt: "Daivit Hospital reception" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f3ec",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
