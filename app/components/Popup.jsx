import { useState } from 'react';

export default function Popup({ onClose }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, name }),
      });

    setIsLoading(false);

    if (response.ok) {
      setIsSuccess(true);
      setPhoneNumber('');
      setName('');
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    } else {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-2xl font-bold ">Direkte Kontaktaufnahme</h2>
        <p className="mb-4 text-sm mt-2">
          Hier kannst du direkt mit uns Kontakt aufnehmen. Hinterlasse uns einfach deine Telefonnummer und deinen Namen und wir werden uns umgehend bei dir melden.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 grid">
            <label className="block mb-2">Telefonnummer</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition mx-auto text-center mb-4"
              disabled={isLoading}
            >
              {isLoading ? 'Senden...' : 'Senden'}
            </button>
          <p className="mb-4 text-sm leading-[1rem]">
            <span className='font-black  text-base leading-10'>Was passiert dann?</span><br />
            1. Wir melden uns bei dir, um deinen Schaden bei uns aufzunehmen<br /><br />
            2. Wir lassen deinen Schaden durch einen Gutachter bemessen<br /><br />
            3. Dein Anspruch wird durch einen Anwalt bei der gegnerischen Versicherung geltend gemacht<br /><br />
            4. Wir zahlen dir deinen Anspruch aus
          </p>
          <div className="flex justify-end">
     
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition mx-auto mt-4"
              onClick={onClose}
            >
              Schließen
            </button>
          </div>
        </form>
        {isSuccess && <p className="text-green-500 mt-4 text-center mx-auto">Email erfolgreich versendet!</p>}
        {isError && <p className="text-red-500 mt-4">Error beim Senden der Email.</p>}
      </div>
    </div>
  );
}