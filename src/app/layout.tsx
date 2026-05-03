import type { Metadata } from "next";
import { Inter, Montserrat, Lora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/domain/Navbar";
import CookieBanner from "@/components/domain/CookieBanner";
import ClientFooter from "@/components/domain/ClientFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "greek"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Χημεία στην τάξη | ΕΚΔΟΣΕΙΣ ΠΕΔΙΟ",
  description: "Η κορυφαία εκπαιδευτική πλατφόρμα για την Χημεία στο Γυμνάσιο και Λύκειο.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="el"
      className={`${inter.variable} ${montserrat.variable} ${lora.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        {/* We use Inter via next/font as a performant alternative to the external Proxima Nova CDN */}
      </head>
      <body className="min-h-full flex flex-col bg-background-darker text-white">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <ClientFooter />
        <CookieBanner />
      </body>
    </html>
  );
}
