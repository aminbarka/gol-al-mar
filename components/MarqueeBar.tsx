const features = ["FÚTBOL", "BEBIDAS", "MÚSICA", "PLAYA DE VILANOVA"];

export default function FeaturesBar() {
  return (
    <div className="bg-[#F2EFE4] border-t border-b border-[#050505]/12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-4 divide-x divide-[#050505]/12">
          {features.map((item) => (
            <div key={item} className="py-5 flex items-center justify-center">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#050505]/55 uppercase">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
