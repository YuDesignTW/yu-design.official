import { ArrowRight } from "lucide-react";
import "./footer-journey.css";

const stages = [
  {
    prefix: "from",
    value: "0",
    title: "設計思維",
    text: "深入理解用戶需求，運用設計思考流程",
  },
  {
    prefix: "to",
    value: "1",
    title: "產品開發",
    text: "運用 AI / No-Code 工具快速建構 MVP",
  },
  {
    prefix: "to",
    value: "A+",
    title: "行銷策略",
    text: "制定精準的市場進入與品牌推廣策略",
  },
];

export function FooterJourney() {
  return (
    <section className="yg-footer-journey" aria-labelledby="yg-journey-title">
      <header className="yg-journey-heading">
        <p className="yg-label">FROM INSIGHT TO IMPACT</p>
        <h2 id="yg-journey-title">專屬你的商業製作人</h2>
        <p className="yg-journey-subtitle">為你的品牌打造不可取代的價值</p>
      </header>
      <ol className="yg-journey-stages">
        {stages.map((stage, index) => (
          <li key={stage.value}>
            <div
              className="yg-journey-marker"
              aria-label={`${stage.prefix} ${stage.value}`}
            >
              <span>{stage.prefix}</span>
              <strong>{stage.value}</strong>
              {index < stages.length - 1 && <ArrowRight aria-hidden="true" />}
            </div>
            <div className="yg-journey-copy">
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
