import "./career-timeline.css";

const experience = [
  {
    date: "2024 — NOW",
    company: "獨立實踐 / 嘉思特",
    role: "獨立產品顧問",
    en: "Independent Product Consultant",
    chapter: "整合策略、設計與開發，走向完整交付",
    summary:
      "從需求洞察、提案規劃，到品牌設計、AI 工具與系統開發，親手推進產品與商業想法。2026 年 2 月成立嘉思特有限公司。",
    highlights: [
      "建立設計研究工作系統，支援 10 個地方品牌的市場研究與設計概念產出。",
      "打造 YuLab AI 行銷規劃工具，參與的吾食美學專案團隊獲 2025 創生之星金獎「地方新芽獎」。",
      "整合能源管理、地端系統與 AI 工作流程，讓工具進入實際使用場景。",
    ],
  },
  {
    date: "2024.02 — 2024.07",
    company: "Seasalt.ai",
    role: "技術產品經理",
    en: "Technical Product Manager",
    chapter: "把 AI 能力轉成可交付的產品功能",
    summary:
      "負責 AI 客服與 Chat Agent B2B 產品的功能規劃、體驗設計、開發排程與 QA，並參與客戶服務與需求訪談。",
    highlights: [
      "建立完整 UX 流程與 PRD，協調跨國團隊共同開發。",
      "以 5 天為一輪的 Sprint 推進交付，3 個月內上線 25+ 項功能並修復問題。",
      "主持線上與實體產品會議，透過客戶訪談確認需求與後續產品方向。",
    ],
  },
  {
    date: "2023.05 — 2024.02",
    company: "BenQ",
    role: "商務主管暨產品經理",
    en: "Business Manager Head & Product Manager",
    chapter: "從產品上市，推進跨境市場成長",
    summary:
      "負責產品營收與市場拓展，透過需求探索與數據分析制定商業策略，建立敏捷數位行銷團隊。",
    highlights: [
      "推進 2 項創新產品的跨境電商上市，1 年內進入 7 國市場。",
      "連續 3 個月達成超過 50% 的月營收成長；優化 Amazon SEO 與商品頁，使轉換率超過 5%。",
      "建立涵蓋社群、搜尋行銷、KOL、EDM 與 SEO 的數據導向行銷團隊。",
    ],
  },
  {
    date: "2021.12 — 2023.02",
    company: "BenQ",
    role: "產品經理",
    en: "Product Manager",
    chapter: "從 0 到 1，打造軟硬體整合產品線",
    summary:
      "主導 ideaCam 與 EnSpire 的產品開發，以使用者與市場研究建立產品路線圖，透過敏捷管理交付 MVP、驗證產品市場契合度。",
    highlights: [
      "ideaCam S1：推進雙模式攝影機開發，協調製造商、定義規格，執行影像品質、市場與易用性測試。",
      "整合包裝、使用文件與生產排程，協調跨部門資源並控管風險。",
      "BenQ EnSpire：從零開發支援 Mac、Windows 與網頁的視覺簡報工具，規劃 UI 流程與介面，依使用數據優化功能。",
    ],
  },
  {
    date: "2019.08 — 2021.12",
    company: "BenQ",
    role: "資深使用者體驗設計師",
    en: "Senior UX Designer",
    chapter: "用研究與設計，建立產品體驗的基礎",
    summary:
      "負責 B2B SaaS、全球 B2B 電商與消費性電子產品研究，結合訪談、數據分析與介面設計，找出痛點並改善產品體驗。",
    highlights: [
      "X-Sign CMS：開發 Designer Express 與 Dynamic Content 線上設計工具，透過訪談及易用性測試持續改善。",
      "建立 BenQ 官網軟體產品頁系統、全球 B2B 電商與線上使用手冊；手冊系統在半年內帶來 25 倍自然流量。",
      "運用 STP 與競品分析，為微型投影機、5G Wi-Fi 路由器等產品建立價值主張與視覺識別方向。",
    ],
  },
];

export function CareerTimeline() {
  return (
    <div className="yg-career">
      <header className="yg-career-heading" data-reveal>
        <p className="yg-label">EXPERIENCE / 2019 — NOW</p>
        <h2>
          每一段經歷，
          <br />
          都讓解題的視野更完整。
        </h2>
      </header>
      <ol className="yg-career-list" aria-label="職涯大事記，由近至遠">
        {experience.map((item, index) => (
          <li className="yg-career-item" key={`${item.company}-${item.date}`}>
            <span className="yg-career-dot" aria-hidden="true" />
            <div className="yg-career-date" data-reveal>
              <span>{item.date}</span>
              <small>
                CHAPTER {String(experience.length - index).padStart(2, "0")}
              </small>
            </div>
            <article className="yg-career-entry" data-reveal>
              <p className="yg-career-company">{item.company}</p>
              <h3>
                {item.role}
                <small>{item.en}</small>
              </h3>
              <p className="yg-career-chapter">{item.chapter}</p>
              <p className="yg-career-summary">{item.summary}</p>
              <ul>
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
