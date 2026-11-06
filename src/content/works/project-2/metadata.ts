import { stories } from "@/lib/portfolio-stories";
const story = stories.find((item) => item.slug === "disaster")!;
export const projectMetadata = {
  id: "project-2",
  title: story.name,
  subtitle: story.title,
  description: story.intro,
  keywords: [
    "AI工具開發",
    "快速實作",
    "MVP驗證",
    "內容電商",
    "社群成長",
    "防災工具",
    "營收增長",
  ],
  ogImage: "/images/project/project 2/project.png",
  publishDate: "2024-02-20",
  category: "AI工具開發",
  client: "個人專案",
  duration: "兩個月營收驗證",
  role: story.role,
  tags: ["AI工具開發", "快速實作", "MVP驗證", "內容電商", "社群成長"],
  image: "/images/project/project 2/project.png",
  featured: true,
  status: "published" as const,
  order: 2,
};
