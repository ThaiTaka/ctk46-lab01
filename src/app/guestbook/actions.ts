"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { guestbookEntries, type GuestbookEntry } from "@/data/guestbook";

const guestbookSchema = z.object({
  name: z.string().trim().min(2, "Tên phải từ 2-50 ký tự").max(50, "Tên phải từ 2-50 ký tự"),
  message: z.string().trim().min(1, "Lời nhắn phải từ 1-500 ký tự").max(500, "Lời nhắn phải từ 1-500 ký tự"),
});

type GuestbookActionState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    message?: string[];
  };
};

export async function createGuestbookEntry(
  _: GuestbookActionState,
  formData: FormData,
): Promise<GuestbookActionState> {
  const parsed = guestbookSchema.safeParse({
    name: formData.get("name"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const flattened = parsed.error.flatten().fieldErrors;

    return {
      success: false,
      message: "Dữ liệu không hợp lệ.",
      errors: {
        name: flattened.name,
        message: flattened.message,
      },
    };
  }

  const entry: GuestbookEntry = {
    id: crypto.randomUUID(),
    name: parsed.data.name,
    message: parsed.data.message,
    createdAt: new Date().toISOString(),
  };

  guestbookEntries.unshift(entry);
  revalidatePath("/guestbook");

  return {
    success: true,
    message: "Đã thêm lời nhắn thành công!",
  };
}

export async function deleteGuestbookEntry(id: string): Promise<void> {
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index !== -1) {
    guestbookEntries.splice(index, 1);
  }

  revalidatePath("/guestbook");
}
