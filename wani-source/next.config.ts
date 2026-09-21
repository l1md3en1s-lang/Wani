import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  poweredByHeader: false,
  // 제한된 로컬 실행 환경에서만 사용합니다. Vercel은 기본 빌드 방식을 사용합니다.
  ...(process.env.WANI_LOCAL_WORKERS === "1" ? { experimental: { workerThreads: true, cpus: 2, useTypeScriptCli: false } } : {}),
};
export default nextConfig;
