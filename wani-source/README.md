# 와니 공식 랜딩 페이지

Next.js App Router + TypeScript + Tailwind CSS 4로 만든 한국어 반응형 웹사이트입니다. 제공된 두 캐릭터 원본을 사용합니다. 실제 집중 차단 프로그램은 포함하지 않는 소개 웹사이트입니다.

## 실행

Node.js 20.9 이상과 pnpm을 사용합니다. 검증 환경은 Node.js 24입니다.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

http://localhost:3000 에서 확인합니다.

```sh
pnpm typecheck
pnpm build
pnpm start
```

## Vercel 배포

1. 이 폴더의 소스를 GitHub 저장소에 올립니다. `node_modules`와 `.next`는 제외합니다.
2. Vercel에서 해당 저장소를 Import하고 Framework Preset을 **Next.js**로 지정합니다. 프로젝트가 하위 폴더라면 Root Directory를 이 폴더로 설정합니다.
3. 환경 변수 `NEXT_PUBLIC_SITE_URL`에 최종 사이트 주소(예: `https://wani.example.com`)를 설정합니다. 미설정 시 Vercel의 프로덕션 도메인을 사용합니다.
4. 실제 문의 이메일이 있으면 `NEXT_PUBLIC_CONTACT_EMAIL`을 설정합니다. 미설정 시 문의 버튼은 준비 중 안내를 표시합니다.
5. Deploy를 누릅니다. 커스텀 빌드/출력 설정은 필요하지 않습니다.

## 출시 시 변경할 곳

- `lib/site.ts`의 `downloadUrl`: 현재 `/download`. 실제 HTTPS 설치 파일 URL로 바꾸면 모든 다운로드 버튼에 반영됩니다.
- `public/wani.png`: 초록 와니 원본. `public/wani-fire.png`: 불을 뿜는 와니 원본.
- `app/layout.tsx`: 제목, 설명, 한국어 Open Graph 및 Twitter 메타데이터. 실제 도메인은 환경 변수로 지정합니다.
- `NEXT_PUBLIC_CONTACT_EMAIL`: 문의 주소. 빌드 시 반영되므로 변경 후 재배포합니다.

다운로드 준비 페이지에는 `noindex`를 적용했습니다. 출시 후 실제 파일을 연결하면 이 임시 경로는 삭제해도 됩니다. 설치 파일, 지원 OS, 요금 등 확인되지 않은 서비스 정보는 표시하지 않습니다.

## 파일 구조

```text
app/
  page.tsx                 단일 페이지 랜딩
  layout.tsx               언어·SEO·Open Graph
  globals.css              Tailwind 4 설정·디자인·반응형·모션
  icon.svg                 파비콘
  download/page.tsx        임시 다운로드 안내
components/
  Header.tsx               반응형 메뉴·Escape 닫기
  HeroSection.tsx
  AboutSection.tsx
  FeaturesSection.tsx
  CTASection.tsx
  Footer.tsx               문의 대화상자 또는 이메일
  DownloadButton.tsx       공통 CTA
lib/site.ts                다운로드 URL·브랜드 설정
public/wani.png
public/wani-fire.png
next.config.ts
postcss.config.mjs
tsconfig.json
package.json
pnpm-lock.yaml
.env.example
```

Tailwind CSS 4는 `app/globals.css`의 `@import`와 `@theme`, `postcss.config.mjs`로 설정합니다. 별도 `tailwind.config.ts`가 필요하지 않습니다.

## 접근성과 성능

의미 있는 HTML 섹션, 본문 건너뛰기 링크, 키보드 포커스, 모바일 메뉴 상태, 이미지 대체 텍스트, 네이티브 문의 대화상자, reduced-motion 설정을 제공합니다. `next/image`가 캐릭터를 최적화하고 첫 화면 이미지만 우선 로드합니다. 외부 폰트 요청 없이 시스템 한국어 산세리프를 사용합니다.

첨부 캐릭터는 변경 없이 원본 그대로 포함했습니다. 문의와 다운로드는 실제 서비스 정보가 준비되면 위 설정을 교체하세요.
