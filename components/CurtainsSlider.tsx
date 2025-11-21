"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/curtain-placeholder.jpg",
  "/curtain-placeholder.jpg",
  "/curtain-placeholder.jpg",
  "/curtain-placeholder.jpg",
];

export default function CurtainsSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="bg-[#FCFAF7] py-20 border-b border-[#E8E2DA]">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-10">
          معرض الستائر
        </h2>

        <div className="relative w-full h-[380px] md:h-[450px] rounded-3xl overflow-hidden border border-[#E8E2DA] bg-[#EFE7DF]">

          {/* IMAGE */}
          <Image
            key={index}
            src={images[index]}
            alt="ستائر"
            fill
            className="object-cover transition-all duration-500"
          />

          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#1A1A1A] rounded-full p-2 border border-[#D9D1C8] transition"
          >
            <ChevronLeft />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#1A1A1A] rounded-full p-2 border border-[#D9D1C8] transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-6 gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-[#C46A52]" : "bg-[#DCCFC5]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
