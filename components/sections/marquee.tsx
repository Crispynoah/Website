"use client";

const items = [
  "Webdesign",
  "SEO-Optimierung",
  "Hosting",
  "Mobile-First",
  "Individuelles Design",
  "Technische Einrichtung",
  "Monatliche Betreuung",
  "Lokale Betriebe",
  "Selbstständige",
  "Unternehmen",
  "Professioneller Auftritt",
  "Conversion-Optimierung",
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-12 border-y border-zinc-200">
      <div className="flex">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center gap-8 shrink-0">
              <span className="text-sm text-zinc-400 font-medium tracking-wide">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-300 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
