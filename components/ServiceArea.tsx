"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const cities = [
  { name: "Düzce", note: "Merkez", size: "text-[32px]" },
  { name: "Bolu", note: null, size: "text-[24px]" },
  { name: "Hendek", note: null, size: "text-[20px]" },
  { name: "Akçakoca", note: null, size: "text-[20px]" },
  { name: "Alaplı", note: null, size: "text-[18px]" },
  { name: "Ereğli", note: "Zonguldak", size: "text-[18px]" },
  { name: "Akyazı", note: "Sakarya", size: "text-[18px]" },
];

export default function ServiceArea() {
  const ref = useScrollReveal();

  return (
    <section id="bolgemiz" className="py-24 lg:py-32 bg-[#1a1916] text-[#e8e6e2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#c8a96e] mb-4">
              Hizmet Bölgesi
            </p>
            <h2
              className="font-[family-name:var(--font-space-grotesk)] font-bold mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "#e8e6e2" }}
            >
              Hizmet Bölgemiz
            </h2>
            <p className="text-[16px] leading-[1.7] text-[#9e9b95] max-w-md">
              Düzce merkez olmak üzere geniş bir coğrafyada araç başına servis
              veriyoruz. Aracınızın nerede olduğunu söyleyin, biz gelelim.
            </p>

            <a
              href="https://wa.me/905466379801?text=Merhaba%2C%20bulunduğum%20konuma%20gelebilir%20misiniz%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-[#c8a96e] text-[14px] font-medium hover:text-[#e8c98e] transition-colors group"
            >
              Bölgenizi sormak için yazın
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* City typography */}
          <div ref={ref} className="reveal-parent flex flex-col gap-4">
            {cities.map((c, i) => (
              <div
                key={i}
                className="reveal-child flex items-baseline gap-3 border-b border-[rgba(255,255,255,0.06)] pb-4 last:border-0"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span
                  className={`font-[family-name:var(--font-space-grotesk)] font-bold ${c.size} text-[#e8e6e2] leading-none`}
                >
                  {c.name}
                </span>
                {c.note && (
                  <span className="text-[12px] font-medium tracking-widest uppercase text-[#6b6860]">
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
