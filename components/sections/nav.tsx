"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4"
    >
      <div className="flex items-center justify-between px-5 py-3 rounded-full border border-white/8 bg-zinc-950/80 backdrop-blur-xl shadow-2xl shadow-black/50">
        <span className="text-sm font-medium text-zinc-200 tracking-tight">
          Noah da Silveira
        </span>

        <div className="hidden md:flex items-center gap-6">
          {["Leistungen", "Prozess", "Über mich", "Kontakt"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-xs text-zinc-500 hover:text-zinc-200 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="mailto:noah@dasilveira.de"
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-50 text-zinc-950 text-xs font-medium hover:bg-zinc-200 transition-colors duration-200 active:scale-95"
        >
          <Mail size={11} />
          Anfragen
        </a>
      </div>
    </motion.nav>
  );
}
