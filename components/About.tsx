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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-white text-[clamp(2rem,6vw,6rem)] leading-none max-w-4xl m-0 p-0"
          >
            EL FÚTBOL NUNCA SE VIO TAN BIEN
          </motion.h2>
        </div>
      </div>

      {/* Editorial text — centered, Summer Drive style */}
      <div className="px-8 md:px-16 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[9px] font-bold tracking-widest text-[#050505]/35 uppercase mb-8"
          >
            Sobre Gol al Mar
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-base leading-relaxed text-[#050505]/65 mb-5"
          >
            No hay duda. El Mundial solo llega cada cuatro años — y este verano
            lo vamos a ver de la única manera que tiene sentido: frente al mar,
            en la arena, con todos los que aman el fútbol.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-base leading-relaxed text-[#050505]/65 mb-5"
          >
            Hemos montado una pantalla de proyector gigante justo en la Playa de
            Vilanova. Todos los partidos, en directo, con el sonido del estadio
            resonando sobre el agua. Trae a tu gente, tu bandera, y prepárate
            para gritar al mar.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="text-base leading-relaxed text-[#050505]/65"
          >
            Coge tus gafas de sol. Hunde los pies en la arena. Grita todo lo que
            quieras — aquí nadie te va a callar. Este es el Mundial de Vilanova
            y todo el mundo está invitado.
          </motion.p>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto grid grid-cols-3 gap-6 border-t border-[#050505]/12 mt-16 pt-12"
        >
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
              transition={{ duration: 0.5, delay: 0.28 + i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-5xl md:text-6xl text-[#0050FF] mb-1">{stat.num}</p>
              <p className="text-[9px] font-bold tracking-widest text-[#050505]/40 uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
