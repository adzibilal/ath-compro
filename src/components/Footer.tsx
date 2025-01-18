"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/translations/content";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  const { language } = useLanguage();
  const t = content[language].footer;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo dan Deskripsi */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={150}
              height={60}
              className="mb-4"
            />
            <p className="text-gray-400 mb-4">{t.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  {t.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-white transition"
                >
                  {t.projects}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-400 hover:text-white transition"
                >
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <FaPhone className="text-primary-green" />
                <a
                  href="tel:+6281222620835"
                  className="text-gray-400 hover:text-white transition"
                >
                  +62 812-2262-0835
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="text-primary-green" />
                <a
                  href="https://wa.me/6281222620835"
                  className="text-gray-400 hover:text-white transition"
                >
                  +62 812-2262-0835
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-primary-green" />
                <a
                  href="mailto:ptargatek.info@gmail.com"
                  className="text-gray-400 hover:text-white transition"
                >
                  ptargatek.info@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Alamat */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.address}</h3>
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-primary-green mt-1" />
              <p className="text-gray-400">
                Pulomas Office Park
                <br />
                Building II, 2nd Floor
                <br />
                Jl. Jend. Ahmad Yani No.2
                <br />
                Jakarta Timur 13210
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} PT. Arga Teknologi Handal. {t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
