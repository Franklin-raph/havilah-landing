import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import MainArea from "./components/main-area/MainArea";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Havilah Blockchain Studios",
  description: "Designs, Builds and Scales, Web 3 Apps, Defi, Decentralized Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      
      <body style={{ fontFamily: 'Neue Montreal, sans-serif' }}>
        <Nav />
        <div className="bg-[#F2F3F4] pt-[190px] font-neue-montreal">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
