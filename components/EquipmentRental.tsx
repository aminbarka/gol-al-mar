"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const equipment = [
  { icon: "📽️", name: "6m Inflatable Screen", desc: "Crystal-clear 6-meter screen that glows against the dusk sky" },
  { icon: "🔦", name: "4K Laser Projector", desc: "10,000-lumen projector — visible even in low evening light" },
  { icon: "🔊", name: "Dolby Surround Sound", desc: "Outdoor-rated speakers with full beach-proof surround sound" },
  { icon: "⚡", name: "Silent Generator", desc: "Ultra-quiet 6kVA generator — you won't even know it's there" },
  { icon: "🪑", name: "Beach Chairs & Cushions", desc: "50 comfy fold chairs or floor cushions for that sandy vibe" },
  { icon: "💡", name: "Sunset Lighting", desc: "Warm LED fairy lights to keep the golden hour feeling going" },
  { icon: "📡", name: "HDMI + Streaming", desc: "Full cable kit and streaming stick so you play anything" },
  { icon: "🛠️", name: "Setup & Breakdown", desc: "Our team arrives early, sets up, and clears it all after" },
];

const packages = [
  {
    name: "Day Rental",
    price: "299",
    duration: "Up to 8 hours",
    best: false,
    perks: ["Full equipment", "1 operator on-site", "Setup + pickup", "Tech support"],
  },
  {
    name: "Weekend Package",
    price: "499",
    duration: "Friday – Sunday",
    best: true,
    perks: ["Full equipment", "2 operators", "Setup + pickup", "Tech support", "20% bar discount", "Priority booking"],
  },
];

export default function EquipmentRental() {
  return (
    <section id="rental" className="py-28 bg-gradient-to-b from-[#130900] to-[#1c0d02]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold tracking-widest uppercase mb-5">
            Equipment Rental
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-5 leading-none">
            Your Beach.{" "}
            <span className="shimmer-text">Your Screen.</span>
          </h2>
          <p className="text-orange-100/50 text-lg max-w-xl mx-auto">
            Rent the complete setup and host the most unforgettable evening your crew has ever had.
            Any beach. Any occasion.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Equipment grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              {equipment.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex gap-3 p-4 rounded-2xl bg-white/3 border border-orange-900/20 hover:border-orange-500/30 transition-colors group"
                >
                  <span className="text-2xl mt-0.5 flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-white font-bold text-sm group-hover:text-orange-300 transition-colors">
                      {item.name}
                    </p>
                    <p className="text-orange-900/60 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image + packages */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative h-60 rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=900&q=80"
                alt="Professional outdoor cinema projector setup"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1c0d02]/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-black text-xl">Pro-Grade Gear</p>
                <p className="text-orange-300 text-sm">Trusted by event companies worldwide</p>
              </div>
            </div>

            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`p-6 rounded-2xl border transition-all ${
                  pkg.best
                    ? "bg-gradient-to-b from-orange-900/20 to-transparent border-orange-500/40 shadow-xl shadow-orange-500/10"
                    : "bg-white/3 border-orange-900/20"
                }`}
              >
                {pkg.best && (
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-xs font-bold rounded-full mb-3">
                    Best Deal
                  </span>
                )}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-white font-black text-lg">{pkg.name}</p>
                    <p className="text-orange-900/60 text-sm">{pkg.duration}</p>
                  </div>
                  <span className="text-3xl font-black text-white">€{pkg.price}</span>
                </div>
                <ul className="grid grid-cols-2 gap-2 mb-4">
                  {pkg.perks.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-orange-100/60">
                      <span className="text-orange-400">✓</span> {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#reserve"
                  className={`block w-full py-3 rounded-full font-bold text-sm text-center transition-all transform hover:scale-105 ${
                    pkg.best
                      ? "bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 text-white"
                      : "bg-white/5 hover:bg-white/10 border border-orange-900/30 text-white"
                  }`}
                >
                  Book {pkg.name}
                </a>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-orange-900/20 to-rose-900/20 border border-orange-900/25 rounded-3xl p-10"
        >
          <div className="text-5xl mb-4">🏖️</div>
          <h3 className="text-2xl font-black text-white mb-3">
            Planning Something Bigger?
          </h3>
          <p className="text-orange-100/50 mb-6 max-w-md mx-auto">
            Festivals, corporate beach days, weddings by the sea — we do custom quotes
            for large events. Let&apos;s make it happen.
          </p>
          <a
            href="mailto:hey@sunsetscreen.com"
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 text-white font-black rounded-full transition-all transform hover:scale-105"
          >
            Get a Custom Quote →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
