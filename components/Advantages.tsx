import { ShieldCheck, Timer, Sparkles, Ruler } from "lucide-react";

export default function Advantages() {
  return (
    <section className="bg-[#FDFCF9] py-20 border-b border-[#E8E2DA]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-12">
          لماذا تختارنا؟
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* ضمان */}
          <div className="rounded-2xl border border-[#E8E2DA] bg-white p-6 flex flex-col items-center text-center hover:border-[#C46A52] transition">
            <ShieldCheck className="text-[#C46A52] mb-4" size={32} />
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
              ضمان على الخدمة
            </h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              نقدم ضمانًا على التركيب وجودة العمل لضمان رضاكم الكامل.
            </p>
          </div>

          {/* سرعة تنفيذ */}
          <div className="rounded-2xl border border-[#E8E2DA] bg-white p-6 flex flex-col items-center text-center hover:border-[#C46A52] transition">
            <Timer className="text-[#C46A52] mb-4" size={32} />
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
              سرعة في التنفيذ
            </h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              نلتزم بمواعيد التسليم ونعمل بسرعة واحترافية عالية.
            </p>
          </div>

          {/* جودة عالية */}
          <div className="rounded-2xl border border-[#E8E2DA] bg-white p-6 flex flex-col items-center text-center hover:border-[#C46A52] transition">
            <Sparkles className="text-[#C46A52] mb-4" size={32} />
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
              جودة في الخامات
            </h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              نستخدم خامات مميزة وأقمشة قوية تدوم طويلاً.
            </p>
          </div>

          {/* دقة مقاسات */}
          <div className="rounded-2xl border border-[#E8E2DA] bg-white p-6 flex flex-col items-center text-center hover:border-[#C46A52] transition">
            <Ruler className="text-[#C46A52] mb-4" size={32} />
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
              دقة في المقاسات
            </h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              نقوم بالقياس بدقة لضمان أفضل نتيجة تناسب مساحتك.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
