import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pratik Sindhiya | Full Stack Developer",
  description:
    "Portfolio of Pratik Sindhiya - Full Stack Developer specializing in React, Node.js, and modern web technologies. IIIT Vadodara CS student with experience at Lyfex and ManMa, building production-ready applications with WebRTC, MongoDB, and ML.",
  keywords: [
    "Pratik Sindhiya",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "IIIT Vadodara",
    "Web Developer India",
    "Portfolio",
    "WebRTC",
    "MongoDB",
  ],
  authors: [{ name: "Pratik Sindhiya" }],
  creator: "Pratik Sindhiya",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Pratik Sindhiya | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Node.js, and modern web technologies. Building production-ready applications.",
    siteName: "Pratik Sindhiya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratik Sindhiya | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Node.js, and modern web technologies.",
    creator: "@PrateekSindhiya",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
