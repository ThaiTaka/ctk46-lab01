import GuestbookForm from "@/components/guestbook-form";
import { guestbookEntries } from "@/data/guestbook";
import { deleteGuestbookEntry } from "./actions";

export default function GuestbookPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <GuestbookForm />
      </div>

      <div className="space-y-4 lg:col-span-3">
        <h1 className="text-3xl font-bold text-gray-900">Guestbook</h1>
        <p className="text-gray-600">Những lời nhắn mới nhất từ bạn bè và người xem portfolio.</p>

        <div className="space-y-3">
          {guestbookEntries.length === 0 ? (
            <p className="rounded-lg border border-dashed border-gray-300 p-4 text-sm text-gray-500">
              Chưa có lời nhắn nào.
            </p>
          ) : (
            guestbookEntries.map((entry) => (
              <article key={entry.id} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-gray-900">{entry.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-gray-700">{entry.message}</p>
                    <p className="mt-2 text-xs text-gray-500">
                      {new Date(entry.createdAt).toLocaleString("vi-VN")}
                    </p>
                  </div>

                  <form action={deleteGuestbookEntry.bind(null, entry.id)}>
                    <button
                      type="submit"
                      className="rounded-md border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-50"
                    >
                      Xóa
                    </button>
                  </form>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
