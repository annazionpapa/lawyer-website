import Link from "next/link";
import { notFound } from "next/navigation";
import { cases, resultColors } from "@/data/cases";

const categoryToPractice: Record<string, string> = {
  "민사": "민사소송",
  "형사": "형사소송",
  "이혼·가사": "이혼·가사",
  "부동산": "부동산",
  "기업법무": "기업법무",
  "행정": "행정소송",
};

type Params = Promise<{ id: string }>;

export function generateStaticParams() {
  return cases.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
  const caseItem = cases.find((c) => c.id === id);
  if (!caseItem) return { title: "사례를 찾을 수 없습니다" };
  return {
    title: `${caseItem.title} | 정의법률사무소 성공사례`,
    description: caseItem.summary,
  };
}

export default async function CaseDetailPage({ params }: { params: Params }) {
  const { id } = await params;
  const caseItem = cases.find((c) => c.id === id);
  if (!caseItem) notFound();

  const relatedCases = cases
    .filter((c) => c.category === caseItem.category && c.id !== caseItem.id)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-navy">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            성공사례 목록으로
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-sm font-medium text-gold bg-gold/20 px-4 py-1.5 rounded-full">
              {caseItem.category}
            </span>
            <span
              className={`text-sm font-medium px-4 py-1.5 rounded-full ${
                resultColors[caseItem.result] || "bg-gray-100 text-gray-700"
              }`}
            >
              {caseItem.result}
            </span>
            {caseItem.amount && (
              <span className="text-sm font-medium text-white bg-white/10 px-4 py-1.5 rounded-full">
                {caseItem.amount}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6 leading-tight">
            {caseItem.title}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            {caseItem.summary}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-medium">{caseItem.lawyer} {caseItem.lawyerRole}</div>
              <div className="text-white/50 text-sm">{caseItem.year}년 수행</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* 사건 배경 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-navy">사건 배경</h2>
              </div>
              <p className="text-gray-600 leading-relaxed pl-11">
                {caseItem.background}
              </p>
            </div>

            {/* 주요 쟁점 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-navy">주요 쟁점</h2>
              </div>
              <ul className="space-y-3 pl-11">
                {caseItem.issues.map((issue, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-gold/10 text-gold rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-gray-600">{issue}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 변호 전략 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-navy">변호 전략</h2>
              </div>
              <p className="text-gray-600 leading-relaxed pl-11">
                {caseItem.strategy}
              </p>
            </div>

            {/* 결과 */}
            <div className="bg-gradient-to-r from-navy/5 to-gold/5 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-navy">결과</h2>
              </div>
              <p className="text-gray-700 leading-relaxed pl-11 font-medium">
                {caseItem.outcome}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Cases */}
      {relatedCases.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy tracking-tight mb-8">
              관련 사례
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCases.map((rc) => (
                <Link
                  key={rc.id}
                  href={`/cases/${rc.id}`}
                  className="group bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:border-gold/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
                        resultColors[rc.result] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {rc.result}
                    </span>
                    {rc.amount && (
                      <span className="text-xs text-navy/60">{rc.amount}</span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-navy mb-2 leading-snug group-hover:text-gold transition-colors line-clamp-2">
                    {rc.title}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {rc.lawyer} {rc.lawyerRole}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Disclaimer */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-xs text-gray-400 leading-relaxed">
              * 위 성공사례는 실제 사건을 바탕으로 작성되었으며, 의뢰인의 개인정보 보호를 위해
              일부 내용이 변경되었습니다. 각 사건의 결과는 개별 사안에 따라 다를 수 있으며,
              동일한 결과를 보장하지 않습니다.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-6">
            비슷한 법률 문제가 있으신가요?
          </h2>
          <p className="text-white/70 mb-8">
            전문 변호사가 직접 상담하여 최적의 해결 방안을 안내해드립니다.
          </p>
          <Link
            href={`/contact?practice=${encodeURIComponent(categoryToPractice[caseItem.category] || "")}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-lg"
          >
            무료 상담 신청하기
          </Link>
        </div>
      </section>
    </>
  );
}
