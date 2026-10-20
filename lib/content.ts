// Central place for ALL editable copy, image paths and placeholders.

export const clinic = {
  name: "KALINA ORAL CARE",
  // Placeholders until verified details are supplied.
  address: "[Clinic address — to be added]",
  phone: "[Phone number — to be added]",
  email: "[Email address — to be added]",
  hours: [
    { days: "Monday – Friday", time: "[Opening hours — to be added]" },
    { days: "Saturday", time: "[Opening hours — to be added]" },
    { days: "Sunday", time: "[Opening hours — to be added]" },
  ],
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "X", href: "#" },
  ],
};

export type ImageAsset = { src: string; width: number; height: number; alt: string };

export const images = {
  hero: { src: "/images/happy-smile-dental-clinic.png", width: 1536, height: 1024, alt: "A smiling patient reclining in a dental chair, holding a hand mirror while a dental professional in pink gloves gently supports her face." },
  lounge: { src: "/images/clinic-lounge.jpg", width: 736, height: 1051, alt: "Contemporary waiting lounge with cream seating, vertical wood panelling and indoor plants." },
  treatmentRoom: { src: "/images/treatment-room.jpeg", width: 736, height: 1097, alt: "Bright treatment room with a dental chair, overhead light and clinical equipment." },
  reception: { src: "/images/reception-desk.jpg", width: 736, height: 736, alt: "Modern white reception desk with a soft light beneath the counter." },
  // ⚠ Add these two files to /public/images/ (see README). Placeholders show until then.
  careClose: { src: "/images/dr-close.jpg", width: 1200, height: 1500, alt: "A dentist carefully treating a patient." },
  careWide: { src: "/images/dr-wide.jpg", width: 1600, height: 1067, alt: "Wider view of a dentist treating a patient in the clinic." },
} satisfies Record<string, ImageAsset>;

export const services = [
  { icon: "check", title: "Check-ups & consultations", text: "A calm, unhurried appointment to talk through your oral health, ask questions and plan next steps." },
  { icon: "clean", title: "Scale & polish", text: "Professional cleaning to help keep teeth and gums comfortable and fresh between visits." },
  { icon: "white", title: "Teeth whitening", text: "Discuss whether whitening is suitable for you and the options available at the clinic." },
  { icon: "fill", title: "Fillings & restorations", text: "Repair options for teeth affected by decay or damage, explained clearly before any treatment begins." },
  { icon: "align", title: "Alignment consultations", text: "Explore options for straighter teeth and a more comfortable bite with a personal assessment." },
  { icon: "kids", title: "Family & children’s care", text: "A welcoming environment for patients of different ages, with guidance for looking after teeth at home." },
] as const;

export const processSteps = [
  { title: "Request a visit", text: "Tell us a little about yourself and when suits you. Takes under a minute." },
  { title: "Hear from the clinic", text: "The team follows up to agree a time that works for you." },
  { title: "Your appointment", text: "Meet your dentist, talk through your concerns and have an examination at your own pace." },
  { title: "Your care plan", text: "Receive clear explanations of any recommended treatment before you decide anything." },
];

export const faqs = [
  { q: "How do I book an appointment?", a: "Use the appointment form on this page or contact the clinic using the details in the footer. [Booking process to be confirmed by the clinic.]" },
  { q: "What should I bring to my first visit?", a: "Bring any relevant dental or medical information you have, and a list of questions or concerns. [Clinic to confirm any further requirements.]" },
  { q: "Will I be told about treatment before it starts?", a: "Your dentist should explain your options and answer your questions before you agree to any treatment." },
  { q: "Do you welcome children and families?", a: "[Clinic to confirm age ranges and family services.]" },
  { q: "What are your opening hours and location?", a: "See the footer for details. [Hours and address to be added once verified.]" },
];
