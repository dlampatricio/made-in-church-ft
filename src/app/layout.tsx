import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import NavBar from "@/components/nav-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Made In Church",
  description: "Una plataforma para niños en la iglesia",
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
      <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
        <Image
          src="/backgroundImage.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          style={{ zIndex: -1 }}
          className="blur-xs"
        />
        <NavBar />
        {children}
      </div>
      </body>
    </html>
  );
}
