"use client";

import Link from "next/link";
import Image from "next/image";
import { PRODUCTS_DATA } from "@/data/products";

export default function ProductsPage() {
  const categories = Object.keys(PRODUCTS_DATA);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#EFE7DF] to-[#E6D7C5] py-16 px-4">
      <div
        className="
          max-w-6xl mx-auto p-8 space-y-14
          bg-white/70 backdrop-blur-sm
          rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          border border-[#E0D6CC]
        "
      >
        {/* العنوان الرئيسي */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#1A1A1A]"> منتجاتنا</h1>
          <p className="text-lg text-[#555] mt-3">
            تصفح جميع منتجات وخدمات الخليج للديكور — كل قسم يحتوي على أفضل التصاميم والصور والتفاصيل.
          </p>
        </div>

        {/* الأقسام */}
        <div className="grid md:grid-cols-2 gap-10">
          {categories.map((catKey) => {
            const cat = PRODUCTS_DATA[catKey as keyof typeof PRODUCTS_DATA];

            return (
              <div
                key={catKey}
                className="
                  bg-white rounded-2xl border border-[#E8E2DA] shadow-md 
                  overflow-hidden hover:shadow-xl transition
                "
              >
                {/* صورة القسم */}
                <div className="relative w-full h-[220px]">
                  <Image
                    src={cat.images[0]}
                    alt={cat.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* المحتوى */}
                <div className="p-6 space-y-3">
                  <h2 className="text-2xl font-semibold text-[#1A1A1A]">
                    {cat.title}
                  </h2>

                  <p className="text-[#555] leading-relaxed">
                    {cat.description.length > 120
                      ? cat.description.slice(0, 120) + "..."
                      : cat.description}
                  </p>

                  {/* زر */}
                  <Link
                    href={`/products/${catKey}`}
                    className="
                      inline-block mt-3 px-5 py-2 rounded-full
                      bg-[#C46A52] text-white font-medium
                      hover:bg-[#b5543f] transition
                    "
                  >
                    عرض التفاصيل
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
