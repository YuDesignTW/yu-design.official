import {
  EditorialCase,
  EditorialSection as Section,
  EditorialImage as CaseFigure,
} from "./case-editorial";

const assets = "/images/cases/energy/";

/** 呈現能源管理系統的介面、資料處理與 IoT 協作範圍。 */
export function EnergyCase() {
  return (
    <EditorialCase
      label="IOT SYSTEM / PRODUCT DESIGN · DEVELOPMENT · INTEGRATION"
      title="把空間、設備與資料，接成可操作的管理系統。"
      name="IoT 能源管理系統"
      intro="我負責整套介面與功能開發，處理設備資料、批量排程及串接品質，並協同硬體代理商與綠建組推進整合及部署，讓管理者能查看用電、控制設備與安排運作。"
      facts={[
        ["我的角色", "UI/UX、功能開發、資料與排程結構、串接品質把關"],
        ["系統範圍", "MQTT 設備串接 · 雲端控制 · 批量排程 · 數據讀取"],
        ["協作範圍", "硬體代理商對接、綠建組協作與共同部署"],
      ]}
      hero={
        <CaseFigure
          src={assets + "overview.png"}
          caption="管理總覽｜集中呈現估算用電量趨勢、設備類型占比與各管理功能入口。"
          width={2370}
          height={1356}
          eager
        />
      }
      chapters={[
        ["energy-context", "01 管理需求"],
        ["energy-experience", "02 介面與功能"],
        ["energy-engineering", "03 資料與串接"],
        ["energy-delivery", "04 協作交付"],
      ]}
      source=""
      next={["disaster", "防災避難準備工具"]}
      takeaway="我能同時理解管理者的操作需求與設備端的資料條件，將介面、功能與串接流程一起規劃，並與硬體及部署夥伴協作，把設計推進到可運作的系統。"
    >
      <Section
        id="energy-context"
        label="01 / MANAGEMENT NEEDS"
        title="管理的不只是數字，而是實際空間裡的設備。"
      >
        <p className="bq-section-intro">
          能源管理需要把建築、樓層、空間與設備連在一起。管理者既要知道哪裡正在用電，也要能進一步查看設備、安排排程並執行控制；產品設計必須讓資料對應到具體的管理工作。
        </p>
      </Section>
      <Section
        id="energy-experience"
        label="02 / PRODUCT EXPERIENCE"
        title="從整體狀態，逐層找到需要處理的設備。"
      >
        <CaseFigure
          src={assets + "space-management.png"}
          caption="空間管理｜以建築、樓層與空間組織設備狀態，並提供排程及進入空間的操作入口。"
          width={2782}
          height={1356}
        />
        <div className="bq-role-grid">
          <div>
            <span>SPACE</span>
            <h3>沿著空間找到設備</h3>
            <p>
              用建築與樓層層級整理管理範圍，讓設備數、在線狀態與即時功率有清楚的場域脈絡。
            </p>
          </div>
          <div>
            <span>CONTROL</span>
            <h3>讓控制接上日常管理</h3>
            <p>
              整合雲端控制與批量排程，讓管理者能依使用情境安排設備運作，減少逐台操作的負擔。
            </p>
          </div>
          <div>
            <span>DATA</span>
            <h3>讀懂當下與一段時間的差異</h3>
            <p>
              分別呈現即時功率、估算用電量與趨勢，讓使用者理解設備當下狀態與期間用電情況。
            </p>
          </div>
        </div>
        <div className="bq-feature bq-feature-wide">
          <div className="bq-feature-copy">
            <span>POWER & ENERGY</span>
            <h3>讓數據有單位，也有時間脈絡。</h3>
            <p>
              空間明細把設備概況、近 24
              小時功率變化與估算用電比例放在一起；介面同步呈現資料涵蓋情況，避免將不完整的讀值當成完整期間的結果。
            </p>
          </div>
          <CaseFigure
            src={assets + "power-detail.png"}
            caption="用電明細｜功率以 W 呈現，估算用電量以 kWh 呈現；畫面也標示資料不完整與有效涵蓋率。"
            width={2130}
            height={962}
          />
        </div>
      </Section>
      <Section
        id="energy-engineering"
        label="03 / DATA & INTEGRATION"
        title="介面之外，也處理資料如何進來、指令如何出去。"
      >
        <div className="bq-delivery-list">
          <div>
            <span>01</span>
            <h3>MQTT 設備串接</h3>
            <p>
              以 MQTT 串接 IoT
              產品，對接硬體代理商，釐清設備提供的資料與可接受的控制方式，讓軟體功能能對應到實際硬體。
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>資料結構與大量資料處理</h3>
            <p>
              規劃空間、設備與讀值的資料結構，處理大量設備資料的組織與讀取方式，支援管理介面及趨勢呈現。
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>排程與輸入輸出品質</h3>
            <p>
              處理排程結構與批量操作，對資料傳入、指令呼叫及回傳結果進行品質把關，對齊系統功能與串接端的資料要求。
            </p>
          </div>
          <div>
            <span>04</span>
            <h3>AI 串接介面</h3>
            <p>
              開放 AI
              端的串接介面，讓後續應用可銜接數據讀取與控制能力，保留系統擴充的空間。
            </p>
          </div>
        </div>
      </Section>
      <Section
        id="energy-delivery"
        label="04 / COLLABORATION & DELIVERY"
        title="完成軟體，也把串接與部署一起推進。"
      >
        <div className="bq-role-grid">
          <div>
            <span>MY OWNERSHIP</span>
            <h3>介面與功能由我負責</h3>
            <p>
              從資訊架構、操作介面到功能開發，涵蓋資料結構、排程處理與串接品質。
            </p>
          </div>
          <div>
            <span>PARTNER COORDINATION</span>
            <h3>協調硬體與場域需求</h3>
            <p>
              協助尋找、聯繫硬體代理商，並與綠建組搭配，將設備條件與管理需求帶入開發。
            </p>
          </div>
          <div>
            <span>SHARED DELIVERY</span>
            <h3>共同處理部署</h3>
            <p>
              與合作夥伴協同處理部署與整合，讓軟體、設備及運行環境共同配合。
            </p>
          </div>
        </div>
        <p className="bq-note">
          此案例以功能實作與整合責任呈現成果。截圖為提供的系統畫面，當下設備數與讀值不代表整體部署規模，也不作為節能成效數據。
        </p>
      </Section>
    </EditorialCase>
  );
}
