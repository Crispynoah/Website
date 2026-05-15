import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Noah da Silveira",
};

export default function Datenschutz() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-2xl mx-auto">
      <Link
        href="/"
        className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors mb-12 inline-block"
      >
        ← Zurück
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 mb-2">
        Datenschutzerklärung
      </h1>
      <p className="text-xs text-zinc-600 mb-10">Stand: Mai 2025</p>

      <div className="space-y-10 text-sm text-zinc-400 leading-relaxed">

        <section className="space-y-2">
          <h2 className="text-xs tracking-widest text-zinc-600 uppercase mb-3">
            1. Verantwortlicher
          </h2>
          <p>
            Verantwortlicher im Sinne der DSGVO ist:
          </p>
          <p className="text-zinc-200">
            Noah Karol da Silveira<br />
            Engstenberger Höhe 33<br />
            51519 Odenthal<br />
            E-Mail:{" "}
            <a href="mailto:noah@dasilveira.de" className="hover:text-zinc-200 transition-colors">
              noah@dasilveira.de
            </a><br />
            Telefon:{" "}
            <a href="tel:01604874444" className="hover:text-zinc-200 transition-colors">
              0160 4874444
            </a>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs tracking-widest text-zinc-600 uppercase mb-3">
            2. Allgemeines zur Datenverarbeitung
          </h2>
          <p>
            Ich nehme den Schutz Ihrer persönlichen Daten ernst und behandle Ihre
            personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften (DSGVO, BDSG) sowie dieser Datenschutzerklärung.
          </p>
          <p>
            Diese Website verwendet keine Cookies und kein Tracking. Es werden keine
            Analyse- oder Werbetools eingesetzt.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs tracking-widest text-zinc-600 uppercase mb-3">
            3. Hosting durch Vercel
          </h2>
          <p>
            Diese Website wird gehostet von:
          </p>
          <p className="text-zinc-200">
            Vercel Inc.<br />
            340 Pine Street, Suite 701<br />
            San Francisco, CA 94104, USA
          </p>
          <p>
            Beim Aufruf dieser Website werden automatisch Informationen in sogenannten
            Server-Log-Dateien gespeichert, die Ihr Browser übermittelt. Dies sind:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit der Anfrage</li>
            <li>Aufgerufene Seite (URL)</li>
            <li>Browsertyp und -version</li>
            <li>Betriebssystem</li>
            <li>Referrer-URL</li>
          </ul>
          <p>
            Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die
            Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO —
            berechtigtes Interesse am sicheren und fehlerfreien Betrieb der Website.
          </p>
          <p>
            Vercel ist nach dem EU-US Data Privacy Framework zertifiziert. Die
            Datenschutzerklärung von Vercel finden Sie unter{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-200 hover:text-zinc-50 transition-colors underline underline-offset-2"
            >
              vercel.com/legal/privacy-policy
            </a>
            .
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs tracking-widest text-zinc-600 uppercase mb-3">
            4. Kontaktaufnahme per E-Mail oder Telefon
          </h2>
          <p>
            Wenn Sie mich per E-Mail oder Telefon kontaktieren, werden Ihre übermittelten
            Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, Nachrichteninhalt) zum
            Zweck der Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen bei
            mir gespeichert.
          </p>
          <p>
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
            (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
            Interesse an der Beantwortung von Anfragen). Diese Daten gebe ich nicht ohne
            Ihre Einwilligung weiter.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs tracking-widest text-zinc-600 uppercase mb-3">
            5. Google Fonts
          </h2>
          <p>
            Diese Website verwendet Schriftarten über den Google Fonts-Dienst von
            Google LLC, USA. Die Schriftarten werden beim Seitenaufruf direkt von
            Google-Servern geladen, dabei wird Ihre IP-Adresse an Google übertragen.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
            der einheitlichen Darstellung der Website). Weitere Informationen finden Sie
            unter{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-200 hover:text-zinc-50 transition-colors underline underline-offset-2"
            >
              policies.google.com/privacy
            </a>
            .
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs tracking-widest text-zinc-600 uppercase mb-3">
            6. Ihre Rechte
          </h2>
          <p>Sie haben jederzeit das Recht auf:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>
              <span className="text-zinc-200">Auskunft</span> über Ihre bei mir
              gespeicherten Daten (Art. 15 DSGVO)
            </li>
            <li>
              <span className="text-zinc-200">Berichtigung</span> unrichtiger Daten
              (Art. 16 DSGVO)
            </li>
            <li>
              <span className="text-zinc-200">Löschung</span> Ihrer Daten (Art. 17
              DSGVO)
            </li>
            <li>
              <span className="text-zinc-200">Einschränkung</span> der Verarbeitung
              (Art. 18 DSGVO)
            </li>
            <li>
              <span className="text-zinc-200">Datenübertragbarkeit</span> (Art. 20
              DSGVO)
            </li>
            <li>
              <span className="text-zinc-200">Widerspruch</span> gegen die Verarbeitung
              (Art. 21 DSGVO)
            </li>
          </ul>
          <p>
            Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
            <a
              href="mailto:noah@dasilveira.de"
              className="text-zinc-200 hover:text-zinc-50 transition-colors"
            >
              noah@dasilveira.de
            </a>
          </p>
          <p>
            Außerdem haben Sie das Recht, sich bei der zuständigen
            Datenschutzaufsichtsbehörde zu beschweren. Die zuständige Behörde für
            Nordrhein-Westfalen ist der Landesbeauftragte für Datenschutz und
            Informationsfreiheit NRW (
            <a
              href="https://www.ldi.nrw.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-200 hover:text-zinc-50 transition-colors underline underline-offset-2"
            >
              www.ldi.nrw.de
            </a>
            ).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs tracking-widest text-zinc-600 uppercase mb-3">
            7. Datensicherheit
          </h2>
          <p>
            Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
            vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte
            Verbindung erkennen Sie an dem Schloss-Symbol in der Adresszeile Ihres
            Browsers.
          </p>
        </section>

      </div>
    </main>
  );
}
