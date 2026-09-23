"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./globals.css";
import ExpandableText from "./components/ExpandableText";
import PhonePopup from "./components/PhonePopup";
import Reveal from "./components/Reveal";

const features = [
  {
    icon: "/complete.svg",
    title: "Komplette Unfallabwicklung",
    text: "Unabhängige Experten und Anwälte setzen sich dafür ein, dass du eine optimale Entschädigung erhältst.",
  },
  {
    icon: "/handshake.svg",
    title: "Kostenfreier Service",
    text: "Unsere Unterstützung ist für Geschädigte ohne versteckte Gebühren und Kostenrisiko.",
  },
  {
    icon: "/individual.svg",
    title: "Unfall per Telefon melden",
    text: "Melde deinen Unfall rund-um-die-Uhr (auch an Sonn- und Feiertagen) über unseren digitalen Assistenten.",
  },
];

const steps = [
  "Unfallmeldung geht bei uns ein und wird von einem erfahrenen Mitarbeiter geprüft.",
  "Nach Prüfung deiner Unfallmeldung wirst du – in der Regel innerhalb weniger Stunden – von einem unserer Rechtsanwälte kontaktiert. Er klärt die Details deines Falles und nimmt eine kostenfreie Einschätzung für dich vor.",
  "Du erhältst per E-Mail eine Vollmacht. Die Vollmacht kannst du digital signieren. Deine Reise mit uns ist komplett digital.",
  "Sofern erforderlich, vermitteln wir dir einen unabhängigen Sachverständigen, der sich bei dir meldet und einen Termin zur Besichtigung deines Fahrzeugs ausmacht.",
  "Der Rechtsanwalt informiert die gegnerische Versicherung und beziffert mit dem Gutachten deine Ansprüche. Damit wird die Versicherung unter Druck gesetzt.",
  "Gerne vermitteln wir dir auf Wunsch auch eine Werkstatt.",
];

function SignalButton({ className = "", children, ...props }) {
  return (
    <button type="button" className={`btn-signal ${className}`} {...props}>
      {children}
      <span className="btn-signal-icon" aria-hidden="true">
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </span>
    </button>
  );
}

function Mark({ children }) {
  return (
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#e8f4fd] text-[#1a7fbe]">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
    </span>
  );
}

