import { MapPin, Phone, Mail } from "lucide-react";
import { clinic } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-white py-16">
      <div className="section grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-display text-xl font-semibold tracking-[0.04em]">{clinic.name}</p>
          <p className="mt-3 max-w-xs text-twilight/75">Thoughtful dental care, designed around your comfort and confidence.</p>
        </div>
        <address className="space-y-3 not-italic md:col-span-4">
          <p className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden />{clinic.address}</p>
          <p className="flex gap-3"><Phone className="mt-1 h-4 w-4 shrink-0" aria-hidden />{clinic.phone}</p>
          <p className="flex gap-3"><Mail className="mt-1 h-4 w-4 shrink-0" aria-hidden />{clinic.email}</p>
        </address>
        <div className="md:col-span-4">
          <h2 className="font-display text-lg">Opening hours</h2>
          <dl className="mt-3 space-y-1.5">
            {clinic.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-6"><dt>{h.days}</dt><dd className="text-twilight/75">{h.time}</dd></div>
            ))}
          </dl>
          <ul className="mt-6 flex gap-5">
            {clinic.socials.map((s) => (<li key={s.label}><a href={s.href} className="font-semibold underline decoration-turquoise decoration-2 underline-offset-4">{s.label}</a></li>))}
          </ul>
        </div>
      </div>
      <p className="section mt-12 border-t border-twilight/10 pt-6 text-sm text-twilight/60">© {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
    </footer>
  );
}
