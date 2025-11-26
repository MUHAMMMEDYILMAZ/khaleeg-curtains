import Image from "next/image";
import { PRODUCTS_DATA } from "@/data/products";
import AutoSlider from "@/components/AutoSlider";

export default async function SubCategoryPage({
  params,
}: {
  params: Promise<{ category: string; sub: string }>;
}) {
  const { category, sub } = await params;

  type CategoryKeys = keyof typeof PRODUCTS_DATA;
  const cat = PRODUCTS_DATA[category as CategoryKeys];

  if (!cat) {
    return <h1 className="p-10 text-2xl">القسم غير موجود</h1>;
  }

  // 🔥 الحل هنا
  type SubKeys = keyof typeof cat.details.subDetails;
  const subKey = sub as SubKeys;
  const subData = cat.details.subDetails[subKey];

  if (!subData) {
    return <h1 className="p-10 text-2xl">القسم الفرعي غير موجود</h1>;
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#EFE7DF] to-[#E6D7C5] pt-14 pb-15 px-4">
      <div
        className="
          p-10 max-w-5xl mx-auto space-y-12
          bg-white/70 backdrop-blur-sm
          rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          border border-[#E0D6CC]
        "
      >
        {/* العنوان */}
        <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">
          {subData.name}
        </h1>

        {/* وصف */}
        <p className="text-lg text-[#555] leading-relaxed">
          {subData.description}
        </p>

        {/* سلايدر صور القسم الرئيسي */}
       {/* 🔥 سلايدر نفس باقي الصفحات */}
<div className="rounded-2xl overflow-hidden border border-[#E8E2DA]">
  <AutoSlider images={cat.images} />
</div>


        {/* المميزات */}
        <div>
          <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-4">
            المميزات
          </h2>

          <ul className="space-y-3 text-[#444] text-lg">
            {subData.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#C46A52] text-xl">•</span>
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="/#contact"
            className="
              inline-block px-10 py-3 rounded-full 
              bg-[#C46A52] text-white text-lg font-medium
              hover:bg-[#b5543f] transition shadow-md
            "
          >
            اطلب هذا النوع الآن
          </a>
        </div>
      </div>
    </div>
  );
}
