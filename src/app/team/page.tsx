import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "구성원 소개 | 정의법률사무소",
  description: "정의법률사무소의 전문 변호사들을 소개합니다. 각 분야 최고의 전문가가 의뢰인을 위해 일합니다.",
};

const lawyers = [
  {
    name: "김정의",
    title: "대표변호사",
    specialty: "민사소송 · 기업법무",
    education: [
      "서울대학교 법학과 졸업",
      "서울대학교 법학전문대학원 졸업",
      "사법시험 제45회 합격",
    ],
    career: [
      "前 서울중앙지방법원 판사",
      "前 대형 로펌 파트너 변호사",
      "대한변호사협회 민사법 분과위원",
      "서울지방변호사회 이사",
    ],
    image: "/images/team/kim.jpg?v=2",
  },
  {
    name: "이현수",
    title: "파트너변호사",
    specialty: "형사소송",
    education: [
      "고려대학교 법학과 졸업",
      "고려대학교 법학전문대학원 졸업",
      "변호사시험 제2회 합격",
    ],
    career: [
      "前 서울중앙지검 검사",
      "형사 전문 변호사 인증",
      "대한변호사협회 형사법 분과위원",
    ],
    image: "/images/team/lee.jpg",
  },
  {
    name: "박서연",
    title: "파트너변호사",
    specialty: "이혼·가사",
    education: [
      "연세대학교 법학과 졸업",
      "연세대학교 법학전문대학원 졸업",
      "변호사시험 제3회 합격",
    ],
    career: [
      "가사 전문 변호사 인증",
      "여성가족부 법률자문위원",
      "서울가정법원 조정위원",
    ],
    image: "/images/team/park.jpg",
  },
  {
    name: "최민호",
    title: "파트너변호사",
    specialty: "부동산 · 건설",
    education: [
      "성균관대학교 법학과 졸업",
      "성균관대학교 법학전문대학원 졸업",
      "변호사시험 제4회 합격",
    ],
    career: [
      "부동산 전문 변호사 인증",
      "대한건설협회 자문변호사",
      "서울시 도시계획위원회 위원",
    ],
    image: "/images/team/choi.jpg",
  },
  {
    name: "정예진",
    title: "수석변호사",
    specialty: "기업법무 · M&A",
    education: [
      "서울대학교 경영학과 졸업",
      "서울대학교 법학전문대학원 졸업",
      "변호사시험 제5회 합격",
    ],
    career: [
      "前 대형 로펌 기업법무팀",
      "중소벤처기업부 법률자문위원",
      "스타트업 법률 자문 다수",
    ],
    image: "/images/team/jung.jpg",
  },
  {
    name: "한승우",
    title: "수석변호사",
    specialty: "행정소송 · 세무",
    education: [
      "고려대학교 행정학과 졸업",
      "고려대학교 법학전문대학원 졸업",
      "변호사시험 제4회 합격",
    ],
    career: [
      "前 국세청 법무담당관실",
      "행정법 전문 변호사 인증",
      "한국세무사회 자문변호사",
    ],
    image: "/images/team/han.jpg",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium mb-3">OUR TEAM</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            구성원 소개
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            각 분야 최고의 전문가가 의뢰인을 위해 일합니다
          </p>
        </div>
      </section>

      {/* Representative Lawyer (Featured) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <img
                src={lawyers[0].image}
                alt={lawyers[0].name}
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover object-top"
              />
              <div className="absolute -bottom-4 -right-4 bg-gold text-white px-6 py-3 rounded-xl shadow-lg">
                <div className="font-bold">{lawyers[0].title}</div>
              </div>
            </div>
            <div>
              <p className="text-gold font-medium mb-2">{lawyers[0].specialty}</p>
              <h2 className="text-4xl font-bold text-navy tracking-tight mb-2">
                {lawyers[0].name}
              </h2>
              <p className="text-gray-400 mb-8">{lawyers[0].title}</p>

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-navy mb-4 uppercase tracking-wider">
                  학력
                </h3>
                <ul className="space-y-2">
                  {lawyers[0].education.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-navy mb-4 uppercase tracking-wider">
                  주요 경력
                </h3>
                <ul className="space-y-2">
                  {lawyers[0].career.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-cream rounded-xl">
                <p className="text-gray-600 italic leading-relaxed">
                  &ldquo;의뢰인의 이야기에 귀 기울이고, 법률적 지식과 경험을 바탕으로
                  최선의 결과를 만들어가겠습니다. 어려운 법률 문제도 함께라면
                  해결할 수 있습니다.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Other Lawyers Grid */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-navy tracking-tight">전문 변호사</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lawyers.slice(1).map((lawyer) => (
              <div
                key={lawyer.name}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-navy">{lawyer.name}</h3>
                    <span className="text-xs text-gold bg-gold/10 px-3 py-1 rounded-full">
                      {lawyer.title}
                    </span>
                  </div>
                  <p className="text-gold text-sm mb-4">{lawyer.specialty}</p>

                  <div className="mb-3">
                    <p className="text-xs font-semibold text-navy mb-2 uppercase tracking-wider">학력</p>
                    <div className="space-y-1">
                      {lawyer.education.map((item) => (
                        <p key={item} className="text-gray-500 text-xs flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-gold rounded-full shrink-0" />
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-navy mb-2 uppercase tracking-wider">주요 경력</p>
                    <div className="space-y-1">
                      {lawyer.career.map((item) => (
                        <p key={item} className="text-gray-500 text-xs flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-gray-300 rounded-full shrink-0" />
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy tracking-tight mb-6">
            전문 변호사에게 직접 상담 받으세요
          </h2>
          <p className="text-gray-600 mb-8">
            분야별 전문 변호사가 의뢰인의 상황에 맞는 최적의 법률 자문을 제공합니다.
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
