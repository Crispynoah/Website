import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noah da Silveira — Webdesign & Entwicklung",
  description:
    "Ich entwickle moderne, professionelle Websites für Unternehmen, Selbstständige und lokale Betriebe. Design, Hosting, SEO und monatliche Betreuung aus einer Hand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#09090b] text-zinc-50 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