const coverage = [
  {
    title: "Gutachten",
    text: "Ein unabhängiges Schadengutachten als Grundlage für die Regulierung.",
    icon: (
      <>
        <path d="M14 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7z" />
        <path d="M14 3v4h4M9 13h6M9 17h4" />
      </>
    ),
  },
  {
    title: "Anspruch",
    text: "Anmeldung und Durchsetzung gegenüber der gegnerischen Versicherung.",
    icon: (
      <>
        <path d="M12 3l7 3v6c0 4-2.8 7.2-7 8.5C7.8 19.2 5 16 5 12V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: "Mietwagen",
    text: "Vermittlung, wenn du nach dem Unfall mobil bleiben musst.",
    icon: (
      <>
        <path d="M5 16V11l2.2-4.2A1.5 1.5 0 0 1 8.5 6h7a1.5 1.5 0 0 1 1.3.8L19 11v5" />
        <path d="M5 12h14" />
        <circle cx="7.5" cy="16" r="1.25" />
        <circle cx="16.5" cy="16" r="1.25" />
      </>
    ),
  },
  {
    title: "Werkstatt",
    text: "Eine Fachwerkstatt für die Reparatur, wenn du das möchtest.",
    icon: (
      <path d="M14.7 6.3a4.1 4.1 0 0 0-5.8 5.6L3.5 17.3 6.7 20.5l5.4-5.4a4.1 4.1 0 0 0 5.6-5.8L14.5 12.5 11.5 9.5z" />
    ),
  },
  {
    title: "Kürzungen",
    text: "Reparaturkosten geltend machen und unberechtigte Kürzungen zurückweisen.",
    icon: (
      <>
        <path d="M14 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7z" />
        <path d="M14 3v4h4M10 13l4 4M14 13l-4 4" />
      </>
    ),
  },
  {
    title: "Schmerzensgeld",
    text: "Durchsetzung, wenn dir nach dem Unfall ein Anspruch zusteht.",
    icon: <path d="M19.5 12.6 12 20l-7.5-7.4a4.2 4.2 0 0 1 6-5.8L12 8l1.5-1.2a4.2 4.2 0 0 1 6 5.8z" />,
  },
];

const partners = ["Gutachter", "Anwalt", "Werkstatt", "Mietwagen", "Psychologe"];

const services = [
  {
    title: "Gutachter",
    text: "Dein Schaden wird von einem qualifizierten Kfz-Gutachter begutachtet und genau berechnet. Ein unabhängiges Unfallgutachten ist ein entscheidender Baustein für eine erfolgreiche Schadenregulierung. Du hast bereits ein Gutachten? Kein Problem! In diesem Fall erfolgt die Bezifferung anhand des Gutachtens deines Gutachters!",
  },
  {
    title: "Anwalt",
    text: "Die Geltendmachung deines Anspruchs gegenüber der gegnerischen Versicherung erfolgt durch einen erfahrenen Anwalt. Du kannst dich entspannt zurücklehnen, denn wir arbeiten mit den besten Rechtsanwälten zusammen, die für dein Recht kämpfen und sicherstellen, dass der bestmögliche Ausgang in deinem Fall erzielt wird. Mit unseren Anwälten bist du in erfahrenen und kompetenten Händen!",
  },
  {
    title: "Werkstatt",
    text: "Wir als deine OREGO leiten dich optional für eine fachgerechte Reparatur an eine Fachwerkstatt in deiner Nähe weiter.",
  },
  {
    title: "Mietwagen",
    text: "Nach einem Unfall hast du Anspruch auf ein Ersatzfahrzeug ab Feststellung des Schadens bis zur Wiederfahrtauglichkeit deines Fahrzeugs.",
  },
];

export default function Home() {
  const [isPhonePopupOpen, setIsPhonePopupOpen] = useState(false);
  const [showFloat, setShowFloat] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowFloat(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="overflow-x-hidden font-Comfortaa">
      {isPhonePopupOpen && <PhonePopup onClose={() => setIsPhonePopupOpen(false)} />}

      <section className="relative overflow-hidden text-white lg:flex lg:min-h-[100svh] lg:flex-col">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pt-20 sm:px-8">
          <div className="max-w-3xl pb-4 pt-8 lg:flex lg:flex-1 lg:flex-col lg:justify-center lg:py-10">
            <p className="rise d1 flex items-center gap-2.5 text-[11px] uppercase tracking-[0.28em]">
              <span className="hero-gem" aria-hidden="true" />
              <span className="gradient-text">Unfallschadenabwicklung</span>
            </p>
            <p className="rise d2 mt-5 max-w-md text-lg leading-snug tracking-normal text-white/75 sm:text-[1.35rem]">
              Mit uns sparen Geschädigte
            </p>
            <h1 className="rise d3 mt-3 font-montBlack text-[2.35rem] uppercase leading-[0.92] tracking-[-0.03em] sm:text-[3.15rem] lg:text-[4.15rem]">
              Zeit, Geld
              <br />
              &amp; Nerven
            </h1>

            <div className="rise d4 mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="tel:+4921192039203"
                className="glass flex items-center gap-4 rounded-2xl px-4 py-3.5 transition duration-300 hover:bg-white/15"
              >
                <span className="pulse-dot shrink-0" />
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/60">24/7 Erreichbarkeit</span>
                  <span className="mt-0.5 block font-montBlack text-xl tracking-tight sm:text-[1.65rem]">
                    +49 211 9203 9203
                  </span>
                  <span className="mt-0.5 block text-xs text-white/60">auch an Sonn- und Feiertagen</span>
                </span>
              </a>
              <SignalButton onClick={() => setIsPhonePopupOpen(true)}>Unfall melden</SignalButton>
            </div>
          </div>

          <div className="rise d5 grid gap-3 pb-8 lg:grid-cols-3 lg:pb-10">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="glass rounded-2xl p-4 transition duration-500 hover:-translate-y-1 hover:bg-white/12"
              >
                <img src={feature.icon} alt="" className="h-9 w-auto" />
                <h2 className="mt-3 text-[15px] tracking-normal text-white">{feature.title}</h2>
                <p className="mt-1.5 text-[13px] leading-relaxed tracking-normal text-white/60">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f6]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary">Orego</p>
            <h2 className="mt-3 max-w-xl font-montBlack text-3xl uppercase leading-none tracking-tight text-neutral-900 lg:text-[2.7rem]">
              Was wir für dich übernehmen
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 lg:text-base">
              Als Expertenteam wickeln wir Verkehrsunfälle ab und setzen deine Ansprüche gegenüber der Versicherung des
              Unfallverursachers durch — schnell, unkompliziert und auf eine optimale Entschädigung ausgerichtet.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <article className="h-full rounded-[1.75rem] bg-white p-6 shadow-[0_20px_60px_rgba(16,24,40,0.06)] sm:p-8">
                <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">Allgemeine Informationen</p>
                <h3 className="mt-3 font-montBlack text-2xl uppercase leading-[0.95] tracking-tight text-neutral-900">
                  Der ganze Weg, wenn du ihn willst
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  Falls erwünscht übernehmen wir sämtliche Schritte. Unser Netzwerk aus Sachverständigen und
                  Rechtsanwälten steht bereit, damit du bestmöglich betreut wirst.
                </p>
                <ul className="mt-6 grid gap-1 sm:grid-cols-2">
                  {coverage.map((item) => (
                    <li key={item.title} className="flex gap-3 rounded-2xl p-3">
                      <Mark>{item.icon}</Mark>
                      <div>
                        <p className="text-sm text-neutral-900">{item.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-neutral-500">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={90} className="lg:col-span-5">
              <article className="relative h-full overflow-hidden rounded-[1.75rem] bg-[#0c0e14] p-6 text-white sm:p-8">
                <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#3b9fee]/35 blur-3xl" />
                <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-10 h-52 w-52 rounded-full bg-[#e879f9]/30 blur-3xl" />
                <div className="relative">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">Für Geschädigte</p>
                  <h3 className="mt-4 font-montBlack text-[1.85rem] uppercase leading-[0.95] tracking-tight sm:text-[2.15rem]">
                    Kein Papierkram.
                    <br />
                    <span className="gradient-text">Kein Zeitaufwand.</span>
                    <br />
                    Keine Kosten.
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-white/70">
                    Du meldest den Unfall. Wir kümmern uns von der Schadensaufnahme bis zur Reparatur. Jeder
                    Dienstleister ist auf seinen Bereich spezialisiert und arbeitet versicherungsunabhängig. Unsere
                    Vorschläge bleiben Angebote — die Entscheidung triffst du.
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {partners.map((name) => (
                      <li key={name} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/85">
                        {name}
                      </li>
                    ))}
                  </ul>
                  <SignalButton className="mt-8" onClick={() => setIsPhonePopupOpen(true)}>
                    Unfall melden
                  </SignalButton>
                </div>
              </article>
            </Reveal>

            <Reveal delay={140} className="lg:col-span-12">
              <article className="relative overflow-hidden rounded-[1.75rem] bg-white p-6 shadow-[0_20px_60px_rgba(16,24,40,0.06)] sm:p-8">
                <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#3b9fee] to-[#e879f9]" />
                <div className="flex flex-col gap-6 pl-3 sm:pl-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <img src="/vicky-logo-blue.svg" alt="Vicky" className="h-8 w-auto" />
                    <h3 className="mt-4 font-montBlack text-xl uppercase tracking-tight text-neutral-900 sm:text-2xl">
                      Sie brauchen einen Anwalt?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      VickyChat beantwortet rechtliche Fragen rund um Autounfälle sofort — auch nachts und am Wochenende.
                      Die Software schlägt echte Anwälte vor und leitet die relevanten Fallinformationen weiter, damit
                      Sie direkt professionelle Hilfe bekommen.
                    </p>
                  </div>
                  <Link href="https://vickychat.pro" className="shrink-0">
                    <span className="btn-cta btn-cta-dark inline-flex">Zu Vicky</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="serviceBG text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">Unser Versprechen</p>
              <h2 className="mt-3 font-montBlack text-4xl uppercase leading-[0.95] tracking-tight lg:text-6xl">
                <span className="gradient-text">Kostenfrei</span>
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-white/80 lg:text-base">
                Unser Service ist für dich als Nutzer vollständig kostenfrei. Das bedeutet, dass du keinerlei Kostenrisiko
                trägst und keine versteckten Gebühren befürchten musst.
                <br />
                <br />
                Wir werden für unsere Arbeit, die Koordination, Organisation von den Leistungsträgern bezahlt, die in deinem
                Fall involviert sind.
                <br />
                <br />
                Durch diese Art der Vergütung entsteht kein Interessenkonflikt zwischen uns als Dienstleister und dir als
                unserem Kunden. Wir können uns vollständig auf deine Bedürfnisse konzentrieren und dir einen absolut
                bequemen Service bieten.
                <br />
                <br />
                Du kannst dich also darauf verlassen, dass wir alles tun werden, um deine Angelegenheit zu regeln - ohne
                zusätzliche Belastungen für dich.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary">In sechs Schritten</p>
            <h2 className="mt-3 max-w-2xl font-montBlack text-3xl uppercase leading-none tracking-tight lg:text-[2.6rem]">
              Unfall telefonisch oder per Schadenformular melden
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {steps.map((step, index) => (
              <Reveal key={step} delay={index * 60}>
                <article className="h-full rounded-3xl border border-black/[0.05] bg-white p-6 shadow-[0_16px_40px_rgba(16,24,40,0.04)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(16,24,40,0.08)]">
                  <span className="gradient-text font-montBlack text-3xl leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                    {index === 1 ? (
                      <>
                        Nach Prüfung deiner Unfallmeldung, wirst du – in der Regel innerhalb weniger Stunden – von einem
                        unserer Rechtsanwälte kontaktiert. Er klärt die Details deines Falles und nimmt eine{" "}
                        <span className="font-bold">kostenfreie Einschätzung</span> für dich vor.
                      </>
                    ) : (
                      step
                    )}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 flex justify-center">
              <SignalButton onClick={() => setIsPhonePopupOpen(true)}>Unfall melden</SignalButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#090b10] text-white">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,0,255,0.28),transparent_68%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/50">Für</p>
            <h2 className="mt-2 font-montBlack text-4xl uppercase leading-none tracking-tight lg:text-5xl">
              <span className="gradient-text">Verbraucher</span>
            </h2>
            <div className="mt-5 flex items-center gap-3">
              <img src="/oregoLogo.svg" alt="" className="h-8 w-auto" />
              <p className="text-sm uppercase tracking-[0.18em] text-white/70">private</p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 50}>
                <article className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-500 hover:bg-white/[0.07]">
                  <h3 className="text-lg">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{service.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f7]">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 sm:px-8 lg:grid-cols-2 lg:py-10">
          <Reveal>
            <article className="h-full rounded-3xl bg-white p-6 shadow-[0_16px_40px_rgba(16,24,40,0.04)] lg:p-7">
              <p className="text-[11px] uppercase tracking-[0.2em] text-black/40">Für</p>
              <h2 className="mt-1 font-montBlack text-3xl uppercase leading-none tracking-tight">
                <span className="gradient-text">Flotten &amp; Fuhrparks</span>
              </h2>
              <div className="mt-4 flex items-center gap-3">
                <img src="/oregoLogo.svg" alt="" className="h-8 w-auto" />
                <p className="text-sm uppercase tracking-[0.16em] text-neutral-500">business</p>
              </div>
              <ExpandableText maxLength={300}>
                Als Unternehmen ist es wichtig, dass Ihr Fuhrpark reibungslos funktioniert. Jeder Verkehrsunfall kann
                kostspielige Ausfallzeiten verursachen und Ihre Geschäftsabläufe stören. Bei Orego verstehen wir diese
                Herausforderungen und bieten maßgeschneiderte Lösungen für Unternehmen jeder Größe.
                <br />
                <br />
                Ob Sie einen Fuhrpark von 1 oder 1000 Fahrzeugen haben, wir sind Ihr optimaler Partner. Unsere erfahrenen
                Schadenmanager kümmern sich um die komplette Unfallabwicklung, von der Gutachtenerstellung bis zur
                Schmerzensgeldforderung. Wir koordinieren die Zusammenarbeit mit unabhängigen Gutachtern, Anwälten und
                Werkstätten, um sicherzustellen, dass Ihr Fuhrpark schnellstmöglich wieder einsatzbereit ist.
                <br />
                <br />
                Darüber hinaus bieten wir einen kostenlosen Service für Unternehmen. Das bedeutet, dass Sie kein
                Kostenrisiko tragen und keine versteckten Gebühren befürchten müssen. Wir werden von den
                Leistungsträgern bezahlt, die in Ihrem Fall involviert sind, sodass wir uns vollständig auf Ihre
                Bedürfnisse konzentrieren können.
                <br />
                <br />
                Mit Orego können Sie sich darauf verlassen, dass wir alles tun, um Ihre Angelegenheit zu regeln - ohne
                zusätzliche Belastungen für Ihr Unternehmen. Kontaktieren Sie uns noch heute, um mehr über unsere
                Dienstleistungen für Unternehmen zu erfahren.
              </ExpandableText>
            </article>
          </Reveal>

          <Reveal delay={80}>
            <article className="h-full rounded-3xl bg-white p-6 shadow-[0_16px_40px_rgba(16,24,40,0.04)] lg:p-7">
              <p className="text-[11px] uppercase tracking-[0.2em] text-black/40">Für</p>
              <h2 className="mt-1 font-montBlack text-3xl uppercase leading-none tracking-tight">
                <span className="gradient-text">Kfz-Sachverständige</span>
              </h2>
              <div className="mt-4 flex items-center gap-3">
                <img src="/oregoLogo.svg" alt="" className="h-8 w-auto" />
                <p className="text-sm uppercase tracking-[0.16em] text-neutral-500">expert</p>
              </div>
              <ExpandableText maxLength={300}>
                Du bist Kfz-Sachverständiger und auf der Suche nach einem zuverlässigen Partner, der sich um die
                Unfallschadenabwicklung für deine Kunden kümmert? Lass es uns wissen! Wir sind immer auf der Suche nach
                neuen Kfz-Sachverständigen, um unser Netzwerk weiter auszubauen.
              </ExpandableText>
            </article>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#07080d] text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <img src="/oregoLogo.svg" alt="Orego" className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              Komplette Unfallabwicklung. Kostenfrei für Geschädigte, digital und rund um die Uhr erreichbar.
            </p>
            <div className="mt-5 flex gap-2">
              <a className="social-btn" href="https://www.instagram.com/orego.group/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noreferrer" aria-label="Instagram">
                <img src="/instagram.svg" alt="" className="h-4 w-4" />
              </a>
              <a className="social-btn" href="https://youtube.com/@orego.group23?si=sGjstOPYwJW7y1dt" target="_blank" rel="noreferrer" aria-label="YouTube">
                <img src="/youtube.svg" alt="" className="h-4 w-4" />
              </a>
              <a className="social-btn" href="https://www.facebook.com/share/VWfCnSvQsQMDs6Tn/?mibextid=WC7FNe" target="_blank" rel="noreferrer" aria-label="Facebook">
                <img src="/facebook.svg" alt="" className="h-4 w-4" />
              </a>
              <a className="social-btn" href="https://www.tiktok.com/@orego.group" target="_blank" rel="noreferrer" aria-label="TikTok">
                <img src="/tiktok.svg" alt="" className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="text-sm leading-7 text-white/70">
            <p className="font-semibold text-white">OREGO UG (haftungsbeschränkt)</p>
            <p>Vertr. d.d. Geschäftsführerin: Vasiliki Cirtsi-Kröger</p>
            <p>40625 Düsseldorf</p>
            <p className="mt-3">
              <a href="tel:+4921192039203" className="text-white transition hover:text-white/80">
                +49 211 9203 9203
              </a>
              <span className="text-white/45"> · 24/7</span>
            </p>
            <p>
              <a href="mailto:info@orego.group" className="transition hover:text-white">
                info@orego.group
              </a>
            </p>
          </div>
          <div className="text-sm leading-7 text-white/70">
            <p>StNr: 133/5858/1952</p>
            <p>Registergericht: Amtsgericht Düsseldorf</p>
            <p>Registernummer: HRB 99988</p>
            <div className="mt-4 flex flex-col items-start gap-1">
              <Link href="/impressum" className="transition hover:text-white">Impressum</Link>
              <Link href="/datenschutz" className="transition hover:text-white">Datenschutz</Link>
              <Link href="/faq" className="transition hover:text-white">FAQ</Link>
              <Link href="/form" className="transition hover:text-white">Schaden melden</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Orego UG. All rights reserved.
        </div>
      </footer>

      {showFloat && !isPhonePopupOpen && (
        <SignalButton className="btn-float fixed bottom-5 right-5 z-40" onClick={() => setIsPhonePopupOpen(true)}>
          Unfall melden
        </SignalButton>
      )}
    </main>
  );
}
