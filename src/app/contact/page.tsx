import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900">Liên hệ</h1>
      <p className="mt-2 text-gray-600">
        Bạn có thể gửi lời nhắn cho Lê Thành Thái (Taka) qua form bên dưới.
      </p>

      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
}
