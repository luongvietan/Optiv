import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const siteDescription =
  "Intelligent automation that syncs with the tools you love—streamline tasks, boost output, and save time. Work smarter with AI-powered workflows from analyse to deploy.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "OptEx — AI-powered automation & intelligent workflows",
    template: "%s | OptEx",
  },
  description: siteDescription,
  keywords: [
    "OptEx",
    "AI automation",
    "workflow automation",
    "productivity",
    "intelligent automation",
    "AI workflows",
  ],
  authors: [{ name: "OptEx" }],
  creator: "OptEx",
  publisher: "OptEx",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "OptEx",
    title: "OptEx — AI-powered automation & intelligent workflows",
    description: siteDescription,
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "OptEx",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OptEx — AI-powered automation & intelligent workflows",
    description: siteDescription,
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/images/logo.png", type: "image/png" }],
    apple: "/images/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

function SiteJsonLd() {
  const siteUrl = getSiteUrl();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "OptEx",
        url: siteUrl,
        description: siteDescription,
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        name: "OptEx",
        url: siteUrl,
        logo: `${siteUrl}/images/logo.png`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full overflow-x-clip antialiased`}>
      <body
        className={`${inter.className} flex min-h-dvh flex-col bg-white font-sans`}
      >
        <SiteJsonLd />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
