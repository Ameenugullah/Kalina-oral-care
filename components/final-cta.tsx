"use client";
import { useState } from "react";
import { ArrowRight, Info } from "lucide-react";

/**
 * DEMONSTRATION FORM — there is no booking backend yet.
 * Submitting only validates the fields and shows an honest notice; nothing is sent or booked.
 * To go live: replace `handleSubmit` with a POST to your API / email service / booking tool.
 */
export function FinalCta() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const field = "w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3.5 text-white placeholder:text-white/50 focus:border-turquoise";

  return (
    <section id="appointment" className="on-dark relative overflow-hidden bg-twilight py-10 text-white sm:py-12 lg:py-14">
      <div aria-hidden className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-turquoise/25 blur-3xl" />
      <div className="section relative grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="font-display text-4xl font-light leading-tight sm:text-5xl">Ready when you are.</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/80">Tell us a little about what you need and when suits you. We will help you take the next step.</p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          {submitted ? (
            <div role="status" className="rounded-2xl bg-white p-8 text-twilight">
              <Info className="h-6 w-6" aria-hidden />
              <h3 className="mt-4 font-display text-2xl">This is a demonstration form</h3>
              <p className="mt-2 leading-relaxed text-twilight/80">No request has been sent and no appointment has been booked. Booking will be connected once the clinic confirms its system.</p>
              <button type="button" className="btn-secondary mt-6" onClick={() => setSubmitted(false)}>Back to the form</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">Full name
                <input required name="name" autoComplete="name" className={field} placeholder="Your name" /></label>
              <label className="grid gap-2 text-sm font-semibold">Phone
                <input required name="phone" type="tel" autoComplete="tel" className={field} placeholder="Your phone number" /></label>
              <label className="grid gap-2 text-sm font-semibold sm:col-span-2">Preferred day or time
                <input name="when" className={field} placeholder="e.g. weekday mornings" /></label>
              <label className="grid gap-2 text-sm font-semibold sm:col-span-2">What would you like help with?
                <textarea name="reason" rows={3} className={field} placeholder="Optional" /></label>
              <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-turquoise px-7 py-3.5 text-[15px] font-semibold text-twilight transition hover:-translate-y-0.5 sm:col-span-2 sm:justify-self-start">
                Request an Appointment <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
              <p className="text-sm text-white/60 sm:col-span-2">Demonstration only: this form does not send or book anything yet.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
