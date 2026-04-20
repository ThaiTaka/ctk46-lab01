import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  url: string;
  status: "Hoàn thành" | "Đang phát triển";
};

function getStatusBadgeProps(status: Project["status"]) {
  if (status === "Hoàn thành") {
    return {
      variant: "secondary" as const,
      className: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
    };
  }

  return {
    variant: "outline" as const,
    className: "border-amber-300 bg-amber-50 text-amber-700 hover:bg-amber-50",
  };
}

const projects: Project[] = [
  {
    id: "takast",
    title: "Takast (Text-to-Speech)",
    description: "Web Text-to-Speech sử dụng Next.js, Python, Piper TTS và Prisma.",
    tech: ["Next.js", "Python", "Piper TTS"],
    url: "https://github.com/thaitaka/takast",
    status: "Hoàn thành",
  },
  {
    id: "takaura",
    title: "TakAura",
    description: "App nhận diện hình ảnh (Object Detection) bằng Flutter tích hợp AI YOLOv8 (TFLite).",
    tech: ["Flutter", "YOLOv8", "TFLite"],
    url: "https://github.com/thaitaka/takaura",
    status: "Đang phát triển",
  },
  {
    id: "hand-tracking",
    title: "Hand Tracking to Unity",
    description: "Bắt chuyển động tay bằng Python (OpenCV) và truyền real-time qua UDP vào game Unity 3D.",
    tech: ["Python", "OpenCV", "Unity 3D"],
    url: "https://github.com/thaitaka/hand-tracking-main",
    status: "Hoàn thành",
  },
  {
    id: "christmas-tree",
    title: "Christmas Tree",
    description: "Web frontend hiệu ứng cây thông Noel tương tác mượt mà.",
    tech: ["React", "Vite", "TypeScript"],
    url: "https://github.com/thaitaka/christmas-tree",
    status: "Hoàn thành",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Dự án nổi bật</h1>
      <p className="mt-3 text-gray-600">Một số dự án thực tế của Lê Thành Thái (Taka).</p>

      <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => {
          const statusBadge = getStatusBadgeProps(project.status);

          return (
            <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="block">
              <Card className="h-full transition hover:-translate-y-1 hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle>{project.title}</CardTitle>
                    <Badge variant={statusBadge.variant} className={statusBadge.className}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <Badge key={`${project.id}-${item}`} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          );
        })}
      </section>
    </main>
  );
}
