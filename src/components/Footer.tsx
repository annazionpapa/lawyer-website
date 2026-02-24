import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* 사무소 정보 */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gold"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">
                정의법률사무소
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              20년 이상의 경험과 전문성으로
              <br />
              의뢰인의 권리를 지킵니다.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center hover:bg-navy-light transition-colors"
                aria-label="블로그"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center hover:bg-navy-light transition-colors"
                aria-label="카카오톡"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3c-5.2 0-9.4 3.3-9.4 7.4 0 2.6 1.7 4.9 4.3 6.2l-1.1 4 4.6-3c.5.1 1 .1 1.6.1 5.2 0 9.4-3.3 9.4-7.4S17.2 3 12 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 업무분야 */}
          <div>
            <h3 className="text-gold font-semibold mb-6">업무분야</h3>
            <ul className="space-y-3">
              {["민사소송", "형사소송", "이혼·가사", "부동산", "기업법무", "행정소송"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/practice"
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* 바로가기 */}
          <div>
            <h3 className="text-gold font-semibold mb-6">바로가기</h3>
            <ul className="space-y-3">
              {[
                { label: "사무소 소개", href: "/about" },
                { label: "구성원 소개", href: "/team" },
                { label: "성공사례", href: "/cases" },
                { label: "상담신청", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-gold font-semibold mb-6">연락처</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gold mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400 text-sm">
                  서울특별시 서초구 서초대로 250
                  <br />
                  정의빌딩 12층
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-gold shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:02-1234-5678"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  02-1234-5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-gold shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contact@justice-law.co.kr"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  contact@justice-law.co.kr
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-gold shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-400 text-sm">
                  평일 09:00 ~ 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; 2024 정의법률사무소. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">
                이용약관
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
