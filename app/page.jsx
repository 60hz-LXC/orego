"use client"
import { useState } from 'react';
import Image from "next/image";
import "./globals.css";
import { LinearGradient } from "react-text-gradients";
import ExpandableText from "./components/ExpandableText";
import Link from "next/link";
import Popup from './components/Popup'; // Make sure to adjust the import path

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center  content-start font-Comfortaa overflow-x-hidden">
       {isPopupOpen && <Popup onClose={handleClosePopup} />}
      <div className="landingBG  h-fit  bg-black grid content-start p-6 pr-[1.5rem] ">

    <div className='flex flex-row  mx-auto items-center mb-10 gap-10'>
      <p className='text-white'>SOCIALS</p>
      <Link href="https://www.instagram.com/orego.group/?utm_source=ig_web_button_share_sheet"><img src="./instagram.svg" className='h-[2.5rem] w-[2.5rem] mx-auto hover:scale-125 transition-all cursor-pointer duration-300 ease-in-out' alt="" /></Link>
      <Link href="https://youtube.com/@orego.group23?si=sGjstOPYwJW7y1dt"><img src="./youtube.svg" className='h-[2.5rem] w-[2.5rem] mx-auto hover:scale-125 transition-all cursor-pointer duration-300 ease-in-out' alt="" /></Link>
      <img src="./tiktok.svg" className='h-[2.5rem] w-[2.5rem] mx-auto hover:scale-125 transition-all cursor-pointer duration-300 ease-in-out' alt="" />
    </div>
        <div className="flex flex-row justify-evenly ">
          <img
            src="./oregoLogo.svg"
            alt=""
            className="h-[4rem] lg:h-[5rem]"
          />

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

        {/* hero */}
        <div className="grid   lg:px-[20%]  mx-auto">
          <div className="mt-[1.5rem] lg:mt-[1rem] max-lg:mx-auto ">
            <p className="text-white text-[1rem] lg:text-[2rem]   uppercase mx-auto  ">
              Mit uns sparen Geschädigte
            </p>
            <p className="text-white text-[3rem]  lg:text-[6rem]  uppercase leading-[3rem] lg:leading-[6rem]	mx-auto font-montBlack ">
              Zeit, Geld <br></br> & Nerven!
            </p>
          </div>

          <div className="grid lg:flex lg:flex-row  lg:gap-[5rem]">
            <div className="grid mt-[3rem] ">
              <img
                src="/complete.svg"
                className="h-[2rem] lg:h-[4rem]"
                alt=""
              />
              <p className="text-white text-[.9rem] mt-2 uppercase lg:text-[1.3rem]">
                Komplette Unfallabwicklung
              </p>
              <p className="text-white text-[.6rem]  mt-0 lg:text-[.8rem] lg:w-[25rem]">
                Wir übernehmen alle Schritte von der Gutachtenerstellung bis zur
                Schmerzensgeldforderung.
              </p>
            </div>
            <div className="grid mt-10">
              <img
                src="/handshake.svg"
                className="h-[2rem] lg:h-[4rem]"
                alt=""
              />
              <p className="text-white text-[.9rem] mt-2 uppercase lg:text-[1.3rem]">
                Kostenfreier Service
              </p>
              <p className="text-white text-[.6rem]  mt-0 lg:text-[.8rem] lg:w-[25rem]">
                Unsere Unterstützung ist für Geschädigte ohne versteckte
                Gebühren und Kostenrisiko.
              </p>
            </div>
          </div>

          <div className="grid lg:flex lg:flex-row lg:gap-[5rem] mb-[5rem]">
            <div className="grid mt-10">
              <img
                src="/individual.svg"
                className="h-[2rem] lg:h-[4rem]"
                alt=""
              />
              <p className="text-white text-[.9rem] mt-2 uppercase lg:text-[1.3rem]">
                Individuelle Betreuung
              </p>
              <p className="text-white text-[.6rem]  mt-0 lg:text-[.8rem] lg:w-[25rem]">
                Unabhängige Experten und Anwälte setzen sich für Ihre optimale
                Entschädigung ein.
              </p>
            </div>
            <a href="/form" className="grid">
              <button className="text-white text-[1.5rem]  mx-auto mt-[3rem]  bg-black bg-opacity-50 rounded-full font-montBlack uppercase w-fit h-fit p-4 lg:p-5 hover:scale-[1.02] shadow-base hover:bg-opacity-70 hover:shadow-2xl  transition duration-300 ease-in-out lg:mt-[6rem] ml-0 max-lg:mx-auto">
                <LinearGradient gradient={["to left", "#FF00FF ,#3B9FEE"]}>
                  UNFALL MELDEN
                </LinearGradient>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* 2nd section */}

      <div className="h-fit p-6 px-12 grid bg-white lg:px-[30%] pb-[5rem]">
        <div className="">
          <div></div>
        </div>
        <img src="info.svg" className="h-[8rem] " alt="" />
        <h1 className="font-black mt-4">Allgemeine Informationen</h1>
        <ExpandableText maxLength={540}>
          Als Expertenteam für die Unfallschadenregulierung sind wir darauf
          spezialisiert, unseren Kunden bei der Abwicklung von Verkehrsunfällen
          zu helfen. Wir unterstützen unsere Auftraggeber dabei, ihre Ansprüche
          gegenüber der Versicherung des Unfallverursachers geltend zu machen
          und durchzusetzen. Dabei übernehmen wir sämtliche Schritte der
          Schadensabwicklung: Von der Erstellung eines Gutachtens über die
          Anspruchsanmeldung bei der gegnerischen Versicherung, der Vermittlung
          eines Mietwagens oder einer Werkstatt, der Geltendmachung der
          Reparaturkosten und der Zurückweisung von unberechtigten Kürzungen,
          bis hin zur Durchsetzung von Schmerzensgeldansprüchen. <br></br>{" "}
          <br></br>
          Unser Ziel ist es, dem Geschädigten eine schnelle und unkomplizierte
          Abwicklung seines Unfallschadens zu ermöglichen. Dazu arbeiten wir eng
          mit unseren Partnern zusammen und setzen uns für die Interessen
          unserer Kunden ein. Wir beraten unsere Kunden umfassend in allen
          Fragen rund um den Unfall und stehen ihnen während der Abwicklung zur
          Seite! <br></br> <br></br>
          Durch unsere jahrelange Erfahrung in diesem Bereich verfügen wir über
          ein breites Netzwerk an Experten wie bspw. Sachverständigen oder
          Anwälten, auf die wir im Bedarfsfall zurückgreifen können. So stellen
          wir sicher, dass unsere Kunden stets bestmöglich betreut werden.{" "}
          <br></br> <br></br>
          Insgesamt bieten wir eine professionelle und kompetente Unterstützung
          bei der Abwicklung eines Unfallschadens an - schnell, unkompliziert
          und stets mit dem Ziel einer optimalen Entschädigung unserer
          Auftraggeber.
        </ExpandableText>
        <img src="crash.svg" className="h-[8rem] mt-12" alt="" />
        <h1 className="font-black mt-4">
          Unfallabwicklung für den Geschädigten
        </h1>
        <ExpandableText maxLength={540}>
          Wir bieten eine komplette Unfallabwicklung und kümmern uns um alle
          notwendigen Schritte wie Gutachter, Anwalt, Werkstatt, Mietwagen,
          Psychologen. Du musst uns lediglich deinen Unfall melden und hast
          trotzdem immer die freie Wahl, ob du unsere Vorschläge annehmen
          möchtest oder nicht. <br></br> <br></br>
          <span className="font-black text-md">
            <LinearGradient gradient={["to left", "#FF00FF ,#3B9FEE"]}>
              Kein Papierkram, kein Zeitaufwand, keine Kosten.
            </LinearGradient>
          </span>
          <br></br> <br></br>
          Nach einem Unfall ist es oft schwierig und zeitaufwendig, alle
          notwendigen Schritte selbst zu erledigen. Hier kommt die OREGO ins
          Spiel: Wir kümmern uns um alles Notwendige - von der Schadensaufnahme
          bis hin zur Reparatur deines Fahrzeugs. Unsere Dienstleister sind
          dabei auf ihre jeweiligen Aufgabenbereiche spezialisiert und arbeiten
          völlig versicherungsunabhängig. <br></br> <br></br>
          So können wir sicherstellen, dass jeder Schritt optimal durchgeführt
          wird.
          <br></br>
        </ExpandableText>
      </div>

      {/* free section  */}
      <div className="serviceBG lg:px-[30%] w-screen  h-fit  grid content-start p-12 py-6 pb-[5rem] pt-[3rem]">
        <h1 className="text-white  text-center text-md uppercase">
          <LinearGradient gradient={["to left", "#FF00FF ,#3B9FEE"]}>
            Unser Service ist völlig <br></br>{" "}
          </LinearGradient>
          <span className="text-[2.1rem] font-montBlack">
            {" "}
            <LinearGradient gradient={["to left", "#FF00FF ,#3B9FEE"]}>
              kostenfrei!{" "}
            </LinearGradient>
          </span>
        </h1>
        <p className="text-white mt-8 text-xs">
          Unser Service ist für dich als Nutzer vollständig kostenfrei. Das
          bedeutet, dass du keinerlei Kostenrisiko trägst und keine versteckten
          Gebühren befürchten musst.<br></br> <br></br>
          Wir werden für unsere Arbeit, die Koordination, Organisation von den
          Leistungsträgern bezahlt, die in deinem Fall involviert sind.<br></br>{" "}
          <br></br>
          Durch diese Art der Vergütung entsteht kein Interessenkonflikt
          zwischen uns als Dienstleister und dir als unserem Kunden. Wir können
          uns vollständig auf deine Bedürfnisse konzentrieren und dir einen
          absolut bequemen Service bieten.<br></br> <br></br>
          Du kannst dich also darauf verlassen, dass wir alles tun werden, um
          deine Angelegenheit zu regeln - ohne zusätzliche Belastungen für dich.
        </p>
      </div>

      {/* how to section */}

      <div className="h-fit p-6 px-12 grid bg-white lg:px-[30%] pb-[5rem] w-[100%]">
        <img src="unfallmelden.svg" className="h-[8rem] " alt="" />
        <h1 className="font-black mt-4">Unfall melden</h1>
        <p className="text-sm mt-3">
          <span className="text-3xl">
            {" "}
            <LinearGradient gradient={["to left", "#FF00FF ,#3B9FEE"]}>
              1.{" "}
            </LinearGradient>
          </span>
          Unfallmeldung geht bei uns ein und wird von einem erfahrenen
          Mitarbeiter geprüft.
        </p>

        <p className="text-sm mt-3">
          <span className="text-3xl">
            {" "}
            <LinearGradient gradient={["to left", "#FF00FF ,#3B9FEE"]}>
              2.{" "}
            </LinearGradient>
          </span>
          Nach Prüfung deiner Unfallmeldung, wirst du von einem unserer
          Mitarbeiter unverbindlich kontaktiert, um die Details deines Falles
          mit dir zu besprechen.
        </p>

        <p className="text-sm mt-3">
          <span className="text-3xl">
            {" "}
            <LinearGradient gradient={["to left", "#FF00FF ,#3B9FEE"]}>
              3.{" "}
            </LinearGradient>
          </span>
          Die Beauftragung der OREGO kommt erst durch deine Unterschrift auf der
          Vollmacht zustande. <br></br>
          <br></br>{" "}
          <LinearGradient gradient={["to left", "#FF00FF ,#3B9FEE"]}>
            <span className="font-black">
              Dein Vorteil: ab hier kümmern wir uns – kostenlos - um deine
              Ansprüche!
            </span>
          </LinearGradient>
        </p>

        <p className="text-sm mt-3">
          <span className="text-3xl">
            {" "}
            <LinearGradient gradient={["to left", "#FF00FF ,#3B9FEE"]}>
              4.{" "}
            </LinearGradient>
          </span>
          Erst wenn du uns beauftragst, vermitteln wir dir -sofern erforderlich-
          einen unabhängigen Sachverständigen, der sich umgehend bei dir meldet
          und einen Termin zur Besichtigung deines Fahrzeugs vereinbart.
        </p>

        <p className="text-sm mt-3">
          <span className="text-3xl">
            {" "}
            <LinearGradient gradient={["to left", "#FF00FF ,#3B9FEE"]}>
              5.{" "}
            </LinearGradient>
          </span>
          Ein Rechtsanwalt informiert die gegnerische Versicherung und beziffert
          dann mit dem Gutachten deine Ansprüche. Bei Rückfragen meldet sich der
          Rechtsanwalt nochmal bei dir.
        </p>

        <p className="text-sm mt-3">
          <span className="text-3xl">
            {" "}
            <LinearGradient gradient={["to left", "#FF00FF ,#3B9FEE"]}>
              6.{" "}
            </LinearGradient>
          </span>
          Gerne vermitteln wir dir auf Wunsch auch eine Werkstatt!
        </p>

        <a href="/form" className="mx-auto">
          <button className="text-white text-[1rem]  mx-auto mt-[3rem]  bg-gradient-to-r from-primary to-secondary rounded-full font-montBlack uppercase w-fit h-fit p-4 px-3 lg:p-5 hover:scale-[1.1] shadow-2xl hover:bg-[#ffffff]  transition duration-300 ease-in-out lg:mt-[3rem] ">
            UNFALL MELDEN
          </button>
        </a>
      </div>

      {/* 4th section */}
      <div className="serviceBG lg:px-[30%]  h-fit  grid content-start p-12 py-6 pb-[5rem] pt-[3rem]">
        <h1 className="font-black mt-4 text-white font-montBlack uppercase mx-auto text-3xl">
          <LinearGradient gradient={["to left", "#FF00FF ,#3B9FEE"]}>
            <span className="text-xl">Für</span> <br></br>Verbraucher
          </LinearGradient>
        </h1>

        <div className="flex flex-row gap-4 mt-6 mx-auto">
          <img src="/oregoLogo.svg" className="h-[3rem]" alt="" />{" "}
          <p className="text-white">private</p>
        </div>

        <h2 className="text-white text-xl mt-8">Gutachter</h2>
        <p className="text-white text-[.8rem] mx-auto">
          Dein Schadensfall wird von einem qualifizierten Kfz-Gutachter
          begutachtet und genau berechnet. Ein unabhängiges Unfallgutachten ist
          ein entscheidender Baustein für eine erfolgreiche Schadenregulierung.
        </p>

        <h2 className="text-white text-xl mt-8">Anwalt</h2>
        <p className="text-white text-[.8rem] mx-auto">
          Die Geltendmachung deines Anspruchs gegenüber der gegnerischen
          Versicherung erfolgt durch einen erfahrenen Anwalt. Sie können sich
          entspannt zurücklehnen, denn wir arbeiten mit den besten
          Rechtsanwälten zusammen, die für Ihre Rechte kämpfen und
          sicherstellen, dass Sie den bestmöglichen Ausgang in Ihrem Fall
          erzielen. Mit uns sind Sie in sicheren und kompetenten Händen.
        </p>

        <h2 className="text-white text-xl mt-8">Werkstatt</h2>
        <p className="text-white text-[.8rem] ">
          Wir als deine OREGO leiten dich optional für eine fachgerechte
          Reparatur an eine Fachwerkstatt in deiner Nähe weiter.
        </p>

        <h2 className="text-white text-xl mt-8">Mietwagen</h2>
        <p className="text-white text-[.8rem] ">
          Nach einem Unfall hast du Anspruch auf ein Ersatzfahrzeug ab
          Feststellung des Schadens bis zur Wiederfahrtauglichkeit deines
          Fahrzeugs.
        </p>
      </div>

      {/* 5th section */}
      <div className="bg-white lg:px-[30%]  h-fit  grid content-start p-12 py-6 pb-[5rem] pt-[3rem] w-[100%]">
        <h1 className="font-black mt-4 text-third font-montBlack uppercase mx-auto text-3xl">
          <LinearGradient gradient={["to left", "#FF00FF ,#3B9FEE"]}>
            <span className="text-xl">Für</span> <br></br>Unternehmen
          </LinearGradient>
        </h1>

        <div className="flex flex-row gap-4 mt-6 mx-auto ">
          <img src="/oregoLogo.svg" className="h-[3rem]" alt="" />{" "}
          <p className="text-third">business</p>
        </div>

        <ExpandableText maxLength={300} style={{ zIndex: 1 }}>
          Als Unternehmen ist es wichtig, dass Ihr Fuhrpark reibungslos
          funktioniert. Jeder Verkehrsunfall kann kostspielige Ausfallzeiten
          verursachen und Ihre Geschäftsabläufe stören. Bei Orego verstehen wir
          diese Herausforderungen und bieten maßgeschneiderte Lösungen für
          Unternehmen jeder Größe. <br />
          <br />
          Ob Sie einen Fuhrpark von 1 oder 1000 Fahrzeugen haben, wir sind Ihr
          optimaler Partner. Unsere erfahrenen Schadenmanager kümmern sich um
          die komplette Unfallabwicklung, von der Gutachtenerstellung bis zur
          Schmerzensgeldforderung. Wir koordinieren die Zusammenarbeit mit
          unabhängigen Gutachtern, Anwälten und Werkstätten, um sicherzustellen,
          dass Ihr Fuhrpark schnellstmöglich wieder einsatzbereit ist. <br />
          <br />
          Darüber hinaus bieten wir einen kostenlosen Service für Unternehmen.
          Das bedeutet, dass Sie kein Kostenrisiko tragen und keine versteckten
          Gebühren befürchten müssen. Wir werden von den Leistungsträgern
          bezahlt, die in Ihrem Fall involviert sind, sodass wir uns vollständig
          auf Ihre Bedürfnisse konzentrieren können. <br />
          <br />
          Mit Orego können Sie sich darauf verlassen, dass wir alles tun, um
          Ihre Angelegenheit zu regeln - ohne zusätzliche Belastungen für Ihr
          Unternehmen. Kontaktieren Sie uns noch heute, um mehr über unsere
          Dienstleistungen für Unternehmen zu erfahren.
        </ExpandableText>
      </div>
      <div className="landingBG text-white p-4">
        <div className="container mt-6 mx-auto grid md:flex-row justify-center items-center text-center font-Comfortaa text-xs">
                <p className="font-black">OREGO UG (haftungsbeschränkt)</p>
                <p>Vertr. d.d. Geschäftsführer: Vasiliki Christi-Kröger </p>
                <p className="mt-3">Cottbusser Str. 76</p>
                <p>40625 Düsseldorf</p>
                <p className="mt-3">Telefon: +49 175 219 1624</p>
                <p>E-Mail: info@orego.group</p>
                <p className="mt-3">StNr: 133/5858/1952</p>
                <p>Registergericht: Amtsgericht Düsseldorf</p>
                <p>Registernummer: HRB 99988</p>
            <p className="mt-3 mb-6">&copy; {new Date().getFullYear()} Orego UG. All rights reserved.</p>
        
        </div>
        <button
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          onClick={handleOpenPopup}
        >
          Kontakt
        </button>
      </div>
    </main>
  );
}
