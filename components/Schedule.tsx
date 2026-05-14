"use client";
import { motion } from "framer-motion";
import { useReservation } from "./ReservationContext";

type Match = { date: string; datetime: string; teams: string; time: string; highlight?: boolean };
type Phase = { phase: string; dates: string; matches: Match[] };

const phases: Phase[] = [
  {
    phase: "Fase de Grupos",
    dates: "12 JUN — 26 JUN",
    matches: [
      { date: "JUN 12", datetime: "2026-06-12T21:00:00+02:00", teams: "Partido Inaugural · USA vs. México", time: "21:00" },
      { date: "JUN 15", datetime: "2026-06-15T21:00:00+02:00", teams: "España · Primer Partido de Grupo", time: "21:00" },
      { date: "JUN 19", datetime: "2026-06-19T21:00:00+02:00", teams: "España · Grupo Jornada 2", time: "21:00" },
      { date: "JUN 23", datetime: "2026-06-23T21:00:00+02:00", teams: "España · Grupo Jornada 3", time: "21:00" },
      { date: "JUN 26", datetime: "2026-06-26T21:00:00+02:00", teams: "Los Mejores Choques del Día", time: "21:00" },
    ],
  },
  {
    phase: "Rondas Eliminatorias",
    dates: "1 JUL — 16 JUL",
    matches: [
      { date: "JUL 1–4", datetime: "2026-07-01T21:00:00+02:00", teams: "Ronda de 32", time: "21:00" },
      { date: "JUL 6–9", datetime: "2026-07-06T21:00:00+02:00", teams: "Octavos de Final", time: "21:00" },
      { date: "JUL 11–12", datetime: "2026-07-11T21:00:00+02:00", teams: "Cuartos de Final", time: "21:00" },
      { date: "JUL 15–16", datetime: "2026-07-15T21:00:00+02:00", teams: "Semifinales", time: "21:00" },
    ],
  },
  {
    phase: "La Final",
    dates: "19 JUL",
    matches: [
      { date: "JUL 19", datetime: "2026-07-19T21:00:00+02:00", teams: "FINAL DEL MUNDIAL 2026", time: "21:00", highlight: true },
    ],
  },
];

export default function Schedule() {
  const { openModal } = useReservation();
  return (
    <section id="schedule" className="bg-[#0050FF] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/20 pb-10"
        >
          <h2 className="font-display text-[clamp(3rem,9vw,9rem)] text-white leading-none">
            CALENDARIO<br />DE PARTIDOS:
          </h2>
          <div className="md:text-right">
            <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-2">Gol al Mar</p>
            <p className="text-white/60 text-sm max-w-xs leading-relaxed">
              Proyectamos todos los partidos. Las puertas abren 30 min antes del pitido inicial.
              Entrada libre — primero en llegar, primero en sentarse.
            </p>
          </div>
        </motion.div>

        {/* Phases */}
        <div className="flex flex-col gap-12">
          {phases.map((phase, pi) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: pi * 0.1 }}
            >
              <div className="flex items-center gap-6 mb-5">
                <p className="text-[9px] font-bold tracking-widest text-white/40 uppercase">
                  {phase.phase}
                </p>
                <div className="flex-1 h-px bg-white/15" />
                <p className="text-[9px] font-bold tracking-widest text-white/30 uppercase">
                  {phase.dates}
                </p>
              </div>

              <div className="flex flex-col divide-y divide-white/10">
                {phase.matches.map((m, mi) => (
                  <motion.div
                    key={mi}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: pi * 0.1 + mi * 0.06 }}
                    className={`flex items-center justify-between py-5 gap-4 group transition-colors duration-200 ${
                      m.highlight
                        ? "bg-white/10 -mx-4 px-4 rounded-sm"
                        : "hover:bg-white/5 -mx-4 px-4 cursor-default"
                    }`}
                  >
                    <div className="flex items-center gap-6 md:gap-10 min-w-0">
                      <time dateTime={m.datetime} className={`font-display text-xl md:text-2xl shrink-0 w-20 ${m.highlight ? "text-white" : "text-white/45"}`}>
                        {m.date}
                      </time>
                      <span className={`font-display text-2xl md:text-4xl truncate ${m.highlight ? "text-white" : "text-white/85"}`}>
                        {m.teams}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 md:gap-8 shrink-0">
                      <span className="text-white/45 text-xs font-bold tracking-widest">{m.time}</span>
                      <span className="text-[9px] font-bold tracking-widest text-white/25 uppercase hidden md:block">
                        PLAYA DE VILANOVA
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-10 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="text-white/40 text-xs tracking-widest uppercase max-w-sm">
            Horario sujeto a los tiempos oficiales de emisión.
            Todos los partidos en el proyector gigante de la Playa de Vilanova.
          </p>
          <button onClick={openModal} className="btn-outline-white shrink-0">
            RESERVA TU ASIENTO
          </button>
        </motion.div>

      </div>
    </section>
  );
}
