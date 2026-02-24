import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "정의법률사무소 | 신뢰와 전문성으로 의뢰인의 권리를 지킵니다",
  description: "민사, 형사, 이혼·가사, 부동산, 기업법무 전문. 20년 이상의 경험으로 최선의 법률 서비스를 제공합니다. 무료 초기 상담 가능.",
  keywords: "변호사, 법률사무소, 법률상담, 민사소송, 형사소송, 이혼, 부동산, 기업법무",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
