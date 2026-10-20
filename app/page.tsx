import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ClinicIntro } from "@/components/clinic-intro";
import { ServicesSection } from "@/components/services-section";
import { CareExperience } from "@/components/care-experience";
import { ClinicTour } from "@/components/clinic-tour";
import { AppointmentProcess } from "@/components/appointment-process";
import { FaqSection } from "@/components/faq-section";
import { FinalCta } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <ClinicIntro />
        <ServicesSection />
        <CareExperience />
        <ClinicTour />
        <AppointmentProcess />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
