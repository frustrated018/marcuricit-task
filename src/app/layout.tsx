import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidenav from "@/components/custom/Sidenav";
import Topnav from "@/components/custom/Topnav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MarcuricIt Dashboard App",
  description: "Crafted by Niloy Das. Github @frustrated018",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <Sidenav />
        <main className="flex-grow">
          <Topnav />
          {children}
        </main>
      </body>
    </html>
  );
}
