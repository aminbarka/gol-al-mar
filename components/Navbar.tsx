"use client";
import { useState, useEffect } from "react";
import { useReservation } from "./ReservationContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openModal } = useReservation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#F2EFE4] border-b border-[#050505]/15" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-display text-2xl text-[#050505] tracking-widest leading-none group-hover:text-[#0050FF] transition-colors duration-200">
            GOL AL MAR
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "EL EVENTO", href: "#about" },
            { label: "PARTIDOS", href: "#schedule" },
            { label: "FOTOS", href: "#gallery" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-line text-[#050505]/55 hover:text-[#050505] text-xs font-bold tracking-widest transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button onClick={openModal} className="btn-outline text-[#050505]">
            RESERVAR
          </button>
        </div>

        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`w-6 h-px bg-[#050505] block transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`w-6 h-px bg-[#050505] block transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-px bg-[#050505] block transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#F2EFE4] border-t border-[#050505]/10 px-6 py-6 flex flex-col gap-5">
          {[
            { label: "EL EVENTO", href: "#about" },
            { label: "PARTIDOS", href: "#schedule" },
            { label: "FOTOS", href: "#gallery" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[#050505]/70 text-xs font-bold tracking-widest border-b border-[#050505]/10 pb-4"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setOpen(false); openModal(); }}
            className="btn-outline text-center text-[#050505] mt-2 w-full"
          >
            RESERVAR
          </button>
        </div>
      )}
    </nav>
  );
}
