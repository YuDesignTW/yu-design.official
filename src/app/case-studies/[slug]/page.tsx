import Link from "next/link";
import { EnergyCase } from "@/components/portfolio/energy-case";
import { DisasterCase } from "@/components/portfolio/disaster-case";
import { YulabCase } from "@/components/portfolio/yulab-case";
import { DesignSystemCase } from "@/components/portfolio/design-system-case";
import { BenqCase } from "@/components/portfolio/benq-case";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { stories } from "@/lib/portfolio-stories";
import { SiteNav, Contact } from "@/components/portfolio/home";
export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = stories.find((s) => s.slug === slug);
  return {
    title: s ? `${s.name}｜${s.title}` : "案例",
    description: s?.intro,
    alternates: { canonical: `https://yu-design.tw/case-studies/${slug}/` },
  };
}
export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = stories.find((s) => s.slug === slug);
  if (!s) notFound();
  if (slug === "energy") return <EnergyCase />;
  if (slug === "ideacam") return <BenqCase />;
  if (slug === "disaster") return <DisasterCase />;
  if (slug === "yulab") return <YulabCase />;
  if (slug === "design-system") return <DesignSystemCase />;
  const next = stories[(stories.indexOf(s) + 1) % stories.length];
  return (
    <main className="yg">
      <SiteNav />
      <article className="yg-case">
        <Link className="yg-back" href="/#work">
          <ArrowLeft size={16} /> 回到精選案例
        </Link>
        <div className="yg-label">{s.tags.join(" / ")}</div>
        <h1>
          {s.name}
          <span>{s.title}</span>
        </h1>
        <p className="yg-case-intro">{s.intro}</p>
        <div className="yg-case-facts">
          <div>
            <small>我的角色</small>
            <p>{s.role}</p>
          </div>
          <div>
            <small>成果焦點</small>
            <strong>{s.metric}</strong>
            <p>{s.detail}</p>
          </div>
        </div>
        <figure>
          <img src={s.image} alt={s.caption} />
          <figcaption>{s.caption}</figcaption>
        </figure>
        <div className="yg-case-sections">
          {s.sections.map(([title, text], i) => (
            <section key={title}>
              <span>0{i + 1}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </section>
          ))}
        </div>
        {s.source && (
          <a
            className="yg-back"
            href={s.source}
            target="_blank"
            rel="noreferrer"
          >
            查看相關公開資料 <ArrowUpRight size={16} />
          </a>
        )}
        <a className="yg-next" href={`/case-studies/${next.slug}/`}>
          <small>NEXT CASE</small>
          <h2>
            {next.name} <ArrowUpRight />
          </h2>
          <p>{next.title}</p>
        </a>
      </article>
      <Contact />
    </main>
  );
}
