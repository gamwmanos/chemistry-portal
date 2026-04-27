import type { Metadata } from "next";
import { Inter, Montserrat, Lora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Βιβλία Χημείας Γυμνασίου - Λυκείου | ΕΚΔΟΣΕΙΣ ΠΕΔΙΟ",
  description: "Η κορυφαία εκπαιδευτική πλατφόρμα για την Χημεία στο Λύκειο.",
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
        {/* Proxima Nova CDN if needed, but we can also use Inter as a very close fallback if we can't find a free CDN */}
        <link href="https://fonts.cdnfonts.com/css/proxima-nova-2" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-background-darker text-white">
        {children}
      </body>
    </html>
  );
}
