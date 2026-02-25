# CLAUDE.md - 정의법률사무소 웹사이트 프로젝트 가이드

## 프로젝트 개요
- **사이트명**: 정의법률사무소 (법률 사무소 홈페이지)
- **GitHub**: annazionpapa/lawyer-website (main 브랜치)
- **기술 스택**: Next.js 16.1.6 (App Router) + React 19 + TypeScript 5 + Tailwind CSS 4
- **폰트**: Pretendard (CDN, 한국어 최적화)
- **개발 서버**: `npm run dev` → http://localhost:3000

## 디자인 시스템

### 색상 테마 (globals.css @theme inline)
| 변수 | 색상 | 용도 |
|------|------|------|
| `--color-navy` | #1B2A4A | 주요 브랜드 색상 (진한 남색) |
| `--color-navy-light` | #2A3F6A | 호버 상태 |
| `--color-navy-dark` | #0F1A2E | 강조 |
| `--color-gold` | #C4A265 | 포인트 색상 (골드) |
| `--color-gold-light` | #D4B87A | 골드 호버 |
| `--color-cream` | #F8F6F1 | 배경색 |

### 반응형 Breakpoint
- 모바일: 기본 (< 640px)
- sm: 640px+
- md: 768px+
- lg: 1024px+

## 파일 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (Header + main + Footer)
│   ├── page.tsx            # 홈페이지 (히어로, 업무분야 카드, 고객후기, 회사소개)
│   ├── globals.css         # 테마 변수, 스크롤 애니메이션 CSS
│   ├── about/page.tsx      # 소개 페이지 (대표변호사, 연혁 타임라인, 사무실 정보)
│   ├── practice/page.tsx   # 업무분야 상세 (6개 분야, 앵커 링크)
│   ├── cases/
│   │   ├── page.tsx        # 성공사례 목록 (카테고리 필터)
│   │   └── [id]/page.tsx   # 성공사례 상세 + 상담신청 버튼
│   ├── contact/page.tsx    # 상담 신청 (폼 상단, 전화/이메일/방문 카드, 지도, FAQ)
│   ├── team/page.tsx       # 팀 소개
│   ├── privacy/page.tsx    # 개인정보처리방침
│   └── terms/page.tsx      # 이용약관
├── components/
│   ├── Header.tsx          # 네비게이션 (모바일: "메뉴"/"닫기" 텍스트 버튼)
│   ├── Footer.tsx          # 푸터 (© Since 2004)
│   ├── ScrollRevealCard.tsx # IntersectionObserver 스크롤 애니메이션
│   ├── FloatingCTA.tsx     # [미사용] 플로팅 버튼 (layout에서 제거됨)
│   └── MobileBottomCTA.tsx # [미사용] 하단 고정 CTA (layout에서 제거됨)
└── data/
    └── cases.ts            # 성공사례 데이터 (15개, 인터페이스 정의 포함)
```

## 카테고리 매핑

### 업무분야 → 성공사례 카테고리 연결
성공사례 상세 페이지에서 상담 신청 시 `?practice=` 파라미터로 연결:

```typescript
const categoryToPractice: Record<string, string> = {
  "민사": "민사소송",
  "형사": "형사소송",
  "이혼·가사": "이혼·가사",
  "부동산": "부동산",
  "기업법무": "기업법무",
  "행정": "행정소송",
};
```

### 업무분야 6개
1. 민사소송 (`#civil`) - 손해배상, 계약분쟁, 채권추심, 대여금반환
2. 형사소송 (`#criminal`) - 폭행상해, 사기횡령, 음주운전, 성범죄
3. 이혼·가사 (`#family`) - 협의재판이혼, 양육권, 재산분할, 상속
4. 부동산 (`#realestate`) - 매매계약, 임대차, 재개발, 명도소송
5. 기업법무 (`#corporate`) - 법인설립, 계약서검토, M&A, 지식재산권
6. 행정소송 (`#admin`) - 행정처분취소, 세무소송, 국가배상, 토지보상

## 주요 기능 및 UX 결정사항

### 적용된 기능
- **스크롤 애니메이션**: 홈 업무분야 카드가 뷰포트 진입 시 페이드인 + 아이콘/제목 골드색 변경 (ScrollRevealCard + globals.css)
- **상담 연결 흐름**: 성공사례 상세 → "비슷한 문제로 고민하고 계신가요?" 카드 → 카테고리별 상담 신청 링크
- **연락처 페이지**: 상담 폼이 최상단, 아래에 전화/이메일/방문 카드, 지도, FAQ 순서
- **URL 파라미터**: `/contact?practice=형사소송` → 폼에서 해당 분야 자동 선택
- **고객 후기**: 12개 항목 (별점 + 카테고리 태그 + 면책 문구)

### 제거된 기능 (사용자 결정)
- ~~모바일 하단 고정 CTA 바~~ → 제거 (MobileBottomCTA.tsx는 파일 존재하나 미임포트)
- ~~플로팅 전화/메시지 버튼~~ → 제거 (FloatingCTA.tsx는 파일 존재하나 미임포트)
- ~~햄버거 메뉴 (☰)~~ → "메뉴"/"닫기" 텍스트 버튼으로 변경

### 사용자 선호
- 푸터 연도: "© Since 2004" 사용 (매년 안 바뀌도록, 시작 연도는 불변)
- 상담 버튼은 꼭 필요한 위치에만 배치 (성공사례 상세 하단 등)
- 모바일 업무분야 상세에서 "상담신청 + 성공사례보기" 버튼은 가로 한 줄 배치
- 변경사항은 바로 GitHub에 push 필요 (사용자가 스마트폰으로 실시간 확인)

## 성공사례 데이터 (cases.ts)

- **총 15개** 성공사례
- **결과 유형 색상**: 승소(green), 무죄(blue), 합의(purple), 집행유예(orange), 자문완료(gray), 처분취소(teal), 감형(amber), 기각(red)
- **필드**: id, category, title, result, amount, year, summary, background, issues, strategy, outcome, lawyer, lawyerRole

## 홈페이지 통계
- 20년+ 경력
- 3,000건+ 상담
- 95% 승소율
- 500건+ 성공사례

## 알려진 이슈 및 해결 이력

| 이슈 | 원인 | 해결 |
|------|------|------|
| 모바일 연혁 항목 중복 | 홀수 인덱스 항목이 일반 div + md:hidden div에서 이중 렌더링 | 홀수 인덱스 블록에 `hidden md:block` 추가 |
| 모바일 업무분야 버튼 겹침 | flex-wrap으로 세로 배치됨 | flex (no wrap) + 모바일 텍스트/패딩 축소 |
| 브라우저 캐싱으로 변경사항 안 보임 | 브라우저 캐시 | Ctrl+Shift+R 강제 새로고침 필요 |

## 빌드 및 배포
```bash
npm run build    # 프로덕션 빌드
npm run dev      # 개발 서버 (포트 3000)
```
- 모든 페이지 정적 생성 (SSG)
- 성공사례 상세는 `generateStaticParams`로 정적 생성
