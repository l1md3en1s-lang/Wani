import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import "./globals.css";
const origin = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");
export const metadata: Metadata = {
  metadataBase: new URL(origin), title: { default: "와니 — 딴 짓하면 태워버립니다", template: "%s | 와니" }, description: site.description,
  openGraph: { type: "website", locale: "ko_KR", siteName: "와니", title: "와니 — 당신의 작고 뜨거운 집중 친구", description: site.description, images: [{ url: "/wani.png", width: 1188, height: 1056, alt: "꽃을 든 초록 와니" }] },
  twitter: { card: "summary", title: "와니 — 당신의 집중 친구", description: site.description, images: ["/wani.png"] },
};
export const viewport: Viewport = { themeColor: "#ffffff" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ko"><body><a className="skip-link" href="#main">본문으로 바로가기</a>{children}</body></html>; }
