import Image from "next/image";

const varieties = [
  {
    name: "GEISHA",
    badge: "Edición Principal",
    description:
      "Perfil floral, elegante y complejo, con notas cítricas, jazmín y miel.",
    image: "/images/geisha-placeholder.svg",
    imageAlt: "Placeholder visual para cafe Geisha",
    button: "Descubrir Geisha",
  },
  {
    name: "TÍPICA",
    badge: "Producción Limitada",
    description:
      "Una taza equilibrada y tradicional con dulzor natural y notas a chocolate y panela.",
    image: "/images/tipica-placeholder.svg",
    imageAlt: "Placeholder visual para cafe Tipica",
    button: "Descubrir Típica",
  },
];

const details = [
  ["Proceso:", "Lavado"],
  ["Altitud:", "1,600–2,000 msnm"],
  ["Roast:", "Medio"],
];

export function CoffeeVarieties() {
  return (
    <section className="bg-[#F8F6F2] px-8 pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96A]">
            NUESTRAS VARIEDADES
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-[#2D2D2D] lg:text-6xl">
            Dos expresiones de un mismo origen.
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            Cada variedad expresa el carácter de la comunidad de Huy Huy,
            resaltando perfiles únicos cultivados en las montañas de Yanatile,
            Cusco.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {varieties.map((variety) => (
            <article
              key={variety.name}
              className="overflow-hidden rounded-[28px] border border-[#2D2D2D]/10 bg-white/40 shadow-[0_24px_70px_rgba(45,45,45,0.07)]"
            >
              <div className="relative min-h-[300px] sm:min-h-[380px]">
                <Image
                  src={variety.image}
                  alt={variety.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 sm:p-10">
                <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-3xl font-bold tracking-[0.18em] text-[#2D2D2D]">
                    {variety.name}
                  </h3>

                  <span className="w-fit rounded-full border border-[#C8A96A]/40 bg-[#C8A96A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2F5D50]">
                    {variety.badge}
                  </span>
                </div>

                <p className="mb-8 text-lg leading-8 text-gray-600">
                  {variety.description}
                </p>

                <dl className="mb-10 grid gap-4 border-y border-[#2D2D2D]/10 py-6 sm:grid-cols-3">
                  {details.map(([label, value]) => (
                    <div key={`${variety.name}-${label}`}>
                      <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A96A]">
                        {label}
                      </dt>
                      <dd className="font-semibold text-[#2D2D2D]">{value}</dd>
                    </div>
                  ))}
                </dl>

                <a
                  href="#"
                  className="inline-flex rounded-full bg-[#2F5D50] px-8 py-4 font-semibold text-white transition hover:scale-105"
                >
                  {variety.button}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
