"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { ArrowRight } from "lucide-react";

const words = ["Websites,", "die", "Vertrauen", "schaffen."];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <BackgroundPaths />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-100 text-xs text-zinc-500 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Verfügbar für neue Projekte
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-3 last:mr-0">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ y: 60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.3 + wordIndex * 0.1 + letterIndex * 0.025,
                        type: "spring",
                        stiffness: 160,
                        damping: 28,
                      }}
                      className="inline-block text-zinc-900"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="text-lg text-zinc-500 max-w-xl leading-relaxed"
            >
              Ich entwickle moderne, professionelle Webauftritte für Unternehmen,
              Selbstständige und lokale Betriebe — damit Sie online so wirken, wie
              Sie wirklich sind.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-zinc-50 text-sm font-medium hover:bg-zinc-700 transition-all duration-200 active:scale-[0.97] shadow-md shadow-zinc-900/20"
              >
                Kostenloses Gespräch buchen
                <ArrowRight size={14} />
              </Link>
              <a
                href="#leistungen"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-zinc-300 text-zinc-600 text-sm font-medium hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-200 active:scale-[0.97]"
              >
                Leistungen ansehen
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="flex items-center gap-6 pt-2"
            >
              {[
                { value: "100%", label: "Individuell" },
                { value: "5★", label: "Design-Qualität" },
                { value: "1 Ansprech-partner", label: "Für alles" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-sm font-semibold text-zinc-800">{stat.value}</p>
                  <p className="text-xs text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-b from-zinc-900/6 to-transparent blur-2xl" />
              <div className="relative w-64 h-72 lg:w-72 lg:h-80 rounded-3xl overflow-hidden border border-zinc-200 shadow-2xl shadow-zinc-900/15">
                <Image
                  src="/noah.jpg"
                  alt="Noah da Silveira"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-100/30 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
                className="absolute -bottom-4 -left-4 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-white/95 backdrop-blur-sm shadow-lg shadow-zinc-900/8"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <div>
                  <p className="text-xs font-medium text-zinc-700">noah@dasilveira.de</p>
                  <p className="text-xs text-zinc-400">Anfrage starten</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
