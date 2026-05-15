"use client";

import { motion } from "framer-motion";
import { MessageSquare, Palette, Code2, Rocket, HeartHandshake } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const processData = [
  {
    id: 1,
    title: "Erstgespräch",
    date: "Woche 1",
    content:
      "Wir sprechen über Ihr Unternehmen, Ihre Ziele und was Ihre neue Website leisten soll. Kostenlos und unverbindlich.",
    category: "Planung",
    icon: MessageSquare,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Konzept & Design",
    date: "Woche 1–2",
    content:
      "Ich entwickle ein maßgeschneidertes Konzept und Design-Entwurf — 100% auf Ihr Unternehmen zugeschnitten.",
    category: "Design",
    icon: Palette,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Entwicklung",
    date: "Woche 2–3",
    content:
      "Ihre Website wird professionell entwickelt — modern, schnell und für alle Geräte optimiert.",
    category: "Technik",
    icon: Code2,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 75,
  },
  {
    id: 4,
    title: "Launch",
    date: "Woche 3–4",
    content:
      "Ihre Website geht online — inkl. Hosting-Einrichtung, Domain-Konfiguration und technischem Setup.",
    category: "Launch",
    icon: Rocket,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 50,
  },
  {
    id: 5,
    title: "Betreuung",
    date: "Laufend",
    content:
      "Ich bleibe Ihr Ansprechpartner. Änderungen, Updates und Optimierungen — monatlich und zuverlässig.",
    category: "Support",
    icon: HeartHandshake,
    relatedIds: [4],
    status: "pending" as const,
    energy: 30,
  },
];

export function Process() {
  return (
    <section id="prozess" className="py-32 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4 text-center"
        >
          <p className="text-xs tracking-widest text-zinc-400 uppercase mb-3">Ablauf</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
            Mein Prozess
          </h2>
          <p className="text-sm text-zinc-500 mt-4 max-w-md mx-auto">
            Von der ersten Idee bis zur fertigen Website in 3–4 Wochen.
            Klicken Sie auf einen Schritt für Details.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <RadialOrbitalTimeline timelineData={processData} />
        </motion.div>
      </div>
    </section>
  );
}
