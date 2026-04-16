export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
}

export const posts: Post[] = [
  {
    slug: "ai-trong-giao-duc-ca-nhan-hoa",
    title: "AI trong giáo dục: Cá nhân hóa lộ trình học tập",
    excerpt:
      "Trí tuệ nhân tạo giúp phân tích năng lực người học để gợi ý nội dung phù hợp, tăng hiệu quả tự học.",
    content:
      "Trong vài năm gần đây, AI đã thay đổi cách học tập bằng việc đề xuất bài học theo trình độ, phát hiện lỗ hổng kiến thức và đưa ra phản hồi tức thì. Với dữ liệu học tập được thu thập theo thời gian thực, các nền tảng EdTech có thể xây dựng lộ trình cá nhân hóa cho từng sinh viên. Điều này giúp người học tiết kiệm thời gian, tăng động lực và cải thiện kết quả học tập rõ rệt.",
    date: "2026-04-16",
    category: "AI & EdTech",
    author: "Lê Thành Thái",
  },
  {
    slug: "nextjs-va-tailwind-cho-web-hien-dai",
    title: "Xây dựng web hiện đại với Next.js và Tailwind CSS",
    excerpt:
      "Sự kết hợp giữa App Router và Tailwind CSS giúp phát triển giao diện nhanh, tối ưu SEO và trải nghiệm người dùng.",
    content:
      "Next.js cung cấp kiến trúc mạnh mẽ cho ứng dụng React với routing linh hoạt, tối ưu hiệu năng và khả năng render đa dạng. Khi đi cùng Tailwind CSS, lập trình viên có thể thiết kế giao diện nhất quán ngay trong JSX mà không mất nhiều thời gian viết CSS thủ công. Đây là stack phù hợp cho sinh viên và đội ngũ nhỏ muốn xây dựng sản phẩm nhanh nhưng vẫn đảm bảo chất lượng.",
    date: "2026-04-14",
    category: "Web Development",
    author: "Lê Thành Thái",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
