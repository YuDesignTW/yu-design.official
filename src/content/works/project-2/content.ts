import type { ProjectBlock } from "@/lib/constants";
import { stories } from "@/lib/portfolio-stories";
const story = stories.find((item) => item.slug === "disaster")!;

export const projectContent: readonly ProjectBlock[] = [
  {
    type: "hero",
    title: story.name,
    subtitle: story.title,
    description: story.intro,
  },
  ...story.sections.map(
    ([title, content]): ProjectBlock => ({ type: "text", title, content }),
  ),
  {
    type: "video",
    src: "/images/project/project%202/project.mp4",
    alt: "居家避難準備指南操作演示",
    caption: "依人數與天數規劃防災物資",
  },
  {
    type: "results",
    title: "兩個月的市場驗證成果",
    metrics: [
      { label: "社群觸及", value: "15 萬+" },
      { label: "兩個月營收", value: "NT$70 萬+" },
      { label: "社群分享", value: "3,000+" },
    ],
  },
];
