import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
export const metadata: Metadata = { title: "다운로드 준비 중", robots: { index: false, follow: true } };
export default function DownloadPage() { return <><Header /><main id="main" className="download-page shell"><Image src="/wani.png" width={238} height={211} alt="꽃을 들고 기다리는 와니" priority /><p className="section-kicker">WANI IS GETTING READY</p><h1>와니가 출동 준비 중이에요.</h1><p>아직 설치 파일은 공개되지 않았어요.<br />준비가 끝나면 이곳에서 다운로드할 수 있습니다.</p><a className="download-button" href="/">와니 소개로 돌아가기</a></main><Footer /></>; }
