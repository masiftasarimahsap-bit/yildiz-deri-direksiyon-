"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  {
    number: "01",
    title: "Araç Başına Geliyoruz",
    desc: "Düzce, Bolu, Hendek, Akçakoca, Alaplı, Ereğli ve Akyazı'da aracınızın bulunduğu yere gelerek hizmet veriyoruz.",
  },
  {
    number: "02",
    title: "Sökmeden Dikiyoruz",
    desc: "Direksiyonunuzu sökmeden, aracınızın içinde özel kalıp deri kılıfını profesyonelce dikiyoruz.",
  },
  {
    number: "03",
    title: "Garantili İşçilik",
    desc: "Tüm uygulamalarımız garantilidir. Premium kalite deri malzemeler ve özenli el işçiliği.",
  },
];

export default function Features() {
  const ref = useScrollReveal();

  return (
    <section id="hizmetler" className="py-24 lg:py-32 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-0 reveal-parent">
          {features.map((f, i) => (
            <div
              key={i}
              className="reveal-child py-12 md:py-0 md:px-12 border-b md:border-b-0 md:border-r border-[rgba(26,25,22,0.08)] last:border-0 first:md:pl-0 last:md:pr-0"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <p
                className="font-[family-name:var(--font-space-grotesk)] font-light text-[72px] leading-none text-[#ece9e3] mb-8 select-none"
              >
                {f.number}
              </p>
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[20px] text-[#1a1916] mb-4">
                {f.title}
              </h3>
              <p className="text-[15px] leading-[1.7] text-[#6b6860]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
