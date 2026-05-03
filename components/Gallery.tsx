"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  { id: "01", brand: "Ford", model: "Focus", color: "Siyah deri, beyaz dikiş", filter: "Ford" },
  { id: "02", brand: "Ford", model: "Courier", color: "Siyah perforated", filter: "Ford" },
  { id: "03", brand: "Fiat", model: "Egea", color: "Siyah + gri two-tone", filter: "Fiat" },
  { id: "04", brand: "Fiat", model: "Linea", color: "Siyah + kahverengi", filter: "Fiat" },
  { id: "05", brand: "Renault", model: "Megane 4", color: "Full siyah", filter: "Renault" },
  { id: "06", brand: "Toyota", model: "Corolla", color: "Siyah deri", filter: "Toyota" },
  { id: "07", brand: "Honda", model: "Civic", color: "Kırmızı + siyah", filter: "Diğer" },
  { id: "08", brand: "BMW", model: "3 Serisi", color: "Premium deri yenileme", filter: "Diğer" },
  { id: "09", brand: "Audi", model: "A3", color: "Siyah perforated, beyaz dikiş", filter: "Diğer" },
  { id: "10", brand: "Mercedes", model: "C Serisi", color: "Siyah deri kaplama", filter: "Diğer" },
  { id: "11", brand: "Ford", model: "Fiesta", color: "Siyah deri", filter: "Ford" },
  { id: "12", brand: "Fiat", model: "500", color: "Bej + siyah", filter: "Fiat" },
  { id: "13", brand: "Renault", model: "Clio", color: "Siyah deri", filter: "Renault" },
  { id: "14", brand: "Toyota", model: "Yaris", color: "Siyah perforated", filter: "Toyota" },
  { id: "15", brand: "Diğer", model: "VW Golf", color: "Siyah deri kaplama", filter: "Diğer" },
  { id: "16", brand: "Diğer", model: "Opel Astra", color: "Siyah + kırmızı dikiş", filter: "Diğer" },
  { id: "17", brand: "Ford", model: "Transit", color: "Siyah deri", filter: "Ford" },
  { id: "18", brand: "Fiat", model: "Doblo", color: "Siyah perforated", filter: "Fiat" },
  { id: "19", brand: "Renault", model: "Symbol", color: "Full siyah", filter: "Renault" },
  { id: "20", brand: "Toyota", model: "CHR", color: "Siyah + beyaz dikiş", filter: "Toyota" },
  { id: "21", brand: "Diğer", model: "Hyundai i20", color: "Siyah deri", filter: "Diğer" },
  { id: "22", brand: "Diğer", model: "Kia Ceed", color: "Siyah perforated", filter: "Diğer" },
  { id: "23", brand: "Ford", model: "Mondeo", color: "Siyah deri, gri dikiş", filter: "Ford" },
  { id: "24", brand: "Fiat", model: "Bravo", color: "Siyah + kırmızı", filter: "Fiat" },
  { id: "25", brand: "Renault", model: "Fluence", color: "Siyah deri kaplama", filter: "Renault" },
  { id: "26", brand: "Toyota", model: "Avensis", color: "Full siyah", filter: "Toyota" },
  { id: "27", brand: "Diğer", model: "Skoda Octavia", color: "Siyah perforated", filter: "Diğer" },
  { id: "28", brand: "Diğer", model: "Seat Leon", color: "Siyah deri", filter: "Diğer" },
  { id: "29", brand: "Diğer", model: "Peugeot 308", color: "Siyah + beyaz dikiş", filter: "Diğer" },
];

const filters = ["Tümü", "Ford", "Fiat", "Renault", "Toyota", "Diğer"];

export default function Gallery() {
  const [active, setActive] = useState("Tümü");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const ref = useScrollReveal();

  const filtered = active === "Tümü" ? items : items.filter((i) => i.filter === active);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : 0));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filtered.length : 0));
  };

  const lightboxItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

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
              key={item.id}
              onClick={() => setLightboxIndex(i)}
              className="reveal-child group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <Image
                src={`/calismalar/${item.id}.jpg`}
                alt={`${item.brand} ${item.model} deri direksiyon kaplama`}
                fill
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
      {lightboxItem !== null && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-2xl w-full aspect-square rounded-xl overflow-hidden border border-zinc-800"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/calismalar/${lightboxItem.id}.jpg`}
              alt={`${lightboxItem.brand} ${lightboxItem.model}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h4 className="font-[family-name:var(--font-manrope)] font-bold text-white text-[18px]">
                {lightboxItem.brand} {lightboxItem.model}
              </h4>
              <p className="text-zinc-300 text-[14px] mt-1">{lightboxItem.color}</p>
              <p className="text-zinc-500 text-[12px] mt-1">{lightboxIndex + 1} / {filtered.length}</p>
            </div>
          </div>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors bg-black/40 rounded-full p-2"
            onClick={handlePrev}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors bg-black/40 rounded-full p-2"
            onClick={handleNext}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            onClick={() => setLightboxIndex(null)}
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
