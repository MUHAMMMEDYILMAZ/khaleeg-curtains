import Image from "next/image";
import AutoSlider from "@/components/AutoSlider";

export default function WorksPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#EFE7DF] to-[#E6D7C5] py-14 px-4">
      <div
        className="
          max-w-6xl mx-auto space-y-16 
          bg-white/70 backdrop-blur-sm p-10
          rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          border border-[#E0D6CC]
        "
      >
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-[#1A1A1A]">
          أعمالـنــا
        </h1>

        {/* Curtains Section */}
        <WorkSection
          title="أعمال الستائر"
          images={["/stara.png", "/stara.png", "/stara.png"]}
        />

        {/* Bedrooms Section */}
        <WorkSection
          title="أعمال غرف النوم"
          images={[
            "/bedroom.jpeg",
            "/images/bedrooms/b2.jpg",
            "/images/bedrooms/b3.jpg",
          ]}
        />

        {/* Sofas Section */}
        <WorkSection
          title="أعمال الكنب"
          images={[
            "/sofa.jpeg",
            "/images/sofas/s2.jpg",
            "/images/sofas/s3.jpg",
          ]}
        />

        {/* Walls Section */}
        <WorkSection
          title="أعمال تجليد الجدران"
          images={["/cover.jpeg", "/cover.jpeg", "/cover.jpeg"]}
        />
      </div>
    </div>
  );
}

function WorkSection({ title, images }: { title: string; images: string[] }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#1A1A1A]">{title}</h2>

      <div className="rounded-2xl overflow-hidden border border-[#E8E2DA] shadow">
        <AutoSlider images={images} />
      </div>
    </div>
  );
}
