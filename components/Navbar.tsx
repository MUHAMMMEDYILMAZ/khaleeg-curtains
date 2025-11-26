"use client";

import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Refs للـ dropdown + mobile menu
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown & mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Close desktop dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setDropdown(false);
      }

      // Close mobile menu
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-[#EFE7DF] border-[#D7CEC5]"
          : "bg-[#F7F3EE] border-[#E8E2DA]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
             <Image 
            src="/logoa.png"
            alt="شعار الخليج للستائر"
            width={80}
            height={40}
          />
                    <span className="text-lg font-semibold tracking-wide text-[#c46a52]">
            الخليج للديكور
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6 text-sm text-[#4A4A4A] items-center">

          <Link href="/" className="hover:text-[#C46A52] transition">
            الرئيسية
          </Link>

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdown(!dropdown)}
              className="flex items-center gap-1 hover:text-[#C46A52] transition"
            >
              الأقسام
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  dropdown ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {dropdown && (
              <div className="absolute right-0 top-full mt-2 w-44 bg-white shadow-lg rounded-md py-2 z-40">

                <Link
                  href="/products/curtains"
                  className="block px-6 py-2 hover:text-[#C46A52] border-b border-[#E8E2DA]"
                  onClick={() => setDropdown(false)}
                >
                  ستائر
                </Link>

                <Link
                  href="/products/bedrooms"
                  className="block px-6 py-2 hover:text-[#C46A52] border-b border-[#E8E2DA]"
                  onClick={() => setDropdown(false)}
                >
                  غرف نوم
                </Link>

                <Link
                  href="/products/sofas"
                  className="block px-6 py-2 hover:text-[#C46A52] border-b border-[#E8E2DA]"
                  onClick={() => setDropdown(false)}
                >
                  كنب
                </Link>

                <Link
                  href="/products/walls"
                  className="block px-6 py-2 hover:text-[#C46A52]"
                  onClick={() => setDropdown(false)}
                >
                  تجليد جدران
                </Link>

              </div>
            )}
          </div>

          <Link href="about" className="hover:text-[#C46A52] transition">
            من نحن
          </Link>

          <Link href="our-business" className="hover:text-[#C46A52] transition">
            أعمالنا
          </Link>

          
        </nav>

        {/* CTA */}
        <Link
          href="contact"
          className="hidden md:block rounded-full border border-[#C46A52] text-[#C46A52] px-4 py-1.5 text-sm font-semibold hover:bg-[#C46A52] hover:text-white transition"
        >
         تواصل معنا
        </Link>

        {/* Mobile Button */}
        <button className="md:hidden text-[#1A1A1A]" onClick={() => setOpen(!open)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-[#F7F3EE] border-t border-[#E8E2DA] px-4 py-4 text-sm text-[#4A4A4A]
                     max-h-[50vh] overflow-y-auto rounded-b-xl shadow-xl"
        >

          <Link href="/" className="flex py-3 border-b border-[#E8E2DA]">
            الرئيسية
          </Link>

          {/* Mobile Dropdown */}
          <details className="py-3 border-b border-[#E8E2DA]">
            <summary className="cursor-pointer flex items-center gap-2">
              <span>الأقسام</span>

              <ChevronDown
                size={18}
                className="chevron-mobile transition-transform duration-200 text-[#555]"
              />
            </summary>

            <div className="mt-2 flex flex-col text-[#3A3A3A]">

              <Link
                href="/products/curtains"
                className="py-2 pr-4 border-b border-[#E8E2DA] hover:text-[#C46A52]"
              >
                ستائر
              </Link>

              <Link
                href="/products/curtains"
                className="py-2 pr-4 border-b border-[#E8E2DA] hover:text-[#C46A52]"
              >
                غرف نوم
              </Link>

              <Link
                href="/products/sofas"
                className="py-2 pr-4 border-b border-[#E8E2DA] hover:text-[#C46A52]"
              >
                كنب
              </Link>

              <Link
                href="/products/walls"
                className="py-2 pr-4 hover:text-[#C46A52]"
              >
                تجليد جدران
              </Link>

            </div>
          </details>

          <Link href="about" className="flex py-3 border-b border-[#E8E2DA]">
            من نحن
          </Link>

          <Link href="our-business" className="flex py-3 border-b border-[#E8E2DA]">
            أعمالنا
          </Link>

         

          <Link
            href="contact"
            className="block text-center mt-4 rounded-full border border-[#C46A52] text-[#C46A52] px-4 py-2 font-semibold hover:bg-[#C46A52] hover:text-white transition"
          >
            تواصل معنا
          </Link>
        </div>
      )}
    </header>
  );
}
