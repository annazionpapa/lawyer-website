import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | 정의법률사무소",
  description: "정의법률사무소 웹사이트 이용약관",
};

const sections = [
  {
    title: "제1조 (목적)",
    content:
      "이 약관은 정의법률사무소(이하 '사무소')가 운영하는 웹사이트(이하 '사이트')에서 제공하는 서비스의 이용조건 및 절차, 사무소와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.",
  },
  {
    title: "제2조 (정의)",
    content: `이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
1. "사이트"란 사무소가 서비스를 제공하기 위해 운영하는 인터넷 웹사이트(justice-law.co.kr)를 말합니다.
2. "이용자"란 사이트에 접속하여 이 약관에 따라 사무소가 제공하는 서비스를 이용하는 자를 말합니다.
3. "서비스"란 사이트를 통해 제공되는 법률 정보 안내, 상담 신청 접수 등 일체의 서비스를 말합니다.`,
  },
  {
    title: "제3조 (약관의 효력 및 변경)",
    content: `1. 이 약관은 사이트에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력을 발생합니다.
2. 사무소는 합리적인 사유가 발생할 경우 관련 법령에 위배되지 않는 범위에서 이 약관을 변경할 수 있으며, 변경된 약관은 사이트에 공지함으로써 효력을 발생합니다.
3. 이용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수 있습니다.`,
  },
  {
    title: "제4조 (서비스의 제공)",
    content: `사무소는 다음과 같은 서비스를 제공합니다.
1. 사무소 소개 및 업무분야 안내
2. 변호사 및 구성원 정보 제공
3. 성공사례 안내
4. 온라인 법률 상담 신청 접수
5. 기타 사무소가 정하는 서비스`,
  },
  {
    title: "제5조 (서비스의 제한)",
    content: `1. 사이트에 게시된 정보는 일반적인 법률 정보의 제공을 목적으로 하며, 구체적인 법률 자문에 해당하지 않습니다.
2. 사이트를 통한 상담 신청은 위임 계약의 체결을 의미하지 않으며, 변호사-의뢰인 관계는 별도의 위임 계약 체결 시 성립됩니다.
3. 상담 신청에 대한 회신은 영업일 기준으로 진행되며, 사안의 특성에 따라 회신 기간이 달라질 수 있습니다.`,
  },
  {
    title: "제6조 (이용자의 의무)",
    content: `이용자는 다음 행위를 하여서는 안 됩니다.
1. 타인의 개인정보를 도용하여 상담을 신청하는 행위
2. 사이트에 게시된 정보를 무단으로 복제·배포하는 행위
3. 사무소의 명예를 훼손하거나 업무를 방해하는 행위
4. 허위 사실을 기재하여 상담을 신청하는 행위
5. 기타 관련 법령에 위반되는 행위`,
  },
  {
    title: "제7조 (지적재산권)",
    content: `1. 사이트에 게시된 모든 콘텐츠(텍스트, 이미지, 디자인, 로고 등)에 대한 지적재산권은 사무소에 귀속됩니다.
2. 이용자는 사무소의 사전 서면 동의 없이 사이트의 콘텐츠를 상업적 목적으로 복제, 배포, 전송, 수정하거나 2차 저작물을 작성할 수 없습니다.`,
  },
  {
    title: "제8조 (면책조항)",
    content: `1. 사무소는 천재지변, 전쟁, 기간통신사업자의 서비스 중단 등 불가항력적인 사유로 서비스를 제공할 수 없는 경우 책임이 면제됩니다.
2. 사무소는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.
3. 사이트에 게시된 법률 정보를 바탕으로 이용자가 독자적으로 취한 행위에 대하여 사무소는 책임을 지지 않습니다. 구체적인 법률 문제는 반드시 전문 변호사와 상담하시기 바랍니다.`,
  },
  {
    title: "제9조 (개인정보보호)",
    content:
      "이용자의 개인정보 보호에 관한 사항은 별도의 「개인정보처리방침」에 따릅니다.",
  },
  {
    title: "제10조 (분쟁 해결)",
    content: `1. 사무소와 이용자 간에 발생한 분쟁에 대해서는 대한민국 법률을 적용합니다.
2. 서비스 이용과 관련하여 발생한 분쟁에 대한 소송은 서울중앙지방법원을 관할 법원으로 합니다.`,
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-navy">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium mb-3">TERMS OF SERVICE</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            이용약관
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            정의법률사무소 웹사이트 이용약관
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-6 mb-12">
            <p className="text-sm text-gray-500">
              시행일: 2024년 1월 1일 | 최종 수정일: 2024년 12월 1일
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-xl font-bold text-navy mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-400 mb-6">부칙: 이 약관은 2024년 1월 1일부터 시행합니다.</p>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="text-sm text-gold hover:text-gold-light transition-colors"
              >
                개인정보처리방침 보기 →
              </Link>
              <Link
                href="/"
                className="text-sm text-gray-400 hover:text-navy transition-colors"
              >
                홈으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
