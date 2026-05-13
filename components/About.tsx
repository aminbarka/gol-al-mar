"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section id="about" className="bg-[#F2EFE4]">

      {/* Full-bleed image with parallax */}
      <div ref={imgRef} className="relative h-[55vh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 scale-[1.25]">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=85"
            alt="Vilanova beach"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#050505]/30" />
        </motion.div>

        {/* Overlaid text on the image */}
        <div className="absolute inset-0 flex items-end px-8 md:px-16 pb-10 z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-white text-[clamp(2rem,6vw,6rem)] leading-none max-w-4xl"
          >
            EL FÚTBOL NUNCA SE VIO TAN BIEN
          </motion.p>
        </div>
      </div>

      {/* Text + stats */}
      <div className="px-8 md:px-16 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-[9px] font-bold tracking-widest text-[#050505]/35 uppercase mb-5">
              Sobre Gol al Mar
            </p>
            <p className="text-base leading-relaxed text-[#050505]/70 mb-5">
              No hay duda. El Mundial solo llega cada cuatro años — y este
              verano lo vamos a ver de la única manera que tiene sentido: frente
              al mar, en la arena, con todos los que aman el fútbol.
            </p>
            <p className="text-base leading-relaxed text-[#050505]/70">
              Hemos montado una pantalla de proyector gigante justo en la Playa
              de Vilanova. Todos los partidos, en directo, con el sonido del
              estadio resonando sobre el agua. Trae a tu gente, tu bandera, y
              prepárate para gritar al mar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="flex flex-col justify-between"
          >
            <p className="text-base leading-relaxed text-[#050505]/70 mb-10">
              Coge tus gafas de sol. Hunde los pies en la arena. Grita todo lo
              que quieras — aquí nadie te va a callar. Este es el Mundial de
              Vilanova y todo el mundo está invitado.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-[#050505]/12 pt-8">
              {[
                { num: "64", label: "Partidos" },
                { num: "GRATIS", label: "Siempre" },
                { num: "6M+", label: "Pantalla" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                >
                  <p className="font-display text-6xl text-[#0050FF] mb-1">{stat.num}</p>
                  <p className="text-[9px] font-bold tracking-widest text-[#050505]/40 uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
