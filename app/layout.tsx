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
  title: { default: "Orbis - Smarter Team Management", template: "%s | Orbis" },
  description:
    "Orbis is a modern team management platform that helps you organize projects, streamline communication, and boost collaboration with ease.",
  keywords: [
    "team management",
    "collaboration",
    "project management",
    "productivity",
    "remote teams",
    "work management",
  ],
  authors: [{ name: "Orbis" }],
  creator: "Orbis",
  publisher: "Orbis",
  metadataBase: new URL("https://orbis.gustifaizal.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orbis.gustifaizal.com",
    siteName: "Orbis",
    title: "Orbis - Smarter Team Management",
    description:
      "Streamline teamwork and communication with Orbis, the all-in-one platform for modern teams.",
    images: [
      {
        url: "https://orbis.gustifaizal.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Orbis - Team Management Platform",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
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
        {children}
      </body>
    </html>
  );
}
