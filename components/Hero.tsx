import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#F7F3EE] border-b border-[#E8E2DA] pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <div>

          <h1 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] leading-tight mb-6">
            حلول <span className="text-[#C46A52]">الديكور المنزلي </span>  
            بتصاميم فاخرة
          </h1>

          <p className="text-[#4A4A4A] text-lg leading-relaxed mb-8">
            نقدم لك مجموعة شاملة من خدمات الديكور:  
            <span className="text-[#C46A52] font-semibold"> ستائر، غرف نوم، كنب، وتجليد جدران </span>.  
            تنفيذ احترافي، جودة عالية، وتصاميم تضيف لمسة راقية لكل مساحة في منزلك.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mb-10">
            <a
              href="#gallery"
              className="px-7 py-3 rounded-full bg-[#C46A52] text-white text-sm font-medium hover:bg-[#B95D47] transition"
            >
              شاهد أعمالنا
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full border border-[#C46A52] text-[#C46A52] text-sm font-medium hover:bg-[#C46A52] hover:text-white transition"
            >
              احجز زيارة
            </a>
          </div>

          {/* CATEGORY CARDS */}
          <div className="grid grid-cols-2 gap-4">

            <div className="flex items-center gap-3 bg-white border border-[#E8E2DA] rounded-xl p-4 hover:shadow-md transition">
              <div className="w-10 h-10 bg-[#C46A52]/15 rounded-full"></div>
              <span className="text-[#1A1A1A] font-medium">ستائر</span>
            </div>

            <div className="flex items-center gap-3 bg-white border border-[#E8E2DA] rounded-xl p-4 hover:shadow-md transition">
              <div className="w-10 h-10 bg-[#C46A52]/15 rounded-full"></div>
              <span className="text-[#1A1A1A] font-medium">غرف نوم</span>
            </div>

            <div className="flex items-center gap-3 bg-white border border-[#E8E2DA] rounded-xl p-4 hover:shadow-md transition">
              <div className="w-10 h-10 bg-[#C46A52]/15 rounded-full"></div>
              <span className="text-[#1A1A1A] font-medium">كنب</span>
            </div>

            <div className="flex items-center gap-3 bg-white border border-[#E8E2DA] rounded-xl p-4 hover:shadow-md transition">
              <div className="w-10 h-10 bg-[#C46A52]/15 rounded-full"></div>
              <span className="text-[#1A1A1A] font-medium">تجليد جدران</span>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[380px] md:h-[470px] rounded-3xl overflow-hidden border border-[#E8E2DA] bg-[#EFE7DF]">
          <Image
            src="/heroimage.png" // غيّرها لاحقًا للصورة الحقيقية
            alt="ديكور منزلي"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
