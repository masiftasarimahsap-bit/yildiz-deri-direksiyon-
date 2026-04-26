"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Galeri", href: "#galeri" },
  { label: "Nasıl Çalışır", href: "#nasil-calisir" },
  { label: "Bölgemiz", href: "#bolgemiz" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#faf9f7]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" stroke="#1a1916" strokeWidth="1.5"/>
            <circle cx="16" cy="16" r="4" stroke="#1a1916" strokeWidth="1.5"/>
            <line x1="16" y1="1" x2="16" y2="12" stroke="#1a1916" strokeWidth="1.5"/>
            <line x1="16" y1="20" x2="16" y2="31" stroke="#1a1916" strokeWidth="1.5"/>
            <line x1="1" y1="16" x2="12" y2="16" stroke="#1a1916" strokeWidth="1.5"/>
            <line x1="20" y1="16" x2="31" y2="16" stroke="#1a1916" strokeWidth="1.5"/>
            <polygon points="16,10 17,13 16,12 15,13" fill="#c8a96e"/>
          </svg>
          <span
            className="font-[family-name:var(--font-space-grotesk)] font-bold text-[15px] tracking-tight text-[#1a1916]"
          >
            YILDIZ DERİ
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-[#6b6860] hover:text-[#1a1916] transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/905466379801?text=Merhaba%2C%20direksiyon%20kaplama%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a1916] text-[#faf9f7] text-[13px] font-medium px-5 py-2.5 rounded-xl hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
          >
            Randevu Al
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          <span className={`block w-6 h-0.5 bg-[#1a1916] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1a1916] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1a1916] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#faf9f7] border-t border-[rgba(26,25,22,0.08)] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[15px] font-medium text-[#1a1916]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/905466379801?text=Merhaba%2C%20direksiyon%20kaplama%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a1916] text-[#faf9f7] text-[14px] font-medium px-5 py-3 rounded-xl text-center"
          >
            Randevu Al
          </a>
        </div>
      )}
    </header>
  );
}
