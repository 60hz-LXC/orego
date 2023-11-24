'use client'

import React from "react";
import "./globals.css";

const Footer = () => {
    return (
      <footer className="landingBG text-white p-4">
        <div className="container mt-6 mx-auto grid md:flex-row justify-center items-center text-center font-Comfortaa text-xs">
                <p className="font-black">OREGO UG (haftungsbeschränkt)</p>
                <p>Vertr. d.d. Geschäftsführer: Vasiliki Cirtist-Kröger </p>
                <p className="mt-3">Cottbusser Str. 76</p>
                <p>40625 Düsseldorf</p>
                <p className="mt-3">Telefon: +49 211 740 728 40</p>
                <p>E-Mail: info@orego.group</p>
                <p className="mt-3">StNr: 133/5858/1952</p>
                <p>Registergericht: Amtsgericht Düsseldorf</p>
                <p>Registernummer: HRB 99988</p>
            <p className="mt-3 mb-6">&copy; {new Date().getFullYear()} Orego UG. All rights reserved.</p>
        
        </div>
      </footer>
    );
  };
  
  export default Footer;