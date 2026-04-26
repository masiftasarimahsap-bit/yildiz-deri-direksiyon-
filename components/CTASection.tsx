export default function CTASection() {
  return (
    <section id="iletisim" className="py-20 lg:py-24 bg-[#1A1A1A] relative overflow-hidden">
      {/* Red glow */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-[#E31E24] rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="glass-panel p-10 lg:p-14 rounded-2xl">
          <h2
            className="font-[family-name:var(--font-manrope)] font-extrabold text-white mb-5"
            style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
          >
            Aracınız İçin Randevu Alın
          </h2>
          <p className="text-[17px] leading-[1.6] text-zinc-400 mb-10">
            Düzce, Bolu, Hendek ve çevre bölgelerde profesyonel yerinde hizmet.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-10">
            <div className="flex items-center gap-3 bg-[#242424] px-6 py-4 rounded-lg border border-zinc-800">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span className="font-[family-name:var(--font-manrope)] font-bold text-[18px] text-white tracking-wide">
                0546 637 98 01
              </span>
            </div>
            <div className="flex items-center gap-3 bg-[#242424] px-6 py-4 rounded-lg border border-zinc-800">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="text-[15px] text-zinc-300">Düzce, Bolu, Hendek ve çevresi</span>
            </div>
          </div>

          <a
            href="https://wa.me/905466379801?text=Merhaba%2C%20direksiyon%20kaplama%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#E31E24] hover:bg-red-700 text-white font-semibold text-[15px] uppercase tracking-wide px-10 py-5 rounded-lg shadow-[0_0_20px_rgba(227,30,36,0.4)] hover:shadow-[0_0_30px_rgba(227,30,36,0.6)] hover:-translate-y-1 transition-all w-full md:w-auto"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp&apos;tan Randevu Al
          </a>
        </div>
      </div>
    </section>
  );
}
