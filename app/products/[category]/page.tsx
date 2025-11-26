"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AutoSlider from "@/components/AutoSlider";
import { PRODUCTS_DATA } from "@/data/products";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const [categoryResolved, setCategoryResolved] = useState<string | null>(null);

  useEffect(() => {
    params.then((p) => setCategoryResolved(p.category));
  }, [params]);

  if (!categoryResolved) return null;

  type CategoryKeys = keyof typeof PRODUCTS_DATA;
  const cat = PRODUCTS_DATA[categoryResolved as CategoryKeys];

  if (!cat) {
    return <h1 className="p-10 text-2xl">القسم غير موجود</h1>;
  }

  return (
    <div
      className="
        min-h-screen w-full 
        bg-gradient-to-b from-[#EFE7DF] to-[#E6D7C5]
        bg-pattern
        py-14 px-4
      "
    >
      {/* المحتوى الداخلي */}
      <div
        className="
          p-10 max-w-6xl mx-auto space-y-16 
          bg-white/70 backdrop-blur-sm
          rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          border border-[#E0D6CC]
        "
      >
        {/* العنوان والوصف */}
        <div className={animate ? "fade-slide-once" : ""}>
          <h1 className="text-4xl font-bold mb-4 text-[#1A1A1A]">
            {cat.title}
          </h1>

          <p className="text-lg leading-relaxed text-[#555]">
            {cat.description}
          </p>
        </div>

        {/* السلايدر */}
        <div className={animate ? "fade-slide-once" : ""}>
          <AutoSlider images={cat.images} />
        </div>

        {/* ⭐ المنتج التسويقي – مع حركة Slide من اليمين */}
        <div
          className={`
            grid md:grid-cols-2 gap-8 items-center 
            p-6 rounded-3xl bg-[#F7F3EE] 
            border border-[#E8E2DA] 
            shadow-md
            ${animate ? "slide-from-right" : ""}
          `}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-[#1A1A1A]">
              {cat.highlight.title}
            </h2>
            <p className="text-[#555] leading-relaxed">
              {cat.highlight.text}
            </p>
          </div>

          <div className="relative w-full h-[240px] rounded-2xl overflow-hidden shadow">
            <Image
              src={cat.highlight.image}
              alt="highlight"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* الأقسام الفرعية */}
       <div className={animate ? "fade-slide-once" : ""}>
  <h2 className="text-3xl font-semibold mb-6 text-[#1A1A1A]">
    الأنواع
  </h2>

  <div className="grid sm:grid-cols-2 gap-6">
    {cat.subs.map((sub) => {
      const info = cat.details.subDetails[sub]; // هنا جبنا التفاصيل الحقيقية

      return (
        <Link
          key={sub}
          href={`/products/${categoryResolved}/${sub}`}
          className="
            block p-6 rounded-2xl 
            border border-[#E6DCD2]
            bg-white hover:border-[#C46A52] hover:bg-[#FCF7F4]
            transition shadow-sm hover:shadow-md
          "
        >
          <h3 className="text-xl font-semibold mb-2 text-[#1A1A1A]">
            {info.name}
          </h3>

          <p className="text-[#777] text-sm leading-relaxed">
            {info.description}
          </p>
        </Link>
      );
    })}
  </div>
</div>

      </div>
    </div>
  );
}
