"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function PortfolioScroll() {
  return (
    <section className="py-16 overflow-hidden">
      <ContainerScroll
        titleComponent={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4"
          >
            <p className="text-xs tracking-widest text-zinc-600 uppercase">Ergebnis</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-50 leading-tight">
              So sehen moderne Websites aus —
              <br />
              <span className="text-zinc-500">die ich für Sie entwickle.</span>
            </h2>
          </motion.div>
        }
      >
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=90"
            alt="Modernes Website-Design"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div className="space-y-1">
              <div className="h-2 w-32 rounded-full bg-white/20 animate-pulse" />
              <div className="h-1.5 w-48 rounded-full bg-white/10" />
            </div>
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ background: i === 1 ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.2)" }}
                />
              ))}
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
