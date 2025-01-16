"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-primary-green shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-primary-orange font-bold text-xl">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="aspect-[22/9] object-cover"
            />
          </Link>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:opacity-75 transition">
              Beranda
            </a>
            <a href="#about" className="hover:opacity-75 transition">
              Tentang
            </a>
            <a href="#services" className="hover:opacity-75 transition">
              Layanan
            </a>
            <a href="#contact" className="hover:opacity-75 transition">
              Kontak
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
