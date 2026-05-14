"use client";
import { motion } from "framer-motion";
import { useReservation } from "./ReservationContext";

export default function Hero() {
  const { openModal } = useReservation();

  return (
    <section
      id="top"
      aria-label="Gol al Mar — World Cup en la Playa"
      className="relative bg-[#0050FF] px-6 md:px-10 lg:px-14 pt-28 pb-8 overflow-hidden"
    >
      <h1
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          borderWidth: 0,
        }}
      >
        World Cup en la Playa · Gol al Mar — El Mundial 2026 en la Playa de
        Vilanova i la Geltrú. Entrada libre, pantalla gigante, todos los
        partidos en directo.
      </h1>

      {/* Subtle grain */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto">

        {/* Line 1 — "THE SUMMER" equivalent */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(3.5rem,11vw,12rem)] text-white leading-none"
        >
          WORLD CUP
        </motion.p>

        {/* Line 2 — DATE · "DRIVE" · TIME */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end gap-5 md:gap-10"
        >
          <div className="shrink-0 pb-2 md:pb-4">
            <p className="text-[8px] font-bold tracking-widest text-white/40 uppercase mb-1">
              Fecha
            </p>
            <p className="text-sm md:text-base font-bold text-white leading-tight">
              JUN —<br />JUL 2026
            </p>
          </div>

          <p className="font-display text-[clamp(4.5rem,14vw,16.5rem)] text-white leading-none flex-1 min-w-0">
            EN LA PLAYA
          </p>

          <div className="shrink-0 pb-2 md:pb-4 text-right">
            <p className="text-[8px] font-bold tracking-widest text-white/40 uppercase mb-1">
              Inicio
            </p>
            <p className="text-sm md:text-base font-bold text-white">21:00</p>
          </div>
        </motion.div>

        {/* Tagline row — "A NO-WORK, WORK-EVENT…" equivalent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-7 pt-6 border-t border-white/15"
        >
          <p className="text-[9px] font-bold tracking-widest text-white/45 uppercase">
            ENTRADA LIBRE · PANTALLA GIGANTE · TODOS LOS PARTIDOS DEL MUNDIAL 2026 · PLAYA DE VILANOVA
          </p>
          <div className="flex gap-3 shrink-0">
            <button onClick={openModal} className="btn-outline-white">
              RESERVAR
            </button>
            <a href="#schedule" className="btn-outline-white">
              VER PARTIDOS
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
