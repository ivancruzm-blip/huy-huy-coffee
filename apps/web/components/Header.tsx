const navigationItems = [
  "Inicio",
  "Café",
  "Nuestra Historia",
  "Productores",
  "Tienda",
  "Contacto",
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2D2D2D]/5 bg-[#F8F6F2]/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-8 py-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8">
        <div className="flex items-center justify-between gap-4 lg:block">
          <a
            href="#"
            className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2D2D2D]"
          >
            HUY HUY COFFEE
          </a>

          <a
            href="#"
            className="rounded-full bg-[#2F5D50] px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 lg:hidden"
          >
            Comprar
          </a>
        </div>

        <nav aria-label="Navegación principal">
          <ul className="flex gap-6 overflow-x-auto whitespace-nowrap text-sm font-medium text-[#2D2D2D]/75 lg:justify-center lg:overflow-visible">
            {navigationItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="transition hover:text-[#2F5D50]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden justify-end lg:flex">
          <a
            href="#"
            className="rounded-full bg-[#2F5D50] px-6 py-3 text-sm font-semibold text-white transition hover:scale-105"
          >
            Comprar
          </a>
        </div>
      </div>
    </header>
  );
}
