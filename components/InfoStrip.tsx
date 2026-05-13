"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useReservation } from "./ReservationContext";

export default function InfoStrip() {
  const { openModal } = useReservation();
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
                Estaremos en
              </p>
              <p className="font-display text-[clamp(2.5rem,5vw,5rem)] text-[#050505] leading-none mb-6">
                HABANA<br />BLUE
              </p>
              <p className="text-sm text-[#050505]/60 leading-relaxed max-w-xs">
                En el chiringuito Habana Blue, justo en la playa. Llega antes
                de las 21:00, elige tu sitio y prepárate para el partido.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=41.2122968,1.7248974"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-[#050505]"
              >
                CÓMO LLEGAR
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
              <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase">Verano 2026</span>
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
                Estás invitado
              </p>
              <p className="font-display text-[clamp(2.5rem,5vw,5rem)] text-[#050505] leading-none mb-6">
                RESERVA<br />AHORA
              </p>
              <p className="text-sm text-[#050505]/60 leading-relaxed max-w-xs">
                La entrada es completamente gratuita. Reserva para que sepamos
                cuántas bebidas frías y buenos sitios preparar.
              </p>
            </div>
            <div className="mt-8">
              <button onClick={openModal} className="btn-outline text-[#050505]">
                RESERVA TU SITIO
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
