export default function Footer() {
  return (
    <footer className="bg-[#1a1916] border-t border-[rgba(255,255,255,0.06)] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
          {/* Logo + copyright */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15" stroke="#c8a96e" strokeWidth="1.5"/>
                <circle cx="16" cy="16" r="4" stroke="#c8a96e" strokeWidth="1.5"/>
                <line x1="16" y1="1" x2="16" y2="12" stroke="#c8a96e" strokeWidth="1.5"/>
                <line x1="16" y1="20" x2="16" y2="31" stroke="#c8a96e" strokeWidth="1.5"/>
                <line x1="1" y1="16" x2="12" y2="16" stroke="#c8a96e" strokeWidth="1.5"/>
                <line x1="20" y1="16" x2="31" y2="16" stroke="#c8a96e" strokeWidth="1.5"/>
                <polygon points="16,10 17,13 16,12 15,13" fill="#c8a96e"/>
              </svg>
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-[13px] tracking-tight text-[#e8e6e2]">
                YILDIZ DERİ DİREKSİYON
              </span>
            </div>
            <p className="text-[12px] text-[#6b6860]">© 2026 Yıldız Deri Direksiyon</p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium tracking-widest uppercase text-[#6b6860] mb-1">Hızlı Erişim</p>
            {[
              { label: "Hizmetler", href: "#hizmetler" },
              { label: "Galeri", href: "#galeri" },
              { label: "Nasıl Çalışır?", href: "#nasil-calisir" },
              { label: "İletişim", href: "#iletisim" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-[13px] text-[#9e9b95] hover:text-[#e8e6e2] transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium tracking-widest uppercase text-[#6b6860] mb-1">İletişim</p>
            <a
              href="tel:05466379801"
              className="text-[13px] text-[#9e9b95] hover:text-[#e8e6e2] transition-colors"
            >
              0546 637 98 01
            </a>
            <a
              href="https://instagram.com/yildizderidireksiyon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] text-[#9e9b95] hover:text-[#e8e6e2] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @yildizderidireksiyon
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
