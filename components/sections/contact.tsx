"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const budgetOptions = [
  "500 – 1.000 €",
  "1.000 – 2.000 €",
  "2.000 – 3.500 €",
  "3.500 € +",
];

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus("error");
      setErrorMsg(data.error ?? "Unbekannter Fehler.");
      return;
    }

    setStatus("success");
    setForm({ name: "", email: "", budget: "", message: "" });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-400 transition-all duration-200";

  return (
    <section id="kontakt" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-zinc-200 bg-zinc-50 p-12 md:p-16 overflow-clip shadow-sm"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-zinc-200/40 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-zinc-200/40 blur-3xl" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — info */}
            <div className="space-y-6 lg:sticky lg:top-24">
              <div>
                <p className="text-xs tracking-widest text-zinc-400 uppercase mb-3">Kontakt</p>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
                  Lassen Sie uns
                  <br />
                  sprechen.
                </h2>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
                Füllen Sie das Formular aus — ich melde mich innerhalb von 24 Stunden
                und erstelle Ihnen ein unverbindliches Angebot.
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

              <div className="pt-2 p-5 rounded-2xl border border-zinc-200 bg-white space-y-3">
                <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Was passiert danach?</h3>
                <div className="space-y-2.5">
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
            </div>

            {/* Right — form */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16 text-center gap-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                      <CheckCircle2 size={24} className="text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-zinc-900">Anfrage gesendet!</p>
                      <p className="text-sm text-zinc-500 mt-1">
                        Ich melde mich innerhalb von 24 Stunden bei Ihnen.
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-2 text-xs text-zinc-400 hover:text-zinc-700 transition-colors underline underline-offset-2"
                    >
                      Weitere Anfrage senden
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-zinc-500 tracking-wide" htmlFor="contact-name">
                          Name <span className="text-zinc-300">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          placeholder="Max Mustermann"
                          value={form.name}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-zinc-500 tracking-wide" htmlFor="contact-email">
                          E-Mail <span className="text-zinc-300">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          placeholder="max@beispiel.de"
                          value={form.email}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-zinc-500 tracking-wide" htmlFor="contact-budget">
                        Budget <span className="text-zinc-300">*</span>
                      </label>
                      <select
                        id="contact-budget"
                        name="budget"
                        required
                        value={form.budget}
                        onChange={handleChange}
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="" disabled>Bitte wählen (ab 500 €)</option>
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-zinc-500 tracking-wide" htmlFor="contact-message">
                        Ihre Website — was soll sie leisten? <span className="text-zinc-300">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Beschreiben Sie kurz Ihr Unternehmen, was die Website beinhalten soll, ob Sie bereits eine bestehende Website haben, besondere Wünsche usw."
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <AnimatePresence>
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-600"
                        >
                          <AlertCircle size={14} className="shrink-0" />
                          {errorMsg}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-zinc-900 text-zinc-50 text-sm font-medium hover:bg-zinc-700 transition-all duration-200 active:scale-[0.98] shadow-md shadow-zinc-900/15 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          Wird gesendet…
                        </>
                      ) : (
                        <>
                          Anfrage absenden
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-zinc-400 text-center">
                      Unverbindlich & kostenlos — ich antworte innerhalb von 24 Stunden.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
