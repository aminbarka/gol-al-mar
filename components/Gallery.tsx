"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=900&q=85",
    alt: "Football crowd under the lights",
    label: "Match Night",
    className: "col-span-1 md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&q=85",
    alt: "Outdoor cinema screen",
    label: "The Big Screen",
    className: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=85",
    alt: "Outdoor summer event crowd",
    label: "The Crowd",
    className: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85",
    alt: "Vilanova beach blue sea",
    label: "Vilanova Beach",
    className: "col-span-1 md:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#F2EFE4] px-4 md:px-8 pb-20">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex items-end justify-between mb-6 border-t border-[#050505]/15 pt-12"
        >
          <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] text-[#050505] leading-none">
            THE VIBE
          </h2>
          <p className="text-[9px] text-[#050505]/40 font-bold tracking-widest uppercase hidden md:block">
            Gol al Mar · Vilanova 2026
          </p>
        </motion.div>

        {/* Grid: 2-col mobile, 4-col desktop with fixed row heights */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          style={{ gridTemplateRows: "repeat(2, 280px)" }}
        >
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.09 }}
              className={`relative overflow-hidden group cursor-pointer ${photo.className}`}
              style={{ minHeight: "140px" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
              />
              {/* Blue overlay on hover */}
              <div className="absolute inset-0 bg-[#0050FF] opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-display text-white text-3xl md:text-4xl tracking-widest text-center px-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {photo.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
