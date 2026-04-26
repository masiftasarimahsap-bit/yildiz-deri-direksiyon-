"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  { brand: "Ford", model: "Focus", color: "Siyah deri, beyaz dikiş", filter: "Ford" },
  { brand: "Fiat", model: "Egea", color: "Siyah + gri two-tone", filter: "Fiat" },
  { brand: "Renault", model: "Megane 4", color: "Full siyah", filter: "Renault" },
  { brand: "Toyota", model: "Corolla", color: "Siyah deri", filter: "Toyota" },
  { brand: "Audi", model: "A3", color: "Siyah perforated, beyaz dikiş", filter: "Diğer" },
  { brand: "Honda", model: "Civic", color: "Kırmızı + siyah", filter: "Diğer" },
  { brand: "Mercedes", model: "C Serisi", color: "Siyah deri kaplama", filter: "Diğer" },
  { brand: "BMW", model: "3 Serisi", color: "Siyah deri", filter: "Diğer" },
  { brand: "Fiat", model: "Linea", color: "Siyah + kahverengi", filter: "Fiat" },
  { brand: "Ford", model: "Courier", color: "Siyah perforated", filter: "Ford" },
];

const filters = ["Tümü", "Ford", "Fiat", "Renault", "Toyota", "Diğer"];

export default function Gallery() {
  const [active, setActive] = useState("Tümü");
  const [lightboxItem, setLightboxItem] = useState<(typeof items)[0] | null>(null);
  const ref = useScrollReveal();

  const filtered = active === "Tümü" ? items : items.filter((i) => i.filter === active);

  return (
    <section id="galeri" className="py-24 lg:py-32 bg-[#f2f0ec]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#c8a96e] mb-3">
            Galeri
          </p>
          <h2
            className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#1a1916] mb-4"
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            İşlerimizden
          </h2>
          <p className="text-[16px] text-[#6b6860]">Her direksiyon, özenle ve el emeğiyle kaplanır.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                active === f
                  ? "bg-[#1a1916] text-[#faf9f7]"
                  : "bg-white text-[#6b6860] hover:text-[#1a1916] border border-[rgba(26,25,22,0.08)]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 reveal-parent">
          {filtered.map((item, i) => (
            <button
              key={`${item.brand}-${item.model}`}
              onClick={() => setLightboxItem(item)}
              className="reveal-child relative group aspect-square rounded-xl overflow-hidden bg-[#1a1916] cursor-pointer"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <Image
                src={`https://placehold.co/800x800/1a1916/c8a96e.webp?text=${encodeURIComponent(item.brand)}`}
                alt={`${item.brand} ${item.model} deri direksiyon kaplama`}
                fill
                unoptimized
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1916]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-left">
                  <p className="text-white font-medium text-[13px]">{item.brand} {item.model}</p>
                  <p className="text-[#c8a96e] text-[11px] mt-0.5">{item.color}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxItem !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
        >
          <div className="relative max-w-2xl w-full aspect-square rounded-2xl overflow-hidden">
            <Image
              src={`https://placehold.co/800x800/1a1916/c8a96e.webp?text=${encodeURIComponent(lightboxItem.brand)}`}
              alt={`${lightboxItem.brand} ${lightboxItem.model} deri direksiyon kaplama`}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightboxItem(null)}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
