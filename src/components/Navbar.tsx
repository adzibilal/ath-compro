"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/translations/content";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  listenScroll?: boolean;
}

export default function Navbar({ listenScroll = true }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = content[language].navbar;

  useEffect(() => {
    if (!listenScroll) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [listenScroll]);

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

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/" className="hover:opacity-75 transition">
              {t.home}
            </a>
            <Link href="/projects" className="hover:opacity-75 transition">
              {t.projects}
            </Link>
            <a href="/contact-us" className="hover:opacity-75 transition">
              {t.contact}
            </a>
            <LanguageSwitcher />
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 focus:outline-none"
          >
            <div className="w-6 flex flex-col gap-1">
              <span
                className={`block h-0.5 w-6 rounded-sm transition-all duration-300 ${
                  isScrolled ? "bg-primary-green" : "bg-white"
                } ${
                  isMenuOpen
                    ? "translate-y-1.5 rotate-45"
                    : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 rounded-sm transition-all duration-300 ${
                  isScrolled ? "bg-primary-green" : "bg-white"
                } ${
                  isMenuOpen
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 rounded-sm transition-all duration-300 ${
                  isScrolled ? "bg-primary-green" : "bg-white"
                } ${
                  isMenuOpen
                    ? "-translate-y-1.5 -rotate-45"
                    : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-60" : "max-h-0"
          }`}
        >
          <div className={`flex flex-col space-y-4 pb-6 ${
            isScrolled ? "text-primary-green" : "text-white"
          }`}>
            <a
              href="/"
              className="hover:opacity-75 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.home}
            </a>
            <Link
              href="/projects"
              className="hover:opacity-75 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.projects}
            </Link>
            <a
              href="/contact-us"
              className="hover:opacity-75 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.contact}
            </a>
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
