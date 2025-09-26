import React from 'react';
import "../globals.css";
import Link from 'next/link'

const Impressum = () => {
  return (
    <div className=" landingBG mx-auto px-4 lg:px-[20%]  py-[2rem] text-white font-Comfortaa">
      <div className="flex flex-row justify-evenly mb-[5rem]">
      <Link href='/'><img src="./oregoLogo.svg" alt="" className="h-[4rem] lg:h-[5rem]" /></Link>


          <div className="flex flex-row  justify-between lg:justify-around content-evenly">



           
            <a href="/impressum">
              <button className="text-white px-4 py-2 max-lg:hidden rounded-xl   hover:bg-[#00000090] s transition-all cursor-pointer duration-1000 ease-in-out">
                IMPRESSUM
              </button>
            </a>
            <a href="/datenschutz">
              <button className="text-white px-4 py-2 max-lg:hidden rounded-xl   hover:bg-[#00000090] s transition-all cursor-pointer duration-1000 ease-in-out">
                DATENSCHUTZ
              </button>
            </a>
            <a href="/faq">
              <button className="text-white px-4 py-2 max-lg:hidden rounded-xl   hover:bg-[#00000090] s transition-all cursor-pointer duration-1000 ease-in-out">
                FAQ
              </button>
            </a>
          </div>
        </div>
      <h1 className="text-3xl font-bold mb-6">IMPRESSUM</h1>
      
      <p className="mb-4">
        OREGO UG (haftungsbeschränkt)<br />
        Vertr. d.d. Geschäftsführerin<br />
        Vasiliki Cirtsi-Kröger<br />
        Cottbusser Str. 76<br />
        40625 Düsseldorf<br />
        Telefon: +49 211 987 403 55<br />
        E-Mail: info@orego.group<br />
        StNr: 133/5858/1952<br />
        Registergericht: Amtsgericht Düsseldorf<br />
        Registernummer: HRB 99988
      </p>

      <h2 className="text-2xl font-semibold my-4">Haftungsausschluss</h2>
      <p className="mb-4">
        Die bereitgestellten Informationen auf der Website wurden sorgfältig geprüft und werden regelmäßig aktualisiert. Jedoch kann keine Haftung oder Garantie dafür übernommen werden, dass alle Angaben zu jeder Zeit vollständig, richtig und aktuell sind. Dies gilt insbesondere für alle Verbindungen („Links“) zu anderen Websites, auf die direkt oder indirekt verwiesen wird. Hinsichtlich der Links erklären wir ausdrücklich, dass sie keinen Einfluss auf Gestaltung und Inhalte der verlinkten Seiten hat und sich die Inhalte nicht zu eigen macht. Der Inhalt dieser Website ist urheberrechtlich geschützt. Jede ganz oder teilweise Speicherung, Vervielfältigung oder sonstige Nutzung der auf dieser Website oder Profil bereitgestellten Texte bedarf der vorherigen schriftlichen Zustimmung. Aus Gründen des Urheberrechts ist auch die Speicherung und Vervielfältigung von Bildmaterial oder Grafiken aus dieser Website nicht gestattet. Urheberrechtshinweise und Markenbezeichnungen dürfen weder verändert noch beseitigt werden. Der Abruf und die Nutzung unserer Website dürfen nur in einer Art und Weise geschehen, die die Nutzung des Online-Angebots durch andere Besucher und Nutzer nicht beeinträchtigt. Alle darüber hinausgehenden Handlungen im Zusammenhang mit dieser Internetpräsentation bedürfen der vorherigen schriftlichen Zustimmung. Ansprechpartner für die Website und ggf. inhaltlich Verantwortlicher: Vasilki CIrtsi-Kröger Kontakt: siehe oben.
      </p>

      <h2 className="text-2xl font-semibold my-4">Streitbeilegung</h2>
      <p className="mb-4">
        Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und grundsätzlich nicht bereit. Plattform der EU zur außergerichtlichen Online-Streitbeilegung: http://ec.europa.eu/consumers/odr/
      </p>

      <p className="mb-4">
        Diese Website verwendet Cookies.
      </p>

      <p className="text-base mt-8">2023 – OREGO UG (haftungsbeschränkt) ©</p>
    </div>
  );
};

export default Impressum;