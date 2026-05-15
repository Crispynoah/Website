"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="kontakt" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-zinc-200 bg-zinc-50 p-12 md:p-16 overflow-hidden shadow-sm"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-zinc-200/40 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-zinc-200/40 blur-3xl" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-widest text-zinc-400 uppercase mb-3">Kontakt</p>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
                  Lassen Sie uns
                  <br />
                  sprechen.
                </h2>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
                Eine kurze Nachricht reicht — ich melde mich innerhalb von 24 Stunden
                und wir schauen gemeinsam, was für Ihr Unternehmen Sinn ergibt.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href="mailto:noah@dasilveira.de"
                  className="group flex items-center gap-3 text-sm text-zinc-700 hover:text-zinc-900 transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-xl border border-zinc-200 bg-white flex items-center justify-center group-hover:border-zinc-300 transition-colors duration-200">
                    <Mail size={14} className="text-zinc-500 group-hover:text-zinc-700 transition-colors" />
                  </div>
                  noah@dasilveira.de
                </a>
                <a
                  href="tel:01604874444"
                  className="group flex items-center gap-3 text-sm text-zinc-700 hover:text-zinc-900 transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-xl border border-zinc-200 bg-white flex items-center justify-center group-hover:border-zinc-300 transition-colors duration-200">
                    <Phone size={14} className="text-zinc-500 group-hover:text-zinc-700 transition-colors" />
                  </div>
                  0160 4874444
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl border border-zinc-200 bg-white space-y-4">
                <h3 className="text-sm font-medium text-zinc-700">Was passiert nach Ihrer Anfrage?</h3>
                <div className="space-y-3">
                  {[
                    "Ich melde mich innerhalb von 24 Stunden",
                    "Kurzes, kostenloses Erstgespräch (ca. 20 Min.)",
                    "Ich erstelle Ihnen ein unverbindliches Angebot",
                    "Wir starten — wenn es für Sie passt",
                  ].map((step, i) => (
                    <div key={step} className="flex items-start gap-3">
                      <span className="shrink-0 w-5 h-5 rounded-full border border-zinc-200 bg-zinc-100 flex items-center justify-center text-xs text-zinc-400 font-mono">
                        {i + 1}
                      </span>
                      <span className="text-xs text-zinc-500 leading-snug">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="mailto:noah@dasilveira.de"
                className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-zinc-900 text-zinc-50 text-sm font-medium hover:bg-zinc-700 transition-all duration-200 active:scale-[0.98] shadow-md shadow-zinc-900/15"
              >
                Unverbindlich anfragen
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
