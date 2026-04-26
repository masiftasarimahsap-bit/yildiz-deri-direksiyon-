"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { n: "01", title: "İletişim", desc: "WhatsApp veya telefonla bize ulaşın, aracınızın marka ve modelini bildirin." },
  { n: "02", title: "Randevu", desc: "Size en uygun gün ve saatte randevu oluşturalım." },
  { n: "03", title: "Uygulama", desc: "Aracınızın bulunduğu yere geliyoruz. Direksiyon sökmeden, yerinde kaplama yapıyoruz." },
  { n: "04", title: "Teslim", desc: "İşlem yaklaşık 30–45 dakika sürer. Yepyeni direksiyonunuzla yolculuğa devam edin." },
];

export default function Process() {
  const ref = useScrollReveal();

  return (
    <section id="nasil-calisir" className="py-20 lg:py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <h2
            className="font-[family-name:var(--font-manrope)] font-bold text-white mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 36px)" }}
          >
            Nasıl Çalışır?
          </h2>
          <p className="text-[16px] text-zinc-400">Randevudan teslimata kolay ve hızlı süreç.</p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-6 reveal-parent">
          {steps.map((s, i) => (
            <div
              key={i}
              className="reveal-child relative"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-full w-full h-px bg-zinc-800 z-0" style={{ width: "calc(100% - 28px)", left: "28px" }} />
              )}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-[#242424] border border-zinc-700 flex items-center justify-center mb-5">
                  <span className="font-[family-name:var(--font-manrope)] font-extrabold text-[16px] text-[#E31E24]">{s.n}</span>
                </div>
                <h3 className="font-[family-name:var(--font-manrope)] font-bold text-[18px] text-white mb-2">{s.title}</h3>
                <p className="text-[14px] leading-[1.7] text-zinc-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
