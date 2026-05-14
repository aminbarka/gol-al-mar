"use client";
import { motion } from "framer-motion";
import { useReservation } from "./ReservationContext";

type Match = {
  date: string;
  datetime: string;
  teams: string;
  time: string;
  highlight?: boolean;
};

type Phase = { phase: string; matches: Match[] };

const phases: Phase[] = [
  {
    phase: "Fase de Grupos",
    matches: [
      { date: "JUN 12", datetime: "2026-06-12T21:00:00+02:00", teams: "🇺🇸 USA vs. 🇲🇽 México · Partido Inaugural", time: "21:00" },
      { date: "JUN 15", datetime: "2026-06-15T21:00:00+02:00", teams: "🇪🇸 España · Primer Partido de Grupo", time: "21:00" },
      { date: "JUN 19", datetime: "2026-06-19T21:00:00+02:00", teams: "🇪🇸 España · Grupo Jornada 2", time: "21:00" },
      { date: "JUN 23", datetime: "2026-06-23T21:00:00+02:00", teams: "🇪🇸 España · Grupo Jornada 3", time: "21:00" },
      { date: "JUN 26", datetime: "2026-06-26T21:00:00+02:00", teams: "⚽ Los Mejores Choques del Día", time: "21:00" },
    ],
  },
  {
    phase: "Rondas Eliminatorias",
    matches: [
      { date: "JUL 1–4",   datetime: "2026-07-01T21:00:00+02:00", teams: "🏟️ Ronda de 32",       time: "21:00" },
      { date: "JUL 6–9",   datetime: "2026-07-06T21:00:00+02:00", teams: "🏟️ Octavos de Final",  time: "21:00" },
      { date: "JUL 11–12", datetime: "2026-07-11T21:00:00+02:00", teams: "🏟️ Cuartos de Final",  time: "21:00" },
      { date: "JUL 15–16", datetime: "2026-07-15T21:00:00+02:00", teams: "🏟️ Semifinales",       time: "21:00" },
    ],
  },
  {
    phase: "La Final",
    matches: [
      { date: "JUL 19", datetime: "2026-07-19T21:00:00+02:00", teams: "🏆 FINAL DEL MUNDIAL 2026", time: "21:00", highlight: true },
    ],
  },
];

export default function Schedule() {
  const { openModal } = useReservation();

  return (
    <section id="schedule" className="bg-[#0050FF] px-6 md:px-10 lg:px-14 py-20">
      <div className="max-w-[1600px] mx-auto">

        {/* Side-by-side grid — "DUNK TANK SCHEDULE:" style */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-16">

          {/* LEFT — Big title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="font-display text-[clamp(4rem,10vw,11rem)] text-white leading-none">
                CALENDARIO<br />DE<br />PARTIDOS:
              </h2>
            </div>
            <div className="hidden md:block mt-10">
              <p className="text-white/40 text-xs tracking-widest uppercase mb-5 max-w-xs leading-relaxed">
                Las puertas abren 30 min antes del pitido. Entrada libre —
                primero en llegar, primero en sentarse.
              </p>
              <button onClick={openModal} className="btn-outline-white">
                RESERVA TU ASIENTO
              </button>
            </div>
          </motion.div>

          {/* RIGHT — Matches table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            {phases.map((phase, pi) => (
              <div key={phase.phase} className={pi > 0 ? "mt-8" : ""}>
                {/* Phase label */}
                <p className="text-[9px] font-bold tracking-widest text-white/35 uppercase mb-3 pb-3 border-b border-white/15">
                  {phase.phase}
                </p>

                {/* Match rows */}
                <div className="flex flex-col divide-y divide-white/10">
                  {phase.matches.map((m, mi) => (
                    <div
                      key={mi}
                      className={`flex items-center justify-between py-4 gap-4 ${
                        m.highlight ? "bg-white/10 -mx-3 px-3 rounded-sm" : ""
                      }`}
                    >
                      <time
                        dateTime={m.datetime}
                        className={`font-display text-xl shrink-0 w-20 ${
                          m.highlight ? "text-white" : "text-white/45"
                        }`}
                      >
                        {m.date}
                      </time>
                      <span
                        className={`font-display text-2xl md:text-3xl flex-1 min-w-0 truncate ${
                          m.highlight ? "text-white" : "text-white/85"
                        }`}
                      >
                        {m.teams}
                      </span>
                      <span className="text-white/40 text-xs font-bold tracking-widest shrink-0">
                        {m.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="mt-10 md:hidden">
              <button onClick={openModal} className="btn-outline-white w-full text-center">
                RESERVA TU ASIENTO
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
