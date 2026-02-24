"use client";

import Link from "next/link";
import { useState } from "react";
import { cases, categories, resultColors } from "@/data/cases";

export default function CasesPage() {
  const [activeCategory, setActiveCategory] = useState("전체");

  const filteredCases =
    activeCategory === "전체"
      ? cases
      : cases.filter((c) => c.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium mb-3">SUCCESS CASES</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            성공사례
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            다양한 분야에서 의뢰인의 권리를 지켜온 주요 사례들입니다
          </p>
          <div className="mt-8 flex items-center justify-center gap-8 text-white/90">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">500+</div>
              <div className="text-sm text-white/60 mt-1">누적 성공사례</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">95%</div>
              <div className="text-sm text-white/60 mt-1">승소율</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">20년</div>
              <div className="text-sm text-white/60 mt-1">업력</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-40 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "bg-navy text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
                {cat !== "전체" && (
                  <span className="ml-1.5 text-xs opacity-60">
                    {cases.filter((c) => c.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <p className="text-sm text-gray-400 mb-8">
            총 <span className="text-navy font-semibold">{filteredCases.length}</span>건의 사례
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCases.map((caseItem) => (
              <Link
                key={caseItem.id}
                href={`/cases/${caseItem.id}`}
                className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:border-gold/20 transition-all duration-300 block"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                    {caseItem.category}
                  </span>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      resultColors[caseItem.result] || "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {caseItem.result}
                  </span>
                  {caseItem.amount && (
                    <span className="text-xs font-medium text-navy bg-navy/5 px-3 py-1 rounded-full">
                      {caseItem.amount}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-navy mb-3 leading-snug group-hover:text-gold transition-colors">
                  {caseItem.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {caseItem.summary}
                </p>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {caseItem.year} · 담당: {caseItem.lawyer} {caseItem.lawyerRole}
                  </span>
                  <span className="text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    자세히 보기
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            전문 변호사가 직접 상담하여 사안에 맞는 최적의 전략을 제시해드립니다.
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
