import Image from "next/image";
import { images } from "@/lib/content";
import { Reveal } from "./reveal";

type Tile = { asset: typeof images.lounge; title: string; text: string; wrap: string; ratio: string; sizes: string; pos?: string };

const tiles: Tile[] = [
  { asset: images.lounge, title: "A moment of comfort", text: "A calm waiting space to settle in before your visit.", wrap: "lg:col-span-5 lg:row-span-2", ratio: "aspect-[3/4] lg:aspect-auto lg:h-full", sizes: "(min-width:1024px) 520px, 92vw" },
  { asset: images.reception, title: "A warm welcome", text: "From the moment you arrive, you are looked after.", wrap: "lg:col-span-7", ratio: "aspect-[4/3]", sizes: "(min-width:1024px) 680px, 92vw", pos: "object-[50%_55%]" },
  { asset: images.treatmentRoom, title: "Thoughtfully designed for your care", text: "A bright, well-equipped room where your treatment takes place.", wrap: "lg:col-span-5 lg:col-start-8 lg:-mt-2", ratio: "aspect-[4/3]", sizes: "(min-width:1024px) 480px, 92vw", pos: "object-[50%_55%]" },
];

export function ClinicTour() {
  return (
   <section
  id="clinic-tour"
  className="on-dark bg-twilight py-10 text-white sm:py-12 lg:py-14"
>
      <div className="section">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl font-light leading-tight sm:text-5xl">Step Inside KALINA ORAL CARE</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">From a welcoming reception to a thoughtfully designed waiting space, discover an environment created around your visit.</p>
        </Reveal>
      <div className="mt-8 grid gap-4 lg:grid-cols-12 lg:grid-rows-[auto_auto]"> {tiles.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08} className={`${t.wrap} flex flex-col`}>
              <figure className="group flex h-full flex-col">
                <div className={`relative overflow-hidden rounded-[1.75rem] ${t.ratio} flex-1`}>
                  <Image src={t.asset.src} alt={t.asset.alt} width={t.asset.width} height={t.asset.height} sizes={t.sizes}
                    className={`h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.04] ${t.pos ?? ""}`} />
                </div>
                <figcaption className="mt-3 flex flex-col gap-1">
                  <span className="font-display text-2xl">{t.title}</span>
                  <span className="text-white/70">{t.text}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
