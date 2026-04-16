"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      className="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-300"
    >
      {isDark ? "🌞 Sáng" : "🌙 Tối"}
    </button>
  );
}
