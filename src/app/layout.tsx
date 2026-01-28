import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../styles/globals.css";
//font
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "RealtyClan - Real Estate Template",
  description: "RealtyClan - Real Estate Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <NextTopLoader color="#ff5a3c" height={4} />
        <AntdRegistry>
          {/* Manin Content */}
          <main>{children}</main>
        </AntdRegistry>
      </body>
    </html>
  );
}
