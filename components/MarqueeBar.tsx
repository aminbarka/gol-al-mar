export default function MarqueeBar() {
  const items = [
    "⚽ GOL AL MAR",
    "MUNDIAL 2026",
    "PLAYA DE VILANOVA",
    "ENTRADA LIBRE",
    "PANTALLA GIGANTE",
    "BEBIDAS FRÍAS",
    "TODOS LOS PARTIDOS EN VIVO",
    "ARENA Y FÚTBOL",
    "VERANO 2026",
  ];

  const repeated = [...items, ...items, ...items];

  return (
    <div className="bg-[#0050FF] overflow-hidden py-5 border-t border-b border-[#0050FF]/0">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="font-display text-3xl text-white mx-10 shrink-0 select-none"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
