"use client";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-700 font-medium">Noah da Silveira</p>
        <div className="flex items-center gap-6">
          <a href="mailto:noah@dasilveira.de" className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors">
            noah@dasilveira.de
          </a>
          <a href="tel:01604874444" className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors">
            0160 4874444
          </a>
        </div>
        <p className="text-xs text-zinc-800">© 2025 Noah da Silveira</p>
      </div>
    </footer>
  );
}
