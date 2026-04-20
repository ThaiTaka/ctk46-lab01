"use client";

import { useActionState } from "react";
import { createGuestbookEntry } from "@/app/guestbook/actions";

type GuestbookActionState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    message?: string[];
  };
};

const initialGuestbookState: GuestbookActionState = {
  success: false,
  message: "",
};

export default function GuestbookForm() {
  const [state, formAction, isPending] = useActionState<GuestbookActionState, FormData>(
    createGuestbookEntry,
    initialGuestbookState,
  );

  return (
    <form action={formAction} className="space-y-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">Để lại lời nhắn</h2>

      <div className="space-y-1">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Tên
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring"
          placeholder="Nhập tên của bạn"
          required
        />
        {state.errors?.name ? <p className="text-xs text-red-600">{state.errors.name[0]}</p> : null}
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Lời nhắn
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring"
          placeholder="Viết lời nhắn..."
          required
        />
        {state.errors?.message ? <p className="text-xs text-red-600">{state.errors.message[0]}</p> : null}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Đang gửi..." : "Gửi lời nhắn"}
      </button>

      {state.message ? (
        <p className={`text-sm ${state.success ? "text-green-600" : "text-red-600"}`}>{state.message}</p>
      ) : null}
    </form>
  );
}
