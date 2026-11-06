import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteNav, Contact } from "./home";
import "./benq-case.css";

/** 案例圖片保留比例，並可開啟原圖查看細節。 */
export function EditorialImage({
  src,
  caption,
  width,
  height,
  eager = false,
}: {
  src: string;
  caption: string;
  width: number;
  height: number;
  eager?: boolean;
}) {
  return (
    <figure className="bq-image">
      <a
        href={src}
        target="_blank"
        rel="noreferrer"
        aria-label={`開啟大圖：${caption}`}
      >
        <img
          src={src}
          alt={caption}
          width={width}
          height={height}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
        <span className="bq-image-expand">
          <ArrowUpRight size={15} /> 開啟大圖
        </span>
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
/** 沿用 BenQ 的章節層級與響應式閱讀版型。 */
export function EditorialSection({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="bq-section">
      <div className="bq-section-heading">
        <p className="yg-label">{label}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}
/** 共用案例頁框架，保持精選案例的閱讀與聯絡體驗一致。 */
export function EditorialCase({
  label,
  title,
  name,
  intro,
  facts,
  hero,
  chapters,
  children,
  takeaway,
  source,
  next,
}: {
  label: string;
  title: string;
  name: string;
  intro: string;
  facts: [string, string][];
  hero: ReactNode;
  chapters: [string, string][];
  children: ReactNode;
  takeaway: string;
  source: string;
  next: [string, string];
}) {
  return (
    <main className="yg">
      <SiteNav />
      <article className="bq-case">
        <header className="bq-header">
          <Link className="yg-back" href="/#work">
            <ArrowLeft size={16} /> 回到精選案例
          </Link>
          <p className="yg-label">{label}</p>
          <h1>{title}</h1>
          <p className="bq-product">{name}</p>
          <p className="bq-lead">{intro}</p>
          <dl className="bq-fast-facts">
            {facts.map(([key, value]) => (
              <div key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </header>
        {hero}
        <nav className="bq-index" aria-label="案例章節">
          {chapters.map(([id, text]) => (
            <a href={`#${id}`} key={id}>
              {text}
            </a>
          ))}
        </nav>
        {children}
        <section className="bq-takeaway">
          <p className="yg-label">WHAT I BRING TO A TEAM</p>
          <h2>讓需求成為產品，讓產品交付價值。</h2>
          <p>{takeaway}</p>
          <a href="mailto:yu.design.tw@gmail.com">
            聊聊你正在建立的團隊 <ArrowUpRight size={18} />
          </a>
        </section>
        <div className="bq-public-source">
          <p>以公開素材與專案成果呈現，省略內部執行細節。</p>
          {source && (
            <a href={source} target="_blank" rel="noreferrer">
              查看原始案例介紹 <ArrowUpRight size={15} />
            </a>
          )}
        </div>
        <a className="yg-next" href={`/case-studies/${next[0]}/`}>
          <small>NEXT CASE</small>
          <h2>
            {next[1]} <ArrowUpRight />
          </h2>
        </a>
      </article>
      <Contact />
    </main>
  );
}
