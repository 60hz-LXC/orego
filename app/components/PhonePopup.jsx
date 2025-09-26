import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PhonePopup({ onClose }) {
  const router = useRouter();

  const handleFormRedirect = () => {
    onClose();
    router.push('/form');
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-2xl font-bold mb-4">UNFALL PER TELEFON MELDEN</h2>
        
        <div className="mb-6 text-center">
          <p className="text-lg font-semibold mb-2">Rufen Sie uns direkt an:</p>
          <a 
            href="tel:021112345678" 
            className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            0211 12345678
          </a>
        </div>

        <div className="mb-6 p-3 bg-gray-100 rounded">
          <p className="text-sm">
            Unser digitaler Assistent ist <span className="font-semibold">rund-um-die-Uhr</span> für Sie da 
            (auch an Sonn- und Feiertagen).
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleFormRedirect}
            className="w-full bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Unfall stattdessen per Formular melden
          </button>
          
          <button
            onClick={onClose}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
