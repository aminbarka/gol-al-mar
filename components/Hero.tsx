"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const words = [
  { text: "WORLD", color: "text-[#050505]" },
  { text: "CUP", color: "text-[#0050FF]" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen bg-[#F2EFE4] flex flex-col justify-between pt-20 pb-10 px-6 overflow-hidden"
    >
      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating beach photo — top right corner, tilted */}
      <motion.div
        initial={{ opacity: 0, rotate: 6, scale: 0.85, x: 60 }}
        animate={{ opacity: 1, rotate: 3, scale: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: imgY }}
        className="absolute top-24 right-6 md:right-16 w-[180px] md:w-[260px] lg:w-[320px] z-10 shadow-2xl"
      >
        <div className="relative w-full aspect-[3/4] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
            alt="Football on beach"
            fill
            priority
            sizes="(max-width: 768px) 180px, 320px"
            className="object-cover"
          />
          <div className="absolute inset-0 border border-[#050505]/20" />
        </div>
        <p className="text-[9px] font-bold tracking-widest text-[#050505]/40 uppercase mt-2 text-center">
          Vilanova Beach · Summer 2026
        </p>
      </motion.div>

      {/* Floating second photo — bottom left */}
      <motion.div
        initial={{ opacity: 0, rotate: -5, scale: 0.85, x: -40 }}
        animate={{ opacity: 1, rotate: -2, scale: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-28 left-4 md:left-10 w-[130px] md:w-[200px] z-10 shadow-xl"
      >
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80"
            alt="Outdoor crowd event"
            fill
            sizes="(max-width: 768px) 130px, 200px"
            className="object-cover"
          />
          <div className="absolute inset-0 border border-[#050505]/20" />
        </div>
      </motion.div>

      {/* Top meta row */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-20 max-w-7xl mx-auto w-full flex items-start justify-between pt-6"
      >
        <div>
          <p className="text-[9px] font-bold tracking-widest text-[#050505]/35 uppercase mb-1">Date</p>
          <p className="text-sm font-bold text-[#050505] tracking-wide">JUNE — JULY 2026</p>
        </div>
        <div className="text-right">
          <p className="text-[9px] font-bold tracking-widest text-[#050505]/35 uppercase mb-1">Kick-off</p>
          <p className="text-sm font-bold text-[#050505] tracking-wide">21:00</p>
        </div>
      </motion.div>

      {/* Giant title */}
      <motion.div style={{ opacity }} className="relative z-20 max-w-[1400px] mx-auto w-full flex-1 flex items-center">
        <div className="w-full">
          {/* WORLD CUP on first line with stagger */}
          <div className="flex flex-wrap gap-x-6 mb-2">
            {words.map((word, i) => (
              <motion.span
                key={word.text}
                initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.75, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={`font-display text-[clamp(5.5rem,20vw,19rem)] leading-none ${word.color}`}
              >
                {word.text}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-display text-[clamp(3.5rem,12vw,12rem)] leading-none text-[#050505]">
              AT THE BEACH
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="font-display text-[clamp(1.5rem,4vw,4rem)] text-[#0050FF] mt-3 leading-none tracking-wider"
          >
            GOL AL MAR
          </motion.p>
        </div>
      </motion.div>

      {/* Bottom strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.85 }}
        className="relative z-20 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 border-t border-[#050505]/15 pt-8"
      >
        <div>
          <p className="text-[9px] font-bold tracking-widest text-[#050505]/35 uppercase mb-1">Location</p>
          <p className="text-sm font-bold text-[#050505] tracking-wide">
            VILANOVA BEACH · VILANOVA I LA GELTRÚ · SPAIN
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a href="#info" className="btn-outline text-[#050505]">RESERVE A SPOT</a>
          <a href="#schedule" className="btn-outline text-[#050505]">SEE MATCHES</a>
        </div>
      </motion.div>
    </section>
  );
}
