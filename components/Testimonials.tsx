"use client";

import { useState, useEffect } from "react";

const reviews = [
  { text: "Aracımın başına geldiler, direksiyonu sökmeden tertemiz bir iş çıkardılar. Çok memnun kaldım.", name: "Ahmet Y.", car: "Ford Focus" },
  { text: "Fiyat performans açısından mükemmel. Hem kaliteli malzeme hem de özenli dikiş. Herkese tavsiye ederim.", name: "Mehmet K.", car: "Fiat Egea" },
  { text: "Randevu aldım, geldiler ve yaklaşık 40 dakikada işi bitirdiler. Direksiyon yepyeni gibi oldu.", name: "Serkan D.", car: "Toyota Corolla" },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % reviews.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-20 lg:py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          className="font-[family-name:var(--font-manrope)] font-bold text-white mb-12"
          style={{ fontSize: "clamp(28px, 4vw, 36px)" }}
        >
          Müşterilerimiz Ne Diyor?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`glass-panel p-7 rounded-xl cursor-pointer transition-all duration-300 ${
                active === i ? "border-[#E31E24]/50 -translate-y-1 shadow-lg shadow-[#E31E24]/10" : "hover:-translate-y-0.5"
              }`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <svg key={si} width="13" height="13" viewBox="0 0 24 24" fill="#E31E24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-[15px] leading-[1.7] text-zinc-300 mb-5 italic">&ldquo;{r.text}&rdquo;</p>
              <div>
                <p className="font-semibold text-[14px] text-white">{r.name}</p>
                <p className="text-[12px] text-zinc-500 mt-0.5">{r.car}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 justify-center mt-7">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${active === i ? "w-6 h-2 bg-[#E31E24]" : "w-2 h-2 bg-zinc-700"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
