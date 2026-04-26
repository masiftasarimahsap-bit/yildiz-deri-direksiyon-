"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "Yerinde Hizmet",
    desc: "Düzce, Bolu, Hendek ve çevre illerde aracınızın bulunduğu konumda hizmet veriyoruz.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Hızlı ve Pratik",
    desc: "Direksiyonu sökmeden, orijinal yapısını bozmadan 30–45 dakikada dikim işlemini tamamlıyoruz.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Garantili İşçilik",
    desc: "Sadece birinci sınıf ithal deriler ve yüksek dayanımlı iplikler. Tüm işlemlerimiz garantilidir.",
  },
];

export default function Features() {
  const ref = useScrollReveal();

  return (
    <section id="hizmetler" className="py-20 lg:py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <h2
            className="font-[family-name:var(--font-manrope)] font-bold text-white mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 36px)" }}
          >
            Neden Bizi Seçmelisiniz?
          </h2>
          <p className="text-[16px] text-zinc-400 max-w-xl mx-auto">
            Profesyonel işçilik ve premium materyallerle direksiyonunuzu yeniden tanımlıyoruz.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5 reveal-parent">
          {features.map((f, i) => (
            <div
              key={i}
              className="reveal-child bg-[#242424] border-t-2 border-[#E31E24] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col gap-4"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="p-3 bg-[#353434] rounded-full text-[#E31E24] w-fit">
                {f.icon}
              </div>
              <h3 className="font-[family-name:var(--font-manrope)] font-bold text-[20px] text-white">
                {f.title}
              </h3>
              <p className="text-[15px] leading-[1.7] text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
