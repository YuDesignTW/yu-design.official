import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteNav, Contact } from "./home";
import "./benq-case.css";

const original = "/images/project/project 1/";
const assets = "/images/cases/ideacam/";
const imageSizes: Record<string, [number, number]> = {
  "ideacam-hero.png": [1142, 567],
  "ideacam-modes.png": [656, 379],
  "product-1.jpg": [507, 279],
  "product-2.jpg": [507, 380],
  "product-mkt-1.jpg": [507, 385],
  "product-mkt-2.jpg": [442, 653],
  "product-mkt-3.jpg": [442, 549],
};

function CaseImage({
  src,
  alt,
  caption,
  eager = false,
}: {
  src: string;
  alt: string;
  caption: string;
  eager?: boolean;
}) {
  const [width, height] = imageSizes[src.split("/").pop()!] || [1200, 800];
  return (
    <figure className="bq-image">
      <a
        href={src}
        target="_blank"
        rel="noreferrer"
        aria-label={`開啟大圖：${alt}`}
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
        <span className="bq-image-expand" aria-hidden="true">
          <ArrowUpRight size={15} /> 開啟大圖
        </span>
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

/** 以硬體產品開發與上市成果呈現 BenQ 經歷。 */
export function BenqCase() {
  return (
    <main className="yg">
      <SiteNav />
      <article className="bq-case">
        <header className="bq-header">
          <Link className="yg-back" href="/#work">
            <ArrowLeft size={16} /> 回到精選案例
          </Link>
          <p className="yg-label">BENQ / PRODUCT DEVELOPMENT · GO-TO-MARKET</p>
          <h1>
            從一個產品機會，
            <br />
            做到千萬營收的產品線。
          </h1>
          <p className="bq-product">ideaCam｜All-in-one Webcam</p>
          <p className="bq-lead">
            我負責產品規劃、開發協調到上市營運，與團隊從 0 到 1 打造
            ideaCam，親手操盤新台幣 5,000 萬營收。
          </p>
          <dl className="bq-fast-facts">
            <div>
              <dt>我的角色</dt>
              <dd>產品經理 → 商務主管暨產品經理</dd>
            </div>
            <div>
              <dt>負責範圍</dt>
              <dd>產品定義 · 硬體開發協調 · 上市營運</dd>
            </div>
            <div>
              <dt>產品肯定</dt>
              <dd>
                GOOD DESIGN Award
                <br />
                金點設計獎
              </dd>
            </div>
          </dl>
        </header>
        <CaseImage
          src={assets + "ideacam-hero.png"}
          alt="BenQ ideaCam 攝影機與 GOOD DESIGN、金點設計獎標誌"
          caption="ideaCam｜整合人像會議與實物展示的攝影機產品。"
          eager
        />
        <nav className="bq-index" aria-label="BenQ 案例章節">
          <a href="#bq-problem">01 產品定位</a>
          <a href="#bq-design">02 硬體體驗</a>
          <a href="#bq-delivery">03 開發交付</a>
          <a href="#bq-impact">04 上市成果</a>
        </nav>

        <section className="bq-section" id="bq-problem">
          <div className="bq-section-heading">
            <p className="yg-label">01 / PRODUCT POSITIONING</p>
            <h2>
              從「拍人」，
              <br />
              延伸到「把實物說清楚」。
            </h2>
          </div>
          <p className="bq-section-intro">
            透過遠距工作者研究，我們找到設計師與開發者展示實物的需求。我將產品方向聚焦在：用一台攝影機，順暢切換人像、桌面文件與物件細節，減少多設備架設的麻煩。
          </p>
        </section>

        <section className="bq-section" id="bq-design">
          <div className="bq-section-heading">
            <p className="yg-label">02 / HARDWARE EXPERIENCE</p>
            <h2>
              讓使用情境，
              <br />
              決定硬體該怎麼做。
            </h2>
          </div>
          <CaseImage
            src={assets + "ideacam-modes.png"}
            alt="ideaCam 的人像、桌面與手持展示模式"
            caption="一機多用｜從螢幕上的人像視角，切換到桌面與手持拍攝，支援不同展示距離。"
          />
          <div className="bq-role-grid">
            <div>
              <span>SCENARIO</span>
              <h3>從操作定義規格</h3>
              <p>
                把人像會議、文件分享與近距離展示，轉成產品規格及軟硬體互動需求。
              </p>
            </div>
            <div>
              <span>IMAGE QUALITY</span>
              <h3>把畫質落到實際場景</h3>
              <p>
                參與影像品質校正與比較測試，確認物件、文字與細節的呈現效果。
              </p>
            </div>
            <div>
              <span>USABILITY</span>
              <h3>驗證拿到手之後的體驗</h3>
              <p>
                透過功能與易用性測試，檢查模式切換、操作流程與使用理解，推進問題修正。
              </p>
            </div>
          </div>
        </section>

        <section className="bq-section" id="bq-delivery">
          <div className="bq-section-heading">
            <p className="yg-label">03 / DEVELOPMENT & DELIVERY</p>
            <h2>
              把產品定義，
              <br />
              推進到能交付的實體產品。
            </h2>
          </div>
          <div className="bq-delivery-list">
            <div>
              <span>01</span>
              <h3>規格與製造協調</h3>
              <p>對接製造商、定義產品規格，協調技術可行性、成本與生產排程。</p>
            </div>
            <div>
              <span>02</span>
              <h3>品質與使用驗證</h3>
              <p>
                參與影像校正、QA
                與易用性測試，整理問題並協調開發與製造團隊改善。
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>完整的上市準備</h3>
              <p>
                規劃包裝、使用手冊與快速入門指引，串接定價、通路及行銷素材，讓產品準備好進入市場。
              </p>
            </div>
          </div>
          <p className="bq-note">
            我負責產品決策、體驗設計與跨部門推進；工程開發、硬體製造與市場執行由協作團隊共同完成。
          </p>
          <div className="bq-feature">
            <div className="bq-feature-copy">
              <span>SOFTWARE SUPPORT / ENSPIRE</span>
              <h3>用軟體補齊展示體驗。</h3>
              <p>
                搭配 EnSpire
                的畫面標註與展示功能，讓拍到的內容更容易被理解。我同步負責產品規劃與
                UX 設計，串起軟硬體體驗。
              </p>
            </div>
            <CaseImage
              src={original + "product-1.jpg"}
              alt="EnSpire 在實物展示畫面上標註設計稿重點"
              caption="EnSpire｜讓使用者直接在影像上指出討論重點。"
            />
          </div>
        </section>

        <section className="bq-section" id="bq-impact">
          <div className="bq-section-heading">
            <p className="yg-label">04 / GO-TO-MARKET & IMPACT</p>
            <h2>
              從做出產品，
              <br />
              走到創造營收。
            </h2>
          </div>
          <div className="bq-split">
            <div className="bq-prose">
              <p>
                轉任商務主管暨產品經理後，我承接定價、跨境電商與銷售規劃，建立行銷團隊，透過創作者合作、商品頁與內容優化，把產品特色轉成使用者願意買單的價值。
              </p>
            </div>
            <CaseImage
              src={original + "product-mkt-1.jpg"}
              alt="ideaCam 創作者開箱與社群合作集合"
              caption="市場溝通｜透過實際示範與創作者合作，讓產品用途被看見。"
            />
          </div>
          <div className="bq-results">
            <div>
              <strong>NT$5,000 萬</strong>
              <span>親手操盤產品營收</span>
            </div>
            <div>
              <strong>0 → 1</strong>
              <span>建立全新產品線</span>
            </div>
            <div>
              <strong>7 國</strong>
              <span>一年內推進上市</span>
            </div>
          </div>
          <div className="bq-performance-images">
            <CaseImage
              src={original + "product-mkt-2.jpg"}
              alt="原作品集公開的產品營收成長趨勢"
              caption="營收成長｜原作品集公開的階段性成果。"
            />
            <CaseImage
              src={original + "product-mkt-3.jpg"}
              alt="商品頁轉換率與廣告成本 ACOS 改善對照"
              caption="營運改善｜轉換率與 ACOS 的階段性對照，不代表全市場或全期間平均。"
            />
          </div>
        </section>

        <section className="bq-takeaway">
          <p className="yg-label">WHAT I BRING TO A TEAM</p>
          <h2>
            從市場需求，
            <br />
            一路負責到產品成果。
          </h2>
          <p>
            我能連接產品、設計、工程與商務，讓團隊從共同的產品方向出發，推進開發、完成上市，再用市場回饋持續改善。
          </p>
          <a href="mailto:yu.design.tw@gmail.com">
            聊聊你正在建立的團隊 <ArrowUpRight size={18} />
          </a>
        </section>
        <div className="bq-public-source">
          <p>
            本文僅呈現可公開的產品與成果概述，不包含內部規格、成本與營運配置。
          </p>
          <a
            href="https://www.benq.com/en-us/ideacam/supreme/s1-pro.html"
            target="_blank"
            rel="noreferrer"
          >
            了解 ideaCam 產品 <ArrowUpRight size={15} />
          </a>
        </div>
        <Link className="yg-next" href="/case-studies/design-system">
          <small>NEXT CASE</small>
          <h2>
            Brand Design System <ArrowUpRight />
          </h2>
          <p>用一套工作系統，推進十個品牌的設計</p>
        </Link>
      </article>
      <Contact />
    </main>
  );
}
