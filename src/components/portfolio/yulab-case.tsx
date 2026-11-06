import {
  EditorialCase,
  EditorialSection as Section,
  EditorialImage as CaseFigure,
} from "./case-editorial";
const assets = "/images/cases/yulab/";
/** AI 行銷產品與地方品牌落地成果，分別呈現工具與場域貢獻。 */
export function YulabCase() {
  return (
    <EditorialCase
      label="YULAB / AI PRODUCT · BRAND STRATEGY · FIELD APPLICATION"
      title="把品牌經驗，做成能持續運作的 AI 行銷工具。"
      name="YuLab 有料研究室 × 吾食美學"
      intro="我主導產品策略、設計與 AI 工具開發，並以采合育苗場為實踐場域，串起品牌轉型、產品開發與數位行銷。"
      facts={[
        ["我的角色", "產品策略、UI/UX、AI 開發；吾食美學計畫主持人"],
        ["產品範圍", "品牌知識庫 · 內容生成 · 活動規劃與排程"],
        ["場域成果", "3 項新品與服務；新品毛利率 80–90%"],
      ]}
      hero={
        <CaseFigure
          src="/images/editorial/yulab.jpg"
          caption="YuLab 操作畫面｜讓品牌資料、行銷內容與排程能在同一套流程中延續。"
          width={1462}
          height={1080}
          eager
        />
      }
      chapters={[
        ["yulab-opportunity", "01 產品定位"],
        ["yulab-product", "02 AI 工作流程"],
        ["yulab-field", "03 育苗場實踐"],
        ["yulab-impact", "04 成果驗證"],
      ]}
      source="https://yu-design.tw/yulab/"
      next={["design-system", "Brand Design System"]}
      takeaway="我能把行銷方法轉成可操作的 AI 產品，也能走進現場，連接品牌、商品與服務設計，讓技術回應真實的經營需求。"
    >
      <Section
        id="yulab-opportunity"
        label="01 / PRODUCT POSITIONING"
        title="讓每一次行銷，都能接續品牌的累積。"
      >
        <p className="bq-section-intro">
          每次活動都重新整理資料、每份文案都重寫，讓行銷難以累積。我以品牌知識庫為起點，讓
          AI 先理解品牌，再協助規劃與產出，把零散工作接成可持續使用的流程。
        </p>
      </Section>
      <Section
        id="yulab-product"
        label="02 / AI WORKFLOW"
        title="從品牌理解，走到內容與執行。"
      >
        <div className="bq-delivery-list">
          <div>
            <span>01</span>
            <h3>目標與品牌知識</h3>
            <p>
              以專案管理與 OKR
              整理目標，集中品牌資訊、產品資料、競爭對手與風格參考，建立生成內容的共同依據。
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>內容與活動提案</h3>
            <p>
              根據品牌脈絡延伸主題，協助生成標題、文案、影片腳本與活動企劃，讓發想有可追溯的方向。
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>改寫與排程</h3>
            <p>
              將內容改寫成不同平台的版本，接上行銷排程，縮短從構想到執行的距離。
            </p>
          </div>
        </div>
        <div className="bq-feature-pair">
          <CaseFigure
            src={assets + "knowledge.png"}
            caption="品牌知識庫｜以植人日常的品牌資料，建立 AI 內容生成的背景。"
            width={1462}
            height={1080}
          />
          <CaseFigure
            src={assets + "campaign.png"}
            caption="活動發想｜從品牌元素與產品延伸主題，再整理成可執行的提案。"
            width={1462}
            height={1080}
          />
        </div>
        <p className="bq-note">
          畫面取自原網站的產品示範影片；此處呈現工具功能，不將場域營收或毛利直接歸因於
          AI。
        </p>
      </Section>
      <Section
        id="yulab-field"
        label="03 / FIELD APPLICATION"
        title="采合育苗場：把育苗專業，轉成消費者願意買單的價值。"
      >
        <p className="bq-section-intro">
          面對以 B2B
          盤商為主的經營模式，我從現場訪談與資源盤點出發，規劃面向消費者的「植人日常」。保留育苗專業，透過知識、體驗與品牌包裝，拓展新的產品與收入來源。
        </p>
        <CaseFigure
          src={assets + "field-research.png"}
          caption="場域研究｜與育苗場主理人討論營運方向，盤點現有專業與產品機會。"
          width={1920}
          height={1080}
        />
        <div className="bq-role-grid">
          <div>
            <span>PRODUCT</span>
            <h3>植人日誌</h3>
            <p>
              把種植知識、插畫與可發芽的種子紙結合，讓日誌成為陪伴種植的文創商品。
            </p>
          </div>
          <div>
            <span>EXPERIENCE</span>
            <h3>植人日作</h3>
            <p>
              將挑苗、移植、照護與飲食串成食農課程，走進學校，也開放場域體驗。
            </p>
          </div>
          <div>
            <span>COMMERCE</span>
            <h3>植人選品</h3>
            <p>
              重新組合苗盆商品與包裝，讓消費者理解如何種植、能收穫什麼，提升商品附加價值。
            </p>
          </div>
        </div>
        <div className="bq-feature-pair">
          <CaseFigure
            src={assets + "planter-journal.png"}
            caption="植人日誌｜以種植知識與視覺設計發展商品，連接學習與日常陪伴。"
            width={572}
            height={321}
          />
          <CaseFigure
            src={assets + "farm-experience.png"}
            caption="食農體驗｜把育苗知識轉成親子能參與的現場活動。"
            width={579}
            height={329}
          />
        </div>
      </Section>
      <Section
        id="yulab-impact"
        label="04 / OUTCOME"
        title="讓品牌、商品與場域，一起接受市場驗證。"
      >
        <div className="bq-results">
          <div>
            <strong>80–90%</strong>
            <span>新品毛利率</span>
          </div>
          <div>
            <strong>3 項</strong>
            <span>新品與服務</span>
          </div>
          <div>
            <strong>約 45 位</strong>
            <span>參與入校教學的師生</span>
          </div>
        </div>
        <CaseFigure
          src={assets + "market-validation.png"}
          caption="市場驗證｜綜合苗商品參與實體展售，透過現場說明與購買回饋檢驗產品方向。"
          width={1920}
          height={1080}
        />
        <p className="bq-section-intro">
          吾食美學專案團隊獲 2025
          創生之星金獎「地方新芽獎」肯定。我的工作涵蓋策略、品牌與產品設計、AI
          工具開發，並與育苗場及外部專才合作完成場域實踐。
        </p>
        <p className="bq-note">
          依結案簡報，新品毛利率提高至
          80–90%，為育苗場新品成果，非整體企業毛利率或 YuLab
          訂閱營收；三項產品與服務包含植人日誌、食農體驗與綜合苗商品。
        </p>
      </Section>
    </EditorialCase>
  );
}
