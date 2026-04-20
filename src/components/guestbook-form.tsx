"use client";

import { useActionState } from "react";
import { createGuestbookEntry } from "@/app/guestbook/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
    <Card>
      <CardHeader>
        <CardTitle>Để lại lời nhắn</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Tên</Label>
            <Input id="name" name="name" type="text" placeholder="Nhập tên của bạn" required />
            {state.errors?.name ? <p className="text-xs text-red-600">{state.errors.name[0]}</p> : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Lời nhắn</Label>
            <Textarea id="message" name="message" rows={4} placeholder="Viết lời nhắn..." required />
            {state.errors?.message ? <p className="text-xs text-red-600">{state.errors.message[0]}</p> : null}
          </div>

          <Button type="submit" disabled={isPending}>
            {isPending ? "Đang gửi..." : "Gửi lời nhắn"}
          </Button>

          {state.message ? (
            <p className={`text-sm ${state.success ? "text-green-600" : "text-red-600"}`}>{state.message}</p>
          ) : null}
        </form>
      </CardContent>
    </Card>
  );
}
