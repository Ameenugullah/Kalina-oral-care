import { images } from "@/lib/content";
import { SafeImage } from "./safe-image";
import { Reveal } from "./reveal";

export function CareExperience() {
  return (
    <section id="care" className="section py-24 lg:py-36">
      <div className="grid items-center gap-8 lg:grid-cols-12">
        <Reveal className="relative lg:col-span-6">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] bg-turquoise/50" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-turquoise-soft shadow-[0_30px_50px_-30px_rgba(12,7,102,.5)]">
            <SafeImage asset={images.careClose} sizes="(min-width:1024px) 560px, 92vw" className="h-full w-full object-cover" placeholderLabel="Dentist treating a patient (close view)" />
          </div>
          <div className="absolute -bottom-6 right-5 hidden aspect-[3/2] w-[46%] overflow-hidden rounded-2xl border-[6px] border-white bg-turquoise-soft shadow-[0_24px_40px_-20px_rgba(12,7,102,.55)] sm:block lg:-right-8">
            <SafeImage asset={images.careWide} sizes="280px" className="h-full w-full object-cover" placeholderLabel="Dentist treating a patient (wider view)" />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
          <h2 className="font-display text-4xl font-light leading-tight sm:text-5xl">Gentle hands, clear explanations.</h2>
          <p className="mt-6 text-lg leading-relaxed text-twilight/80">
            Treatment should never feel like a mystery. Your dentist talks you through each step, checks that you are comfortable and answers questions along the way.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-twilight/80">[Dentist profiles and approach to patient care to be added once verified.]</p>
        </Reveal>
      </div>
    </section>
  );
}
