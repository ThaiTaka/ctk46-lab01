import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
      <p>© 2026 Lê Thành Thái | MSSV: 22124556 | Đại học Đà Lạt</p>
      <p className="mt-2">
        <Link href="mailto:lethanhthai0805@gmail.com" className="hover:text-gray-700 underline-offset-2 hover:underline">
          lethanhthai0805@gmail.com
        </Link>
        {" | "}
        <Link href="https://github.com/thaitaka" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 underline-offset-2 hover:underline">
          GitHub
        </Link>
      </p>
    </footer>
  );
}
