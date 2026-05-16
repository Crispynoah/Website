"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-200">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-400 font-medium">Noah da Silveira</p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a href="mailto:noah@dasilveira.de" className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors">
            noah@dasilveira.de
          </a>
          <a href="tel:01604874444" className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors">
            0160 4874444
          </a>
          <Link href="/impressum" className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors">
            Impressum
          </Link>
          <Link href="/datenschutz" className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors">
            Datenschutz
          </Link>
        </div>
        <p className="text-xs text-zinc-300">© 2025 Noah da Silveira</p>
      </div>
    </footer>
  );
}
