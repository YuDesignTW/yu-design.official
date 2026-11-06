import {
  EditorialCase,
  EditorialSection as Section,
  EditorialImage as CaseFigure,
} from "./case-editorial";
const assets = "/images/cases/design-system/";
/** 將產品與開發經驗整理成品牌研究及提案工作流程。 */
export function DesignSystemCase() {
  return (
    <EditorialCase
      label="DESIGN WORKFLOW / RESEARCH · BRAND STRATEGY · PROTOTYPING"
      title="把產品與開發經驗，變成高效率的設計流程。"
      name="Brand Design System｜十品牌研究與提案"
      intro="我將研究、需求拆解與快速驗證的方法整理成工作流程，一週內完成十家商家的研究調查、競品收集、產品提案與模擬圖，再以業主回饋持續修正。"
      facts={[
        ["我的角色", "工作流程建立、商家研究、品牌與產品設計"],
        ["應用範圍", "花蓮 10 個品牌的識別、包裝與商品提案"],
        ["交付節奏", "一週完成研究至初步提案；後續持續驗證與修正"],
      ]}
      hero={
        <CaseFigure
          src="/images/editorial/design-system.jpg"
          caption="設計研究工作台｜將商家背景、研究資料與提案方向整理成可延續的工作流程。"
          width={1444}
          height={908}
          eager
        />
      }
      chapters={[
        ["workflow-problem", "01 任務挑戰"],
        ["workflow-method", "02 工作流程"],
        ["workflow-output", "03 設計應用"],
        ["workflow-feedback", "04 成果與回饋"],
      ]}
      source=""
      next={["energy", "IoT 能源管理系統"]}
      takeaway="我能把產品管理的需求判斷、設計的具象化能力與開發的流程思維整合起來，快速交付可討論的方案，再依現場回饋推進下一版。"
    >
      <Section
        id="workflow-problem"
        label="01 / THE CHALLENGE"
        title="十個品牌並行，每一家都需要自己的答案。"
      >
        <p className="bq-section-intro">
          品牌的問題不只在視覺。客群怎麼購買、商品如何攜帶、包材起訂量與店內人力，都會影響方案能否採用。我需要讓研究與產出有效率，同時保留每家商店的差異。
        </p>
      </Section>
      <Section
        id="workflow-method"
        label="02 / REPEATABLE WORKFLOW"
        title="把經驗拆成步驟，讓每一步都有明確產出。"
      >
        <div className="bq-delivery-list">
          <div>
            <span>01</span>
            <h3>商家研究與問題定義</h3>
            <p>
              整理營運模式、客群、現有商品與限制，形成品牌背景及需求摘要，先確認要解決的生意問題。
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>市場與競品收集</h3>
            <p>
              比較同類商品的定位、包裝與溝通方式，整理參考方向，找出品牌可發展的差異。
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>策略與產品提案</h3>
            <p>
              把洞察轉成品牌主軸、產品組合及設計方向，釐清每個概念回應哪一項需求。
            </p>
          </div>
          <div>
            <span>04</span>
            <h3>模擬與回饋修正</h3>
            <p>
              以識別、包裝及應用模擬圖讓方案可被討論，再將業主與審查意見轉成下一版的修改項目。
            </p>
          </div>
        </div>
        <p className="bq-note">
          共用研究欄位、產出順序與回饋整理方式；各品牌的定位與設計仍依自己的條件發展。
        </p>
      </Section>
      <Section
        id="workflow-output"
        label="03 / DESIGN APPLICATION"
        title="讓研究結論，出現在具體的產品選擇裡。"
      >
        <div className="bq-feature-pair">
          <div>
            <CaseFigure
              src={assets + "rice-concept.png"}
              caption="太巴塱紅糯米館｜三米禮盒初期概念模擬，非量產實拍。"
              width={1014}
              height={1228}
            />
            <h3>把餐後購買，變成帶得走的禮物。</h3>
            <p>
              回應旅客覺得大包米太重的問題，以小份米磚與共用禮盒發展提案，延續用餐後的購買意願。
            </p>
          </div>
          <div>
            <CaseFigure
              src={assets + "peanut-concept.png"}
              caption="美好花生｜小型玻璃罐與色票概念的包裝提案模擬。"
              width={1014}
              height={1228}
            />
            <h3>把多種口味，變成易選的體驗。</h3>
            <p>
              以顏料與色票概念整理口味；比較裝填、封口與保存條件後，收斂到可承接的小型玻璃罐方案。
            </p>
          </div>
        </div>
        <div className="bq-feature-pair">
          <div>
            <CaseFigure
              src={assets + "cimei-brand.jpg"}
              caption="慈美烘焙坊｜結合店內薩摩耶、皇家藍與波士頓派的識別方案。"
              width={484}
              height={487}
            />
            <h3>把店家的真實特色，做成記憶點。</h3>
            <p>
              保留熟悉的品牌色，將店犬與代表甜點結合，並以通用盒及貼紙應用回應少量補充與庫存需求。
            </p>
          </div>
          <div>
            <CaseFigure
              src={assets + "rice-refinement.jpg"}
              caption="有福米｜審查後的包裝平面修正，強化米種特色與農人故事。"
              width={458}
              height={618}
            />
            <h3>讓產品差異，比裝飾更清楚。</h3>
            <p>
              提高「七分白米」資訊層級，加入米種特色與農人故事，讓設計幫助消費者理解商品。
            </p>
          </div>
        </div>
      </Section>
      <Section
        id="workflow-feedback"
        label="04 / DELIVERY & FEEDBACK"
        title="快速交付，也留下可以繼續推進的依據。"
      >
        <div className="bq-results">
          <div>
            <strong>1 週內</strong>
            <span>完成研究、競品整理與初步提案</span>
          </div>
          <div>
            <strong>10 個品牌</strong>
            <span>應用同一套研究與設計流程</span>
          </div>
          <div>
            <strong>可視化提案</strong>
            <span>從策略延伸至產品與包裝模擬</span>
          </div>
        </div>
        <blockquote>
          「我們一致認同原本拿蛋糕的那張圖，很喜歡並且不想更改！」
        </blockquote>
        <p className="bq-note">
          慈美業主回饋，摘自設計整改紀錄；未公開私人對話截圖。
        </p>
        <p className="bq-section-intro">
          業主的回饋讓提案能繼續收斂：慈美選擇保留原識別方向，太巴塱希望整合不同方案，美好花生則依製作條件確認容器。效率的成果，是更早拿出可討論、可選擇的方案。
        </p>
        <p className="bq-note">
          一週為研究至初步提案階段，不包含後續訪視、審查修正、打樣及量產。圖片包含概念模擬與修正稿，依訪視報告及設計整改
          HTML 整理。
        </p>
      </Section>
    </EditorialCase>
  );
}
