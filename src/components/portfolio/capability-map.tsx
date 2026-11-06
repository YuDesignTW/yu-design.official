"use client";

import { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import "./capability-map.css";

const capabilities = [
  {
    id: "design",
    code: "01",
    name: "設計顧問",
    en: "Design Consulting",
    category: "01 / DESIGN",
    title: "從市場中挖掘需求、設計驗證的設計顧問服務",
    intro:
      "從使用者體驗出發，透過設計思維解決問題，打造兼具美感與實用性的產品。包含品牌識別、使用者介面、使用者體驗設計。",
    skills: [
      "設計研究：找對問題，才能做對產品服務",
      "設計執行：把想法具象化，交付有品質的設計",
      "體驗再造：依據數據分析，建立優化指標",
    ],
    case: "design-system",
  },
  {
    id: "strategy",
    code: "02",
    name: "商務策略",
    en: "Business Strategy",
    category: "02 / BUSINESS",
    title: "數據化分析，為品牌量身打造成長路徑",
    intro:
      "透過差異化定位策略與 AI 行銷，協助品牌打造具持續成長的商業模型。以數據驅動的方式，打造整合性行銷策略，包含內容行銷、社群經營、廣告投放，確保產品有效觸及目標客群。",
    skills: [
      "商業健檢：從內部企業體質分析，到外部市場規模預估",
      "品牌營運策略：運用 3W 模型策略，從本質出發",
      "行銷策略：導入自動化行銷內容生成、排程與追蹤",
    ],
    case: "ideacam",
  },
  {
    id: "development",
    code: "03",
    name: "產品開發",
    fullName: "網站、產品開發與 AI 產品落地",
    en: "Development & AI",
    category: "03 / DEVELOPMENT",
    title: "兩週把你的點子變服務，快速打造數位產品",
    intro:
      "熟悉 HTML、CSS、JavaScript，以及 React、Next.js、Tailwind CSS 架構，以低成本、高效率的方式快速開發產品原型和 MVP，縮短產品上市時間。",
    skills: [
      "行銷工具打造：自動化行銷系統與工具開發",
      "品牌官網建置：響應式網站與品牌形象建立",
      "AI 工具製作：智能化產品功能整合與應用",
    ],
    case: "yulab",
  },
];

export function CapabilityMap() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="yg-capability-map">
      <div className="yg-orbit-stage">
        <div className="yg-orbits" role="group" aria-label="三項服務">
          {capabilities.map((item) => (
            <button
              key={item.id}
              id={`capability-${item.id}`}
              className={`yg-orbit yg-orbit-${item.id}`}
              aria-expanded={active === item.id}
              aria-controls={`capability-panel-${item.id}`}
              onClick={() => setActive(active === item.id ? null : item.id)}
            >
              <span className="yg-orbit-label">
                <strong>{item.code}</strong>
                <span>{item.name}</span>
                <small>{item.en}</small>
                {active === item.id ? (
                  <Minus size={18} aria-hidden="true" />
                ) : (
                  <Plus size={18} aria-hidden="true" />
                )}
              </span>
            </button>
          ))}
          <div className="yg-orbit-center" aria-hidden="true">
            產品價值<small>PRODUCT VALUE</small>
          </div>
        </div>
        <p className="yg-orbit-outcome">
          解決需求 <span>×</span> 驗證市場 <span>×</span> 推進成長
        </p>
      </div>
      <section
        className="yg-capability-panel"
        aria-labelledby="capability-overview-title"
        hidden={active !== null}
      >
        <div className="yg-capability-summary">
          <p className="yg-label">DESIGN × MARKETING × DEVELOP</p>
          <h3 id="capability-overview-title">
            從看見需求，走到創造營收。
            <small>One partner. From insight to impact.</small>
          </h3>
          <p>
            好的產品，需要清楚的方向、貼近需求的體驗，以及進入市場的方法。
            我把設計顧問、商務策略與網站及 AI
            產品開發串在一起，從釐清問題、驗證想法，到產品上市與持續優化，讓每一步都朝同一個目標前進。
          </p>
          <a href="#work">
            看我如何把想法做成成果 <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="yg-capability-detail">
          <ul>
            <li>設計顧問：找出真正的需求，打造有品質的品牌與產品體驗。</li>
            <li>商務策略：從市場定位到行銷規劃，建立品牌成長路徑。</li>
            <li>網站與 AI 產品開發：快速驗證想法，將工具帶進實際工作流程。</li>
          </ul>
        </div>
      </section>
      {capabilities.map((item) => (
        <section
          key={item.id}
          id={`capability-panel-${item.id}`}
          className="yg-capability-panel"
          role="region"
          aria-labelledby={`capability-${item.id}`}
          hidden={active !== item.id}
        >
          <div className="yg-capability-summary">
            <p className="yg-label">{item.category}</p>
            <h3>
              {item.fullName || item.name}
              <small>{item.title}</small>
            </h3>
            <p>{item.intro}</p>
            <a href={`/case-studies/${item.case}/`}>
              看實際案例 <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="yg-capability-detail">
            <ul>
              {item.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}
