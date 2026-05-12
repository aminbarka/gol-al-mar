export default function MarqueeBar() {
  const items = [
    "⚽ GOL AL MAR",
    "WORLD CUP 2026",
    "VILANOVA BEACH",
    "FREE ENTRY",
    "PROJECTOR SCREEN",
    "COLD DRINKS",
    "EVERY MATCH LIVE",
    "SAND & FOOTBALL",
    "SUMMER 2026",
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
