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

const contactMethods = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "전화 상담",
    info: "02-1234-5678",
    desc: "평일 09:00 ~ 18:00",
    action: "tel:02-1234-5678",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "이메일 상담",
    info: "contact@justice-law.co.kr",
    desc: "24시간 접수 가능",
    action: "mailto:contact@justice-law.co.kr",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "방문 상담",
    info: "서울 서초구 서초대로 250",
    desc: "사전 예약 필수",
    action: "#",
  },
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

      {/* Contact Methods */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.action}
                className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center text-gold mx-auto mb-4 group-hover:bg-gold group-hover:text-white transition-all">
                  {method.icon}
                </div>
                <h3 className="font-bold text-navy mb-2">{method.title}</h3>
                <p className="text-gold font-semibold mb-1">{method.info}</p>
                <p className="text-gray-400 text-sm">{method.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
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
