import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/languageContext";
import { ClanResultProvider } from "@/context/clanResultContext";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resonate Clan Test",
  description: "Resonians! Find out what clan you belong to!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <LanguageProvider>
          <ClanResultProvider>
            {children}
          </ClanResultProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
