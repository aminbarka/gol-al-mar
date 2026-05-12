"use client";
import { motion } from "framer-motion";

export default function Footer() {
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
              World Cup 2026 · Vilanova Beach · Free Entry · Every Match
            </p>
            <a href="mailto:hola@golalmar.com" className="btn-outline text-[#050505] hidden md:inline-block">
              WRITE TO US
            </a>
          </div>
        </motion.div>

        {/* Links grid */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <p className="text-[9px] font-bold tracking-widest text-[#050505]/35 uppercase mb-5">Navigate</p>
            <ul className="space-y-3">
              {[
                { label: "The Event", href: "#about" },
                { label: "Match Schedule", href: "#schedule" },
                { label: "Photos", href: "#gallery" },
                { label: "Location", href: "#info" },
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
            <p className="text-[9px] font-bold tracking-widest text-[#050505]/35 uppercase mb-5">Contact</p>
            <ul className="space-y-3">
              {[
                { label: "hola@golalmar.com", href: "mailto:hola@golalmar.com" },
                { label: "Instagram", href: "#" },
                { label: "TikTok", href: "#" },
                { label: "WhatsApp", href: "#" },
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
            <p className="text-[9px] font-bold tracking-widest text-[#050505]/35 uppercase">Entry always · No tickets needed</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#050505]/10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[#050505]/30">
            © 2026 Gol al Mar. Vilanova i la Geltrú, Spain.
          </p>
          <p className="text-xs text-[#050505]/25 tracking-widest uppercase">
            World Cup 2026 Beach Screenings
          </p>
        </div>

      </div>
    </footer>
  );
}
