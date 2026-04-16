type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  url: string;
};

const projects: Project[] = [
  {
    id: "takast",
    title: "Takast (Text-to-Speech)",
    description: "Web Text-to-Speech sử dụng Next.js, Python, Piper TTS và Prisma.",
    tech: ["Next.js", "Python", "Piper TTS"],
    url: "https://github.com/thaitaka/takast",
  },
  {
    id: "takaura",
    title: "TakAura",
    description: "App nhận diện hình ảnh (Object Detection) bằng Flutter tích hợp AI YOLOv8 (TFLite).",
    tech: ["Flutter", "YOLOv8", "TFLite"],
    url: "https://github.com/thaitaka/takaura",
  },
  {
    id: "hand-tracking",
    title: "Hand Tracking to Unity",
    description: "Bắt chuyển động tay bằng Python (OpenCV) và truyền real-time qua UDP vào game Unity 3D.",
    tech: ["Python", "OpenCV", "Unity 3D"],
    url: "https://github.com/thaitaka/hand-tracking-main",
  },
  {
    id: "christmas-tree",
    title: "Christmas Tree",
    description: "Web frontend hiệu ứng cây thông Noel tương tác mượt mà.",
    tech: ["React", "Vite", "TypeScript"],
    url: "https://github.com/thaitaka/christmas-tree",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Dự án nổi bật</h1>
      <p className="mt-3 text-gray-600">Một số dự án thực tế của Lê Thành Thái (Taka).</p>

      <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-900">{project.title}</h2>
            <p className="mt-3 leading-relaxed text-gray-600">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={`${project.id}-${item}`}
                  className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}
