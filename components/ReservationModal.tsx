"use client";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = { isOpen: boolean; onClose: () => void };

export default function ReservationModal({ isOpen, onClose }: Props) {
  const [nombre, setNombre] = useState("");
  const [personas, setPersonas] = useState("2");
  const [partido, setPartido] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      "¡Hola! Quiero reservar mi sitio en Gol al Mar 🌊⚽",
      "",
      `👤 Nombre: ${nombre}`,
      `👥 Personas: ${personas}`,
      partido ? `🎯 Partido: ${partido}` : null,
      telefono ? `📱 Teléfono: ${telefono}` : null,
      "",
      "¡Gracias!",
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.open(`https://wa.me/34612209293?text=${encodeURIComponent(lines)}`, "_blank");
    onClose();
    setNombre("");
    setPersonas("2");
    setPartido("");
    setTelefono("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#050505]/60 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center px-4 pointer-events-none"
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="bg-[#F2EFE4] w-full max-w-md p-8 relative pointer-events-auto shadow-2xl"
            >
              <button
                onClick={onClose}
                aria-label="Cerrar"
                className="absolute top-5 right-6 text-[#050505]/35 hover:text-[#050505] transition-colors text-3xl leading-none font-light"
              >
                ×
              </button>

              <p className="text-[9px] font-bold tracking-widest text-[#050505]/35 uppercase mb-2">
                Habana Blue · Gol al Mar
              </p>
              <h2 id="modal-title" className="font-display text-5xl text-[#050505] leading-none mb-7">
                RESERVA<br />TU SITIO
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="reserva-nombre" className="block text-[9px] font-bold tracking-widest text-[#050505]/40 uppercase mb-1.5">
                    Nombre *
                  </label>
                  <input
                    id="reserva-nombre"
                    type="text"
                    required
                    autoComplete="given-name"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full border border-[#050505]/20 bg-transparent px-4 py-3 text-sm text-[#050505] placeholder-[#050505]/30 focus:outline-none focus:border-[#050505] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="reserva-personas" className="block text-[9px] font-bold tracking-widest text-[#050505]/40 uppercase mb-1.5">
                    Número de personas *
                  </label>
                  <input
                    id="reserva-personas"
                    type="number"
                    required
                    min="1"
                    max="50"
                    value={personas}
                    onChange={(e) => setPersonas(e.target.value)}
                    className="w-full border border-[#050505]/20 bg-transparent px-4 py-3 text-sm text-[#050505] focus:outline-none focus:border-[#050505] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="reserva-partido" className="block text-[9px] font-bold tracking-widest text-[#050505]/40 uppercase mb-1.5">
                    Partido que quieres ver
                  </label>
                  <input
                    id="reserva-partido"
                    type="text"
                    value={partido}
                    onChange={(e) => setPartido(e.target.value)}
                    placeholder="Ej: Final del Mundial — 19 Jul"
                    className="w-full border border-[#050505]/20 bg-transparent px-4 py-3 text-sm text-[#050505] placeholder-[#050505]/30 focus:outline-none focus:border-[#050505] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="reserva-telefono" className="block text-[9px] font-bold tracking-widest text-[#050505]/40 uppercase mb-1.5">
                    Tu teléfono
                  </label>
                  <input
                    id="reserva-telefono"
                    type="tel"
                    autoComplete="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="+34 600 000 000"
                    className="w-full border border-[#050505]/20 bg-transparent px-4 py-3 text-sm text-[#050505] placeholder-[#050505]/30 focus:outline-none focus:border-[#050505] transition-colors"
                  />
                </div>

                <button type="submit" className="btn-outline text-[#050505] mt-2 text-center w-full">
                  ENVIAR POR WHATSAPP →
                </button>

                <p className="text-[9px] text-[#050505]/30 text-center tracking-widest uppercase">
                  Se abrirá WhatsApp para confirmar tu reserva
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
