import { stories } from "@/lib/portfolio-stories";
const story = stories.find((item) => item.slug === "ideacam")!;
export const projectMetadata = {
  id: "project-1",
  title: story.name,
  subtitle: story.title,
  description: story.intro,
  keywords: [
    "產品開發",
    "IoT產品",
    "跨境電商",
    "營運策略",
    "敏捷行銷",
    "市場分析",
    "MVP驗證",
    "海外市場",
  ],
  ogImage: "/images/project/project 1/product-2.jpg",
  publishDate: "2024-01-15",
  category: "產品開發",
  client: "BenQ",
  duration: "12 個月",
  role: story.role,
  tags: ["產品開發", "IoT產品", "跨境電商", "營運策略", "敏捷行銷"],
  image: "/images/project/project 1/product-2.jpg",
  featured: true, // 是否為精選作品
  status: "published" as const, // published | draft
  order: 1, // 顯示順序
};
