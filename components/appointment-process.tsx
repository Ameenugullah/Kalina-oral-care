import { processSteps } from "@/lib/content";
import { Reveal } from "./reveal";

export function AppointmentProcess() {
  return (
    <section id="process" className="section pt-12 pb-4 sm:pt-14 sm:pb-6 lg:pt-16 lg:pb-8">
      <Reveal className="max-w-2xl">
        <h2 className="font-display text-4xl font-light leading-tight sm:text-5xl">Your first visit, step by step.</h2>
        <p className="mt-5 text-lg text-twilight/80">[Process to be confirmed by the clinic.]</p>
      </Reveal>
      <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {processSteps.map((s, i) => (
          <li key={s.title} className="relative">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-turquoise font-display text-xl text-twilight">{i + 1}</span>
              <span className="hidden h-px flex-1 bg-twilight/20 lg:block" aria-hidden={true} />
            </div>
            <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
            <p className="mt-2 max-w-xs leading-relaxed text-twilight/75">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
