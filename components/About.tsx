"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-[#F2EFE4] px-8 md:px-14 lg:px-20 py-24">
      <div className="max-w-5xl mx-auto">

        {/* Big editorial heading in BLUE — "IT'S BEEN A LONG 15 MONTHS" equivalent */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-[clamp(3.5rem,8vw,9rem)] text-[#0050FF] leading-none mb-12"
        >
          EL FÚTBOL<br />NUNCA SE VIO<br />TAN BIEN
        </motion.h2>

        {/* Body paragraphs */}
        <div className="max-w-2xl space-y-5">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-base leading-relaxed text-[#050505]/65"
          >
            No hay duda. El Mundial solo llega cada cuatro años — y este verano
            lo vamos a ver de la única manera que tiene sentido: frente al mar,
            en la arena, con todos los que aman el fútbol.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="text-base leading-relaxed text-[#050505]/65"
          >
            Hemos montado una pantalla de proyector gigante justo en la Playa de
            Vilanova. Todos los partidos, en directo, con el sonido del estadio
            resonando sobre el agua. Trae a tu gente, tu bandera, y prepárate
            para gritar al mar.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base leading-relaxed text-[#050505]/65"
          >
            Coge tus gafas de sol. Hunde los pies en la arena. Grita todo lo que
            quieras — aquí nadie te va a callar. Este es el Mundial de Vilanova
            y todo el mundo está invitado.
          </motion.p>
        </div>

        {/* Stats — same as Summer Drive's data row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.26 }}
          className="grid grid-cols-3 gap-6 border-t border-[#050505]/12 mt-16 pt-12 max-w-2xl"
        >
          {[
            { num: "64", label: "Partidos" },
            { num: "GRATIS", label: "Siempre" },
            { num: "6M+", label: "Pantalla" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-5xl md:text-6xl text-[#0050FF] mb-1 leading-none">
                {stat.num}
              </p>
              <p className="text-[9px] font-bold tracking-widest text-[#050505]/40 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
