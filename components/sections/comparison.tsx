"use client";

import { motion } from "framer-motion";
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/components/ui/image-comparison";

const sliders = [
  {
    label: "Handwerksbetrieb",
    before: "/handwerk-before.png",
    after: "/handwerk-after.png",
  },
  {
    label: "Italienisches Restaurant",
    before: "/restaurant-before.png",
    after: "/restaurant-after.png",
  },
];

function SliderHandle() {
  return (
    <ImageComparisonSlider className="w-px bg-white/60 backdrop-blur-sm">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg shadow-black/40 flex items-center justify-center">
        <div className="flex gap-0.5">
          <div className="w-px h-3 bg-zinc-400" />
          <div className="w-px h-3 bg-zinc-400" />
        </div>
      </div>
    </ImageComparisonSlider>
  );
}

export function Comparison() {
  return (
    <section className="py-32 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end"
        >
          <div>
            <p className="text-xs tracking-widest text-zinc-600 uppercase mb-3">Vorher & Nachher</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-50 leading-tight">
              Das war gestern.
              <br />
              <span className="text-zinc-500">Das ist heute.</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-500 leading-relaxed lg:max-w-sm">
            Der erste Eindruck entscheidet — in Sekunden. Eine veraltete Website kostet
            Kunden, bevor sie auch nur ein Wort gelesen haben. Schieben Sie über das Bild,
            um den Unterschied zu sehen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sliders.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
            >
              <p className="text-xs tracking-widest text-zinc-600 uppercase mb-3">{item.label}</p>
              <ImageComparison
                className="w-full aspect-video rounded-2xl border border-white/8 overflow-hidden shadow-2xl shadow-black/60"
                enableHover
              >
                <ImageComparisonImage
                  src={item.before}
                  alt={`${item.label} — vorher`}
                  position="right"
                />
                <ImageComparisonImage
                  src={item.after}
                  alt={`${item.label} — nachher`}
                  position="left"
                />
                <SliderHandle />
              </ImageComparison>

              <div className="flex justify-between mt-3 px-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <span className="text-xs text-zinc-600">Vorher</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-600">Nachher</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
