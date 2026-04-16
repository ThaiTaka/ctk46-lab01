import Link from "next/link";

export default function HomePage() {
	return (
		<section className="flex min-h-[70vh] items-center justify-center px-6">
			<div className="mx-auto max-w-3xl text-center">
				<h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
					Xin chào! Mình là Taka (Lê Thành Thái)
				</h1>
				<p className="mt-5 text-base text-gray-600 md:text-lg">
					Sinh viên CNTT (22124556) - Đại học Đà Lạt. Đam mê làm game Unity 3D, AI (YOLOv8) và phát triển
					Web/App.
				</p>
				<Link
					href="/projects"
					className="mt-8 inline-flex rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
				>
					Khám phá dự án
				</Link>
			</div>
		</section>
	);
}