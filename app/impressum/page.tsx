import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — Noah da Silveira",
};

export default function Impressum() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-2xl mx-auto">
      <Link
        href="/"
        className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors mb-12 inline-block"
      >
        ← Zurück
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 mb-10">
        Impressum
      </h1>

      <div className="space-y-8 text-sm text-zinc-400 leading-relaxed">
        <section className="space-y-1">
          <h2 className="text-xs tracking-widest text-zinc-600 uppercase mb-3">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="text-zinc-200 font-medium">Noah Karol da Silveira</p>
          <p>Engstenberger Höhe 33</p>
          <p>51519 Odenthal</p>
        </section>

        <section className="space-y-1">
          <h2 className="text-xs tracking-widest text-zinc-600 uppercase mb-3">
            Kontakt
          </h2>
          <p>
            Telefon:{" "}
            <a
              href="tel:01604874444"
              className="text-zinc-200 hover:text-zinc-50 transition-colors"
            >
              0160 4874444
            </a>
          </p>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:noah@dasilveira.de"
              className="text-zinc-200 hover:text-zinc-50 transition-colors"
            >
              noah@dasilveira.de
            </a>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs tracking-widest text-zinc-600 uppercase mb-3">
            Verantwortlich für den Inhalt (§ 55 Abs. 2 RStV)
          </h2>
          <p>Noah Karol da Silveira, Engstenberger Höhe 33, 51519 Odenthal</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs tracking-widest text-zinc-600 uppercase mb-3">
            Haftung für Inhalte
          </h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
            diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
            TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
            forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
            nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
            Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs tracking-widest text-zinc-600 uppercase mb-3">
            Haftung für Links
          </h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
            wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
            keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
            jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs tracking-widest text-zinc-600 uppercase mb-3">
            Urheberrecht
          </h2>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
            Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
            bzw. Erstellers.
          </p>
        </section>
      </div>
    </main>
  );
}
