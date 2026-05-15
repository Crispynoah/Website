"use client";

import { motion, type Variants } from "framer-motion";
import {
  Globe,
  Paintbrush,
  Server,
  Search,
  Smartphone,
  RefreshCw,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website-Erstellung",
    description:
      "Von der ersten Idee bis zum fertigen Auftritt — komplett aus einer Hand. Ich kümmere mich um alles, damit Sie sich auf Ihr Geschäft konzentrieren können.",
    size: "large",
  },
  {
    icon: Paintbrush,
    title: "Individuelles Design",
    description:
      "Kein Template, kein Baukastensystem. Jede Website wird exklusiv für Sie entwickelt — passend zu Ihrer Marke, Ihrem Stil und Ihren Kunden.",
    size: "large",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Damit Sie in Google gefunden werden — lokal und überregional.",
    size: "small",
  },
  {
    icon: Smartphone,
    title: "Mobile-Optimierung",
    description:
      "Perfekt auf jedem Gerät: Smartphone, Tablet und Desktop.",
    size: "small",
  },
  {
    icon: Server,
    title: "Hosting & Technik",
    description:
      "Zuverlässiges Hosting, sichere Verbindung und technische Einrichtung — Sie brauchen sich um nichts zu kümmern.",
    size: "small",
  },
  {
    icon: RefreshCw,
    title: "Monatliche Betreuung",
    description:
      "Texte, Bilder, Öffnungszeiten — alles bleibt aktuell. Mit monatlichem Support bleiben Sie flexibel.",
    size: "small",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export function Services() {
  return (
    <section id="leistungen" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <p className="text-xs tracking-widest text-zinc-400 uppercase mb-3">Leistungen</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 max-w-2xl leading-tight mx-auto">
            Alles, was Ihre Website braucht — aus einer Hand.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.slice(0, 2).map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group p-8 rounded-2xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-300 cursor-default col-span-1 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl border border-zinc-200 bg-zinc-100 flex items-center justify-center mb-6 group-hover:border-zinc-300 transition-colors duration-300">
                <service.icon size={18} className="text-zinc-600" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-800 mb-3">{service.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}

          <motion.div
            variants={itemVariants}
            className="group p-8 rounded-2xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-300 cursor-default shadow-sm"
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <p className="text-xs tracking-widest text-zinc-400 uppercase mb-4">Preis</p>
                <p className="text-3xl font-semibold text-zinc-800 mb-2">Individuell</p>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Jede Website ist einzigartig — deshalb ist auch der Preis individuell und
                  abhängig vom Umfang. Unverbindliche Anfrage genügt.
                </p>
              </div>
              <a
                href="mailto:noah@dasilveira.de"
                className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-200 group/link"
              >
                Anfrage stellen
                <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </div>
          </motion.div>

          {services.slice(2).map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-300 cursor-default shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 shrink-0 rounded-xl border border-zinc-200 bg-zinc-100 flex items-center justify-center group-hover:border-zinc-300 transition-colors duration-300">
                  <service.icon size={15} className="text-zinc-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-800 mb-1.5">{service.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
