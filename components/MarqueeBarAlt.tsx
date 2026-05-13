export default function MarqueeBarAlt() {
  const items = [
    "VILANOVA I LA GELTRÚ",
    "ENTRADA LIBRE",
    "PANTALLA GIGANTE",
    "⚽ TODOS LOS PARTIDOS EN VIVO",
    "GOL AL MAR",
    "FÚTBOL EN LA PLAYA",
    "VERANO 2026",
    "ARENA BAJO TUS PIES",
  ];

  const repeated = [...items, ...items, ...items];

  return (
    <div className="bg-[#050505] overflow-hidden py-4">
      <div className="marquee-track-reverse">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="font-display text-2xl text-[#F2EFE4] mx-10 shrink-0 select-none"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
