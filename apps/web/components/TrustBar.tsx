const trustItems = [
  {
    title: "Origen",
    text: "Huy Huy · Yanatile · Cusco",
  },
  {
    title: "Café de Especialidad",
    text: "Selección premium",
  },
  {
    title: "Altitud",
    text: "1,600–2,000 msnm",
  },
  {
    title: "Envíos",
    text: "A todo el Perú",
  },
];

export function TrustBar() {
  return (
    <section
      aria-label="Información de confianza"
      className="bg-[#F8F6F2] px-8 pb-24"
    >
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => (
          <article
            key={item.title}
            className="border border-[#2D2D2D]/10 bg-white/35 px-8 py-10 shadow-[0_18px_45px_rgba(45,45,45,0.04)]"
          >
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
              {item.title}
            </h2>
            <p className="text-base font-medium leading-7 text-[#2D2D2D]">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
