"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Persönlicher Ansprechpartner — kein Support-Ticket",
  "Transparente Kommunikation auf Augenhöhe",
  "Qualität, die Sie und Ihre Kunden begeistert",
  "Schnelle Umsetzung ohne lange Wartezeiten",
];

export function About() {
  return (
    <section id="über-mich" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-200 shadow-xl shadow-zinc-900/10 max-w-sm">
              <Image
                src="/noah.jpg"
                alt="Noah da Silveira — Webdesigner"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-100/30 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="absolute -bottom-6 -right-0 lg:-right-8 p-5 rounded-2xl border border-zinc-200 bg-white/95 backdrop-blur-sm shadow-lg shadow-zinc-900/8 max-w-[200px]"
            >
              <p className="text-2xl font-semibold text-zinc-800">100%</p>
              <p className="text-xs text-zinc-400 mt-0.5 leading-snug">
                Individuelle Websites — kein einziges Template
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <p className="text-xs tracking-widest text-zinc-400 uppercase mb-3">Über mich</p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
                Hinter jeder Website steckt ein Mensch.
              </h2>
            </div>

            <div className="space-y-4 text-zinc-500 text-sm leading-relaxed">
              <p>
                Ich bin Noah da Silveira — Webdesigner und Entwickler mit einem Gespür
                für das, was wirklich zählt: Websites, die nicht nur schön aussehen,
                sondern die Qualität und Professionalität eines Unternehmens auch
                digital widerspiegeln.
              </p>
              <p>
                Mir ist wichtig, dass Unternehmen einen Auftritt bekommen, der wirklich
                zu ihrer Qualität passt. Deshalb behandle ich jedes Projekt individuell —
                mit dem gleichen Anspruch, den auch meine Kunden an ihr eigenes Handwerk stellen.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-zinc-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-600">{value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="mailto:noah@dasilveira.de"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-zinc-50 text-sm font-medium hover:bg-zinc-700 transition-all duration-200 active:scale-[0.97]"
              >
                Schreib mir
              </a>
              <a
                href="tel:01604874444"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-zinc-300 text-zinc-600 text-sm font-medium hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-200 active:scale-[0.97]"
              >
                0160 4874444
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
