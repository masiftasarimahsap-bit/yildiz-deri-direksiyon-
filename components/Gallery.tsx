"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  { brand: "Honda", model: "Civic", color: "Kırmızı + siyah", filter: "Diğer" },
  { brand: "BMW", model: "3 Serisi", color: "Premium deri yenileme", filter: "Diğer" },
  { brand: "Ford", model: "Focus", color: "Siyah deri, beyaz dikiş", filter: "Ford" },
  { brand: "Fiat", model: "Egea", color: "Siyah + gri two-tone", filter: "Fiat" },
  { brand: "Renault", model: "Megane 4", color: "Full siyah", filter: "Renault" },
  { brand: "Toyota", model: "Corolla", color: "Siyah deri", filter: "Toyota" },
  { brand: "Audi", model: "A3", color: "Siyah perforated, beyaz dikiş", filter: "Diğer" },
  { brand: "Mercedes", model: "C Serisi", color: "Siyah deri kaplama", filter: "Diğer" },
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
    <section id="galeri" className="py-20 lg:py-24 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex justify-between items-end mb-10 border-b border-zinc-800 pb-6">
          <div>
            <h2
              className="font-[family-name:var(--font-manrope)] font-bold text-white mb-2"
              style={{ fontSize: "clamp(28px, 4vw, 36px)" }}
            >
              Örnek Çalışmalarımız
            </h2>
            <p className="text-[15px] text-zinc-400">Detaylardaki kusursuzluğu keşfedin.</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded text-[13px] font-semibold tracking-wide transition-all duration-200 ${
                active === f
                  ? "bg-[#E31E24] text-white"
                  : "bg-[#242424] text-zinc-400 hover:text-white border border-zinc-700"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 reveal-parent">
          {filtered.map((item, i) => (
            <button
              key={`${item.brand}-${item.model}`}
              onClick={() => setLightboxItem(item)}
              className="reveal-child group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <Image
                src={`https://placehold.co/800x800/242424/E31E24.webp?text=${encodeURIComponent(item.brand)}`}
                alt={`${item.brand} ${item.model} deri direksiyon kaplama`}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-left">
                  <h4 className="font-[family-name:var(--font-manrope)] font-bold text-white text-[16px]">
                    {item.brand} {item.model}
                  </h4>
                  <p className="text-zinc-300 text-[13px] mt-1">{item.color}</p>
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
          <div className="relative max-w-2xl w-full aspect-square rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src={`https://placehold.co/800x800/242424/E31E24.webp?text=${encodeURIComponent(lightboxItem.brand)}`}
              alt={`${lightboxItem.brand} ${lightboxItem.model}`}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
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
