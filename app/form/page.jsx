"use client"
import { useState } from 'react';
import "../globals.css";
import { LinearGradient } from "react-text-gradients";


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
    <div className="flex min-h-screen flex-col items-center justify-center landingBG font-Comfortaa">
      {isSubmitted ? (
        <div className="w-full max-w-4xl p-8 bg-[#00000090] mt-6 text-white rounded-lg shadow-xl">
          <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-center">
            Vielen Dank!
          </h1>
          <p className="text-lg text-center">Ihre Schadensmeldung wurde erfolgreich übermittelt. Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen.</p>
          <a href="/" className="grid mx-auto">
             <p className='text-center mt-12 font-black'>HOME</p>
              </a>
        </div>
      ) : (
        <div className="w-full max-w-4xl p-8 bg-[#00000090] mt-6 text-white rounded-lg shadow-xl">
          <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-center">
            Schadensformular
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-lg">Anrede</label>
              <select
                name="anrede"
                value={formValues.anrede}
                onChange={handleChange}
                className="border p-3 rounded w-full bg-white text-black"
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
                  <label className="block mb-2 text-lg">Firmenname</label>
                  <input
                    type="text"
                    name="firmenname"
                    value={formValues.firmenname}
                    onChange={handleChange}
                    className="border p-3 rounded w-full bg-white text-black"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-lg">Ansprechpartner</label>
                  <input
                    type="text"
                    name="ansprechpartner"
                    value={formValues.ansprechpartner}
                    onChange={handleChange}
                    className="border p-3 rounded w-full bg-white text-black"
                    required
                  />
                </div>
              </>
            )}

            <div>
              <label className="block mb-2 text-lg">Vorname</label>
              <input
                type="text"
                name="vorname"
                value={formValues.vorname}
                onChange={handleChange}
                className="border p-3 rounded w-full bg-white text-black"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-lg">Nachname</label>
              <input
                type="text"
                name="nachname"
                value={formValues.nachname}
                onChange={handleChange}
                className="border p-3 rounded w-full bg-white text-black"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-lg">Straße</label>
                <input
                  type="text"
                  name="strasse"
                  value={formValues.strasse}
                  onChange={handleChange}
                  className="border p-3 rounded w-full bg-white text-black"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">Hausnr.</label>
                <input
                  type="text"
                  name="hausnr"
                  value={formValues.hausnr}
                  onChange={handleChange}
                  className="border p-3 rounded w-full bg-white text-black"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-lg">PLZ</label>
                <input
                  type="text"
                  name="plz"
                  value={formValues.plz}
                  onChange={handleChange}
                  className="border p-3 rounded w-full bg-white text-black"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">Wohnort</label>
                <input
                  type="text"
                  name="wohnort"
                  value={formValues.wohnort}
                  onChange={handleChange}
                  className="border p-3 rounded w-full bg-white text-black"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-lg">Handynummer</label>
              <input
                type="tel"
                name="handynummer"
                value={formValues.handynummer}
                onChange={handleChange}
                className="border p-3 rounded w-full bg-white text-black"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-lg">E-Mail-Adresse</label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="border p-3 rounded w-full bg-white text-black"
                required
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Angaben zum Unfall</h2>
              <div>
                <label className="block mb-2 text-lg">Unfalldatum</label>
                <input
                  type="date"
                  name="unfalldatum"
                  value={formValues.unfalldatum}
                  onChange={handleChange}
                  className="border p-3 rounded w-full bg-white text-black"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">Unfallort</label>
                <input
                  type="text"
                  name="unfallort"
                  value={formValues.unfallort}
                  onChange={handleChange}
                  className="border p-3 rounded w-full bg-white text-black"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">Unfallhergang</label>
                <textarea
                  name="unfallhergang"
                  value={formValues.unfallhergang}
                  onChange={handleChange}
                  className="border p-3 rounded w-full bg-white text-black"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Angaben zum Unfallgegner</h2>
              <div>
                <label className="block mb-2 text-lg">Vorname (falls vorhanden)</label>
                <input
                  type="text"
                  name="gegnervorname"
                  value={formValues.gegnervorname}
                  onChange={handleChange}
                  className="border p-3 rounded w-full bg-white text-black"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">Nachname (falls vorhanden)</label>
                <input
                  type="text"
                  name="gegnernachname"
                  value={formValues.gegnernachname}
                  onChange={handleChange}
                  className="border p-3 rounded w-full bg-white text-black"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">Kennzeichen</label>
                <input
                  type="text"
                  name="kennzeichen"
                  value={formValues.kennzeichen}
                  onChange={handleChange}
                  className="border p-3 rounded w-full bg-white text-black"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">Versicherungsdaten (falls vorhanden)</label>
                <input
                  type="text"
                  name="versicherungsdaten"
                  value={formValues.versicherungsdaten}
                  onChange={handleChange}
                  className="border p-3 rounded w-full bg-white text-black"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block mb-2 text-lg">War die Polizei vor Ort und liegt ein Polizeibericht vor?</label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="polizeiberichtVorhanden"
                  checked={formValues.polizeiberichtVorhanden}
                  onChange={(e) => setFormValues({ ...formValues, polizeiberichtVorhanden: e.target.checked })}
                  className="mr-2"
                />
                Ja
              </div>
              {formValues.polizeiberichtVorhanden && (
                <div>
                  <input
                    type="file"
                    name="polizeibericht"
                    onChange={handleFileChange}
                    className="border p-3 rounded w-full bg-white text-black file:text-white file:bg-purple-500 file:border-0 file:px-4 file:py-2 file:rounded file:cursor-pointer file:transition file:ease-in-out file:hover:bg-purple-600 file:hover:text-white"
                    accept=".jpg,.jpeg,.pdf"
                  />
                </div>
              )}
            </div>

            <div className="space-y-4">
              <label className="block mb-2 text-lg">Brauchst du einen Mietwagen?</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="mietwagen"
                  value="ja"
                  checked={formValues.mietwagen === 'ja'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Ja
                <input
                  type="radio"
                  name="mietwagen"
                  value="nein"
                  checked={formValues.mietwagen === 'nein'}
                  onChange={handleChange}
                  className="ml-4 mr-2"
                />
                Nein
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-full uppercase tracking-widest transition duration-300 ease-in-out hover:scale-105"
            >
              Formular senden
            </button>
          </form>
        </div>
      )}
    </div>
  );
}