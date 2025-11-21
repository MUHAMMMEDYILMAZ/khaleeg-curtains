"use client";

import Image from "next/image";
import curtainsData from "@/data/curtains.json";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { useState, use } from "react";

export const dynamic = "force-static";

export default function CurtainTypePage({ params }: { params: Promise<{ id: string }> }) {
  // Next.js 15 → params is now a Promise
  const { id } = use(params);

  const data = (curtainsData as any)[id];

  if (!data) {
    return (
      <div className="p-20 text-center text-xl">النوع غير موجود.</div>
    );
  }

  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % data.images.length);
  const prev = () => setIndex((prev) => (prev - 1 + data.images.length) % data.images.length);

  return (
    <section className="bg-[#F7F3EE] min-h-screen py-20">

      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-4xl font-semibold text-[#1A1A1A] mb-4">{data.title}</h1>
        <p className="text-lg text-[#4A4A4A] leading-relaxed mb-10">{data.description}</p>

        {/* Slider */}
        <div className="relative w-full h-[380px] md:h-[450px] rounded-3xl overflow-hidden border border-[#E8E2DA] bg-[#EFE7DF] mb-12">
          <Image
            key={index}
            src={data.images[index]}
            alt={data.title}
            fill
            className="object-cover transition-all duration-500"
          />

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full border border-[#D9D1C8]"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full border border-[#D9D1C8]"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Features */}
        <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">مميزات {data.title}</h2>
        <ul className="grid sm:grid-cols-2 gap-4 mb-12">
          {data.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-[#4A4A4A]">
              <CheckCircle className="text-[#C46A52]" size={20} />
              {feature}
            </li>
          ))}
        </ul>

        {/* Technical */}
        <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">معلومات تقنية</h2>

        <div className="bg-white p-6 rounded-3xl border border-[#E8E2DA] mb-12">
          <p className="text-[#4A4A4A] mb-4">
            <strong className="text-[#1A1A1A]">الخامات:</strong> {data.technical.materials}
          </p>
          <p className="text-[#4A4A4A] mb-4">
            <strong className="text-[#1A1A1A]">المتانة:</strong> {data.technical.durability}
          </p>
          <p className="text-[#4A4A4A]">
            <strong className="text-[#1A1A1A]">العناية:</strong> {data.technical.maintenance}
          </p>
        </div>

        {/* Best For */}
        <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">أفضل استخدامات</h2>
        <ul className="grid sm:grid-cols-2 gap-3 mb-12">
          {data.best_for.map((room: string, i: number) => (
            <li key={i} className="text-[#4A4A4A]">• {room}</li>
          ))}
        </ul>

        {/* Extra Gallery */}
        <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">معرض إضافي</h2>

        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {data.extra_gallery.map((img: string, i: number) => (
            <div
              key={i}
              className="relative w-full h-[250px] rounded-2xl overflow-hidden border border-[#E8E2DA] bg-[#EFE7DF]"
            >
              <Image src={img} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="block text-center text-white bg-[#C46A52] hover:bg-[#B95D47] transition rounded-full py-4 text-lg font-medium"
        >
          احجز زيارة لقياس وتركيب الستائر
        </a>

      </div>
    </section>
  );
}
