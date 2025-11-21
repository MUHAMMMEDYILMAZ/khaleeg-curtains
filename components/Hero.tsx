import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#F7F3EE] border-b border-[#E8E2DA] pt-20 pb-12"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT SIDE */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] leading-tight mb-6">
            حلول<span className="text-[#C46A52]"> الستائر </span>
            بتصاميم راقية
          </h1>

          <p className="text-[#4A4A4A] text-lg leading-relaxed mb-8">
            نقدم تشكيلة واسعة من الستائر بمختلف أنواعها، لنساعدك على اختيار
            الشكل المناسب لمساحتك — جودة تنفيذ عالية، أقمشة فاخرة، ولمسات
            تصميم تضيف جمالًا لكل غرفة.
          </p>

          <div className="flex gap-4">
            <a
              href="#gallery"
              className="px-6 py-3 rounded-full bg-[#C46A52] text-white text-sm font-medium hover:bg-[#B95D47] transition"
            >
              شاهد أعمالنا
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-[#C46A52] text-[#C46A52] text-sm font-medium hover:bg-[#C46A52] hover:text-white transition"
            >
              احجز زيارة
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="relative w-full h-[380px] md:h-[460px] rounded-3xl overflow-hidden border border-[#E8E2DA] bg-[#EFE7DF]">
          <Image
            src="/stara.png" // غيّرها لاحقًا للصورة الحقيقية
            alt="ستائر"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
