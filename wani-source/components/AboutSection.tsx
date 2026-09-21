import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
export function AboutSection() {
  return <section id="about" className="section shell about-grid" aria-labelledby="about-title"><div className="about-art"><Image src="/wani-fire.png" width={1024} height={559} sizes="(max-width: 767px) 90vw, 45vw" alt="딴짓을 발견하고 입에서 불을 뿜는 빨간 와니" className="fire-image" /></div><div className="about-copy"><h2 id="about-title">와니는 귀엽지만<br />봐주진 않습니다<span className="red-text">.</span></h2><p className="body-copy">공부하려고 앉았는데, 어느새 피드를 내리고 있나요? 와니는 공부와 작업 중 흐트러진 순간을 붙잡아주는 데스크톱 집중 친구입니다.</p><p className="body-copy mt-4">딴짓을 시작하면 빠르게 불을 뿜어 경고하고, 설정한 사이트를 강제로 닫아 집중 모드로 돌려놓습니다. 귀엽고 직관적인 반응으로, 해야 할 일에 다시 몰입하도록 도와줍니다.</p><a href="#features" className="text-link mt-7">와니가 일하는 방법 <ArrowUpRight size={18} aria-hidden="true" /></a></div></section>;
}
