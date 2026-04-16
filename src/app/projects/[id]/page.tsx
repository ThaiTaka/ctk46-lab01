import Link from "next/link";

type ProjectDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 md:px-6">
      <Link href="/projects" className="inline-flex text-sm font-medium text-blue-600 hover:text-blue-700">
        ← Quay lại danh sách
      </Link>
      <h1 className="mt-4 text-3xl font-bold text-gray-900">Chi tiết dự án: {id}</h1>
    </main>
  );
}
