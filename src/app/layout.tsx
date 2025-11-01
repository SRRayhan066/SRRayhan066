import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S R Rayhan — Turning Ideas into Interactive Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full m-0 p-5 flex justify-center items-center overflow-hidden`}
      >
        <div className="max-w-[1920px] max-h-[1000px] w-full h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
