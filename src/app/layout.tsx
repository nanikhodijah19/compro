import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./Menu";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nankho Restorant",
  description: "makanan indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu/>
        {children}
        <Footer/>
        </body>
        
    </html>
  );
}
