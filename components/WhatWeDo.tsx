"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    icon: "🎬",
    title: "Sunset Cinema",
    desc: "Movies that begin exactly when the sun kisses the horizon. You settle into the sand, the sky turns gold, and the screen comes alive. There's nothing like it.",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&q=80",
    badge: "Most Popular",
    badgeColor: "bg-orange-500 text-white",
    border: "border-orange-500/20",
    hover: "hover:shadow-orange-500/10",
    features: ["Starts at golden hour", "6m beach screen", "Premium sound", "Cold drinks & snacks"],
    featureColor: "text-orange-400",
  },
  {
    icon: "⚽",
    title: "Football on the Beach",
    desc: "Live matches on a massive screen with sand under your feet and a cold drink in your hand. The only thing missing is a full stadium — and honestly, this is better.",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80",
    badge: "Fan Fave",
    badgeColor: "bg-rose-500 text-white",
    border: "border-rose-500/20",
    hover: "hover:shadow-rose-500/10",
    features: ["Live matches", "Stadium vibes", "Full bar open", "Group sections"],
    featureColor: "text-rose-400",
  },
  {
    icon: "📦",
    title: "Bring It to Your Beach",
    desc: "Rent the whole setup and take it wherever you want. Your birthday, your party, your beach. We bring the screen, the sound, and the magic.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    badge: "Full Freedom",
    badgeColor: "bg-amber-500 text-black",
    border: "border-amber-500/20",
    hover: "hover:shadow-amber-500/10",
    features: ["Any beach, any day", "Setup included", "Flexible hours", "Custom experience"],
    featureColor: "text-amber-400",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-28 bg-[#130900] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#130900] to-transparent pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-orange-600/4 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-bold tracking-widest uppercase mb-5">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-5 leading-none">
            The Beach Just Got a{" "}
            <span className="shimmer-text">Big Screen</span>
          </h2>
          <p className="text-orange-100/50 text-lg max-w-xl mx-auto">
            Three ways to spend an unforgettable evening under the open sky.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`relative rounded-3xl overflow-hidden bg-white/3 border ${s.border} group hover:shadow-2xl ${s.hover} transition-all duration-300`}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#130900] via-black/20 to-transparent" />
                <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${s.badgeColor}`}>
                  {s.badge}
                </span>
              </div>
              <div className="p-7">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-2xl font-black text-white mb-3">{s.title}</h3>
                <p className="text-orange-100/50 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <span className={`text-xs ${s.featureColor}`}>✓</span>
                      <span className="text-orange-100/70">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
