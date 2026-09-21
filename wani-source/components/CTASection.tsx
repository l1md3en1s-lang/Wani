import { DownloadButton } from "./DownloadButton";
export function CTASection() {
  return <section id="download" className="shell section" aria-labelledby="cta-title"><div className="cta-panel"><h2 id="cta-title">딴짓은 줄이고,<br className="sm:hidden" /> 집중은 키우세요<span className="red-text">.</span></h2><p>와니와 함께 작업 흐름을 지켜보세요.</p><DownloadButton>지금 와니 다운로드</DownloadButton></div></section>;
}
