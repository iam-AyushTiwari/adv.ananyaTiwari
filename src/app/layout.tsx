import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Topbar from "@/components/Topbar";
import ContactButton from "@/components/ContactButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Advocate Ananya Tiwari - Legal Advisor, Criminal Lawyer, Family Lawyer,",
  description:
    "Advocate Ananya Tiwari is a well-known legal advisor, criminal lawyer, family lawyer, and expert in various other legal domains. She provides comprehensive legal services with a personal touch.",
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
        <NextTopLoader />
        <ContactButton />
        <Topbar />
        {children}
        <FAQ />
        <Footer />
      </body>
    </html>
  );
}
