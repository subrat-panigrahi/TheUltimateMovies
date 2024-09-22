import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
//import Header from "./components/Header";
//import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Ultimate Movies",
  description: "Browse your favorite movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://image.tmdb.org"/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-4`}
      >
       
        
        {children}
      </body>
    </html>
  );
}
