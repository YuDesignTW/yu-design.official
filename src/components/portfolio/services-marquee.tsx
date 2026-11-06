"use client";
import { useState } from "react";
import { Pause, Play } from "lucide-react";
import "./services-marquee.css";

export function ServicesMarquee() {
  const [paused, setPaused] = useState(false);
  return (
    <div
      className="yg-services-marquee"
      aria-label="Design, Marketing, Develop"
    >
      <div
        className={`yg-services-track${paused ? " is-paused" : ""}`}
        aria-hidden="true"
      >
        {[0, 1].map((copy) => (
          <span key={copy}>
            {[0, 1, 2].map((item) => (
              <span key={item}>
                DESIGN <i>×</i> MARKETING <i>×</i> DEVELOP <i>×</i>{" "}
              </span>
            ))}
          </span>
        ))}
      </div>
      <button
        className="yg-services-pause"
        onClick={() => setPaused(!paused)}
        aria-pressed={paused}
        aria-label={paused ? "播放服務跑馬燈" : "暫停服務跑馬燈"}
      >
        {paused ? <Play size={16} /> : <Pause size={16} />}
      </button>
    </div>
  );
}
