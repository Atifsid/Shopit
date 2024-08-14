import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Providers } from "./lib/provider";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SHOPiT | Buy Anything, Anytime, Anywhere",
  description: "Buy Anything, Anytime, Anywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Toaster position="top-right" />
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
