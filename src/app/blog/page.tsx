import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Post } from "@/types/post";

async function getPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Không thể tải danh sách bài viết");
  }

  const posts = (await response.json()) as Post[];
  return posts.slice(0, 10);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900">Blog công nghệ</h1>
      <p className="mt-2 text-gray-600">10 bài viết mới nhất từ JSONPlaceholder API.</p>

      <div className="mt-8 space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <Badge variant="secondary">Tác giả #{post.userId}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-2 text-sm text-muted-foreground">{post.body}</p>
              <Link
                href={`/blog/${post.id}`}
                className="mt-3 inline-flex text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Xem chi tiết →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
