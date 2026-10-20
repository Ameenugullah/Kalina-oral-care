"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { images } from "@/lib/content";

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [pointerOk, setPointerOk] = useState(false);

  // Pointer parallax only on fine pointers (desktop) and when motion is allowed.
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1024px)");
    const update = () => setPointerOk(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  const enabled = pointerOk && !reduce;

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 18 });
  const sy = useSpring(my, { stiffness: 90, damping: 18 });
  const rotY = useTransform(sx, [-0.5, 0.5], [-4, 4]);
  const rotX = useTransform(sy, [-0.5, 0.5], [3, -3]);
  const backX = useTransform(sx, [-0.5, 0.5], [18, -18]);
  const backY = useTransform(sy, [-0.5, 0.5], [12, -12]);
  const frontX = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const frontY = useTransform(sy, [-0.5, 0.5], [-8, 8]);

  const onMove = (e: React.PointerEvent) => {
    if (!enabled || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} className="relative mx-auto w-full max-w-[640px] [perspective:1400px]">
      {/* layered turquoise depth shapes */}
      <motion.div aria-hidden style={enabled ? { x: backX, y: backY } : undefined}
        initial={reduce ? false : { opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-6 -top-8 h-[72%] w-[72%] rounded-[44%_56%_52%_48%/50%_44%_56%_50%] bg-turquoise/70 sm:-right-10" />
      <motion.div aria-hidden style={enabled ? { x: backX, y: backY } : undefined}
        initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute -bottom-8 -left-6 h-[46%] w-[46%] rounded-full border-[14px] border-turquoise/60 sm:-left-10" />

      <motion.div style={enabled ? { rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" } : undefined}
        initial={reduce ? false : { opacity: 0, y: 40, rotateY: -8 }} animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-[2rem] bg-white p-2.5 shadow-[0_40px_70px_-30px_rgba(12,7,102,.55),0_12px_24px_-12px_rgba(12,7,102,.25)] sm:p-3">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:aspect-[5/6]">
          <Image src={images.hero.src} alt={images.hero.alt} fill priority sizes="(min-width:1024px) 600px, 92vw"
            className="object-cover [object-position:42%_50%]" />
        </div>
        {/* floating detail chip: sits at the lower edge, clear of face, mirror and hands */}
        <motion.div aria-hidden style={enabled ? { x: frontX, y: frontY } : undefined}
          className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-twilight px-5 py-3.5 text-white shadow-[0_18px_30px_-12px_rgba(12,7,102,.7)] sm:left-8">
          <span className="h-2.5 w-2.5 rounded-full bg-turquoise" />
          <span className="text-sm font-semibold">Designed around your comfort</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
