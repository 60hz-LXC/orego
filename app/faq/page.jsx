"use client"
import React, { useState } from "react";
import "../globals.css";
import Link from "next/link";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  const faqs = [
    {
      question: "Wer ist die OREGO?",
      answer: "Die OREGO ist ein Dienstleistungsunternehmen, das sich darauf spezialisiert hat, Geschädigten bei Autounfällen umfassende Unterstützung zu bieten. Unser Team arbeitet eng mit Anwälten, Gutachtern, Werkstätten und sonstigen Dienstleistern zusammen, um sicherzustellen, dass deine Bedürfnisse nach einem Unfall professionell und effizient bearbeitet werden.",
    },
    {
      question: "Welche Leistungen bietet die OREGO?",
      answer: "Unsere Dienstleistungen umfasst die komplette Abwicklung deines Unfallschadens, inklusive Koordination mit Anwälten für rechtliche Belange, Zusammenarbeit mit erfahrenen Gutachten zur Schadenbewertung und Vermittlung von qualifizierten Werkstätten für Reparaturen. Auch in Fällen von Personenschäden, wie beispielsweise Schmerzensgeldansprüchen, können wir dich -dank unserer Partner Anwälte- unterstützen. Unser Ziel ist es, den gesamten Prozess für dich so reibungslos wie möglich zu gestalten.",
    },
    {
      question: "Was kostet mich die Inanspruchnahme der OREGO?",
      answer: "Für Geschädigte sind die Leistungen der OREGO grundsätzlich kostenfrei.",
    },
    {
      question: "Wie kann ich meinen Schaden bei euch melden?",
      answer: "Du kannst uns deinen Schaden telefonisch oder direkt über unser Online-Schadensformular melden. Einer unserer Mitarbeiter wird dich dann innerhalb von 24 std. kontaktieren.",
    },
    {
      question: "Welche Rechte habe ich nach einem Verkehrsunfall?",
      answer: "Nach einem Verkehrsunfall hast du in erster Linie Anspruch auf Schadensersatz, wenn der Unfall durch das Verschulden einer anderen Partei verursacht wurde. Dies kann sowohl Sachschäden an deinem Fahrzeug als auch Personenschäden umfassen. Wurdest du bei dem Unfall verletzt steht dir eine angemessene medizinische Behandlung und gegebenenfalls Schmerzensgeld zu. Des Weiteren hast du das Recht, einen Anwalt zu beauftragen, der deine Interessen vertritt und sicherstellt, dass deine Rechte gewahrt werden.",
    },
    {
      question: "Ich hatte einen Unfall mit einem ausländischen Fahrzeug. Könnt ihr mir helfen?",
      answer: "Die OREGO kann dir auch bei einem Unfall in Deutschland mit einem im Ausland versicherten Fahrzeug weiterhelfen. Solltest du einen Unfall im Ausland gehabt haben, kommst möglicherweise ausländisches Recht zur Anwendung. In diesen Fällen findest du hier schnelle Hilfe: http://www.gruene-karte.com",
    },
    {
      question: "Was ist der Unterschied zwischen einem Haftpflicht- und Kaskoschaden?",
      answer: "Ein Haftpflichtschaden bezieht sich auf die Schäden, an Fahrzeugen oder Verletzungen von Personen, die durch den Unfallverursacher verursacht wurden. Die Haftpflichtversicherung des Verursachers ist dafür verantwortlich, die entstandenen Kosten und Schäden zu decken, einschließlich Reparaturkosten, Arztkosten oder Schmerzensgeld. Ein Kaskoschaden bezieht sich auf Schäden an deinem eigenen Fahrzeug, unabhängig davon, ob du den Unfall verursacht hast, oder nicht.",
    },
    {
      question: "Wie verhalte ich mich nach einem Unfall?",
      answer: `
        Sicherheit zuerst! Stell sicher, dass du und alle anderen Beteiligten in Sicherheit bist. Wenn möglich, bewegt die Fahrzeuge aus dem Verkehrsfluss.
        Unabhängig von der Schwere des Unfalls ist es eine gute Idee, die Polizei zu rufen. Ein offizieller Unfallbericht kann bei späteren Versicherungsansprüchen hilfreich sein.
        Sollte jemand verletzt sein, rufe sofort einen Krankenwagen.
        Der Austausch von Kontakt- und Versicherungsinformationen mit allen beteiligten Parteien ist für eine schnelle Abwicklung deiner Ansprüche wichtig.
        Nach Möglichkeit Fotos vom Unfallort und den beteiligten Fahrzeugen machen und notiere dir Details zum Hergang des Unfalls.
        Melde uns deinen Unfall über unser Online-Formular und wir erledigen den Rest für dich.
      `,
    },
    {
      question: "Wann liegt ein Totalschaden vor und zahlt meine Versicherung trotzdem?",
      answer: `
        Bei einem Totalschaden übersteigen Reparaturkosten eines Fahrzeugs nach einem Unfall den Wiederbeschaffungswert des Fahrzeugs. Der Wiederbeschaffungswert ist der Betrag, den es kosten würde, ein gleichwertiges Ersatzfahrzeug zu kaufen. Man unterscheidet zwischen einem:
        Technischen Totalschaden: Dies bezieht sich auf Fälle, in denen das Fahrzeug so stark beschädigt ist, dass eine Reparatur technisch nicht möglich oder sicherheitsrelevant nichtzulässig ist.
        Wirtschaftlichen Totalschaden: Hierbei handelt es sich um Situationen, in denen eine Reparatur zwar technisch möglich wäre, die Kosten dafür jedoch den aktuellen Marktwert des Autos übersteigen würden.
        In beiden Fällen wird das Auto normalerweise als "Totalschaden" eingestuft und die Versicherungsgesellschaft zahlt dem Eigentümer den Wiederbeschaffungswert abzüglich des Restwerts (der Wert des beschädigten Autos in seinem aktuellen Zustand).
      `,
    },
    {
      question: "Wann habe ich Anspruch auf einen Mietwagen oder Nutzungsausfallentschädigung?",
      answer: `
        Nach einem Verkehrsunfall steht dir unter bestimmten Umständen ein Anspruch auf einen Mietwagen oder eine Nutzungsausfallentschädigung. Wenn dein Fahrzeug nach einem Unfall nicht mehr fahrbereit ist und repariert werden muss, hast du das Recht, auf Kosten der gegnerischen Versicherung einen Mietwagen zu nehmen. Das gilt jedoch nur, wenn die Schuldfrage geklärt ist und du nicht Verursacher des Unfalls bist. Die Dauer der Anmietung sollte sich im Rahmen der üblichen Reparaturdauer bewegen.
        Nimmst du keinen Mietwagen in Anspruch, kannst du stattdessen eine Nutzungsausfallentschädigung verlangen. Diese dient als Ausgleich dafür, dass du dein Fahrzeug während der Reparaturzeit nicht nutzen kannst. Die Höhe dieser Entschädigung hängt von verschiedenen Faktoren ab wie z.B. dem Typ und Alter deines Fahrzeugs.
      `,
    },
    {
      question: "Muss ich meinen Wagen reparieren lassen und was bedeutet Fiktive Abrechnung?",
      answer: `
        Nein, du bist nicht gesetzlich verpflichtet, dein Fahrzeug nach einem Unfall reparieren zu lassen.
        Allerdings gibt es hierbei einige Punkte zu beachten:
        Ist dein Wagen noch fahrtüchtig und verkehrssicher, kannst du auf eine Reparatur verzichten.
        Sollte das Auto jedoch durch den Unfallschaden nicht mehr verkehrssicher sein, darfst du damit nicht mehr am Straßenverkehr teilnehmen.
        Bei einem Kaskoschaden kann es sein, dass deine Versicherung darauf besteht, dass die Reparatur durchgeführt wird, um den ursprünglichen Zustand wiederherzustellen.
        Die fiktive Abrechnung ist eine Möglichkeit, wie du nach einem Unfall deinen Schaden mit der Versicherung abrechnen kannst. Dabei wird nicht die tatsächliche Reparatur des Fahrzeugs abgerechnet, sondern die hypothetischen Reparaturkosten auf Basis eines Kostenvoranschlags oder Gutachtens. Das bedeutet, dass du von der Versicherung den Betrag erhältst, den eine Reparatur in einer markenunabhängigen Fachwerkstatt kosten würde - unabhängig davon, ob du das Fahrzeug tatsächlich reparieren lässt oder nicht. Es ist wichtig zu beachten, dass bei einer fiktiven Abrechnung nur die Nettoreparaturkosten erstattet werden. Das heißt: Die Mehrwertsteuer wird nur dann erstattet, wenn sie auch tatsächlich angefallen und belegt ist.
        Denke daran, dass dein Fahrzeug nur dann am Straßenverkehr teilnehmen darf, wenn es fahrtüchtig und verkehrssicher ist.
      `,
    },
    {
      question: "Der Versicherung möchte, dass ich in ihre Partnerwerkstatt fahre, muss ich das?",
      answer: `
        Nein, grundsätzlich steht es dir frei, die Werkstatt für die Reparatur deines Fahrzeugs selbst zu wählen. Dieses Recht ist in § 249 Absatz 2 des Bürgerlichen Gesetzbuchs (BGB) verankert. Eine Ausnahme kann allerdings deine Kaskoversicherung bilden, in der eine so genannte "Werkstattbindungsklauseln" enthalten sein könnte, die besagt, dass du im Schadensfall eine von der Versicherung vorgeschlagene Werkstatt aufsuchen müssen. Wenn du das nicht tust, riskierst du Mehrkosten.
      `,
    },
    {
      question: "Ist eine Gutachtenerstellung sinnvoll?",
      answer: `
        Die Erstellung eines Gutachtens nach einem Autounfall kann in vielen Fällen sinnvoll sein. Ein unabhängiges Gutachten liefert eine genaue Aufstellung der Schäden und der Kosten für die Reparatur. Es dient als Nachweis gegenüber der Versicherung und kann helfen, deine Ansprüche durchzusetzen.
      `,
    },
    {
      question: "Was bedeutet Wertminderung und habe ich Anspruch darauf?",
      answer: `
        Eine Wertminderung, auch merkantiler Minderwert genannt, tritt auf, wenn dein Fahrzeug nach einem Unfall an Wert verliert. Aufgrund der historischen Schadensgeschichte kann ein Unfallfahrzeug selbst nach einer sachgemäßen Reparatur einen geringeren Marktwert haben als ein vergleichbares Fahrzeug ohne Unfallhistorie.
        Ob du einen Anspruch auf eine Entschädigung für die Wertminderung hast, hängt von verschiedenen Faktoren ab:
        Verschulden: Du hast nur dann Anspruch auf Entschädigung für die Wertminderung, wenn der Unfall nicht durch dein Verschulden verursacht wurde.
        Alter und Kilometerstand des Autos: In der Regel wird eine Wertminderung nur bei relativ neuen Autos mit geringem Kilometerstand anerkannt.
        Schwere des Schadens: Auch die Schwere des Schadens spielt eine Rolle, ob eine Wertminderung anerkannt wird.
        Die Berechnung eines solchen Minderwerts ist komplex und berücksichtigt verschiedene Faktoren wie Alter und Zustand des Wagens vor Unfall sowie Art und Umfang der Beschädigungen.
      `,
    },
    {
      question: "Wie lange dauert es, bis ich mein Geld bekomme?",
      answer: `
        Die Dauer bis zur Auszahlung nach einer Schadensmeldung kann variieren und hängt von verschiedenen Faktoren ab, wie zum Beispiel der Komplexität des Schadens, der Arbeitsbelastung der Versicherung und ob es Streitigkeiten über den Unfallhergang oder Höhe des Schadens gibt.
        Im Allgemeinen hat die Versicherung jedoch gemäß § 5a des Versicherungsvertragsgesetzes (VVG) bis zu sechs Wochen Zeit, um über einen Leistungsantrag zu entscheiden. Diese Frist beginnt mit dem Zeitpunkt, an dem der Schaden bei der Versicherung gemeldet wurde.
        Wenn die Entscheidung positiv ausfällt und ein Anspruch auf Leistung besteht, muss die Zahlung unverzüglich erfolgen. Bei Verzögerungen können unter Umständen Verzugszinsen anfallen.
      `,
    },
    {
      question: "Mein Fahrzeug ist geleast oder finanziert, was muss ich in einem Schadenfall beachten?",
      answer: `
        Bei einem geleasten oder finanzierten Fahrzeug, das in einem Unfall verwickelt ist, gibt es einige Punkte, die zu beachten sind:
        Informiere die Leasing- oder Finanzierungsgesellschaft: Nach einem Unfall solltest du umgehend deine Leasing- oder Finanzierungsgesellschaft informieren. Diese hat ein Interesse an dem Fahrzeug und muss über Schäden informiert werden.
        Schadensabwicklung durch die Versicherung: Die Abwicklung des Schadens erfolgt in der Regel durch deine Kfz-Haftpflicht- oder Kaskoversicherung, je nachdem wer den Unfall verursacht hat und welche Art von Versicherungsschutz besteht.
        Reparatur in einer autorisierten Werkstatt: In vielen Fällen schreiben Leasing- oder Finanzierungsverträge vor, dass Reparaturen nur in autorisierten Werkstätten durchgeführt werden dürfen.
        Wertminderung und Restwertausgleich: Bei einem Totalschaden kann es zu Differenzen zwischen dem Wiederbeschaffungswert des Fahrzeugs und dem noch ausstehenden Betrag aus dem Leasing- oder Finanzierungsvertrag kommen (Restwert).
      `,
    },
  ];

  return (
    <div className="landingBG mx-auto px-4 lg:px-[20%] py-8 text-white font-Comfortaa h-screen">
      <div className="flex flex-row justify-evenly mb-[5rem]">
        <Link href="/">
          <img src="./oregoLogo.svg" alt="" className="h-[4rem] lg:h-[5rem]" />
        </Link>

        <div className="flex flex-row justify-between lg:justify-around content-evenly">
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

      <h1 className="text-[3rem] font-bold mb-6">FAQ</h1>

      {faqs.map((faq, index) => (
        <div key={index}>
          <h2
            className="text-xl font-semibold my-4 cursor-pointer mt-2"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </h2>
          {openFAQ === index && <p className="mb-8">{faq.answer}</p>}
        </div>
      ))}

      <p className="text-base mt-8">2023 – OREGO UG (haftungsbeschränkt) ©</p>
    </div>
  );
};

export default FAQ;