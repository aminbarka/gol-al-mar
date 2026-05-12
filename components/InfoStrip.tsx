"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function InfoStrip() {
  return (
    <section id="info" className="bg-[#F2EFE4] border-t border-[#050505]/15 overflow-hidden">
      <div className="max-w-full">
        {/* Desktop: 3-column with big center image. Mobile: stacked. */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] min-h-[480px]">

          {/* LEFT — WHERE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between px-10 py-14 border-b md:border-b-0 md:border-r border-[#050505]/15"
          >
            <div>
              <p className="text-[9px] font-bold tracking-widest text-[#050505]/35 uppercase mb-4">
                We&apos;ll be at
              </p>
              <p className="font-display text-[clamp(2.5rem,5vw,5rem)] text-[#050505] leading-none mb-6">
                VILANOVA<br />BEACH
              </p>
              <p className="text-sm text-[#050505]/60 leading-relaxed max-w-xs">
                Right on the sand, in front of the sea. Show up before 21:00,
                grab your spot, and get ready for kick-off.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://maps.google.com/?q=Vilanova+i+la+Geltru+beach"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-[#050505]"
              >
                GET DIRECTIONS
              </a>
            </div>
          </motion.div>

          {/* CENTER — Hero image (like the car in Summer Drive) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative w-full md:w-[360px] lg:w-[480px] min-h-[320px] md:min-h-0 overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=960&q=85"
              alt="Football crowd at the beach"
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Blue overlay strip at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#0050FF] py-3 px-6 flex items-center justify-between">
              <span className="font-display text-white text-xl tracking-widest">GOL AL MAR</span>
              <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase">Summer 2026</span>
            </div>
          </motion.div>

          {/* RIGHT — RESERVE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="flex flex-col justify-between px-10 py-14 border-t md:border-t-0 md:border-l border-[#050505]/15"
          >
            <div>
              <p className="text-[9px] font-bold tracking-widest text-[#050505]/35 uppercase mb-4">
                You&apos;re invited
              </p>
              <p className="font-display text-[clamp(2.5rem,5vw,5rem)] text-[#050505] leading-none mb-6">
                RESERVE<br />NOW
              </p>
              <p className="text-sm text-[#050505]/60 leading-relaxed max-w-xs">
                Entry is completely free. Reserve so we know how many cold
                drinks and good seats to prepare.
              </p>
            </div>
            <div className="mt-8">
              <a href="mailto:hola@golalmar.com" className="btn-outline text-[#050505]">
                RESERVE YOUR SPOT
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
