import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";

type GuestbookRouteContext = {
  params: Promise<{
    id: string;
  }>;
};

function validateGuestbookPayload(name: unknown, message: unknown): string[] {
  const errors: string[] = [];

  const normalizedName = typeof name === "string" ? name.trim() : "";
  const normalizedMessage = typeof message === "string" ? message.trim() : "";

  if (normalizedName.length < 2 || normalizedName.length > 50) {
    errors.push("Tên phải có độ dài từ 2 đến 50 ký tự.");
  }

  if (normalizedMessage.length < 1 || normalizedMessage.length > 500) {
    errors.push("Lời nhắn phải có độ dài từ 1 đến 500 ký tự.");
  }

  return errors;
}

export async function DELETE(_: NextRequest, context: GuestbookRouteContext) {
  const { id } = await context.params;
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Không tìm thấy lời nhắn." }, { status: 404 });
  }

  const [deletedEntry] = guestbookEntries.splice(index, 1);

  return NextResponse.json({ data: deletedEntry });
}

export async function PUT(request: NextRequest, context: GuestbookRouteContext) {
  const { id } = await context.params;
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Không tìm thấy lời nhắn." }, { status: 404 });
  }

  const body = (await request.json()) as {
    name?: string;
    message?: string;
  };

  const errors = validateGuestbookPayload(body.name, body.message);

  if (errors.length > 0) {
    return NextResponse.json({ error: errors }, { status: 400 });
  }

  const updatedEntry = {
    ...guestbookEntries[index],
    name: body.name!.trim(),
    message: body.message!.trim(),
  };

  guestbookEntries[index] = updatedEntry;

  return NextResponse.json({ data: updatedEntry });
}
