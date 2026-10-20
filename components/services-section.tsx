import { ClipboardCheck, Sparkles, SunMedium, ShieldPlus, AlignHorizontalSpaceAround, Baby } from "lucide-react";
import { services } from "@/lib/content";
import { Reveal } from "./reveal";

const icons = { check: ClipboardCheck, clean: Sparkles, white: SunMedium, fill: ShieldPlus, align: AlignHorizontalSpaceAround, kids: Baby };

export function ServicesSection() {
  return (
   <section id="services" className="bg-turquoise-mist py-12 sm:py-14 lg:py-16">
      <div className="section">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl font-light leading-tight sm:text-5xl">Care for every stage of your smile.</h2>
          <p className="mt-5 text-lg leading-relaxed text-twilight/80">A look at what the clinic can help with. [Final services list to be confirmed by the clinic.]</p>
        </Reveal>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">   
           {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <li key={s.title} className={i % 3 === 1 ? "lg:translate-y-6" : ""}>
                <article className="group h-full rounded-[1.75rem] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_40px_-24px_rgba(12,7,102,.45)]">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-turquoise text-twilight transition duration-300 group-hover:rotate-[-6deg]"><Icon className="h-6 w-6" aria-hidden /></span>
                  <h3 className="mt-6 font-display text-2xl font-normal">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-twilight/75">{s.text}</p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
