import Link from "next/link";
import { Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#EFE7DF] border-t border-[#D8D0C8]">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* LOGO + DESCRIPTION */}
        <div>
          <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-3">
            الخليج للديكور
          </h3>
          <p className="text-[#4A4A4A] text-sm leading-relaxed">
            نقدم حلولاً متكاملة للديكور الداخلي تشمل الستائر، غرف النوم، الكنب،
            وتكسية الجدران — بجودة عالية وتنفيذ احترافي يناسب جميع الأذواق.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold text-[#1A1A1A] mb-4">
            روابط مهمة
          </h4>
          <ul className="text-[#4A4A4A] space-y-3 text-sm">

            <li>
              <Link href="/" className="hover:text-[#C46A52] transition">
                الرئيسية
              </Link>
            </li>

            <li>
              <Link href="/products" className="hover:text-[#C46A52] transition">
                جميع الأقسام
              </Link>
            </li>
            <li>
              <Link href="/our-business" className="hover:text-[#C46A52] transition">
                أعمالنا
              </Link>
            </li>

            <li>
              <Link href="/#contact" className="hover:text-[#C46A52] transition">
                تواصل معنا
              </Link>
            </li>

          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-lg font-semibold text-[#1A1A1A] mb-4">
            تواصل معنا
          </h4>

          <ul className="text-[#4A4A4A] space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-[#C46A52]" />
              <span>+966 555 555 555</span>
            </li>

            <li className="flex items-center gap-2">
              <Mail size={18} className="text-[#C46A52]" />
              <span>info@khaleejdecor.com</span>
            </li>

            <li>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="flex items-center gap-2 hover:text-[#C46A52] transition"
              >
                <Instagram size={18} className="text-[#C46A52]" />
                <span>@khaleej_decor</span>
              </Link>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-[#D8D0C8]">
        <p className="text-center text-[#6A6A6A] text-sm py-4">
          © {new Date().getFullYear()} الخليج للديكور — جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
