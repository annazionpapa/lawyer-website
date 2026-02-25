"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileBottomCTA() {
  const pathname = usePathname();

  // 상담신청 페이지에서는 숨김 (이미 폼이 있으므로)
  if (pathname === "/contact") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-3 px-4 py-3 max-w-lg mx-auto">
        {/* 전화 상담 */}
        <a
          href="tel:02-1234-5678"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-navy text-white font-semibold rounded-lg text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          전화 상담
        </a>
        {/* 무료 상담 신청 */}
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-gold text-white font-semibold rounded-lg text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          무료 상담 신청
        </Link>
      </div>
    </div>
  );
}
