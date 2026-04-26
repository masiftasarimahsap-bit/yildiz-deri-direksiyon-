"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const cities = [
  { name: "Düzce", note: "Merkez", size: "text-[30px]" },
  { name: "Bolu", note: null, size: "text-[22px]" },
  { name: "Hendek", note: null, size: "text-[20px]" },
  { name: "Akçakoca", note: null, size: "text-[18px]" },
  { name: "Alaplı", note: null, size: "text-[18px]" },
  { name: "Ereğli", note: "Zonguldak", size: "text-[18px]" },
  { name: "Akyazı", note: "Sakarya", size: "text-[18px]" },
];

export default function ServiceArea() {
  const ref = useScrollReveal();

  return (
    <section id="bolgemiz" className="py-20 lg:py-24 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#E31E24] mb-3">
              Hizmet Bölgesi
            </p>
            <h2
              className="font-[family-name:var(--font-manrope)] font-bold text-white mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 36px)" }}
            >
              Hizmet Bölgemiz
            </h2>
            <p className="text-[16px] leading-[1.6] text-zinc-400 mb-8 max-w-md">
              Düzce merkez olmak üzere geniş bir coğrafyada araç başına servis
              veriyoruz. Aracınızın nerede olduğunu söyleyin, biz gelelim.
            </p>
            <a
              href="https://wa.me/905466379801?text=Merhaba%2C%20bulunduğum%20konuma%20gelebilir%20misiniz%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E31E24] hover:bg-red-700 text-white text-[13px] font-semibold uppercase tracking-wide px-6 py-3 rounded transition-colors"
            >
              Bölgenizi Sorun
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div ref={ref} className="reveal-parent flex flex-col gap-3">
            {cities.map((c, i) => (
              <div
                key={i}
                className="reveal-child flex items-baseline gap-3 border-b border-zinc-800 pb-3 last:border-0"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className={`font-[family-name:var(--font-manrope)] font-extrabold ${c.size} text-white leading-none`}>
                  {c.name}
                </span>
                {c.note && (
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-zinc-600">
                    {c.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
