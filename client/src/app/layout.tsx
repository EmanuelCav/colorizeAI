import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

import Header from "@/components/general/Header";
import Navigation from '../components/general/Navigation';

const geistSans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colorize AI",
  description: "Colorize AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
        <ToastContainer limit={1} />
        <Header />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
