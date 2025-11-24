import Link from "next/link";
import { PanelsTopLeft, BedDouble, Armchair, Wallpaper } from "lucide-react";

export default function MainCategories() {
  return (
    <section
      id="types"
      className="bg-[#FDFCF9] border-b border-[#E8E2DA] py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-12">
          خدماتنا الرئيسية
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Curtains */}
          <Link
            href="/products/curtains"
            className="block p-6 rounded-3xl border border-[#E8E2DA] bg-white 
                       hover:border-[#C46A52] hover:shadow-md transition"
          >
            <PanelsTopLeft className="text-[#C46A52] mb-4" size={34} />
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
              الستائر
            </h3>
            <p className="text-[#4A4A4A] leading-relaxed text-sm">
              جميع أنواع الستائر — رول، بلاك آوت، شفاف، كلاسيكي، كهربائي والمزيد.
            </p>
          </Link>

          {/* Bedrooms */}
          <Link
            href="/products/bedrooms"
            className="block p-6 rounded-3xl border border-[#E8E2DA] bg-white
                       hover:border-[#C46A52] hover:shadow-md transition"
          >
            <BedDouble className="text-[#C46A52] mb-4" size={34} />
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
              غرف النوم
            </h3>
            <p className="text-[#4A4A4A] leading-relaxed text-sm">
              تصميم وتنفيذ غرف نوم فاخرة بموديلات عصرية وكلاسيكية.
            </p>
          </Link>

          {/* Sofas */}
          <Link
            href="/products/sofas"
            className="block p-6 rounded-3xl border border-[#E8E2DA] bg-white 
                       hover:border-[#C46A52] hover:shadow-md transition"
          >
            <Armchair className="text-[#C46A52] mb-4" size={34} />
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
              الكنب
            </h3>
            <p className="text-[#4A4A4A] leading-relaxed text-sm">
              كنب مودرن وكلاسيك مع خيارات تفصيل حسب المقاسات المطلوبة.
            </p>
          </Link>

          {/* Wall Covering */}
          <Link
            href="/products/walls"
            className="block p-6 rounded-3xl border border-[#E8E2DA] bg-white 
                       hover:border-[#C46A52] hover:shadow-md transition"
          >
            <PanelsTopLeft className="text-[#C46A52] mb-4" size={34} />
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
              تجليد الجدران
            </h3>
            <p className="text-[#4A4A4A] leading-relaxed text-sm">
              حلول تغطية الجدران بتصاميم خشبية وعصرية تضيف فخامة للمكان.
            </p>
          </Link>

        </div>
      </div>
    </section>
  );
}
