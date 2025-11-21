import Link from "next/link";
import {
  PanelBottom,
  SunMoon,
  Waves,
  Crown,
  Layers,
  Zap,
} from "lucide-react";

export default function CurtainsTypes() {
  return (
    <section
      id="types"
      className="bg-[#FDFCF9] border-b border-[#E8E2DA] py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-12">
          أنواع الستائر
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Rollers */}
          <Link
            href="/curtains/roller"
            className="block p-6 rounded-3xl border border-[#E8E2DA] bg-white hover:border-[#C46A52] transition"
          >
            <PanelBottom className="text-[#C46A52] mb-4" size={32} />
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
              ستائر رول
            </h3>
            <p className="text-[#4A4A4A] leading-relaxed text-sm">
              عملية وسهلة الاستخدام بخامات متعددة ودرجات تعتيم مختلفة.
            </p>
          </Link>

          {/* Blackout */}
          <Link
            href="/curtains/blackout"
            className="block p-6 rounded-3xl border border-[#E8E2DA] bg-white hover:border-[#C46A52] transition"
          >
            <SunMoon className="text-[#C46A52] mb-4" size={32} />
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
              ستائر بلاك آوت
            </h3>
            <p className="text-[#4A4A4A] leading-relaxed text-sm">
              تمنع دخول الضوء بشكل كامل — مثالية لغرف النوم.
            </p>
          </Link>

          {/* Sheer */}
          <Link
            href="/curtains/sheer"
            className="block p-6 rounded-3xl border border-[#E8E2DA] bg-white hover:border-[#C46A52] transition"
          >
            <Waves className="text-[#C46A52] mb-4" size={32} />
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
              ستائر شفافة (Sheer)
            </h3>
            <p className="text-[#4A4A4A] leading-relaxed text-sm">
              تسمح بدخول الضوء وتضيف جمالًا ناعمًا للغرفة.
            </p>
          </Link>

          {/* Classic */}
          <Link
            href="/curtains/classic"
            className="block p-6 rounded-3xl border border-[#E8E2DA] bg-white hover:border-[#C46A52] transition"
          >
            <Crown className="text-[#C46A52] mb-4" size={32} />
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
              ستائر كلاسيكية
            </h3>
            <p className="text-[#4A4A4A] leading-relaxed text-sm">
              أقمشة ثقيلة ولمسات فاخرة تمنح المكان مظهرًا راقيًا.
            </p>
          </Link>

          {/* Day & Night */}
          <Link
            href="/curtains/day-night"
            className="block p-6 rounded-3xl border border-[#E8E2DA] bg-white hover:border-[#C46A52] transition"
          >
            <Layers className="text-[#C46A52] mb-4" size={32} />
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
              ستائر مزدوجة (Day & Night)
            </h3>
            <p className="text-[#4A4A4A] leading-relaxed text-sm">
              مزج مثالي بين الإضاءة والخصوصية بطبقتين متناسقتين.
            </p>
          </Link>

          {/* Motor */}
          <Link
            href="/curtains/motor"
            className="block p-6 rounded-3xl border border-[#E8E2DA] bg-white hover:border-[#C46A52] transition"
          >
            <Zap className="text-[#C46A52] mb-4" size={32} />
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
              ستائر كهربائية
            </h3>
            <p className="text-[#4A4A4A] leading-relaxed text-sm">
              تحكم كهربائي سلس مع إمكانية الدمج مع أنظمة المنزل الذكي.
            </p>
          </Link>

        </div>
      </div>
    </section>
  );
}
