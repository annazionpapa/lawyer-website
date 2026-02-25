import Link from "next/link";

const practiceAreas = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "민사소송",
    href: "/practice#civil",
    desc: "손해배상, 계약분쟁, 채권추심 등 민사 전반에 걸친 전문적인 법률 서비스를 제공합니다.",
    services: ["손해배상 청구", "계약 분쟁", "채권 추심", "대여금 반환"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "형사소송",
    href: "/practice#criminal",
    desc: "수사 단계부터 재판까지, 의뢰인의 권리를 철저히 보호합니다. 신속한 대응과 전략적 변호로 최선의 결과를 이끌어냅니다.",
    services: ["폭행·상해", "사기·횡령", "음주운전", "성범죄"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "이혼·가사",
    href: "/practice#family",
    desc: "가족 간의 분쟁은 법률적 전문성뿐 아니라 섬세한 접근이 필요합니다. 의뢰인의 감정까지 헤아리며 최선의 해결책을 찾아드립니다.",
    services: ["협의·재판이혼", "양육권·친권", "재산분할", "상속·유류분"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "부동산",
    href: "/practice#realestate",
    desc: "매매, 임대차, 재개발·재건축 등 부동산 거래부터 분쟁까지 종합적으로 지원합니다.",
    services: ["매매 계약 분쟁", "임대차 분쟁", "재개발·재건축", "명도소송"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "기업법무",
    href: "/practice#corporate",
    desc: "기업의 설립부터 운영, 성장까지 모든 단계에서 필요한 법률 자문을 제공합니다.",
    services: ["법인 설립·변경", "계약서 검토", "M&A", "지식재산권"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "행정소송",
    href: "/practice#admin",
    desc: "행정기관의 부당한 처분에 대해 의뢰인의 권리를 적극적으로 대변합니다.",
    services: ["행정처분 취소", "세무소송", "국가배상", "토지보상"],
  },
];

const stats = [
  { number: "20+", label: "년 경력" },
  { number: "3,000+", label: "건 상담" },
  { number: "95%", label: "승소율" },
  { number: "500+", label: "건 성공사례" },
];

const testimonials = [
  {
    content: "교통사고 보험사에서 제시한 보상금이 너무 낮아 상담을 받았는데, 변호사님이 꼼꼼하게 검토해주셔서 처음 제시 금액의 3배가 넘는 보상을 받았습니다. 혼자 했으면 그냥 받을 뻔했어요.",
    name: "김○○",
    category: "민사소송",
    rating: 5,
  },
  {
    content: "갑작스러운 폭행 혐의로 구속될 뻔했는데, 수사 초기 단계부터 빠르게 대응해주신 덕분에 집행유예로 마무리됐습니다. 가족들이 정말 안심했습니다.",
    name: "이○○",
    category: "형사소송",
    rating: 5,
  },
  {
    content: "이혼 과정에서 양육권과 재산분할이 가장 걱정이었는데, 꼼꼼한 준비 덕분에 아이 양육권도 확보하고 재산분할도 공정하게 받았습니다. 새 출발할 수 있게 해주셔서 감사합니다.",
    name: "박○○",
    category: "이혼·가사",
    rating: 5,
  },
  {
    content: "전세 계약 만료 후 집주인이 보증금을 돌려주지 않아 막막했는데, 상담 후 한 달 만에 전액 회수할 수 있었습니다. 이렇게 빨리 해결될 줄 몰랐어요.",
    name: "최○○",
    category: "부동산",
    rating: 5,
  },
  {
    content: "거래처와의 계약 분쟁으로 수천만 원의 위약금을 물어야 할 상황이었는데, 계약서 분석을 통해 위약금 없이 원만하게 해결해주셨습니다. 사업을 접을 뻔했는데 감사합니다.",
    name: "정○○",
    category: "기업법무",
    rating: 5,
  },
  {
    content: "음주운전으로 면허가 취소될 위기였는데, 변호사님이 감경 사유를 잘 정리해주셔서 벌금형으로 끝낼 수 있었습니다. 생업에 지장 없이 해결돼서 정말 다행입니다.",
    name: "한○○",
    category: "형사소송",
    rating: 5,
  },
  {
    content: "지인에게 빌려준 5천만 원을 3년째 못 받고 있었는데, 다른 곳에서는 어렵다고 했던 걸 증거 확보부터 차근차근 도와주셔서 전액 돌려받았습니다.",
    name: "윤○○",
    category: "민사소송",
    rating: 5,
  },
  {
    content: "식당 위생 문제로 영업정지 처분을 받았는데, 행정소송으로 처분 취소에 성공했습니다. 가게 문을 닫을 뻔한 상황에서 구해주셔서 평생 은인입니다.",
    name: "서○○",
    category: "행정소송",
    rating: 5,
  },
  {
    content: "아버지 돌아가신 후 형제 간 상속 분쟁으로 1년 넘게 갈등이었는데, 법적으로 정확하게 정리해주시면서도 관계가 최대한 덜 상하도록 중재해주셨어요.",
    name: "강○○",
    category: "이혼·가사",
    rating: 5,
  },
  {
    content: "신축 아파트 입주 후 하자가 심각했는데, 시공사가 보수를 미루기만 해서 소송을 진행했습니다. 예상보다 높은 배상금을 받을 수 있었고, 하자 보수도 완료됐습니다.",
    name: "조○○",
    category: "부동산",
    rating: 5,
  },
  {
    content: "부당해고를 당하고 멘탈이 무너졌었는데, 변호사님이 차분하게 절차를 설명해주시고 복직과 밀린 급여까지 모두 받아내주셨습니다. 든든한 지원군이었습니다.",
    name: "임○○",
    category: "기업법무",
    rating: 5,
  },
  {
    content: "온라인에서 악성 댓글과 허위 사실이 퍼져서 큰 피해를 입었는데, 게시물 삭제와 손해배상 모두 성공적으로 받아내주셨습니다. 정신적으로도 많이 회복됐어요.",
    name: "나○○",
    category: "민사소송",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
            alt="법률 사무소"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/80 to-navy/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <p className="text-gold font-medium text-lg mb-4 animate-fade-in-up opacity-0">
              JUSTICE LAW FIRM
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6 animate-fade-in-up opacity-0 animate-delay-100">
              신뢰와 전문성으로
              <br />
              <span className="text-gold">의뢰인의 권리</span>를
              <br />
              지킵니다
            </h1>
            <p className="text-white/80 text-lg sm:text-xl mb-8 leading-relaxed animate-fade-in-up opacity-0 animate-delay-200">
              20년 이상의 경험, <span className="text-white font-semibold">3,000건 이상의 상담</span>과{" "}
              <span className="text-gold font-semibold">95% 승소율</span>을 바탕으로,
              <br className="hidden sm:block" />
              민사·형사·가사·부동산·기업법무까지 폭넓은 분야에서 최선의 결과를 만들어갑니다.
            </p>
            {/* 핵심 수치 - 히어로 내 */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 mb-10 animate-fade-in-up opacity-0 animate-delay-250">
              <div className="flex items-center gap-2">
                <span className="text-gold font-bold text-2xl sm:text-3xl tracking-tight">3,000+</span>
                <span className="text-white/60 text-sm">건 상담</span>
              </div>
              <div className="w-px h-8 bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-gold font-bold text-2xl sm:text-3xl tracking-tight">95%</span>
                <span className="text-white/60 text-sm">승소율</span>
              </div>
              <div className="w-px h-8 bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-gold font-bold text-2xl sm:text-3xl tracking-tight">500+</span>
                <span className="text-white/60 text-sm">성공사례</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 animate-delay-300">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-all text-center text-lg"
              >
                무료 상담 신청하기
              </Link>
              <a
                href="tel:02-1234-5678"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-center text-lg"
              >
                02-1234-5678
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-gold tracking-tight mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-3">PRACTICE AREAS</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight mb-4">
              업무분야
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              각 분야 전문 변호사가 의뢰인에게 최적의 법률 솔루션을 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => (
              <Link
                key={area.title}
                href={area.href}
                className="group rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all duration-300 p-8 block"
              >
                <div className="w-16 h-16 bg-navy/5 rounded-xl flex items-center justify-center text-navy group-hover:bg-gold group-hover:text-white transition-all duration-300 mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{area.desc}</p>

                {/* 주요 업무 태그 */}
                <div className="flex flex-wrap gap-2">
                  {area.services.map((s) => (
                    <span key={s} className="text-xs bg-gray-50 text-gray-500 px-2.5 py-1 rounded-md">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-sm text-gray-400 group-hover:text-gold transition-colors">
                  자세히 보기
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/practice"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors"
            >
              전체 업무분야 보기
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-3">TESTIMONIALS</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight mb-4">
              의뢰인 후기
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              실제 의뢰인들이 전하는 정의법률사무소 이야기
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                {/* 별점 */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                {/* 후기 내용 */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.content}</p>
                {/* 의뢰인 정보 */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="font-semibold text-navy text-sm">{item.name}</div>
                  </div>
                  <span className="text-xs text-gold bg-gold/10 px-2.5 py-1 rounded-full font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-8">
            ※ 위 후기는 의뢰인 동의를 받아 게재되었으며, 개인정보 보호를 위해 일부 내용이 변경되었습니다.
          </p>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-medium mb-3">ABOUT US</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight mb-6">
                정의법률사무소를
                <br />
                소개합니다
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                정의법률사무소는 2004년 설립 이래, 오직 의뢰인의 권리 보호와 정의 실현이라는
                가치를 최우선으로 해왔습니다. 각 분야 전문 변호사들이 팀을 이루어 복잡한
                법률 문제에 대한 최적의 해결책을 제시합니다.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "대한변호사협회 우수 법률사무소 선정",
                  "분야별 전문 변호사 8명 상주",
                  "3,000건 이상의 상담, 95% 이상 승소율",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors"
              >
                더 알아보기
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1760124056883-732e7a5e2e68?w=800&q=80"
                alt="현대적인 오피스 건물"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold tracking-tight">20+</div>
                <div className="text-sm">년의 경험</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
            법률 문제, 혼자 고민하지 마세요
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            초기 상담은 무료입니다. 전문 변호사가 직접 상담하여
            <br className="hidden sm:block" />
            최적의 해결 방안을 안내해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-all text-lg"
            >
              무료 상담 신청하기
            </Link>
            <a
              href="tel:02-1234-5678"
              className="px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-lg"
            >
              02-1234-5678
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
