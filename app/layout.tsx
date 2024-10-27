import type { Metadata } from "next";
import "./globals.css";
import { Inter, Noto_Serif } from "next/font/google";

export const metadata: Metadata = {
  title: "Luke Harries",
  description: "Personal website of Luke Harries",
};

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-sans ${notoSerif.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}