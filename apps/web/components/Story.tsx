export function Story() {
  return (
    <section className="bg-[#F8F6F2] px-8 pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div
          aria-label="Fotografia de origen Huy Huy Coffee"
          className="min-h-[420px] border border-[#2D2D2D]/10 bg-[linear-gradient(135deg,rgba(47,93,80,0.18),rgba(200,169,106,0.16)),linear-gradient(0deg,rgba(45,45,45,0.12),rgba(45,45,45,0.02))] shadow-[0_24px_70px_rgba(45,45,45,0.07)] sm:min-h-[520px]"
          role="img"
        />

        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96A]">
            OUR STORY
          </p>

          <h2 className="mb-8 text-4xl font-bold leading-tight text-[#2D2D2D] lg:text-6xl">
            El origen de cada taza.
          </h2>

          <p className="mb-10 text-lg leading-8 text-gray-600">
            HUY HUY Coffee nace en la comunidad de Huy Huy, distrito de
            Yanatile, Cusco. Cada grano refleja la tradición, el respeto por la
            naturaleza y el trabajo de familias caficultoras que cultivan café
            de especialidad en las montañas del Perú.
          </p>

          <a
            href="#"
            className="inline-flex rounded-full bg-[#2F5D50] px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Conocer más
          </a>
        </div>
      </div>
    </section>
  );
}
