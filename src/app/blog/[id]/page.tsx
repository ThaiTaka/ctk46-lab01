import Link from "next/link";
import { notFound } from "next/navigation";
import type { Post, User } from "@/types/post";

type BlogDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function getPostAndAuthor(id: string): Promise<{ post: Post; author?: User }> {
  const postResponsePromise = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  });

  const usersResponsePromise = fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 60 },
  });

  const [postResponse, usersResponse] = await Promise.all([postResponsePromise, usersResponsePromise]);

  if (!postResponse.ok || !usersResponse.ok) {
    throw new Error("Không thể tải chi tiết bài viết");
  }

  const post = (await postResponse.json()) as Post;
  const users = (await usersResponse.json()) as User[];

  if (!post?.id) {
    notFound();
  }

  const author = users.find((user) => user.id === post.userId);

  return { post, author };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;

  if (!/^\d+$/.test(id)) {
    notFound();
  }

  const { post, author } = await getPostAndAuthor(id);

  return (
    <article className="mx-auto max-w-3xl px-6 py-10">
      <Link href="/blog" className="inline-flex text-sm font-medium text-blue-600 hover:text-blue-700">
        ← Quay lại blog
      </Link>

      <h1 className="mt-4 text-3xl font-bold text-gray-900">{post.title}</h1>

      <div className="mt-3 text-sm text-gray-600">
        <p>Tác giả: {author?.name ?? "Đang cập nhật"}</p>
        <p>Email: {author?.email ?? "N/A"}</p>
      </div>

      <p className="mt-6 whitespace-pre-line leading-relaxed text-gray-700">{post.body}</p>
    </article>
  );
}
