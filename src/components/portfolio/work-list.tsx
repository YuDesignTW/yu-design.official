"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { workTags, stories } from "@/lib/portfolio-stories";

export function WorkList() {
  const cursor = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState(-1);
  useEffect(() => {
    const hideCursor = () => {
      if (cursor.current) cursor.current.dataset.visible = "false";
    };
    window.addEventListener("scroll", hideCursor, { passive: true });
    window.addEventListener("blur", hideCursor);
    return () => {
      window.removeEventListener("scroll", hideCursor);
      window.removeEventListener("blur", hideCursor);
    };
  }, []);
  const visible = stories.filter(
    (s) => filter < 0 || s.tags.includes(workTags[filter]),
  );
  return (
    <section className="yg-work yg-section" id="work">
      <div className="yg-work-heading">
        <div>
          <p className="yg-label">SELECTED WORK / 01—{String(stories.length).padStart(2, "0")}</p>
          <h2>
            讓能力，
            <br />
            成為實際成果。
          </h2>
        </div>
        <div className="yg-filters" aria-label="依標籤篩選案例">
          {["全部", ...workTags].map((name, i) => (
            <button
              key={name}
              aria-pressed={filter === i - 1}
              onClick={() => {
                setFilter(i - 1);
              }}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      <p className="yg-count" aria-live="polite">
        {visible.length} 個精選案例
      </p>
      <div className="yg-work-list">
        {visible.map((s) => (
          <a
            className="yg-work-row"
            key={s.slug}
            href={`/case-studies/${s.slug}/`}
            onPointerMove={(event) => {
              if (event.pointerType !== "mouse" || !cursor.current) return;
              cursor.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
              cursor.current.dataset.visible = "true";
            }}
            onPointerLeave={() => {
              if (cursor.current) cursor.current.dataset.visible = "false";
            }}
            onPointerDown={() => {
              if (cursor.current) cursor.current.dataset.visible = "false";
            }}
          >
            <div className="yg-row-image">
              <img
                src={s.image}
                alt={s.caption}
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
            <div className="yg-work-copy">
              <span className="yg-work-index">0{stories.indexOf(s) + 1}</span>
              <div className="yg-work-name">
                <h3>{s.name}</h3>
                <p>{s.title}</p>
              </div>
              <ul className="yg-work-tags" aria-label="專案標籤">
                {s.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <ArrowUpRight className="yg-row-arrow" aria-hidden="true" />
          </a>
        ))}
      </div>
      <div ref={cursor} className="yg-work-cursor" aria-hidden="true">
        查看作品
      </div>
    </section>
  );
}
export function WorkFilm() {
  return (
    <section className="yg-film" aria-label="作品畫面選輯">
      {[stories.slice(0, 3), stories.slice(3)].map((row, i) => (
        <div className="yg-film-window" key={i}>
          <div className="yg-film-track">
            {row.map((s) => (
              <a
                key={s.slug}
                href={`/case-studies/${s.slug}/`}
                aria-label={`查看 ${s.name}`}
              >
                <img
                  src={s.image}
                  alt={s.caption}
                  loading="lazy"
                  width="900"
                  height="600"
                />
                <span>
                  {s.name}
                  <ArrowUpRight size={18} />
                </span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
