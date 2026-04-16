"use client";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-600">Úi, có lỗi xảy ra rồi Taka ơi!</h2>
        <p className="mt-2 text-sm text-gray-500">{error.message}</p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
        >
          Thử lại
        </button>
      </div>
    </div>
  );
}