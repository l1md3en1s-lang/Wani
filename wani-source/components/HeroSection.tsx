import Image from "next/image";
import { DownloadButton } from "./DownloadButton";

export function HeroSection() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          딴짓하면
          <br />
          <span>태워버립니다.</span>
        </h1>
        <p className="hero-description">
          공부하다 SNS로 새는 순간, 와니가 불을 뿜고 딴짓 사이트를 닫아줍니다.
          귀여운 친구와 함께 집중 흐름을 지켜보세요.
        </p>
        <div className="hero-actions">
          <DownloadButton />
        </div>
      </div>
      <div
        className="hero-art"
        role="img"
        aria-label="처음에는 꽃을 들고 있다가 2초 뒤 불을 뿜는 와니"
      >
        <Image
          className="wani-hero wani-idle"
          src="/wani.png"
          width={1188}
          height={1056}
          priority
          sizes="(max-width: 767px) 92vw, 53vw"
          alt=""
        />
        <Image
          className="wani-hero wani-fire"
          src="/wani-fire.png"
          width={1024}
          height={559}
          priority
          sizes="(max-width: 767px) 92vw, 53vw"
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
