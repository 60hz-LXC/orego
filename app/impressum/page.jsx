import React from "react";
import "../globals.css";
import Reveal from "../components/Reveal";

const Impressum = () => {
  return (
    <div className="legal min-h-screen px-5 pb-24 pt-28 font-Comfortaa">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] text-black/40">Rechtliches</p>
          <h1 className="mt-2 font-montBlack text-4xl uppercase tracking-tight">Impressum</h1>
        </Reveal>
        <Reveal delay={90}>
        <div className="page-card mt-8">
          <p className="mb-8">
            OREGO UG (haftungsbeschränkt)<br />
            Vertr. d.d. Geschäftsführerin<br />
            Vasiliki Cirtsi-Kröger<br />
            Cottbusser Str. 76<br />
            40625 Düsseldorf<br />
            Telefon: <a href="tel:+4921192039203" className="underline decoration-[#3b9fee]">+49 211 9203 9203</a><br />
            E-Mail: <a href="mailto:info@orego.group" className="underline decoration-[#3b9fee]">info@orego.group</a><br />
            StNr: 133/5858/1952<br />
            Registergericht: Amtsgericht Düsseldorf<br />
            Registernummer: HRB 99988
          </p>

          <h2 className="mb-3 mt-8 text-lg font-semibold">Haftungsausschluss</h2>
          <p>
            Die bereitgestellten Informationen auf der Website wurden sorgfältig geprüft und werden regelmäßig aktualisiert. Jedoch kann keine Haftung oder Garantie dafür übernommen werden, dass alle Angaben zu jeder Zeit vollständig, richtig und aktuell sind. Dies gilt insbesondere für alle Verbindungen („Links“) zu anderen Websites, auf die direkt oder indirekt verwiesen wird. Hinsichtlich der Links erklären wir ausdrücklich, dass sie keinen Einfluss auf Gestaltung und Inhalte der verlinkten Seiten hat und sich die Inhalte nicht zu eigen macht. Der Inhalt dieser Website ist urheberrechtlich geschützt. Jede ganz oder teilweise Speicherung, Vervielfältigung oder sonstige Nutzung der auf dieser Website oder Profil bereitgestellten Texte bedarf der vorherigen schriftlichen Zustimmung. Aus Gründen des Urheberrechts ist auch die Speicherung und Vervielfältigung von Bildmaterial oder Grafiken aus dieser Website nicht gestattet. Urheberrechtshinweise und Markenbezeichnungen dürfen weder verändert noch beseitigt werden. Der Abruf und die Nutzung unserer Website dürfen nur in einer Art und Weise geschehen, die die Nutzung des Online-Angebots durch andere Besucher und Nutzer nicht beeinträchtigt. Alle darüber hinausgehenden Handlungen im Zusammenhang mit dieser Internetpräsentation bedürfen der vorherigen schriftlichen Zustimmung. Ansprechpartner für die Website und ggf. inhaltlich Verantwortlicher: Vasilki CIrtsi-Kröger Kontakt: siehe oben.
          </p>

          <h2 className="mb-3 mt-8 text-lg font-semibold">Streitbeilegung</h2>
          <p>
            Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und grundsätzlich nicht bereit. Plattform der EU zur außergerichtlichen Online-Streitbeilegung: http://ec.europa.eu/consumers/odr/
          </p>

          <p className="mt-6">Diese Website verwendet Cookies.</p>
        </div>
        </Reveal>
        <Reveal>
          <p className="mt-8 text-sm text-black/40">2026 – OREGO UG (haftungsbeschränkt) ©</p>
        </Reveal>
      </div>
    </div>
  );
};

export default Impressum;