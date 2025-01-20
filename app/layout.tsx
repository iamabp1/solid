
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import FloatingContact from '@/components/Float';
import Script from 'next/script'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "./context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
   
   <body className={`dark:bg-black ${inter.className}`}>
   <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          {/* <Header /> */}
          <ToasterContext />
          {children}
          <Footer />
          <FloatingContact />
        </ThemeProvider>
        <Script
          defer
          src="https://umami-analytics-xi-ten.vercel.app/script.js"
          data-website-id="fbd94d50-1729-4110-8437-43db5c869dea"
        />
      </body>
    </html>
  );
}
