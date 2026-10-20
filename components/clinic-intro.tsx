
import { Reveal } from "./reveal";

export function ClinicIntro() {
  return (
    <section id="about" className="section py-12 sm:py-14 lg:py-16">
      <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-twilight/70">
            Our approach
          </p>

          <h2 className="font-display text-4xl font-light leading-tight text-twilight sm:text-5xl">
            Dental care that begins with listening.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <p className="text-base leading-relaxed text-twilight/80 sm:text-lg">
            At KALINA ORAL CARE, we believe a better dental visit starts with
            understanding you. Your questions, comfort and concerns deserve
            attention, and you should feel informed at every step of your care.
          </p>

          <p className="mt-4 text-base leading-relaxed text-twilight/80 sm:text-lg">
            We aim to make each visit welcoming and straightforward, with clear
            explanations of your dental needs and the options available to you.
            Because feeling comfortable enough to ask questions is an important
            part of your care.
          </p>

          <div className="mt-5 border-l-2 border-turquoise pl-4">
            <p className="text-sm font-semibold text-twilight">
              Care that puts you first
            </p>
            <p className="mt-1 text-sm leading-relaxed text-twilight/70">
              A welcoming experience, clear communication and respect for your
              comfort.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
