export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export const guestbookEntries: GuestbookEntry[] = [
  {
    id: "entry-1",
    name: "Nguyễn Văn A",
    message: "Portfolio rất đẹp và hiện đại, chúc bạn phát triển thật tốt!",
    createdAt: "2026-04-20T08:00:00.000Z",
  },
  {
    id: "entry-2",
    name: "Trần Thị B",
    message: "Mình rất thích phần dự án Unity 3D của bạn, cố lên nhé!",
    createdAt: "2026-04-20T08:30:00.000Z",
  },
  {
    id: "entry-3",
    name: "Lê Minh C",
    message: "Chúc bạn sớm có nhiều sản phẩm AI và EdTech ấn tượng hơn nữa.",
    createdAt: "2026-04-20T09:00:00.000Z",
  },
];
