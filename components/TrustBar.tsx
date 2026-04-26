const brands = [
  "Honda", "Opel", "Fiat", "Hyundai", "Toyota",
  "Ford", "Mercedes", "Renault", "Audi", "BMW", "Nissan", "Mazda", "Chery",
];

export default function TrustBar() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-10 border-y border-zinc-800/50 bg-[#242424]/30 overflow-hidden">
      <p className="text-center text-[12px] font-semibold tracking-[0.12em] uppercase text-zinc-500 mb-6">
        Güvenilen Markalar
      </p>
      <div className="relative">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {doubled.map((brand, i) => (
            <span
              key={i}
              className="font-[family-name:var(--font-manrope)] font-bold text-[17px] tracking-tight text-zinc-700 hover:text-zinc-300 transition-colors duration-300 cursor-default select-none shrink-0"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
