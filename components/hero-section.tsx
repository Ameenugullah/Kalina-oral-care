import { ArrowRight } from "lucide-react";
import { HeroVisual } from "./hero-visual";

export function HeroSection() {
  return (
   <section id="top" className="relative overflow-hidden bg-gradient-to-b from-turquoise-mist to-white pt-24 sm:pt-28">
     <div className="section grid items-center gap-10 pb-12 sm:gap-12 lg:grid-cols-[1.02fr_1fr] lg:gap-8 lg:pb-16">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-twilight shadow-[0_6px_16px_-8px_rgba(12,7,102,.35)]">
            <span className="h-2 w-2 rounded-full bg-turquoise" aria-hidden />
            THOUGHTFUL DENTAL CARE
          </p>
          <h1 className="mt-7 font-display text-[2.9rem] font-light leading-[1.04] tracking-tight text-twilight sm:text-6xl xl:text-[4.4rem]">
            Your smile deserves thoughtful care.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-twilight/80">
            Discover a more welcoming approach to dental care, designed around your comfort and confidence.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#appointment" className="btn-primary">Book an Appointment <ArrowRight className="h-4 w-4" aria-hidden /></a>
            <a href="#services" className="btn-secondary">Explore Our Services</a>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
