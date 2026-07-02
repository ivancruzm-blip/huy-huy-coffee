const processSteps = [
  {
    number: "①",
    title: "Cultivo",
    description: "Cultivado cuidadosamente en las montañas de Yanatile.",
  },
  {
    number: "②",
    title: "Cosecha",
    description: "Selección manual únicamente de cerezas maduras.",
  },
  {
    number: "③",
    title: "Lavado",
    description: "Proceso lavado para resaltar limpieza y dulzor.",
  },
  {
    number: "④",
    title: "Tostado",
    description: "Tostado en pequeños lotes para mantener consistencia.",
  },
  {
    number: "⑤",
    title: "Tu taza",
    description: "Una experiencia de café de especialidad con identidad peruana.",
  },
];

export function CoffeeProcess() {
  return (
    <section className="bg-[#F8F6F2] px-8 pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96A]">
            NUESTRO PROCESO
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-[#2D2D2D] lg:text-6xl">
            Del cafetal a tu taza.
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            Cada lote es cuidadosamente cultivado, cosechado y procesado para
            preservar la calidad y la identidad del café de Huy Huy.
          </p>
        </div>

        <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute left-7 top-8 h-[calc(100%-4rem)] w-px bg-[#2D2D2D]/10 lg:left-0 lg:right-0 lg:top-8 lg:h-px lg:w-full"
          />

          {processSteps.map((step) => (
            <li key={step.title} className="relative flex gap-6 lg:block">
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#C8A96A]/40 bg-[#F8F6F2] text-2xl text-[#2F5D50] shadow-[0_16px_38px_rgba(45,45,45,0.06)] lg:mx-auto">
                {step.number}
              </div>

              <div className="pt-1 lg:mt-8 lg:text-center">
                <h3 className="mb-3 text-xl font-bold text-[#2D2D2D]">
                  {step.title}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
