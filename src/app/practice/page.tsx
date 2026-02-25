import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "업무분야 | 정의법률사무소",
  description: "민사소송, 형사소송, 이혼·가사, 부동산, 기업법무, 행정소송 등 폭넓은 법률 서비스를 제공합니다.",
};

// 업무분야명 → 성공사례 카테고리 매핑
const casesCategoryMap: Record<string, string> = {
  "민사소송": "민사",
  "형사소송": "형사",
  "이혼·가사": "이혼·가사",
  "부동산": "부동산",
  "기업법무": "기업법무",
  "행정소송": "행정",
};

const practiceAreas = [
  {
    id: "civil",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "민사소송",
    subtitle: "Civil Litigation",
    desc: "일상에서 발생하는 다양한 민사 분쟁을 전문적으로 해결합니다. 풍부한 소송 경험을 바탕으로 의뢰인에게 가장 유리한 결과를 이끌어냅니다.",
    services: ["손해배상 청구", "계약 분쟁", "채권 추심", "대여금 반환", "부당이득 반환", "공사대금 청구"],
    image: "/images/Image_202602241838.jpeg",
  },
  {
    id: "criminal",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "형사소송",
    subtitle: "Criminal Defense",
    desc: "수사 단계부터 재판까지, 의뢰인의 권리를 철저히 보호합니다. 신속한 대응과 전략적인 변호로 최선의 결과를 만들어갑니다.",
    services: ["폭행·상해 사건", "사기·횡령", "음주운전", "성범죄", "마약 사건", "교통사고"],
    image: "/images/Image_202602242317.jpeg",
  },
  {
    id: "family",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "이혼·가사",
    subtitle: "Family Law",
    desc: "가족 간의 분쟁은 법률적 전문성뿐 아니라 섬세한 접근이 필요합니다. 의뢰인의 감정까지 헤아리며 최선의 해결책을 찾아드립니다.",
    services: ["협의이혼·재판이혼", "양육권·친권", "재산분할", "위자료 청구", "상속·유류분", "성년후견"],
    image: "/images/이혼.jpeg",
  },
  {
    id: "realestate",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "부동산",
    subtitle: "Real Estate",
    desc: "부동산 거래부터 분쟁 해결까지, 부동산과 관련된 모든 법률 문제를 종합적으로 지원합니다.",
    services: ["매매 계약 분쟁", "임대차 분쟁", "재개발·재건축", "명도소송", "등기 관련", "건축 분쟁"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    id: "corporate",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "기업법무",
    subtitle: "Corporate Law",
    desc: "기업의 설립부터 운영, 성장까지 모든 단계에서 필요한 법률 자문을 제공합니다. 기업의 든든한 법률 파트너가 되겠습니다.",
    services: ["법인 설립·변경", "계약서 검토·작성", "노동법 자문", "M&A", "지식재산권", "기업 구조조정"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    id: "admin",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "행정소송",
    subtitle: "Administrative Law",
    desc: "행정기관의 부당한 처분에 대해 의뢰인의 권리를 적극적으로 대변합니다. 인허가, 세무, 국가배상 등 행정법 전반을 다룹니다.",
    services: ["행정처분 취소", "인·허가 관련", "세무소송", "국가배상", "환경소송", "토지보상"],
    image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=600&q=80",
  },
];

export default function PracticePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium mb-3">PRACTICE AREAS</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            업무분야
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            각 분야 전문 변호사가 최선의 법률 솔루션을 제공합니다
          </p>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {practiceAreas.map((area, idx) => (
              <div
                key={area.id}
                id={area.id}
                className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center text-gold">
                      {area.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-navy tracking-tight">
                        {area.title}
                      </h2>
                      <p className="text-gold text-sm">{area.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {area.desc}
                  </p>
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-navy mb-4 uppercase tracking-wider">
                      주요 업무
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {area.services.map((service) => (
                        <div
                          key={service}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                          </svg>
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/contact?practice=${encodeURIComponent(area.title)}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 sm:px-6 sm:py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm sm:text-base"
                    >
                      이 분야 상담 신청
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <Link
                      href={`/cases?category=${encodeURIComponent(casesCategoryMap[area.title] || area.title)}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 sm:px-6 sm:py-3 border border-navy/20 text-navy font-semibold rounded-lg hover:bg-navy/5 transition-colors text-sm sm:text-base"
                    >
                      성공사례 보기
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={area.image}
                    alt={area.title}
                    className="rounded-2xl shadow-lg w-full h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-6">
            어떤 법률 문제든 상담해주세요
          </h2>
          <p className="text-white/70 mb-8">
            전문 변호사가 직접 상담하여 최적의 해결 방안을 안내해드립니다. 초기 상담은 무료입니다.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-lg"
          >
            무료 상담 신청하기
          </Link>
        </div>
      </section>
    </>
  );
}
