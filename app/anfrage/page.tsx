import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Projekt anfragen — Noah da Silveira",
  description: "Starten Sie Ihr Website-Projekt. Unverbindlich anfragen und innerhalb von 24 Stunden Antwort erhalten.",
};

export default function AnfragePage() {
  return (
    <main className="min-h-screen">
      <div className="px-6 pt-8">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/"
            className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors inline-block"
          >
            ← Zurück zur Website
          </Link>
        </div>
      </div>
      <ContactForm />
    </main>
  );
}
