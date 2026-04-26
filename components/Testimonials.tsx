"use client";

import { useState, useEffect } from "react";

const reviews = [
  {
    text: "Aracımın başına geldiler, direksiyonu sökmeden tertemiz bir iş çıkardılar. Çok memnun kaldım.",
    name: "Ahmet Y.",
    car: "Ford Focus",
  },
  {
    text: "Fiyat performans açısından mükemmel. Hem kaliteli malzeme hem de özenli dikiş. Herkese tavsiye ederim.",
    name: "Mehmet K.",
    car: "Fiat Egea",
  },
  {
    text: "Randevu aldım, geldiler ve yaklaşık 40 dakikada işi bitirdiler. Direksiyon yepyeni gibi.",
    name: "Serkan D.",
    car: "Toyota Corolla",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % reviews.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-[#f2f0ec]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#c8a96e] mb-3">
          Yorumlar
        </p>
        <h2
          className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#1a1916] mb-14"
          style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
        >
          Müşterilerimiz Ne Diyor?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`p-8 rounded-2xl cursor-pointer transition-all duration-300 ${
                active === i
                  ? "bg-white/70 backdrop-blur-sm shadow-lg border border-white/60 -translate-y-1"
                  : "bg-white/40 border border-white/20 hover:-translate-y-0.5"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill="#c8a96e">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <p className="text-[15px] leading-[1.7] text-[#1a1916] mb-6 italic">
                &ldquo;{r.text}&rdquo;
              </p>

              <div>
                <p className="font-medium text-[14px] text-[#1a1916]">{r.name}</p>
                <p className="text-[12px] text-[#6b6860] mt-0.5">{r.car}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex gap-2 justify-center mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                active === i ? "w-6 h-2 bg-[#c8a96e]" : "w-2 h-2 bg-[rgba(26,25,22,0.15)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
