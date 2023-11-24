import React from 'react';
import "../globals.css";

const FAQ = () => {
  return (
    <div className="container landingBG mx-auto px-4 lg:px-[20%] py-8 text-white font-Comfortaa">
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

      <p className="text-base mt-8">2023 – OREGO UG (haftungsbeschränkt) ©</p>
    </div>
  );
};

export default FAQ;