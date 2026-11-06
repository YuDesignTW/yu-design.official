import {
  EditorialCase,
  EditorialSection as Section,
  EditorialImage as CaseFigure,
} from "./case-editorial";
const assets = "/images/cases/disaster/";
/** 從需求洞察、工具設計到商業驗證的防災案例。 */
export function DisasterCase() {
  return (
    <EditorialCase
      label="INDEPENDENT PRODUCT / UX DESIGN · DEVELOPMENT · COMMERCE"
      title="讓防災準備，從焦慮變成行動。"
      name="防災避難準備工具"
      intro="我將分散的防災資訊整理成互動清單，親手完成設計、開發與推廣，再接上電商導購，於兩個月內創造新台幣 70 萬以上營收。"
      facts={[
        ["我的角色", "需求洞察、UI/UX、前端開發與商業驗證"],
        ["產品範圍", "居家避難清單 · 物資換算 · 採購導引"],
        ["成果焦點", "兩個月營收 NT$70 萬+"],
      ]}
      hero={
        <CaseFigure
          src={assets + "product-0.png"}
          caption="產品全貌｜把避難情境、物資分類與準備進度放進同一套工具。"
          width={1672}
          height={941}
          eager
        />
      }
      chapters={[
        ["disaster-opportunity", "01 需求洞察"],
        ["disaster-product", "02 產品體驗"],
        ["disaster-delivery", "03 開發與轉換"],
        ["disaster-impact", "04 市場驗證"],
      ]}
      source="https://www.jisto.tw/work/disaster-preparedness-checklist-tool"
      next={["yulab", "YuLab 有料研究室"]}
      takeaway="我能從生活需求辨識產品機會，整合資訊設計、開發與商業流程，用真實使用與交易檢驗想法。"
    >
      <Section
        id="disaster-opportunity"
        label="01 / OPPORTUNITY"
        title="資訊找得到，卻不知道怎麼開始。"
      >
        <p className="bq-section-intro">
          花蓮地震後，我觀察到人們知道需要準備，卻難以判斷該備什麼、備多少。產品的切入點，是將政府手冊與分散資料轉成依家庭情境可執行的清單。
        </p>
      </Section>
      <Section
        id="disaster-product"
        label="02 / PRODUCT EXPERIENCE"
        title="從人數與天數，找到具體的下一步。"
      >
        <div className="bq-role-grid">
          <div>
            <span>01 / 計算</span>
            <h3>換算需要的物資</h3>
            <p>
              輸入人數與準備天數，將抽象建議轉成對應的數量，降低自行整理的負擔。
            </p>
          </div>
          <div>
            <span>02 / 準備</span>
            <h3>看見還缺哪些項目</h3>
            <p>
              依糧食、醫療衛生、生活用品、電子通訊與工具分類，用勾選及進度條掌握準備狀態。
            </p>
          </div>
          <div>
            <span>03 / 行動</span>
            <h3>接上實際採購</h3>
            <p>
              當使用者找到物資缺口，再提供商品導引，讓清單中的下一步可以直接執行。
            </p>
          </div>
        </div>
        <div className="bq-feature-pair">
          <CaseFigure
            src={assets + "product-1.png"}
            caption="跨裝置體驗｜桌機與手機沿用相同分類，便於查看與整理物資。"
            width={1122}
            height={1402}
          />
          <CaseFigure
            src={assets + "product-2.png"}
            caption="手機介面｜人數、天數、數量與完成進度集中呈現，支援逐項準備。"
            width={1122}
            height={1402}
          />
        </div>
        <p className="bq-note">
          核心功能以居家避難 SIP 為主；日常隨身 EDC、安全返家 GHB 與緊急撤離 BOB
          為延伸規劃。
        </p>
      </Section>
      <Section
        id="disaster-delivery"
        label="03 / DELIVERY & CONVERSION"
        title="把知識、工具與採購串成一段流程。"
      >
        <div className="bq-delivery-list">
          <div>
            <span>01</span>
            <h3>整理資訊</h3>
            <p>
              以 AI Agent
              協作整理台灣、日本的政府與民間公開資料，重新編排情境及物資分類。
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>設計並開發</h3>
            <p>
              完成資訊架構、UI/UX
              與響應式前端，將數量計算、清單狀態與進度整合到操作中。
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>推廣與導購</h3>
            <p>
              透過社群內容觸及有需求的人，再以工具協助判斷缺口，串連蝦皮精選商品承接採購。
            </p>
          </div>
        </div>
      </Section>
      <Section
        id="disaster-impact"
        label="04 / MARKET VALIDATION"
        title="用使用與交易，驗證需求是否成立。"
      >
        <div className="bq-results">
          <div>
            <strong>NT$70 萬+</strong>
            <span>兩個月營收</span>
          </div>
          <div>
            <strong>15 萬+</strong>
            <span>社群觸及</span>
          </div>
          <div>
            <strong>3,000+</strong>
            <span>社群分享</span>
          </div>
        </div>
        <p className="bq-section-intro">
          工具帶動社群擴散，也收到國外使用者詢問授權合作，提供後續在地化與國際市場探索的方向。
        </p>
        <p className="bq-note">
          營收為工具結合電商導購的專案成果，並非工具訂閱收入；授權詢問不等同已成交合作。
        </p>
      </Section>
    </EditorialCase>
  );
}
