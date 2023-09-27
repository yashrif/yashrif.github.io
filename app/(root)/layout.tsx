import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "../components/common/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yashrif",
  description: "Personal website of Yashrif Arifin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col justify-between min-h-screen overflow-x-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
