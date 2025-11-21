"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-[#EFE7DF] border-[#D7CEC5]"
          : "bg-[#F7F3EE] border-[#E8E2DA]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-[#C46A52]/20 border border-[#C46A52]/40" />
          <span className="text-lg font-semibold tracking-wide text-[#1A1A1A]">
            الخليج للستائر
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6 text-sm text-[#4A4A4A]">
          <Link href="#hero" className="hover:text-[#C46A52] transition">الرئيسية</Link>
          <Link href="#about" className="hover:text-[#C46A52] transition">من نحن</Link>
          <Link href="#types" className="hover:text-[#C46A52] transition">أنواع الستائر</Link>
          <Link href="#gallery" className="hover:text-[#C46A52] transition">أعمالنا</Link>
          <Link href="#contact" className="hover:text-[#C46A52] transition">تواصل</Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="hidden md:block rounded-full border border-[#C46A52] text-[#C46A52] px-4 py-1.5 text-sm font-semibold hover:bg-[#C46A52] hover:text-white transition"
        >
          احجز زيارة
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1A1A1A]"
          onClick={() => setOpen(!open)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
     {open && (
  <div className="md:hidden bg-[#F7F3EE] border-t border-[#E8E2DA] px-4 py-4 text-sm text-[#4A4A4A]">
    
    <Link
      href="#hero"
      className="flex items-center py-3 border-b border-[#E8E2DA]"
    >
      الرئيسية
    </Link>

    <Link
      href="#about"
      className="flex items-center py-3 border-b border-[#E8E2DA]"
    >
      من نحن
    </Link>

    <Link
      href="#types"
      className="flex items-center py-3 border-b border-[#E8E2DA]"
    >
      أنواع الستائر
    </Link>

    <Link
      href="#gallery"
      className="flex items-center py-3 border-b border-[#E8E2DA]"
    >
      أعمالنا
    </Link>

    <Link
      href="#contact"
      className="flex items-center py-3 border-b border-[#E8E2DA]"
    >
      تواصل
    </Link>

    <Link
      href="#contact"
      className="block text-center mt-4 rounded-full border border-[#C46A52] text-[#C46A52] px-4 py-2 font-semibold hover:bg-[#C46A52] hover:text-white transition"
    >
      احجز زيارة
    </Link>

  </div>
)}

    </header>
  );
}
