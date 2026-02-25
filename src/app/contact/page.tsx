"use client";

import { useState, useEffect } from "react";

const practiceOptions = [
  "민사소송",
  "형사소송",
  "이혼·가사",
  "부동산",
  "기업법무",
  "행정소송",
  "기타",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    practice: "",
    content: "",
    privacy: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const practice = params.get("practice");
    if (practice && practiceOptions.includes(practice)) {
      setFormData((prev) => ({ ...prev, practice }));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 서비스에서는 API 연동
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium mb-3">CONTACT US</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            상담신청
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            초기 상담은 무료입니다. 부담 없이 문의해주세요.
          </p>
        </div>
      </section>

      {/* Contact Form - 최상단 */}
      <section id="form" className="py-24 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy tracking-tight mb-4">
              온라인 상담 신청
            </h2>
            <p className="text-gray-500">
              아래 양식을 작성해주시면 담당 변호사가 영업일 기준 24시간 내 연락드립니다
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-navy mb-4">
                상담 신청이 완료되었습니다
              </h3>
              <p className="text-gray-600 mb-2">
                담당 변호사가 영업일 기준 24시간 내 연락드립니다.
              </p>
              <p className="text-gray-400 text-sm">
                급한 상담이 필요하시면 02-1234-5678로 전화주세요.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 이름 */}
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                {/* 연락처 */}
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    연락처 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 이메일 */}
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                {/* 상담 분야 */}
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    상담 분야 <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all bg-white"
                    value={formData.practice}
                    onChange={(e) =>
                      setFormData({ ...formData, practice: e.target.value })
                    }
                  >
                    <option value="">선택해주세요</option>
                    {practiceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 상담 내용 */}
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  상담 내용 <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="상담하고 싶은 내용을 자유롭게 적어주세요. 구체적으로 적어주실수록 정확한 상담이 가능합니다."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all resize-none"
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                />
              </div>

              {/* 개인정보 동의 */}
              <div className="bg-gray-50 rounded-xl p-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-gold accent-gold"
                    checked={formData.privacy}
                    onChange={(e) =>
                      setFormData({ ...formData, privacy: e.target.checked })
                    }
                  />
                  <div>
                    <span className="text-sm font-medium text-navy">
                      개인정보 수집 및 이용에 동의합니다{" "}
                      <span className="text-red-500">*</span>
                    </span>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      수집 항목: 이름, 연락처, 이메일 | 수집 목적: 법률 상담 접수 및 회신
                      | 보유 기간: 상담 완료 후 3년 | 동의를 거부할 수 있으나, 거부 시
                      상담 신청이 제한됩니다.
                    </p>
                  </div>
                </label>
              </div>

              {/* 제출 버튼 */}
              <button
                type="submit"
                className="w-full py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-lg"
              >
                무료 상담 신청하기
              </button>

              <p className="text-center text-xs text-gray-400">
                * 접수 후 영업일 기준 24시간 내 담당 변호사가 연락드립니다.
                <br />
                급한 상담은{" "}
                <a href="tel:02-1234-5678" className="text-gold hover:underline">
                  02-1234-5678
                </a>
                로 전화주세요.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* 다른 상담 방법 */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-navy tracking-tight mb-3">
              다른 상담 방법
            </h2>
            <p className="text-gray-500 text-sm">
              온라인 외에도 다양한 방법으로 상담하실 수 있습니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="tel:02-1234-5678"
              className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center text-gold mx-auto mb-4 group-hover:bg-gold group-hover:text-white transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-navy mb-2">전화 상담</h3>
              <p className="text-gold font-semibold mb-1">02-1234-5678</p>
              <p className="text-gray-400 text-sm">평일 09:00 ~ 18:00</p>
            </a>
            <a
              href="mailto:contact@justice-law.co.kr"
              className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center text-gold mx-auto mb-4 group-hover:bg-gold group-hover:text-white transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-navy mb-2">이메일 상담</h3>
              <p className="text-gold font-semibold mb-1">contact@justice-law.co.kr</p>
              <p className="text-gray-400 text-sm">24시간 접수 가능</p>
            </a>
            <a
              href="#map"
              className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center text-gold mx-auto mb-4 group-hover:bg-gold group-hover:text-white transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-navy mb-2">방문 상담</h3>
              <p className="text-gold font-semibold mb-1">서울 서초구 서초대로 250</p>
              <p className="text-gray-400 text-sm">사전 예약 필수</p>
            </a>
          </div>
        </div>
      </section>

      {/* Map & Visit Info */}
      <section id="map" className="py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy tracking-tight mb-4">
              찾아오시는 길
            </h2>
            <p className="text-gray-500">
              서울 서초구 서초대로 250, 정의빌딩 12층
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 지도 */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.354!2d127.0016!3d37.4917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca159e0a2a271%3A0x6a0e85f4d4b1c8b0!2z7ISc7LSI64yA66GcIDI1MA!5e0!3m2!1sko!2skr!4v1"
                className="w-full h-full min-h-[400px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="정의법률사무소 위치"
              />
            </div>

            {/* 방문 안내 */}
            <div className="space-y-6">
              {/* 사전 예약 필수 경고 */}
              <div className="bg-gold/10 border border-gold/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-navy text-lg">사전 예약 필수</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  방문 상담은 <strong className="text-navy">사전 예약제</strong>로 운영됩니다.
                  예약 없이 방문하시면 상담이 어려울 수 있으니,
                  반드시 전화 또는 온라인으로 먼저 예약해주세요.
                </p>
              </div>

              {/* 교통편 안내 */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 space-y-4">
                <h3 className="font-bold text-navy">교통 안내</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-bold bg-green-500 text-white px-2 py-0.5 rounded mt-0.5 shrink-0">지하철</span>
                    <p className="text-gray-600 text-sm">2호선 서초역 3번 출구 도보 5분</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-bold bg-blue-500 text-white px-2 py-0.5 rounded mt-0.5 shrink-0">버스</span>
                    <p className="text-gray-600 text-sm">서초역 정류장 하차 (140, 401, 406)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-bold bg-gray-500 text-white px-2 py-0.5 rounded mt-0.5 shrink-0">주차</span>
                    <p className="text-gray-600 text-sm">건물 지하 주차장 이용 (2시간 무료)</p>
                  </div>
                </div>
              </div>

              {/* 운영시간 */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-navy mb-3">운영시간</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">평일</span>
                    <span className="text-navy font-medium">09:00 ~ 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">토요일</span>
                    <span className="text-navy font-medium">사전 예약 시 상담 가능</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">일요일·공휴일</span>
                    <span className="text-gray-400">휴무</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy tracking-tight mb-4">
              자주 묻는 질문
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "초기 상담 비용은 얼마인가요?",
                a: "초기 상담은 무료입니다. 전화, 이메일, 방문 상담 모두 첫 상담은 비용 없이 진행됩니다. 사건 수임 시 별도의 수임료가 발생하며, 이는 사건의 종류와 난이도에 따라 달라집니다.",
              },
              {
                q: "상담 후 반드시 사건을 맡겨야 하나요?",
                a: "아닙니다. 상담 후 사건 수임 여부는 전적으로 의뢰인의 선택입니다. 상담을 통해 법률적 조언을 드리고, 의뢰인이 충분히 고민하신 후 결정하실 수 있습니다.",
              },
              {
                q: "상담 내용은 비밀이 보장되나요?",
                a: "네, 변호사법에 따라 상담 내용은 철저히 비밀이 보장됩니다. 변호사에게는 법률상 비밀유지의무가 있으며, 상담 내용이 외부에 공개되는 일은 절대 없습니다.",
              },
              {
                q: "저녁이나 주말에도 상담이 가능한가요?",
                a: "사전 예약을 해주시면 저녁 시간이나 주말 상담도 가능합니다. 전화(02-1234-5678) 또는 온라인 상담 신청 시 희망 시간을 기재해주시면 일정을 조율해드립니다.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-3 flex items-start gap-3">
                  <span className="text-gold tracking-tight">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
