"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    n: "01",
    title: "İletişim",
    desc: "WhatsApp veya telefonla bize ulaşın, aracınızın marka ve modelini bildirin.",
  },
  {
    n: "02",
    title: "Randevu",
    desc: "Size en uygun gün ve saatte randevu oluşturalım.",
  },
  {
    n: "03",
    title: "Uygulama",
    desc: "Aracınızın bulunduğu yere geliyoruz. Direksiyon sökmeden, yerinde kaplama yapıyoruz.",
  },
  {
    n: "04",
    title: "Teslim",
    desc: "İşlem yaklaşık 30–45 dakika sürer. Yepyeni direksiyonunuzla yolculuğa devam edin.",
  },
];

export default function Process() {
  const ref = useScrollReveal();

  return (
    <section id="nasil-calisir" className="py-24 lg:py-32 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#c8a96e] mb-3">
            Süreç
          </p>
          <h2
            className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#1a1916]"
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            Nasıl Çalışır?
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-0 reveal-parent">
          {steps.map((s, i) => (
            <div
              key={i}
              className="reveal-child relative md:pr-10 pb-10 md:pb-0 last:pb-0"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <>
                  <div className="hidden md:block absolute top-9 left-[calc(100%-20px)] w-10 h-px bg-[rgba(26,25,22,0.12)]" />
                  <div className="md:hidden absolute top-full left-8 w-px h-10 bg-[rgba(26,25,22,0.12)]" />
                </>
              )}

              <p
                className="font-[family-name:var(--font-space-grotesk)] font-light text-[72px] leading-none select-none mb-4"
                style={{ color: "#ece9e3" }}
              >
                {s.n}
              </p>
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[18px] text-[#1a1916] mb-3">
                {s.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#6b6860]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
