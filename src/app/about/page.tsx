import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "사무소 소개 | 정의법률사무소",
  description: "정의법률사무소는 2004년 설립 이래, 의뢰인의 권리 보호와 정의 실현을 최우선 가치로 삼고 있습니다.",
};

const timeline = [
  { year: "2004", event: "정의법률사무소 설립" },
  { year: "2008", event: "기업법무팀 신설, 서초동 사무소 확장 이전" },
  { year: "2012", event: "대한변호사협회 우수 법률사무소 선정" },
  { year: "2016", event: "부동산·건설 전문팀 신설" },
  { year: "2020", event: "온라인 법률 상담 시스템 도입" },
  { year: "2024", event: "누적 상담 3,000건 돌파" },
];

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "신뢰",
    desc: "의뢰인과의 약속을 최우선으로 생각하며, 투명한 소통으로 신뢰를 쌓아갑니다.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "전문성",
    desc: "각 분야 최고의 전문가가 최신 판례와 법률 지식을 바탕으로 최적의 전략을 수립합니다.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "팀워크",
    desc: "복잡한 사건도 분야별 전문 변호사들이 협력하여 최선의 결과를 이끌어냅니다.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "의뢰인 중심",
    desc: "의뢰인의 입장에서 생각하고, 의뢰인에게 가장 유리한 결과를 위해 최선을 다합니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium mb-3">ABOUT US</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            사무소 소개
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            정의법률사무소는 의뢰인의 권리를 지키는 것을 최고의 가치로 삼고 있습니다
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy tracking-tight mb-6">
                20년간 한결같은 마음으로
                <br />
                의뢰인 곁에 서겠습니다
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  정의법률사무소는 2004년 설립 이래, &ldquo;의뢰인의 권리 보호&rdquo;라는
                  한 가지 목표를 향해 달려왔습니다. 서울 서초구 법조타운에 위치한
                  사무소에서 민사, 형사, 가사, 부동산, 기업법무 등 다양한 법률 분야에서
                  전문적인 서비스를 제공하고 있습니다.
                </p>
                <p>
                  8명의 전문 변호사가 각자의 전문 분야에서 쌓은 경험과 노하우를
                  결합하여, 의뢰인에게 가장 효과적인 법률 솔루션을 제시합니다.
                  복잡한 법률 문제도 팀워크를 통해 다각도로 분석하고,
                  최적의 전략을 수립합니다.
                </p>
                <p>
                  무료 초기 상담을 통해 의뢰인의 상황을 정확히 파악하고,
                  솔직하고 현실적인 법률 자문을 드리는 것이 저희의 약속입니다.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/team/office.jpg"
                alt="사무소 업무 모습"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-3">CORE VALUES</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight mb-4">
              핵심 가치
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              정의법률사무소가 추구하는 네 가지 핵심 가치입니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-navy/5 rounded-xl flex items-center justify-center text-gold mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-3">HISTORY</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight mb-4">
              연혁
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-0.5" />
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div
                  key={item.year}
                  className={`relative flex items-center gap-8 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 hidden md:block ${idx % 2 === 0 ? "text-right" : "text-left"}`}>
                    {idx % 2 === 0 ? (
                      <>
                        <div className="text-2xl font-bold text-gold tracking-tight">{item.year}</div>
                        <div className="text-gray-600 mt-1">{item.event}</div>
                      </>
                    ) : null}
                  </div>

                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white shadow -translate-x-1/2 z-10" />

                  <div className={`flex-1 pl-12 md:pl-0 ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    {idx % 2 === 0 ? null : (
                      <div className="hidden md:block">
                        <div className="text-2xl font-bold text-gold tracking-tight">{item.year}</div>
                        <div className="text-gray-600 mt-1">{item.event}</div>
                      </div>
                    )}
                    <div className="md:hidden">
                      <div className="text-2xl font-bold text-gold tracking-tight">{item.year}</div>
                      <div className="text-gray-600 mt-1">{item.event}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-3">OFFICE</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight mb-4">
              오시는 길
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full min-h-80">
              <iframe
                src="https://www.google.com/maps?q=%EC%84%9C%EC%9A%B8+%EC%84%9C%EC%B4%88%EA%B5%AC+%EC%84%9C%EC%B4%88%EB%8C%80%EB%A1%9C+250&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-80"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="정의법률사무소 위치"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-navy mb-4">사무소 정보</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div className="font-medium text-navy">주소</div>
                      <div className="text-gray-600 text-sm">서울특별시 서초구 서초대로 250 정의빌딩 12층</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <div className="font-medium text-navy">전화</div>
                      <div className="text-gray-600 text-sm">02-1234-5678</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-medium text-navy">업무시간</div>
                      <div className="text-gray-600 text-sm">평일 09:00 ~ 18:00 (점심 12:00 ~ 13:00)</div>
                      <div className="text-gray-400 text-xs mt-1">* 사전 예약 시 저녁·주말 상담 가능</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-navy mb-4">교통 안내</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded shrink-0">2호선</span>
                    <span>서초역 3번 출구에서 도보 5분</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded shrink-0">3호선</span>
                    <span>교대역 6번 출구에서 도보 7분</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded shrink-0">주차</span>
                    <span>건물 내 지하주차장 이용 가능 (2시간 무료)</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors"
              >
                상담 예약하기
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
