import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080/1a1916/c8a96e.webp?text=Deri+Direksiyon"
          alt="Profesyonel deri direksiyon kaplama"
          fill
          priority
          unoptimized
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/80 via-[#1A1A1A]/60 to-[#1A1A1A]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Left */}
        <div className="lg:w-1/2 hero-text">
          <div className="glass-panel p-8 rounded-xl">
            <p className="text-[13px] font-semibold tracking-[0.1em] uppercase text-[#E31E24] mb-4">
              Mobil Deri Direksiyon Kaplama
            </p>
            <h1
              className="font-[family-name:var(--font-manrope)] font-extrabold leading-[1.2] tracking-tight text-white mb-5"
              style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
            >
              Aracınıza Değer Katan El İşçiliği:{" "}
              <span className="text-[#E31E24] block mt-1">Yıldız Deri Direksiyon</span>
            </h1>
            <p className="text-[18px] leading-[1.6] text-zinc-400 mb-8 max-w-md">
              Direksiyonunuzu sökmeden, yerinde ve profesyonel deri kaplama hizmeti.
              Aracınızın değerine değer katıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/905466379801?text=Merhaba%2C%20direksiyon%20kaplama%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#E31E24] hover:bg-red-700 text-white font-semibold text-[14px] tracking-wide uppercase px-8 py-4 rounded shadow-[0_0_15px_rgba(227,30,36,0.3)] hover:shadow-[0_0_25px_rgba(227,30,36,0.5)] transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Hemen Randevu Al
              </a>
              <a
                href="#galeri"
                className="inline-flex items-center justify-center gap-2 border border-[#F5F5F5]/30 text-[#F5F5F5] font-semibold text-[14px] tracking-wide uppercase px-8 py-4 rounded hover:bg-white/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                Portfolyo İncele
              </a>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="lg:w-1/2 hidden lg:block hero-image">
          <Image
            src="https://placehold.co/800x600/242424/E31E24.webp?text=Deri+Dikiş+Detay"
            alt="Deri direksiyon dikiş detayı"
            width={800}
            height={600}
            unoptimized
            className="w-full h-auto rounded-xl shadow-2xl border border-zinc-800 object-cover aspect-[4/3] hover:rotate-0 transition-transform duration-500 rotate-2"
          />
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-zinc-800/50 bg-zinc-950/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-3 gap-4 text-center">
          {[
            { val: "7+", label: "İlçe Hizmet Bölgesi" },
            { val: "13+", label: "Araç Markası" },
            { val: "30dk", label: "Ortalama İşlem" },
          ].map((s) => (
            <div key={s.val}>
              <p className="font-[family-name:var(--font-manrope)] font-extrabold text-[24px] text-white">{s.val}</p>
              <p className="text-[12px] text-zinc-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
