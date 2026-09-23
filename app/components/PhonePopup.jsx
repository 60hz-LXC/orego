"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PhonePopup({ onClose }) {
  const router = useRouter();

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const handleFormRedirect = () => {
    onClose();
    router.push("/form");
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/65 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="phone-popup-title"
        className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white p-7 text-[#16161a] shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary" />
        <p className="text-[11px] uppercase tracking-[0.2em] text-black/45">Direkt melden</p>
        <h2 id="phone-popup-title" className="mt-2 font-montBlack text-2xl uppercase leading-none tracking-tight">
          Unfall per Telefon
        </h2>

        <a
          href="tel:+4921192039203"
          className="mt-6 flex items-center justify-between rounded-2xl border border-black/5 bg-[#f6f7fb] px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        >
          <span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-black/45">24/7 Erreichbarkeit</span>
            <span className="gradient-text mt-1 block font-montBlack text-2xl tracking-tight">+49 211 9203 9203</span>
          </span>
          <span className="pulse-dot" />
        </a>

        <p className="mt-4 text-sm leading-relaxed text-black/70">
          Unser digitaler Assistent ist rund um die Uhr für dich da, auch an Sonn- und Feiertagen.
        </p>

        <div className="mt-4 rounded-2xl bg-[#f6f7fb] p-4 text-sm leading-relaxed text-black/75">
          <p className="font-semibold text-black/85">Ein kurzer Hinweis für deinen Anruf</p>
          <p className="mt-1">
            Unser digitaler Assistent nimmt dein Anliegen zuverlässig auf. Sprich dazu bitte natürlich und in
            vollständigen Sätzen. Auflegen, unvollständige Angaben oder nur Stichpunkte führen zu einer Verzögerung.
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <button type="button" onClick={handleFormRedirect} className="btn-cta btn-cta-dark w-full">
            Per Formular melden
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-full border border-black/10 px-4 py-3 text-sm transition duration-300 hover:bg-black/5"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
