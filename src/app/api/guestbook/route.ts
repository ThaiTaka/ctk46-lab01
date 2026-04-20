import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries, type GuestbookEntry } from "@/data/guestbook";

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

export async function GET(request: NextRequest) {
  const limitParam = request.nextUrl.searchParams.get("limit");

  if (!limitParam) {
    return NextResponse.json({ data: guestbookEntries, total: guestbookEntries.length });
  }

  const limit = Number.parseInt(limitParam, 10);

  if (!Number.isInteger(limit) || limit <= 0) {
    return NextResponse.json(
      { error: "Query parameter 'limit' phải là số nguyên dương." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    data: guestbookEntries.slice(0, limit),
    total: guestbookEntries.length,
    limit,
  });
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as Partial<GuestbookEntry>;
  const errors = validateGuestbookPayload(body.name, body.message);

  if (errors.length > 0) {
    return NextResponse.json({ error: errors }, { status: 400 });
  }

  const entry: GuestbookEntry = {
    id: crypto.randomUUID(),
    name: body.name!.trim(),
    message: body.message!.trim(),
    createdAt: new Date().toISOString(),
  };

  guestbookEntries.unshift(entry);

  return NextResponse.json({ data: entry }, { status: 201 });
}
