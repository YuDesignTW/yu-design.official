"use client";
import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { ServicesMarquee } from "./services-marquee";
import { CareerTimeline } from "./career-timeline";
import { CapabilityMap } from "./capability-map";
import { MagneticLink, usePortfolioMotion } from "./interactions";
import { SiteNav, Contact } from "./site-chrome";
import { WorkList, WorkFilm } from "./work-list";
import "./portfolio.css";
import "./navigation.css";
import "./hero.css";
import "./work.css";
import "./case-study.css";
import "./responsive.css";
import "./mobile.css";
import "./footer-redesign.css";
export { SiteNav, Contact } from "./site-chrome";

export default function PortfolioHome() {
  const root = usePortfolioMotion();
  const [paused, setPaused] = useState(false);
  return (
    <main className="yg yg-home" ref={root}>
      <a className="yg-skip" href="#work">
        跳至精選案例
      </a>
      <SiteNav home />
      <section className="yg-hero" aria-labelledby="yg-title">
        <div className="yg-portrait">
          <img
            src="/images/editorial/yuga-cutout.png"
            alt="Yuga Chen 個人肖像"
            width="1063"
            height="1479"
            fetchPriority="high"
          />
        </div>
        <div className="yg-hero-copy">
          <ArrowDownRight size={36} strokeWidth={1.3} />
          <p>
            Product consultant
            <br />& hands-on partner.
          </p>
          <span>商業思考 · 品牌設計 · 實踐執行</span>
        </div>
        <h1 id="yg-title" className="yg-sr-only">
          Yuga Chen — 懂設計、開發與行銷的產品顧問
        </h1>
        <div className="yg-hero-name" aria-hidden="true">
          <div className="yg-name-offset">
            <div className={`yg-name-track ${paused ? "is-paused" : ""}`}>
              <span>Yuga Chen —&nbsp;</span>
              <span>Yuga Chen —&nbsp;</span>
            </div>
          </div>
        </div>
        <div className="yg-hero-foot">
          <span>想得清楚，也做得到。</span>
          <button
            className="yg-motion-toggle"
            onClick={() => setPaused(!paused)}
            aria-label={paused ? "播放姓名動態" : "暫停姓名動態"}
            aria-pressed={paused}
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
          </button>
          <a href="#about">
            SCROLL TO EXPLORE <ArrowDownRight size={17} />
          </a>
        </div>
      </section>
      <section className="yg-intro yg-section" id="about">
        <div className="yg-intro-heading" data-reveal>
          <p className="yg-label">ONE PARTNER. CONNECTED THINKING.</p>
          <h2>
            懂設計、開發與行銷的
            <br />
            產品顧問。
          </h2>
          <p className="yg-intro-description">
            我是 Yuga，曾從 0 到 1 打造產品線，親手操盤新台幣 5,000 萬營收。
            我從用戶需求、生產可行性與商業目標出發，找出值得投入的市場機會，
            串起產品設計、技術開發與上市計畫，讓想法成為有人需要、能創造營收的產品。
          </p>
        </div>
        <div className="yg-intro-side" data-reveal>
          <p>
            我期待成為能長期並肩的夥伴：一起釐清問題、做出判斷，也親手推進執行。從第一個想法到上市後的成長，讓每一步都有方向、有成果。
          </p>
          <MagneticLink href="#experience" className="yg-circle">
            關於我
            <ArrowUpRight size={20} />
          </MagneticLink>
        </div>
        <dl className="yg-career-stats" aria-label="專業領域年資" data-reveal>
          {[
            ["5", "商務策略"],
            ["10", "產品設計"],
            ["3", "AI 工程"],
          ].map(([years, label]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>
                {years}
                <small>年+</small>
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <WorkList />
      <WorkFilm />
      <section className="yg-expertise yg-section" id="services">
        <span id="expertise" aria-hidden="true" />
        <div className="yg-section-title" data-reveal>
          <p className="yg-label">WHAT I CAN HELP WITH</p>
          <h2>SERVICES</h2>
        </div>
        <CapabilityMap />
      </section>
      <ServicesMarquee />
      <section className="yg-about yg-section" id="experience">
        <div className="yg-about-grid">
          <div className="yg-about-photo" data-reveal>
            <img
              src="/images/yuga-photo.png"
              alt="Yuga 的個人照片"
              width="537"
              height="747"
              loading="lazy"
            />
            <span>THE PERSON BEHIND THE WORK</span>
          </div>
          <div className="yg-about-copy" data-reveal>
            <p className="yg-label">A CURIOUS MIND. A HANDS-ON PARTNER.</p>
            <h2>
              喜歡創造，
              <br />
              更在意交付的價值。
            </h2>
            <p>
              從研究與 UX
              設計，走到產品規劃、上市營運，再到創業與系統開發。我的專業一路延伸，核心始終是理解需求，讓解法真正發揮作用。
            </p>
            <p>
              合作過的人，有時叫我「萬事屋」。遇到陌生領域，我會先學懂脈絡、整理限制，再找到能往前走的方法。把複雜的事說清楚，讓討論形成決策，讓決策變成進展。
            </p>
            <div className="yg-principles">
              <span>快速理解，清楚對齊。</span>
              <span>親手實作，持續推進。</span>
              <span>重視交付，也照顧後續。</span>
            </div>
          </div>
        </div>
        <div className="yg-experience">
          <CareerTimeline />
          <div className="yg-resumes">
            <span>深入了解我的經歷</span>
            {[
              ["product", "產品履歷"],
              ["design", "設計履歷"],
              ["consulting", "顧問履歷"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`/cv/Yuga-Chen-${id}-CV.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                {label} · PDF <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
