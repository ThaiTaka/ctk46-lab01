"use client";

type GlobalErrorProps = {
  error: Error;
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="vi">
      <body className="flex min-h-screen items-center justify-center px-4">
        <main className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Úi, có lỗi xảy ra rồi Taka ơi!</h2>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-4 rounded-md bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
          >
            Thử lại
          </button>
          <p className="mt-3 text-sm text-gray-500">{error.message}</p>
        </main>
      </body>
    </html>
  );
}
