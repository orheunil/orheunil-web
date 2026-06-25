# orheunil-web

옳은일 공식 웹사이트입니다. Next.js App Router 기반으로 제작되었으며, 한국어/영어 다국어 지원, 회사/기술/서비스/솔루션/뉴스/IR/FAQ/문의 페이지로 구성되어 있습니다.

## 주요 기능

- 다국어 지원
- 회사 소개, 기술 소개, 서비스, 솔루션, 뉴스, IR, FAQ, 문의 페이지
- 문의 폼 메일 발송
- PDF IR 자료 다운로드

## 프로젝트 구조

```text
src
├── app                 # Next.js App Router 페이지, 레이아웃, API
│   ├── [lang]          # ko/en 다국어 라우트
│   └── api/email       # 문의 메일 발송 API
├── components          # 레이아웃, 섹션, UI 컴포넌트
├── contants            # 뉴스, FAQ, 약관 등 정적 데이터
├── hooks               # 공통 React hooks
├── locales             # ko/en 번역 리소스
├── styles              # 공통 스타일 토큰
├── types               # 공통 타입
└── utils               # i18n, 정규식 등 유틸
```

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.example`을 참고해 `.env`을 생성합니다.

필요한 환경 변수는 다음과 같습니다.

```bash
NEXT_PUBLIC_SITE_URL="사이트 URL"

NEXT_PUBLIC_GOOGLE_SEARCH_VERIFICATION="구글서치콘솔 content 코드"
NEXT_PUBLIC_NAVER_SEARCH_VERIFICATION="네이버서어드바이저 content 코드"

MAIL_SERVICE="이메일 전송 사이트(gmail)"
SEND_ADDRESS="전송 이메일"
SEND_PASSWORD="전송 이메일 앱 비밀번호"
RECEIVE_ADDRESS="수신 이메일"
```

### 3. 개발 서버 실행

```bash
npm run dev
```

## 사용 가능한 스크립트

```bash
npm run dev
```

개발 서버를 실행합니다.

```bash
npm run build
```

프로덕션 빌드를 생성합니다.

```bash
npm run start
```

빌드된 프로덕션 서버를 실행합니다.

```bash
npm run lint
```

ESLint를 실행합니다.

## CI/CD

이 프로젝트는 팀 레포지토리에 원본 코드가 있고, 개인 레포지토리로 포크한 뒤 Vercel에 연결해 배포합니다.

운영 흐름은 다음과 같습니다.

1. 팀 레포지토리의 변경 사항을 기준으로 개인 포크 레포지토리를 동기화합니다.
2. 개인 포크 레포지토리에서 GitHub Actions workflow를 실행합니다.
3. workflow는 수동 실행 또는 매일 자정 스케줄로 실행됩니다.
4. 개인 포크 레포지토리에 변경 사항이 반영되면 Vercel이 연결된 브랜치를 감지해 자동 배포합니다.

GitHub Actions 실행 방식:

- 수동 실행: GitHub Actions 탭에서 대상 workflow를 선택한 뒤 `Run workflow`로 실행합니다.
- 자동 실행: 매일 자정에 예약된 schedule workflow가 실행되어 포크 동기화 및 배포 트리거 흐름을 수행합니다.

Vercel 배포 방식:

- 개인 포크 레포지토리를 Vercel 프로젝트에 연결합니다.
- Vercel에 필요한 환경 변수를 등록합니다.
- 연결된 배포 브랜치에 변경 사항이 push되면 Vercel이 자동으로 빌드 및 배포합니다.

## 다국어 관리

번역 리소스는 `src/locales` 아래에 언어별 JSON 파일로 관리합니다.

```text
src/locales
├── en
└── ko
```

새 문구를 추가할 때는 한국어와 영어 리소스를 함께 갱신해야 합니다.
