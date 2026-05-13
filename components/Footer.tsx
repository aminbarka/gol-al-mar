"use client";
import { motion } from "framer-motion";
import { useReservation } from "./ReservationContext";

export default function Footer() {
  const { openModal } = useReservation();
  return (
    <footer className="bg-[#F2EFE4] border-t border-[#050505]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Big brand row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 border-b border-[#050505]/12"
        >
          <p className="font-display text-[clamp(4rem,14vw,14rem)] text-[#050505] leading-none">
            GOL AL MAR
          </p>
          <div className="flex items-end justify-between mt-4">
            <p className="text-sm text-[#050505]/45">
              Mundial 2026 · Playa de Vilanova · Entrada Libre · Todos los Partidos
            </p>
            <button onClick={openModal} className="btn-outline text-[#050505] hidden md:inline-block">
              RESERVAR
            </button>
          </div>
        </motion.div>

        {/* Links grid */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <p className="text-[9px] font-bold tracking-widest text-[#050505]/35 uppercase mb-5">Navegar</p>
            <ul className="space-y-3">
              {[
                { label: "El Evento", href: "#about" },
                { label: "Calendario de Partidos", href: "#schedule" },
                { label: "Fotos", href: "#gallery" },
                { label: "Ubicación", href: "#info" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="link-line text-sm text-[#050505]/55 hover:text-[#050505] transition-colors font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[9px] font-bold tracking-widest text-[#050505]/35 uppercase mb-5">Contacto</p>
            <ul className="space-y-3">
              {[
                { label: "goolaalmaar@gmail.com", href: "mailto:goolaalmaar@gmail.com" },
                { label: "Instagram", href: "#" },
                { label: "TikTok", href: "#" },
                { label: "WhatsApp", href: "https://wa.me/34612209293" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="link-line text-sm text-[#050505]/55 hover:text-[#050505] transition-colors font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2 md:text-right flex flex-col justify-end">
            <p className="font-display text-5xl text-[#0050FF] leading-none mb-2">FREE</p>
            <p className="text-[9px] font-bold tracking-widest text-[#050505]/35 uppercase">Siempre · Sin entradas necesarias</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#050505]/10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[#050505]/30">
            © 2026 Gol al Mar. Vilanova i la Geltrú, España.
          </p>
          <p className="text-xs text-[#050505]/25 tracking-widest uppercase">
            Mundial 2026 · Proyecciones en la Playa
          </p>
        </div>

      </div>
    </footer>
  );
}
