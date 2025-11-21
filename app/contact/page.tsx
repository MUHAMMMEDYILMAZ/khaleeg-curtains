export const dynamic = "force-static";

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="bg-[#F7F3EE] min-h-screen py-20 border-t border-[#E8E2DA]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-6">
          تواصل معنا
        </h1>

        <p className="text-lg text-[#4A4A4A] leading-relaxed max-w-3xl mb-16">
          نحن دائمًا جاهزون لخدمتك والإجابة عن جميع استفساراتك حول الستائر،
          القياسات، الخامات، الأسعار، أو حجز زيارة مجانية.  
          اترك رسالتك وسنعود إليك في أسرع وقت.
        </p>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Contact Form */}
          <form className="bg-white border border-[#E8E2DA] p-8 rounded-3xl space-y-6">

            <div>
              <label className="block mb-2 text-sm font-medium text-[#1A1A1A]">
                الاسم
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-[#D6CEC4] bg-[#F9F6F1] px-4 py-3 text-sm focus:outline-none focus:border-[#C46A52]"
                placeholder="اكتب اسمك"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-[#1A1A1A]">
                رقم الجوال
              </label>
              <input
                type="tel"
                className="w-full rounded-xl border border-[#D6CEC4] bg-[#F9F6F1] px-4 py-3 text-sm focus:outline-none focus:border-[#C46A52]"
                placeholder="05xxxxxxxx"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-[#1A1A1A]">
                رسالتك
              </label>
              <textarea
                rows={5}
                className="w-full rounded-xl border border-[#D6CEC4] bg-[#F9F6F1] px-4 py-3 text-sm resize-none focus:outline-none focus:border-[#C46A52]"
                placeholder="اكتب تفاصيل استفسارك…"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#C46A52] hover:bg-[#B95D47] text-white py-3 rounded-full text-sm font-semibold transition"
            >
              إرسال الرسالة
            </button>
          </form>

          {/* Info Section */}
          <div className="space-y-10">

            <div>
              <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
                معلومات التواصل
              </h2>

              <div className="space-y-4 text-[#4A4A4A] text-sm">

                <p className="flex items-center gap-3">
                  <Phone className="text-[#C46A52]" size={20} />
                  0500000000
                </p>

                <p className="flex items-center gap-3">
                  <Mail className="text-[#C46A52]" size={20} />
                  info@khaleej-curtains.com
                </p>

                <p className="flex items-center gap-3">
                  <MapPin className="text-[#C46A52]" size={20} />
                  الرياض — السعودية
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5A] text-white py-4 rounded-full font-medium text-lg transition"
            >
              <MessageCircle size={24} />
              تواصل مباشرة عبر واتساب
            </a>

            {/* Optional Map */}
            <div className="w-full h-[260px] rounded-3xl overflow-hidden border border-[#E8E2DA] bg-[#EFE7DF]">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb="
              ></iframe>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
