"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/contact/actions";

type ContactActionState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

const initialContactState: ContactActionState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<ContactActionState, FormData>(
    submitContactForm,
    initialContactState,
  );

  return (
    <form action={formAction} className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Họ tên
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring"
            placeholder="Nhập họ tên"
            required
          />
          {state.errors?.name ? <p className="text-xs text-red-600">{state.errors.name[0]}</p> : null}
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring"
            placeholder="example@email.com"
            required
          />
          {state.errors?.email ? <p className="text-xs text-red-600">{state.errors.email[0]}</p> : null}
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="subject" className="text-sm font-medium text-gray-700">
          Chủ đề
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring"
          placeholder="Nhập chủ đề"
          required
        />
        {state.errors?.subject ? <p className="text-xs text-red-600">{state.errors.subject[0]}</p> : null}
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Nội dung
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring"
          placeholder="Nội dung liên hệ..."
          required
        />
        {state.errors?.message ? <p className="text-xs text-red-600">{state.errors.message[0]}</p> : null}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Đang gửi..." : "Gửi liên hệ"}
      </button>

      {state.message ? (
        <p className={`text-sm ${state.success ? "text-green-600" : "text-red-600"}`}>{state.message}</p>
      ) : null}
    </form>
  );
}
