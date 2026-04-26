import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#faf9f7]">
      {/* Right image — bleeds to edge */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[58%] hero-image">
        <Image
          src="https://placehold.co/1200x900/1a1916/c8a96e.webp?text=Deri+Direksiyon"
          alt="Profesyonel deri direksiyon kaplama"
          fill
          priority
          unoptimized
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 58vw"
        />
        {/* Gradient overlay — left to right for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f7] via-[#faf9f7]/60 to-transparent md:via-[#faf9f7]/20" />
      </div>

      {/* Left content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 pb-16">
        <div className="max-w-xl hero-text">
          <p className="text-[13px] font-medium tracking-[0.1em] uppercase text-[#c8a96e] mb-6">
            Mobil Deri Direksiyon Kaplama
          </p>

          <h1
            className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.05] text-[#1a1916] mb-6"
            style={{ fontSize: "clamp(48px, 6vw, 88px)" }}
          >
            Direksiyonunuza
            <br />
            <span className="text-[#c8a96e]">Yeni Bir</span>
            <br />
            Dokunuş
          </h1>

          <p className="text-[18px] leading-[1.7] text-[#6b6860] mb-10 max-w-md">
            Düzce, Bolu ve çevresinde araç başına gelerek profesyonel deri
            direksiyon kaplama hizmeti. Direksiyonunuzu sökmeden, yerinde dikiş.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/905466379801?text=Merhaba%2C%20direksiyon%20kaplama%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#c8a96e] hover:bg-[#b8954e] text-white font-medium text-[15px] px-8 py-4 rounded-xl hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Randevu Al
            </a>

            <a
              href="#galeri"
              className="inline-flex items-center justify-center gap-2 border border-[rgba(26,25,22,0.2)] text-[#1a1916] font-medium text-[15px] px-8 py-4 rounded-xl hover:border-[#1a1916] hover:bg-[#f2f0ec] hover:-translate-y-0.5 transition-all duration-300"
            >
              Galeriyi İncele
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Mini stats */}
          <div className="flex gap-8 mt-14 pt-8 border-t border-[rgba(26,25,22,0.08)]">
            <div>
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[28px] text-[#1a1916]">7+</p>
              <p className="text-[13px] text-[#6b6860] mt-0.5">İlçe Hizmet Bölgesi</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[28px] text-[#1a1916]">13+</p>
              <p className="text-[13px] text-[#6b6860] mt-0.5">Araç Markası</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[28px] text-[#1a1916]">30dk</p>
              <p className="text-[13px] text-[#6b6860] mt-0.5">Ortalama İşlem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
