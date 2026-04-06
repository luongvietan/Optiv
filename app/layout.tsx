import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OptEx",
  description: "Work smarter with AI-powered automation.",
  icons: {
    icon: [{ url: "/images/logo.png", type: "image/png" }],
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body
        className={`${inter.className} flex min-h-full flex-col bg-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
