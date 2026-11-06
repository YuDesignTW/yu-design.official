import type { Metadata } from "next";

import "./globals.css";
import { StructuredData } from "@/components/seo/structured-data";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://yu-design.tw"),
  alternates: {
    canonical: "https://yu-design.tw/",
  },
  title: {
    default: "Yu Design - UI/UX 設計顧問 | AI 產品開發 | 行銷策略規劃",
    template: "%s | Yu Design",
  },
  description:
    "我是 Yuga，懂設計、開發與行銷的夥伴。曾一手打造出千萬營收級別產品。能從用戶面、生產面、商務面看見市場需求，擅長0到1的產品開發與上市計畫。",
  keywords: [
    "UI/UX 設計",
    "設計顧問",
    "AI 產品開發",
    "No-Code 開發",
    "數位轉型",
    "品牌設計",
    "產品設計",
    "行銷策略",
    "台灣設計師",
    "Yu Design",
  ],
  authors: [{ name: "Yuga", url: "https://yu-design.tw" }],
  creator: "Yuga",
  publisher: "Yu Design",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Yu Design - UI/UX 設計顧問 | AI 產品開發 | 行銷策略規劃",
    description:
      "懂設計、開發與行銷的夥伴。曾一手打造出千萬營收級別產品。能從用戶面、生產面、商務面看見市場需求，擅長0到1的產品開發與上市計畫。",
    type: "website",
    locale: "zh_TW",
    url: "https://yu-design.tw/",
    siteName: "Yu Design",
    images: [
      {
        url: "https://yu-design.tw/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yuga Chen｜產品設計與商業實踐",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yu Design - UI/UX 設計顧問 | AI 產品開發",
    description:
      "專業 UI/UX 設計顧問服務，結合 AI 與 No-Code 技術協助企業數位轉型。",
    images: ["https://yu-design.tw/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verified-via-godaddy", // 已透過 GoDaddy 完成驗證
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={"font-sans antialiased"}>
        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId="G-MDT22GMJ1F" />
        )}
        {children}
      </body>
    </html>
  );
}
