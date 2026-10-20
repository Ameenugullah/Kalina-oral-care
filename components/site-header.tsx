
"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { clinic } from "@/lib/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#tour", label: "The clinic" },
  { href: "#process", label: "Your visit" },
  { href: "#faq", label: "FAQs" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);

    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? "glass-navbar border-white/60 shadow-[0_8px_32px_rgba(12,7,102,0.07)]"
          : "border-transparent bg-white/20 backdrop-blur-md"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-twilight focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <div className="section flex h-[4.5rem] items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-[0.04em] text-twilight"
          onClick={() => setOpen(false)}
        >
          {clinic.name}
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-twilight/80 transition-colors duration-200 hover:text-twilight"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#appointment"
            className="btn-primary glass-button !py-2.5"
          >
            Book an Appointment
          </a>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-twilight/20 bg-white/30 text-twilight backdrop-blur-md transition-colors hover:bg-white/60 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="glass-navbar section flex flex-col gap-1 border-t border-white/50 pb-6 pt-3 lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-lg font-medium text-twilight transition-colors hover:bg-white/50"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#appointment"
            onClick={() => setOpen(false)}
            className="btn-primary glass-button mt-3"
          >
            Book an Appointment
          </a>
        </nav>
      )}
    </header>
  );
}
