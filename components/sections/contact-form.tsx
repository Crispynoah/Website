"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const budgetOptions = [
  "500 – 1.000 €",
  "1.000 – 2.000 €",
  "2.000 – 3.500 €",
  "3.500 € +",
];

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
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
    <section id="anfrage" className="py-16 md:py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <p className="text-xs tracking-widest text-zinc-400 uppercase mb-3">Anfrage</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
            Projekt anfragen.
          </h2>
          <p className="text-sm text-zinc-500 mt-4 max-w-md mx-auto leading-relaxed">
            Füllen Sie das Formular aus — ich melde mich innerhalb von 24 Stunden mit einem unverbindlichen Angebot.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="rounded-3xl border border-zinc-200 bg-white p-8 md:p-10 shadow-sm"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-12 text-center gap-4"
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
                    <label className="text-xs font-medium text-zinc-500 tracking-wide" htmlFor="name">
                      Name <span className="text-zinc-300">*</span>
                    </label>
                    <input
                      id="name"
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
                    <label className="text-xs font-medium text-zinc-500 tracking-wide" htmlFor="email">
                      E-Mail <span className="text-zinc-300">*</span>
                    </label>
                    <input
                      id="email"
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
                  <label className="text-xs font-medium text-zinc-500 tracking-wide" htmlFor="budget">
                    Budget <span className="text-zinc-300">*</span>
                  </label>
                  <select
                    id="budget"
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
                  <label className="text-xs font-medium text-zinc-500 tracking-wide" htmlFor="message">
                    Ihre Website — was soll sie leisten? <span className="text-zinc-300">*</span>
                  </label>
                  <textarea
                    id="message"
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
        </motion.div>
      </div>
    </section>
  );
}
