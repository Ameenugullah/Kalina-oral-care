
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
} from "lucide-react";

const contact = {
  phone: "+2348165553940",
  displayPhone: "+234 816 555 3940",
  email: "abdulmalikaminugullah@gmail.com",
  address:
    "191 John Oyegun Street, River-Park Estate, Airport Road, Lugbe, Abuja",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=191+John+Oyegun+Street%2C+River-Park+Estate%2C+Airport+Road%2C+Lugbe%2C+Abuja",
};

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/a_gullah/",
    Icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1EsaoTEzrM/?hl=en",
    Icon: Facebook,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@gullah504",
    Icon: null,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/2348165553940",
    Icon: null,
  },
];

const openingHours = [
  { days: "Monday – Friday", hours: "8:00 AM – 11:00 PM" },
  { days: "Saturday – Sunday", hours: "8:00 AM – 9:00 PM" },
];

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 0 1-2.9 2.9 2.9 2.9 0 1 1 2.9-2.9c0-.25-.03-.5-.09-.74V11.4a6.35 6.35 0 1 0 3.54 5.7V9.8a8.18 8.18 0 0 0 4.78 1.54V7.9c-.34 0-.68-.04-1.01-.12Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.52 0 .17 5.35.17 11.93c0 2.1.55 4.16 1.6 5.97L.07 24l6.26-1.64a11.91 11.91 0 0 0 5.77 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.18-1.24-6.17-3.52-8.42ZM12.11 21.8a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.84 9.84 0 0 1-1.51-5.26c0-5.45 4.43-9.88 9.88-9.88a9.82 9.82 0 0 1 6.99 2.9 9.81 9.81 0 0 1 2.89 6.99c0 5.44-4.43 9.86-9.9 9.86Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.28.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.3 1.27.48 1.7.61.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-twilight text-white">
      <div className="section py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div>
            <a
              href="#home"
              aria-label="KALINA ORAL CARE — back to top"
              className="inline-flex flex-col"
            >
              <span className="font-display text-xl font-extrabold tracking-tight">
                KALINA
              </span>
              <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-turquoise">
                Oral Care
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
              Thoughtful dental care, a welcoming environment, and a more
              comfortable experience for every smile.
            </p>

            <a
              href="https://wa.me/2348165553940"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-turquoise px-5 py-3 text-sm font-bold text-twilight transition hover:-translate-y-0.5 hover:bg-white"
            >
              Book an appointment
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          {/* Contact details */}
          <div>
            <h2 className="font-display text-base font-bold tracking-tight">
              Contact us
            </h2>

            <div className="mt-5 space-y-4 text-sm text-white/75">
              <a
                href={`tel:${contact.phone}`}
                className="group flex items-start gap-3 transition hover:text-turquoise"
              >
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-turquoise"
                  aria-hidden="true"
                />
                <span>{contact.displayPhone}</span>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="group flex items-start gap-3 break-all transition hover:text-turquoise"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-turquoise"
                  aria-hidden="true"
                />
                <span>{contact.email}</span>
              </a>

              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 transition hover:text-turquoise"
              >
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-turquoise"
                  aria-hidden="true"
                />
                <span>
                  {contact.address}
                  <span className="mt-1 block text-xs text-white/50">
                    Abuja, Nigeria · Get directions
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Opening hours */}
          <div>
            <h2 className="font-display text-base font-bold tracking-tight">
              Opening hours
            </h2>

            <div className="mt-5 space-y-5">
              {openingHours.map((item) => (
                <div key={item.days} className="flex items-start gap-3">
                  <Clock3
                    size={18}
                    className="mt-0.5 shrink-0 text-turquoise"
                    aria-hidden="true"
                  />

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.days}
                    </p>
                    <p className="mt-1 text-sm text-white/65">
                      {item.hours}
                    </p>
                  </div>
                </div>
              ))}

              <p className="border-l-2 border-turquoise/70 pl-3 text-xs leading-5 text-white/55">
                Opening hours are listed in West Africa Time (WAT).
              </p>
            </div>
          </div>

          {/* Social media */}
          <div>
            <h2 className="font-display text-base font-bold tracking-tight">
              Connect with us
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/65">
              Follow along for updates, oral care tips, and clinic news.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit KALINA ORAL CARE on ${name}`}
                  title={name}
                  className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-white transition duration-200 hover:-translate-y-1 hover:border-turquoise hover:bg-turquoise hover:text-twilight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-turquoise"
                >
                  {Icon ? (
                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  ) : name === "TikTok" ? (
                    <TikTokIcon />
                  ) : (
                    <WhatsAppIcon />
                  )}
                </a>
              ))}
            </div>

            <a
              href="https://wa.me/2348165553940"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-turquoise transition hover:text-white"
            >
              Chat with us on WhatsApp
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/55 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} KALINA ORAL CARE. All rights reserved.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-1.5 transition hover:text-turquoise"
          >
            Back to top
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
