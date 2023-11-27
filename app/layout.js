"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./navbar";

export default function Layout({ children }) {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <><html><body>
      <div className="min-h-screen bg-gray-100">
        <div className={`navbar ${showNavbar ? 'slide-in' : ''}`}>
          <Navbar style={{ zIndex: 999 }} />
        </div>
          <main >{children}</main>
      </div>
      </body></html>
    </>
  );
}
