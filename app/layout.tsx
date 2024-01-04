import { Navbar } from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Footer } from "@/components/footer";
import CookieConsent from "@/components/cookieConsent";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | NovoTherm",
    default: "NovoTherm - Heizung und Sanitär",
  },

  description: "Heizung und Sanitär in Köln und Umgebung",
  keywords: [
    "NovoTherm",
    "Sanierung",
    "Sanierungsmanagement",
    "Ausbaumanagement",
    "Projektmanagement",
    "Köln",
    "NRW",
    "Nordrhein-Westfalen",
    "Bonn",
    "Bau",
    "Bauwesen",
    "Bauwirtschaft",
    "Bauunternehmen",
    "Bauunternehmer",
    "Bauprojekt",
    "Sanitär",
    "Heizung",
    "Klimatechnik",
    "Sanitäranlagen",
    "Energie",
  ],
  metadataBase: new URL(process.env.URL_PROD! || process.env.URL_NONPROD!),

  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={raleway.className}>
        <Navbar />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
