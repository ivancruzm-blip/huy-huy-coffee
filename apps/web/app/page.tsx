import Image from "next/image";
import { Header } from "../components/Header";
import { Story } from "../components/Story";
import { TrustBar } from "../components/TrustBar";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8F6F2]">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-8 py-20 lg:flex-row">
        <div className="flex-1">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96A]">
            HUY HUY COFFEE
          </p>

          <h1 className="mb-8 text-5xl font-bold leading-tight text-[#2D2D2D] lg:text-7xl">
            Origen que inspira.
            <br />
            Calidad que perdura.
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-8 text-gray-600">
            Café de especialidad cultivado en la comunidad de Huy Huy,
            Yanatile, Cusco, Perú. Cada taza representa el origen, la
            tradición y el trabajo de familias caficultoras.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-[#2F5D50] px-8 py-4 font-semibold text-white transition hover:scale-105">
              Explorar Colección
            </button>

            <button className="rounded-full border border-[#2F5D50] px-8 py-4 font-semibold text-[#2F5D50] transition hover:bg-[#2F5D50] hover:text-white">
              Nuestra Historia
            </button>
          </div>
        </div>

        <div className="flex flex-1 justify-center">
          <div className="relative h-[550px] w-[420px] overflow-hidden rounded-[32px] shadow-2xl">
            <Image
              src="/images/hero-coffee.jpg"
              alt="Café de especialidad Huy Huy"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      <TrustBar />
      <Story />
      </main>
    </>
  );
}
