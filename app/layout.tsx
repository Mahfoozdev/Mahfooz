import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Mono } from "next/font/google";
import favicon from "@/public/favicon.png"
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const seoData = {
  title: "Mahfooz Ul Haq | Software Engineer",
  siteName: "Mahfooz's Portfolio",
  author: "Mahfooz Ul Haq",
  description:
    "Senior Software Engineer focused on backend systems, ETL pipelines, cloud infrastructure, and full stack products with Python, FastAPI, Django, React, and Next.js.",
  keywords: [
    "Mahfooz",
    "Mahfooz Jee",
    "Mahfooz Ul Haq",
    "mahfooz ul haq",
    "Muhammad Mahfooz Ul Haq",
    "Senior Software Engineer",
    "Full Stack Software Engineer",
    "Software Engineer",
    "Backend Engineer",
    "Full Stack Developer",
    "Data Engineer",
    "ETL Pipelines",
    "Healthcare Data Workflows",
    "High Throughput Event Processing",
    "Laravel Developer",
    "Backend Developer",
    "Node.js Developer",
    "React Developer",
    "Next.js Developer",
    "Cloud Engineer",
    "AWS",
    "GCP",
    "Apache Airflow",
    "Apache Spark",
    "BigQuery",
    "ClickHouse",
    "Portfolio",
  ],
  url: "https://mahfooz-dwv2.vercel.app/",
  image: `${favicon}`,
};

export const metadata: Metadata = {
  metadataBase: new URL(seoData.url),
  title: seoData.title,
  description: seoData.description,
  applicationName: seoData.siteName,
  authors: [{ name: seoData.author, url: seoData.url }],
  creator: seoData.author,
  publisher: seoData.author,
  keywords: seoData.keywords,
  other: {
    title: seoData.title,
  },
  alternates: {
    canonical: seoData.url,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seoData.url,
    siteName: seoData.siteName,
    title: seoData.title,
    description: seoData.description,
    images: [
      {
        url: seoData.image,
        width: 460,
        height: 460,
        alt: seoData.author,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoData.title,
    description: seoData.description,
    images: [seoData.image],
    creator: "@mahfoozjee",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceMono.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-terminal-bg text-terminal-text antialiased">
        {children}
      </body>
    </html>
  );
}
