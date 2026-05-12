"use client";
import { motion } from "framer-motion";

type Match = { date: string; teams: string; time: string; highlight?: boolean };
type Phase = { phase: string; dates: string; matches: Match[] };

const phases: Phase[] = [
  {
    phase: "Group Stage",
    dates: "12 JUN — 26 JUN",
    matches: [
      { date: "JUN 12", teams: "Opening Match · USA vs. Mexico", time: "21:00" },
      { date: "JUN 15", teams: "Spain · First Group Game", time: "21:00" },
      { date: "JUN 19", teams: "Spain · Group Matchday 2", time: "21:00" },
      { date: "JUN 23", teams: "Spain · Group Matchday 3", time: "21:00" },
      { date: "JUN 26", teams: "Best Clashes of the Day", time: "21:00" },
    ],
  },
  {
    phase: "Knockout Rounds",
    dates: "1 JUL — 16 JUL",
    matches: [
      { date: "JUL 1–4", teams: "Round of 32", time: "21:00" },
      { date: "JUL 6–9", teams: "Round of 16", time: "21:00" },
      { date: "JUL 11–12", teams: "Quarter Finals", time: "21:00" },
      { date: "JUL 15–16", teams: "Semi Finals", time: "21:00" },
    ],
  },
  {
    phase: "The Final",
    dates: "19 JUL",
    matches: [
      { date: "JUL 19", teams: "WORLD CUP FINAL 2026", time: "21:00", highlight: true },
    ],
  },
];

export default function Schedule() {
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
            MATCH<br />SCHEDULE:
          </h2>
          <div className="md:text-right">
            <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-2">Gol al Mar</p>
            <p className="text-white/60 text-sm max-w-xs leading-relaxed">
              We screen every match. Gates open 30 min before kick-off.
              Free entry — first come, first seated.
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
                      <span className={`font-display text-xl md:text-2xl shrink-0 w-20 ${m.highlight ? "text-white" : "text-white/45"}`}>
                        {m.date}
                      </span>
                      <span className={`font-display text-2xl md:text-4xl truncate ${m.highlight ? "text-white" : "text-white/85"}`}>
                        {m.teams}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 md:gap-8 shrink-0">
                      <span className="text-white/45 text-xs font-bold tracking-widest">{m.time}</span>
                      <span className="text-[9px] font-bold tracking-widest text-white/25 uppercase hidden md:block">
                        VILANOVA BEACH
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
            Schedule subject to official broadcast times.
            All matches on the giant projector at Vilanova Beach.
          </p>
          <a href="mailto:hola@golalmar.com" className="btn-outline-white shrink-0">
            RESERVE YOUR SEAT
          </a>
        </motion.div>

      </div>
    </section>
  );
}
