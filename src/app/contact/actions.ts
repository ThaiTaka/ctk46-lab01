"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Tên phải từ 2-50 ký tự").max(50, "Tên phải từ 2-50 ký tự"),
  email: z.string().trim().email("Email không hợp lệ"),
  subject: z
    .string()
    .trim()
    .min(1, "Chủ đề phải từ 1-100 ký tự")
    .max(100, "Chủ đề phải từ 1-100 ký tự"),
  message: z
    .string()
    .trim()
    .min(1, "Nội dung phải từ 1-1000 ký tự")
    .max(1000, "Nội dung phải từ 1-1000 ký tự"),
});

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

export async function submitContactForm(
  _: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;

    return {
      success: false,
      message: "Vui lòng kiểm tra lại thông tin.",
      errors: {
        name: fieldErrors.name,
        email: fieldErrors.email,
        subject: fieldErrors.subject,
        message: fieldErrors.message,
      },
    };
  }

  return {
    success: true,
    message: "Đã gửi liên hệ thành công! Mình sẽ phản hồi sớm.",
  };
}
