import { Flame, ScanLine, Flower2 } from "lucide-react";
const features = [
  { number: "01", Icon: Flame, tag: "딴짓은 짧게", title: "딴 짓 못하게!", description: "인스타그램, SNS, 불필요한 웹서핑처럼 집중을 흐리는 행동을 감지하면 와니가 즉시 반응합니다. 경고와 사이트 차단으로 한눈팔 틈 없이 흐름을 붙잡아줍니다.", color: "red" },
  { number: "02", Icon: ScanLine, tag: "몰입은 깊게", title: "일에 집중하게!", description: "과제, 문서 작업, PPT 제작, 공부 시간에 몰입할 수 있도록 작업 흐름을 지켜줍니다. 해야 할 일에 더 오래, 더 깊게 집중할 수 있습니다.", color: "green" },
  { number: "03", Icon: Flower2, tag: "함께라서 즐겁게", title: "다마고치처럼 스트레스 해소", description: "와니는 함께 집중 습관을 만들어가는 캐릭터입니다. 다마고치처럼 귀엽고 친숙한 상호작용으로 부담은 줄이고, 동기부여는 높여줍니다.", color: "orange" },
];
export function FeaturesSection() {
  return <section id="features" className="section features-section" aria-labelledby="features-title"><div className="shell"><div className="section-heading"><h2 id="features-title">와니가 집중을 지켜주는<br className="sm:hidden" /> 3가지 방법</h2><p>의지력만으로 어려웠던 집중, 이제 와니와 같이 해요.</p></div><div className="grid gap-5 md:grid-cols-3">{features.map(({ number, Icon, tag, title, description, color }) => <article className={`feature-card ${color}`} key={number}><div className="flex items-start justify-between"><div className="feature-icon"><Icon size={32} strokeWidth={1.65} aria-hidden="true" /></div><span className="feature-number">{number}</span></div><p className="feature-tag">{tag}</p><h3>{title}</h3><p className="body-copy">{description}</p></article>)}</div></div></section>;
}
