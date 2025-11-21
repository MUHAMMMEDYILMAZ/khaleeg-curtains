export const dynamic = "force-static";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-[#F7F3EE] min-h-screen py-20 border-t border-[#E8E2DA]">

      <div className="max-w-6xl mx-auto px-6">

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-6">
          من نحن
        </h1>

        <p className="text-lg text-[#4A4A4A] leading-relaxed max-w-3xl mb-16">
          نحن <span className="text-[#C46A52] font-semibold">الخليج للستائر</span>،
          مختصون في تصميم وتنفيذ جميع أنواع الستائر بخامات عالية الجودة
          ومعايير دقيقة في القياس والتركيب. نعمل على تقديم حلول راقية تضيف
          لمسة جمال وأناقة لجميع المساحات الداخلية، مع التركيز على الجودة والعملية
          في كل تفاصيل العمل.
        </p>

        {/* Image + Text */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">

          {/* Image */}
          <div className="relative w-full h-[360px] md:h-[420px] rounded-3xl overflow-hidden border border-[#E8E2DA] bg-[#EFE7DF]">
            <Image
              src="/curtain-placeholder.jpg"
              alt="About Curtains"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
              مهمتنا
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-6">
              منحك تجربة متكاملة في اختيار الستائر المناسبة لمساحتك، بدءًا من
              الاستشارة والقياس وحتى التركيب النهائي، مع ضمان جودة ممتازة وسرعة
              في الإنجاز.
            </p>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
              رؤيتنا
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed">
              أن نكون الجهة الأولى في المملكة لحلول الستائر العصرية والعملية،
              مع توفير منتجات تضيف لمسة فاخرة وتناسب مختلف الأذواق.
            </p>
          </div>
        </div>

        {/* Why Us */}
        <div className="mb-24">
          <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-10">
            لماذا تختار الخليج للستائر؟
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 bg-white border border-[#E8E2DA] rounded-3xl">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                جودة عالية
              </h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                نختار أفضل الخامات بعناية لنقدم منتجًا يدوم لسنوات دون تغيير أو تلف.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E8E2DA] rounded-3xl">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                تنفيذ سريع
              </h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                نلتزم بوقت التسليم بدقة ونحرص على تركيب احترافي ونظيف.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E8E2DA] rounded-3xl">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                قياس دقيق
              </h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                فريق متخصص بالقياسات لضمان تناسق الستارة مع المساحة تمامًا.
              </p>
            </div>

          </div>
        </div>

        {/* Experience Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">

          <div className="text-center p-8 bg-white border border-[#E8E2DA] rounded-3xl">
            <div className="text-4xl font-bold text-[#C46A52] mb-2">10+</div>
            <p className="text-[#4A4A4A] text-sm">سنوات خبرة</p>
          </div>

          <div className="text-center p-8 bg-white border border-[#E8E2DA] rounded-3xl">
            <div className="text-4xl font-bold text-[#C46A52] mb-2">500+</div>
            <p className="text-[#4A4A4A] text-sm">عميل راضٍ</p>
          </div>

          <div className="text-center p-8 bg-white border border-[#E8E2DA] rounded-3xl">
            <div className="text-4xl font-bold text-[#C46A52] mb-2">1200+</div>
            <p className="text-[#4A4A4A] text-sm">مشروع مكتمل</p>
          </div>

        </div>

        {/* Gallery */}
        <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-10">صور من أعمالنا</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-28">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="relative w-full h-[220px] rounded-3xl overflow-hidden border border-[#E8E2DA] bg-[#EFE7DF]"
            >
              <Image
                src="/curtain-placeholder.jpg"
                alt="Curtain sample"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/#contact"
          className="block text-center text-white bg-[#C46A52] hover:bg-[#B95D47] transition rounded-full py-4 text-lg font-medium"
        >
          احجز زيارة مجانية للاستشارة والقياس
        </a>

      </div>
    </section>
  );
}
