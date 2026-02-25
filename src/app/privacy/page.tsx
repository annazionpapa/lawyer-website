import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 정의법률사무소",
  description: "정의법률사무소 개인정보처리방침",
};

const sections = [
  {
    title: "1. 개인정보의 수집 항목 및 수집 방법",
    content: `정의법률사무소(이하 '사무소')는 법률 상담 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.

[필수 수집 항목]
- 성명, 연락처(휴대전화번호)
- 상담 분야, 상담 내용

[선택 수집 항목]
- 이메일 주소

[수집 방법]
- 웹사이트 온라인 상담 신청 양식
- 전화 상담
- 방문 상담`,
  },
  {
    title: "2. 개인정보의 수집 및 이용 목적",
    content: `사무소는 수집한 개인정보를 다음의 목적을 위해 이용합니다.

1. 법률 상담 접수 및 회신
2. 상담 일정 조율 및 안내
3. 사건 수임 시 위임 계약 체결
4. 상담 이력 관리 및 서비스 품질 향상
5. 법률 정보 및 사무소 소식 안내 (이메일 수집 시, 별도 동의 필요)`,
  },
  {
    title: "3. 개인정보의 보유 및 이용 기간",
    content: `사무소는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 다만, 다음의 경우에는 아래 명시한 기간 동안 보유합니다.

1. 상담 완료 후 재상담 대비: 상담 완료 후 3년
2. 사건 수임의 경우: 사건 종결 후 5년 (변호사법 제28조에 따른 보존 의무)
3. 전자상거래 등에서의 소비자 보호에 관한 법률에 의한 보존
   - 계약 또는 청약철회 등에 관한 기록: 5년
   - 소비자의 불만 또는 분쟁처리에 관한 기록: 3년`,
  },
  {
    title: "4. 개인정보의 제3자 제공",
    content: `사무소는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.

1. 이용자가 사전에 동의한 경우
2. 법령의 규정에 의하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
3. 사건 수임 시 법원, 검찰 등 관계 기관에 소송 수행을 위해 필요한 경우`,
  },
  {
    title: "5. 개인정보의 파기 절차 및 방법",
    content: `사무소는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.

[파기 절차]
수집된 개인정보는 목적 달성 후 별도의 DB에 옮겨져 내부 방침 및 관련 법령에 따라 일정 기간 저장된 후 파기됩니다.

[파기 방법]
- 전자적 파일 형태의 정보: 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제
- 종이에 출력된 개인정보: 분쇄기로 분쇄하거나 소각하여 파기`,
  },
  {
    title: "6. 정보주체의 권리·의무 및 행사 방법",
    content: `이용자(정보주체)는 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.

1. 개인정보 열람 요구
2. 개인정보에 오류 등이 있을 경우 정정 요구
3. 개인정보 삭제 요구
4. 개인정보 처리 정지 요구

위 권리 행사는 사무소에 대해 서면, 전화, 이메일 등을 통하여 하실 수 있으며, 사무소는 이에 대해 지체 없이 조치하겠습니다.`,
  },
  {
    title: "7. 개인정보의 안전성 확보 조치",
    content: `사무소는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.

1. 관리적 조치: 내부관리계획 수립·시행, 직원 개인정보보호 교육
2. 기술적 조치: 개인정보처리시스템 접근 권한 관리, 보안 프로그램 설치, 개인정보의 암호화
3. 물리적 조치: 전산실, 자료보관실 등의 접근 통제`,
  },
  {
    title: "8. 쿠키(Cookie)의 운영",
    content: `사무소는 이용자에게 최적화된 서비스를 제공하기 위해 쿠키를 사용할 수 있습니다.

[쿠키의 사용 목적]
이용자의 접속 빈도, 방문 시간 등을 분석하여 서비스 개선에 활용

[쿠키의 설정 거부 방법]
이용자는 웹 브라우저의 옵션 설정을 통해 쿠키 허용, 차단 등의 설정을 할 수 있습니다. 다만, 쿠키 저장을 거부할 경우 일부 서비스 이용에 어려움이 있을 수 있습니다.`,
  },
  {
    title: "9. 개인정보 보호 책임자",
    content: `사무소는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다.

[개인정보 보호 책임자]
- 성명: 김정의 (대표변호사)
- 연락처: 02-1234-5678
- 이메일: privacy@justice-law.co.kr

이용자는 사무소의 서비스를 이용하면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호 책임자에게 문의하실 수 있습니다.`,
  },
  {
    title: "10. 권익침해 구제 방법",
    content: `이용자는 개인정보 침해로 인한 구제를 받기 위하여 다음 기관에 분쟁해결이나 상담 등을 신청할 수 있습니다.

1. 개인정보분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr)
2. 개인정보침해신고센터: (국번없이) 118 (privacy.kisa.or.kr)
3. 대검찰청 사이버수사과: (국번없이) 1301 (www.spo.go.kr)
4. 경찰청 사이버수사국: (국번없이) 182 (ecrm.cyber.go.kr)`,
  },
  {
    title: "11. 개인정보처리방침의 변경",
    content:
      "이 개인정보처리방침은 법령, 정책 또는 보안기술의 변경에 따라 내용의 추가, 삭제 및 수정이 있을 시에는 변경사항의 시행 7일 전부터 사이트를 통해 변경 이유 및 내용을 공지하도록 하겠습니다.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-navy">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium mb-3">PRIVACY POLICY</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            개인정보처리방침
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            정의법률사무소는 이용자의 개인정보를 소중히 보호합니다
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold/5 border border-gold/20 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="font-semibold text-navy mb-1">개인정보보호 안내</p>
                <p className="text-sm text-gray-600">
                  정의법률사무소는 「개인정보 보호법」에 따라 이용자의 개인정보 보호 및 권익을 보호하기 위해
                  아래와 같이 개인정보처리방침을 수립·공개합니다.
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  시행일: 2024년 1월 1일 | 최종 수정일: 2024년 12월 1일
                </p>
              </div>
            </div>
          </div>

          {/* 목차 */}
          <div className="bg-gray-50 rounded-xl p-6 mb-12">
            <h2 className="font-bold text-navy mb-4">목차</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sections.map((section, idx) => (
                <a
                  key={idx}
                  href={`#section-${idx}`}
                  className="text-sm text-gray-500 hover:text-gold transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {sections.map((section, idx) => (
              <div key={idx} id={`section-${idx}`} className="scroll-mt-28">
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
            <p className="text-sm text-gray-400 mb-6">
              본 개인정보처리방침은 2024년 1월 1일부터 적용됩니다.
            </p>
            <div className="flex gap-4">
              <Link
                href="/terms"
                className="text-sm text-gold hover:text-gold-light transition-colors"
              >
                이용약관 보기 →
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
