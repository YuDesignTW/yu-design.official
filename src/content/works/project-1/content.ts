import type { ProjectBlock } from "@/lib/constants";
import { stories } from "@/lib/portfolio-stories";
const story = stories.find((item) => item.slug === "ideacam")!;

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
    type: "gallery",
    images: [
      {
        src: "/images/project/project 1/product-1.jpg",
        alt: "ideaCam 雙模式攝影機",
      },
      {
        src: "/images/project/project 1/product-2.jpg",
        alt: "ideaCam 產品功能",
      },
    ],
  },
  {
    type: "gallery",
    images: [
      {
        src: "/images/project/project 1/product-mkt-1.jpg",
        alt: "上市行銷規劃",
      },
      {
        src: "/images/project/project 1/product-mkt-2.jpg",
        alt: "創作者合作與內容行銷",
      },
      {
        src: "/images/project/project 1/product-mkt-3.jpg",
        alt: "EDM 行銷素材",
      },
    ],
  },
];
