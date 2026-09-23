"use client"
import { useState } from "react";
import "../globals.css";
import Reveal from "../components/Reveal";


export default function Form() {
  const [formValues, setFormValues] = useState({
    anrede: '',
    firmenname: '',
    ansprechpartner: '',
    vorname: '',
    nachname: '',
    strasse: '',
    hausnr: '',
    plz: '',
    wohnort: '',
    handynummer: '',
    email: '',
    unfalldatum: '',
    unfallort: '',
    unfallhergang: '',
    gegnervorname: '',
    gegnernachname: '',
    kennzeichen: '',
    versicherungsdaten: '',
    polizeiberichtVorhanden: false,
    polizeibericht: null,
    mietwagen: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormValues({ ...formValues, polizeibericht: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a FormData object to handle file upload
    const formData = new FormData();
    Object.keys(formValues).forEach(key => {
      formData.append(key, formValues[key]);
    });

    // Append the file if it exists
    if (formValues.polizeibericht) {
      formData.append('polizeibericht', formValues.polizeibericht);
    }

    try {
      const response = await fetch('/api/send-form', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Error sending form data');
      }
    } catch (error) {
      console.error('Error sending form data', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-Comfortaa text-[#141418]">
      <div className="mx-auto max-w-2xl px-5 pb-24 pt-28">
      {isSubmitted ? (
        <Reveal>
        <div className="rounded-3xl bg-white px-6 py-14 text-center shadow-[0_20px_60px_rgba(16,24,40,0.06)] sm:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-black/40">Orego</p>
          <h1 className="mt-3 font-montBlack text-4xl uppercase tracking-tight">Vielen Dank</h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-black/60">
            Ihre Schadensmeldung wurde erfolgreich übermittelt. Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen.
          </p>
          <a href="/" className="btn-cta btn-cta-dark mt-8">Zur Startseite</a>
        </div>
        </Reveal>
      ) : (
        <>
          <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] text-black/40">Schaden melden</p>
          <h1 className="mt-2 font-montBlack text-4xl uppercase leading-none tracking-tight">Schadensformular</h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-black/55">
            Ein paar Angaben reichen. Du erreichst uns auch rund um die Uhr unter{" "}
            <a href="tel:+4921192039203" className="text-[#141418] underline decoration-[#3b9fee] underline-offset-4">
              +49 211 9203 9203
            </a>
            .
          </p>
          </Reveal>
          <Reveal delay={90}>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(16,24,40,0.06)] sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.18em] text-black/40">Deine Daten</p>
            <div>
              <label className="field-label">Anrede</label>
              <select
                name="anrede"
                value={formValues.anrede}
                onChange={handleChange}
                className="field"
                required
              >
                <option value="">Bitte wählen</option>
                <option value="herr">Herr</option>
                <option value="frau">Frau</option>
                <option value="divers">Divers</option>
                <option value="firma">Firma</option>
              </select>
            </div>

            {formValues.anrede === 'firma' && (
              <>
                <div>
                  <label className="field-label">Firmenname</label>
                  <input
                    type="text"
                    name="firmenname"
                    value={formValues.firmenname}
                    onChange={handleChange}
                    className="field"
                    required
                  />
                </div>
                <div>
                  <label className="field-label">Ansprechpartner</label>
                  <input
                    type="text"
                    name="ansprechpartner"
                    value={formValues.ansprechpartner}
                    onChange={handleChange}
                    className="field"
                    required
                  />
                </div>
              </>
            )}

            <div>
              <label className="field-label">Vorname</label>
              <input
                type="text"
                name="vorname"
                value={formValues.vorname}
                onChange={handleChange}
                className="field"
                required
              />
            </div>

            <div>
              <label className="field-label">Nachname</label>
              <input
                type="text"
                name="nachname"
                value={formValues.nachname}
                onChange={handleChange}
                className="field"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="field-label">Straße</label>
                <input
                  type="text"
                  name="strasse"
                  value={formValues.strasse}
                  onChange={handleChange}
                  className="field"
                  required
                />
              </div>
              <div>
                <label className="field-label">Hausnr.</label>
                <input
                  type="text"
                  name="hausnr"
                  value={formValues.hausnr}
                  onChange={handleChange}
                  className="field"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="field-label">PLZ</label>
                <input
                  type="text"
                  name="plz"
                  value={formValues.plz}
                  onChange={handleChange}
                  className="field"
                  required
                />
              </div>
              <div>
                <label className="field-label">Wohnort</label>
                <input
                  type="text"
                  name="wohnort"
                  value={formValues.wohnort}
                  onChange={handleChange}
                  className="field"
                  required
                />
              </div>
            </div>

            <div>
              <label className="field-label">Handynummer</label>
              <input
                type="tel"
                name="handynummer"
                value={formValues.handynummer}
                onChange={handleChange}
                className="field"
                required
              />
            </div>

            <div>
              <label className="field-label">E-Mail-Adresse</label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="field"
                required
              />
            </div>

            <div className="space-y-4 border-t border-black/[0.08] pt-6">
              <h2 className="text-[11px] uppercase tracking-[0.18em] text-black/40">Angaben zum Unfall</h2>
              <div>
                <label className="field-label">Unfalldatum</label>
                <input
                  type="date"
                  name="unfalldatum"
                  value={formValues.unfalldatum}
                  onChange={handleChange}
                  className="field"
                  required
                />
              </div>
              <div>
                <label className="field-label">Unfallort</label>
                <input
                  type="text"
                  name="unfallort"
                  value={formValues.unfallort}
                  onChange={handleChange}
                  className="field"
                  required
                />
              </div>
              <div>
                <label className="field-label">Unfallhergang</label>
                <textarea
                  name="unfallhergang"
                  value={formValues.unfallhergang}
                  onChange={handleChange}
                  className="field"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>

            <div className="space-y-4 border-t border-black/[0.08] pt-6">
              <h2 className="text-[11px] uppercase tracking-[0.18em] text-black/40">Angaben zum Unfallgegner</h2>
              <div>
                <label className="field-label">Vorname (falls vorhanden)</label>
                <input
                  type="text"
                  name="gegnervorname"
                  value={formValues.gegnervorname}
                  onChange={handleChange}
                  className="field"
                />
              </div>
              <div>
                <label className="field-label">Nachname (falls vorhanden)</label>
                <input
                  type="text"
                  name="gegnernachname"
                  value={formValues.gegnernachname}
                  onChange={handleChange}
                  className="field"
                />
              </div>
              <div>
                <label className="field-label">Kennzeichen</label>
                <input
                  type="text"
                  name="kennzeichen"
                  value={formValues.kennzeichen}
                  onChange={handleChange}
                  className="field"
                  required
                />
              </div>
              <div>
                <label className="field-label">Versicherungsdaten (falls vorhanden)</label>
                <input
                  type="text"
                  name="versicherungsdaten"
                  value={formValues.versicherungsdaten}
                  onChange={handleChange}
                  className="field"
                />
              </div>
            </div>

            <div className="space-y-4 border-t border-black/[0.08] pt-6">
              <p className="field-label">War die Polizei vor Ort und liegt ein Polizeibericht vor?</p>
              <label className="choice">
                <input
                  type="checkbox"
                  name="polizeiberichtVorhanden"
                  checked={formValues.polizeiberichtVorhanden}
                  onChange={(e) => setFormValues({ ...formValues, polizeiberichtVorhanden: e.target.checked })}
                />
                Ja
              </label>
              {formValues.polizeiberichtVorhanden && (
                <input
                  type="file"
                  name="polizeibericht"
                  onChange={handleFileChange}
                  className="field cursor-pointer file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-[#141418] file:px-4 file:py-2 file:text-sm file:text-white"
                  accept=".jpg,.jpeg,.pdf"
                />
              )}
            </div>

            <div className="space-y-4 border-t border-black/[0.08] pt-6">
              <p className="field-label">Brauchst du einen Mietwagen?</p>
              <div className="flex flex-wrap gap-2">
                <label className="choice">
                  <input
                    type="radio"
                    name="mietwagen"
                    value="ja"
                    checked={formValues.mietwagen === "ja"}
                    onChange={handleChange}
                  />
                  Ja
                </label>
                <label className="choice">
                  <input
                    type="radio"
                    name="mietwagen"
                    value="nein"
                    checked={formValues.mietwagen === "nein"}
                    onChange={handleChange}
                  />
                  Nein
                </label>
              </div>
            </div>

            <button type="submit" className="btn-cta btn-cta-dark w-full">
              Formular senden
            </button>
          </form>
          </Reveal>
        </>
      )}
      </div>
    </div>
  );
}