const brands = [
  "Honda", "Opel", "Fiat", "Hyundai", "Toyota",
  "Ford", "Mercedes", "Renault", "Audi", "BMW", "Nissan", "Mazda", "Chery",
];

export default function TrustBar() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-12 border-y border-[rgba(26,25,22,0.08)] bg-[#faf9f7] overflow-hidden">
      <p className="text-center text-[11px] font-medium tracking-[0.12em] uppercase text-[#6b6860] mb-8">
        Hizmet Verdiğimiz Markalar
      </p>

      <div className="relative">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {doubled.map((brand, i) => (
            <span
              key={i}
              className="font-[family-name:var(--font-space-grotesk)] font-bold text-[18px] tracking-tight text-[#d4d0c9] hover:text-[#1a1916] transition-colors duration-300 cursor-default select-none shrink-0"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
