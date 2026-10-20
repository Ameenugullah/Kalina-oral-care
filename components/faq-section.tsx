"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-turquoise-mist pt-4 pb-12 sm:pt-6 sm:pb-14 lg:pt-8 lg:pb-16">
      <div className="section grid gap-12 lg:grid-cols-12">
        <h2 className="font-display text-4xl font-light leading-tight sm:text-5xl lg:col-span-4">Questions, answered.</h2>
        <div className="lg:col-span-7 lg:col-start-6">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-twilight/15">
                <h3>
                  <button type="button" id={`faq-btn-${i}`} aria-expanded={isOpen} aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-xl sm:text-2xl">
                    {f.q}
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white transition duration-300 ${isOpen ? "rotate-45 bg-turquoise" : ""}`}><Plus className="h-4 w-4" aria-hidden /></span>
                  </button>
                </h3>
                <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden"><p className="pb-6 pr-12 leading-relaxed text-twilight/80">{f.a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
