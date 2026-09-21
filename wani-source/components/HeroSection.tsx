import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { DownloadButton } from "./DownloadButton";
export function HeroSection() {
  return <section className="hero shell" aria-labelledby="hero-title"><div className="hero-copy">
    <div className="eyebrow">당신의 작고 뜨거운 집중 친구</div>
    <h1 id="hero-title">딴 짓하면<br /><span>태워버립니다</span><span className="headline-dot">.</span></h1>
    <p className="hero-subtitle">귀여운 얼굴에, 그렇지 못한 집중력.</p>
    <p className="body-copy">와니는 공부와 작업에 집중할 수 있도록 도와주는 귀여운 집중 보조 프로그램입니다. 인스타그램이나 불필요한 딴짓 사이트에 빠지려는 순간, 와니가 빠르게 반응해 집중력을 되찾아줍니다.</p>
    <div className="hero-actions mt-8"><DownloadButton /><a className="feature-button" href="#features">기능 보기 <ArrowUpRight size={18} aria-hidden="true" /></a></div>
  </div><div className="hero-art" role="img" aria-label="처음에는 꽃을 들고 있다가 2초 뒤 불을 뿜는 와니">
    <Image className="wani-hero wani-idle" src="/wani.png" width={1188} height={1056} priority sizes="(max-width: 767px) 92vw, 53vw" alt="" />
    <Image className="wani-hero wani-fire" src="/wani-fire.png" width={1024} height={559} priority sizes="(max-width: 767px) 92vw, 53vw" alt="" aria-hidden="true" />
  </div></section>;
}
