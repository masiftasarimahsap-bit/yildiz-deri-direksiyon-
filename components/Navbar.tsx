"use client";

import { useState, useEffect } from "react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-zinc-800/50 shadow-2xl"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="15" stroke="#E31E24" strokeWidth="1.5"/>
            <circle cx="16" cy="16" r="4" stroke="#c4c7c7" strokeWidth="1.5"/>
            <line x1="16" y1="1" x2="16" y2="12" stroke="#c4c7c7" strokeWidth="1.5"/>
            <line x1="16" y1="20" x2="16" y2="31" stroke="#c4c7c7" strokeWidth="1.5"/>
            <line x1="1" y1="16" x2="12" y2="16" stroke="#c4c7c7" strokeWidth="1.5"/>
            <line x1="20" y1="16" x2="31" y2="16" stroke="#c4c7c7" strokeWidth="1.5"/>
            <polygon points="16,10 17,13 16,12 15,13" fill="#E31E24"/>
          </svg>
          <span className="font-[family-name:var(--font-manrope)] font-black text-[15px] tracking-tighter text-white uppercase">
            Yıldız Deri Direksiyon
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/905466379801?text=Merhaba%2C%20direksiyon%20kaplama%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E31E24] hover:bg-red-700 text-white text-[13px] font-semibold tracking-wide uppercase px-5 py-2.5 rounded transition-colors"
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
          <span className={`block w-6 h-0.5 bg-zinc-300 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-zinc-300 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-zinc-300 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[15px] font-medium text-zinc-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/905466379801?text=Merhaba%2C%20direksiyon%20kaplama%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E31E24] text-white text-[14px] font-semibold uppercase px-5 py-3 rounded text-center"
          >
            Randevu Al
          </a>
        </div>
      )}
    </header>
  );
}
