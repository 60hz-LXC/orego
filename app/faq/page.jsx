import React from "react";
import "../globals.css";
import Link from 'next/link';

const FAQ = () => {
  return (
    <div className="landingBG mx-auto px-4 lg:px-[20%] py-8 text-white font-Comfortaa h-screen">
      <div className="flex flex-row justify-evenly mb-[5rem]">
        <Link href="/"><img src="./oregoLogo.svg" alt="" className="h-[4rem] lg:h-[5rem]" /></Link>

        <div className="flex flex-row justify-between lg:justify-around content-evenly">
          <Link href="/chat">
            <button className="text-white px-4 py-2 max-lg:hidden rounded-xl hover:bg-[#00000090] s transition-all cursor-pointer duration-1000 ease-in-out mx-auto">
              CHAT
            </button>
          </Link>
          <a href="/impressum">
            <button className="text-white px-4 py-2 max-lg:hidden rounded-xl hover:bg-[#00000090] s transition-all cursor-pointer duration-1000 ease-in-out">
              IMPRESSUM
            </button>
          </a>
          <a href="/datenschutz">
            <button className="text-white px-4 py-2 max-lg:hidden rounded-xl hover:bg-[#00000090] s transition-all cursor-pointer duration-1000 ease-in-out">
              DATENSCHUTZ
            </button>
          </a>
          <a href="faq">
            <button className="text-white px-4 py-2 max-lg:hidden rounded-xl hover:bg-[#00000090] s transition-all cursor-pointer duration-1000 ease-in-out">
              FAQ
            </button>
          </a>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-6">FAQ</h1>

      {/* Each FAQ entry is structured with a question as a subheading and the answer as a paragraph */}
      <h2 className="text-2xl font-semibold my-4">Wer ist die Orego?</h2>
      <p className="mb-4">
        Die Orego ist ein Gesetz in Oregon, USA, das sich mit dem Schutz der Verbraucher vor schädlichen Kredit- und Leasingabkommen beschäftigt. Es wurde 1975 von der Oregon State Legislature verabschiedet und gilt als eines der schärfsten Konsumentenschutzgesetze des Landes.
      </p>

      <h2 className="text-2xl font-semibold my-4">Welche Leistungen bietet die Orego?</h2>
      <p className="mb-4">
        Orego ist ein digitaler Anwaltsservice, der eine breite Palette an Rechtsdienstleistungen und Beratungen anbietet. Der Service deckt eine Vielzahl von Rechtsgebieten ab, einschließlich Unternehmensrecht, Erbrecht, Verkehrsrecht, Mietrecht, Arbeitsrecht und Strafrecht. Zu den Leistungen gehören Rechtsberatung, Erstellung von Verträgen und Dokumenten, Repräsentation vor Gericht und Abwicklung unbequemer Rechtsprozesse.
      </p>

      <h2 className="text-2xl font-semibold my-4">Was kostet die Abwicklung bei Orego?</h2>
      <p className="mb-4">
        Die Unfallschadensabwicklung bei Orego kostet nach der jeweils gültigen Gebührenordnung für Rechtsanwälte (RVG) und unter Berücksichtigung des Einzelfalls. Es handelt sich hierbei um ein Rechtsgebiet des Zivilrechts.
      </p>

      {/* ... Additional FAQ entries ... */}
      
      <h2 className="text-2xl font-semibold my-4">Was habe ich davon, die Orego mit der Schadensabwicklung zu beauftragen?</h2>
      <p className="mb-4">
        Die Beauftragung einer Orego mit der Schadensabwicklung haben Sie dann, wenn Sie Ihren Schadensfall nicht selbst geltend machen oder abwickeln möchten bzw. können. Sie können sich dann von einem professionellen Expertenteam der Orego beraten und begleiten lassen. Orego hat sich auf das Unfall- und Schadensrecht spezialisiert und kann Ihnen bei allen relevanten Rechtsfragen helfen. Daher handelt es sich bei dieser Beauftragung um das Rechtsgebiet des Unfall- und Schadensrechts.
      </p>

      <h2 className="text-2xl font-semibold my-4">Wie sieht es bei einem Personenschaden (nach einem Verkehrsunfall) aus?</h2>
      <p className="mb-4">
        Bei einem Personenschaden nach einem Verkehrsunfall kann es sich beispielsweise um ein Sach- oder ein Körperschadenersatzanspruch handeln. Der Schadensersatzanspruch kann sich auf den Ersatz von Kosten, Schäden oder beides beziehen. Hierbei handelt es sich um das Rechtsgebiet des Schadensersatzes.
      </p>

      <h2 className="text-2xl font-semibold my-4">Wie lange kann ich Ansprüche (nach einem Verkehrsunfall) geltend machen?</h2>
      <p className="mb-4">
        Ansprüche aus einem Verkehrsunfall können innerhalb von drei Jahren nach dem Unfall geltend gemacht werden. Es handelt sich hierbei um das Rechtsgebiet des Unfallrechts.
      </p>

      <h2 className="text-2xl font-semibold my-4">Welche Rechte habe ich nach einem Autounfall?</h2>
      <p className="mb-4">
        Nach einem Autounfall haben Sie in Deutschland in erster Linie Anspruch auf Schadensersatz und Schmerzensgeld. Diese Ansprüche werden durch das sogenannte Deliktsrecht geregelt. Das Deliktsrecht ist ein Teil des Zivilrechts und regelt die Haftung für Schäden, die fahrlässig oder vorsätzlich durch ein bestimmtes Handeln verursacht wurden.
      </p>

      <h2 className="text-2xl font-semibold my-4">Wickelt ihr auch Auslandsschäden ab?</h2>
      <p className="mb-4">
        Ja, wir bieten einen Auslandsschaden-Abwicklungsservice an. Es handelt sich hierbei um das internationale Privatrecht.
      </p>

      <h2 className="text-2xl font-semibold my-4">Was ist ein Haftpflichtschaden?</h2>
      <p className="mb-4">
        Ein Haftpflichtschaden ist ein Schaden, der durch eine Person oder ein Unternehmen verursacht wurde, die oder das in einem Haftpflichtvertrag versichert ist. Es handelt sich hierbei um das Rechtsgebiet des Schadensrechts.
      </p>

      <h2 className="text-2xl font-semibold my-4">Was ist ein Kaskoschaden?</h2>
      <p className="mb-4">
        Ein KFZ-Kaskoschaden ist ein Schaden, der durch einen selbstverschuldeten Unfall oder Diebstahl verursacht wurde. Es handelt sich hierbei um ein Gebiet des Schadensrechts.
      </p>

      <h2 className="text-2xl font-semibold my-4">Welche Daten braucht man nach dem Unfall alles?</h2>
      <p className="mb-4">
        Für einen Unfall braucht man die Erfassung der Unfallstelle (z.B. Koordinaten, Bilder, detaillierte Beschreibung), die Namen der beteiligten Personen, Angaben zu Gegenständen und Fahrzeugen, die an dem Unfall beteiligt waren, sowie weitere Einzelheiten zu den Umständen des Unfalls (z.B. Geschwindigkeit, Wetterbedingungen, Sichtverhältnisse usw.). Es handelt sich hier um das Rechtsgebiet des Verkehrsrechts.
      </p>

      <h2 className="text-2xl font-semibold my-4">Ist es wichtig, wo der Unfall passiert ist?</h2>
      <p className="mb-4">
        Ja, es ist wichtig, wo der Unfall passiert ist, da die Gesetzgebung bezüglich des Unfallrechts je nach Land, Staat oder Region variieren kann. Es handelt sich hierbei um ein Zivil- oder Haftpflichtrecht.
      </p>

      <h2 className="text-2xl font-semibold my-4">Wann ist mein Fahrzeug ein Totalschaden?</h2>
      <p className="mb-4">
        Es handelt sich hierbei um das Recht der KFZ-Versicherungen. Ein Fahrzeug gilt als Totalschaden, wenn die Reparaturkosten über einen vereinbarten Wert liegen. Dieser Wert wird in der Regel als ein Vielfaches des aktuellen Restwerts des Fahrzeugs angegeben. Es kann auch vorkommen, dass ein Fahrzeug als Totalschaden gilt, wenn die Reparaturkosten höher sind als der Wiederbeschaffungsaufwand (z.B. wenn neue Ersatzteile schwer zu bekommen sind).
      </p>

      <h2 className="text-2xl font-semibold my-4">Mietwagen oder Nutzungsausfallentschädigung?</h2>
      <p className="mb-4">
        Es handelt sich hier um das Schadensrecht. Ob Sie Anspruch auf einen Mietwagen oder Nutzungsausfallentschädigung haben, hängt von der konkreten Situation ab. Relevant sind vor allem die Art des Unfalls und die Auswirkungen, die dieser auf Ihr Fahrzeug hatte. Prüfen lassen Sie sich alles am besten durch einen Rechtsanwalt.
      </p>

      <h2 className="text-2xl font-semibold my-4">Was sind Vorhaltekosten?</h2>
      <p className="mb-4">
        Vorhaltekosten bei einem Verkehrsunfall sind Kosten, die durch den Unfall verursacht und von der Haftpflichtversicherung des Unfallverursachers übernommen werden. Dazu gehören u.a. Kosten für Reparaturen am Fahrzeug des Geschädigten, Kosten für das Abschleppen des Fahrzeugs, Nutzungsausfall des Fahrzeugs, Kosten für den Ersatzwagen usw. Es handelt sich dabei um ein Rechtsgebiet des Zivilrechts.
      </p>

      <h2 className="text-2xl font-semibold my-4">Was bedeutet für mich Schadenminderungspflicht?</h2>
      <p className="mb-4">
        Schadenminderungspflicht ist ein elementares Prinzip des deutschen Zivilrechts. Es besagt, dass eine Person, die einen Schaden verursacht hat, in angemessener Weise darauf hinwirken muss, dass der Schaden möglichst gering gehalten wird. Es handelt sich hierbei um ein Bestandteil des Bürgerlichen Rechts, insbesondere um den Bereich der Schadensersatzpflicht.
      </p>

      <h2 className="text-2xl font-semibold my-4">Muss ich meinen Wagen reparieren lassen?</h2>
      <p className="mb-4">
        Es handelt sich bei dieser Frage um das Recht der Schadensregulierung nach einem Verkehrsunfall. Ob Sie Ihren Wagen nach einem Unfall reparieren lassen oder nach einem Gutachten abrechnen können, ist abhängig vom Ergebnis des Gutachtens. Sollte das Gutachten ergeben, dass der Wagen repariert werden sollte, müssen Sie die Kosten für die Reparatur tragen. Sollte das Gutachten jedoch ergeben, dass die Kosten für die Reparatur den Wiederbeschaffungswert des Fahrzeugs übersteigen, können Sie sich den Wiederbeschaffungswert erstatten lassen.
      </p>

      <h2 className="text-2xl font-semibold my-4">Der Versicherer möchte, dass ich in seine Werkstatt fahre, muss ich das?</h2>
      <p className="mb-4">
        Nein, Sie müssen nicht in die Werkstatt des Versicherers fahren. Dieser Wunsch des Versicherers handelt sich um das Versicherungsrecht.
      </p>

      <h2 className="text-2xl font-semibold my-4">Brauche ich eine Rechtsschutzversicherung?</h2>
      <p className="mb-4">
        Es kommt darauf an, welche Art rechtlicher Probleme Sie haben. Eine Rechtsschutzversicherung kann in einer Vielzahl von Rechtsgebieten Arbeit übernehmen, einschließlich Verkehrs-, Miet- und Arbeitsrecht, Strafrecht, Sozialrecht und Wirtschaftsrecht. Eine solche Versicherung kann auch Ihre Anwalts- und Gerichtskosten decken, wenn Sie ein Problem in einem bestimmten Rechtsgebiet haben. In manchen Fällen kann eine Rechtsschutzversicherung jedoch nicht verwendet werden, so dass Sie wahrscheinlich den Rat eines Anwalts in Bezug auf Ihr spezifisches Problem einholen müssen, bevor Sie entscheiden, ob Sie eine solche Versicherung benötigen.
      </p>

      <h2 className="text-2xl font-semibold my-4">Was bedeutet Fiktive Abrechnung und was ist dabei zu beachten?</h2>
      <p className="mb-4">
        Fiktive Abrechnung bedeutet, dass ein Sachverhalt, der sich in der Wirklichkeit nicht so zugetragen hat, dennoch rechtlich abgerechnet wird. Im Rechtsgebiet der Zivilrecht handelt es sich hierbei um eine Hypothese, die auf dem Grundsatz des Eventualisms (mögliche Fälle, die nicht eingetreten sind, aber eintreten können) basiert. Dabei ist es besonders wichtig, dass alle vermeintlichen Tatsachen ausreichend belegt werden, damit der Fall mithilfe der Rechtsformulare, die zur Unterstützung bereitgestellt werden, korrekt abgerechnet werden kann.
      </p>

      <h2 className="text-2xl font-semibold my-4">Wie melde ich einen Schaden bei der Orego?</h2>
      <p className="mb-4">
        Der Schaden kann bei der Orego telefonisch oder schriftlich gemeldet werden.
      </p>

      <h2 className="text-2xl font-semibold my-4">Wann handelt es sich um einen Bagatellschaden?</h2>
      <p className="mb-4">
        Ein Bagatellschaden ist ein Schaden, der nur geringe finanzielle Auswirkungen hat und nicht schwerwiegend ist. Beispielsweise ist eine Beschädigung eines Autos, die nur eine kleine Reparatur erfordert, ein Bagatellschaden. Dies gehört zum Rechtsgebiet des zivilrechtlichen Schadensrechts.
      </p>

      <h2 className="text-2xl font-semibold my-4">Hilft die Orego auch bei einem selbst verursachten Unfall?</h2>
      <p className="mb-4">
        Grundsätzlich kann die Orego nicht dazu verwendet werden, sich vor rechtlichen Folgen eines selbst verursachten Unfalls schützen. Es ist ein spezifisches Rechtsgebiet, nämlich das Verkehrsunfallrecht, in dem die Orego nützlich sein kann.
      </p>

      <h2 className="text-2xl font-semibold my-4">Kann ich mir meine Reparaturwerkstatt frei aussuchen?</h2>
      <p className="mb-4">
        Ja, Sie können sich Ihre Reparaturwerkstatt nach einem Unfall frei aussuchen. Dies ist eine Frage des Verbraucherschutzes und kommt unter das Bürgerliche Recht.
      </p>

      <h2 className="text-2xl font-semibold my-4">Macht eine Gutachtenerstellung Sinn?</h2>
      <p className="mb-4">
        Ein Gutachten zur Schadensfeststellung nach einem Unfall ist äußerst sinnvoll, da es hilft, die Schadensumfänge und somit auch den Schadenersatzanspruch zu ermitteln. Es handelt sich hierbei um das Recht der Schadensersatz- oder Haftungsrechte.
      </p>

      <h2 className="text-2xl font-semibold my-4">Der Versicherer wünscht nur einen Kostenvoranschlag der Werkstatt?</h2>
      <p className="mb-4">
        Der Versicherer möchte vermutlich einen Kostenvoranschlag einholen, um die Reparaturkosten zu berechnen und zu ermitteln, ob diese von der Versicherung bezahlt werden müssen.
      </p>

      <h2 className="text-2xl font-semibold my-4">Bekomme ich nach einem Unfall eine Wertminderung bezahlt?</h2>
      <p className="mb-4">
        Wenn Sie nach einem Unfall eine Wertminderung geltend machen können, dann besteht die Möglichkeit, dass der Schädiger Ihnen eine Entschädigung dafür leistet. Allerdings müssen Sie hierfür einen Schadenersatzanspruch geltend machen, der in der Regel durch eine gerichtliche Klage durchgesetzt werden muss.
      </p>

      <h2 className="text-2xl font-semibold my-4">Wie verhalte ich mich am besten an der Unfallstelle?</h2>
      <p className="mb-4">
        Am besten ist es, an einer Unfallstelle vorsichtig zu sein und auf jeden Fall anzuhalten. Versuchen Sie, sowohl sich als auch andere Beteiligte zu schützen. Halten Sie Abstand zu dem Unfall, wenn möglich. Schalten Sie sofort die Warnblinkanlage ein und sorgen Sie für eine gut sichtbare Beleuchtung Ihres Fahrzeugs. Informieren Sie die Polizei und die Krankenwagen, wenn nötig. Denken Sie daran, dass Sie bezüglich des Unfalls möglicherweise später vor Gericht aussagen müssen, also versuchen Sie, alles zu notieren, was sich an der Unfallstelle abgespielt hat.
      </p>

      <h2 className="text-2xl font-semibold my-4">Sollte ich mit dem gegnerischen Versicherer kommunizieren?</h2>
      <p className="mb-4">
        Ja, Sie sollten nach einem Unfall mit dem gegnerischen Versicherer kommunizieren.
      </p>

      <h2 className="text-2xl font-semibold my-4">Wie lange dauert es, bis ich mein Geld bekomme?</h2>
      <p className="mb-4">
        Das hängt von vielen Faktoren ab, einschließlich der Art des Unfalls, der Höhe der Forderungen, der zeitlichen Verzögerungen oder weiteren Faktoren. In der Regel kann es aber Wochen oder Monate dauern. Diese Frage ist Teil des Bereichs des Versicherungsrechts.
      </p>

      <h2 className="text-2xl font-semibold my-4">Warum brauchen die Versicherer so lange, die Schuldfrage ist für mich doch klar?</h2>
      <p className="mb-4">
        Es gibt viele Gründe, warum Versicherer oft länger brauchen, um die Schuldfrage zu klären. Versicherer untersuchen Fälle normalerweise gründlich und ausführlich, ohne übereilt urteilen zu wollen. Sie müssen eine ganze Reihe von Faktoren bewerten und haben oft mehrere Parteien, die eine Rolle spielen. Dies kann den Prozess verzögern. Es liegt in der Natur des Versicherungsgeschäfts, dass sich die Unternehmen vor der Zahlung einer Entschädigung sicher sein möchten, dass sie für den Unfall tatsächlich haftbar sind. Deshalb dauert es in der Regel einige Zeit, bis eine Schuldfrage geklärt wird, obwohl die Schuldfrage für Sie klar erscheint.
      </p>

      <h2 className="text-2xl font-semibold my-4">Mein Fahrzeug ist geleast oder finanziert, was habe ich da zu beachten im Schadenfall?</h2>
      <p className="mb-4">
        Bei einem Finanz- oder Leasingvertrag für ein Fahrzeug gilt es in erster Linie, die Bedingungen des Vertrags zu kennen. Versicherungshaftpflicht und Kasko sind zumeist inklusive, die Höhe der Ansprüche kann aber unterschiedlich sein und hängt von den Bedingungen des Vertrags ab. Es ist daher wichtig, dass Sie Ihren Vertrag genau lesen, um zu wissen, welche Ansprüche Sie haben, wenn es zu einem Schadenfall kommt. Es ist auch wichtig, das Schadenprotokoll des Versicherers durchzulesen und sicherzustellen, dass die Schäden vollständig abgedeckt sind.
      </p>

      <h2 className="text-2xl font-semibold my-4">Mietwagen oder Nutzungsausfallentschädigung bei keiner Neuanschaffung?</h2>
      <p className="mb-4">
        Ob ein Mietwagen oder eine Nutzungsausfallentschädigung bei keiner Neuanschaffung zu verschaffen sind, hängt vom Einzelfall und den spezifischen Bestimmungen des entsprechenden Vertrags ab. Daher kann hier keine allgemeine Aussage getroffen werden.
      </p>

      <p className="text-base mt-8">2023 – OREGO UG (haftungsbeschränkt) ©</p>
    </div>
  );
};

export default FAQ;