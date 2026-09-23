"use client";

import { Turn as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import Link from "next/link";
import "./globals.css";

const menuItems = [
  { name: "Schaden melden", href: "/form" },
  { name: "FAQ", href: "/faq" },
  { name: "Impressum", href: "/impressum" },
  { name: "Datenschutz", href: "/datenschutz" },
];

const socials = [
  {
    href: "https://www.instagram.com/orego.group/?utm_source=ig_web_button_share_sheet",
    src: "/instagram.svg",
    label: "Instagram",
  },
  {
    href: "https://youtube.com/@orego.group23?si=sGjstOPYwJW7y1dt",
    src: "/youtube.svg",
    label: "YouTube",
  },
  {
    href: "https://www.facebook.com/share/VWfCnSvQsQMDs6Tn/?mibextid=WC7FNe",
    src: "/facebook.svg",
    label: "Facebook",
  },
  {
    href: "https://www.tiktok.com/@orego.group",
    src: "/tiktok.svg",
    label: "TikTok",
  },
];

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="font-Comfortaa relative flex h-16 w-full items-center justify-between border-b border-white/10 bg-[#07080d]/75 px-4 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-6 lg:px-8">
      <Link href="/" aria-label="Orego Startseite">
        <img src="/oregoLogo.svg" alt="Orego" className="h-8 w-auto" />
      </Link>

      <div className="hidden items-center gap-1 lg:flex">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href} className="nav-link">
            {item.name}
          </Link>
        ))}
        <a href="tel:+4921192039203" className="ml-3 text-right leading-tight">
          <span className="block text-[10px] uppercase tracking-[0.18em] text-white/50">24/7 erreichbar</span>
          <span className="text-sm text-white">+49 211 9203 9203</span>
        </a>
        <div className="ml-3 flex items-center gap-2">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="social-btn">
              <img src={social.src} alt="" className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center lg:hidden">
        <a href="tel:+4921192039203" className="mr-1 text-right leading-none">
          <span className="block text-[9px] uppercase tracking-[0.16em] text-white/50">24/7</span>
          <span className="text-xs text-white">211 9203 9203</span>
        </a>
        <Hamburger size={20} color="#ffffff" toggled={isOpen} toggle={setOpen} label="Menü" />
      </div>

      <div
        className={`menu-sheet fixed left-0 top-16 z-50 h-[calc(100svh-4rem)] w-screen transition-transform duration-500 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
      >
        <nav className="flex h-full flex-col p-6 text-white">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-white/10 py-4 text-2xl"
            >
              {item.name}
              <img src="/arrow.svg" alt="" className="h-4 w-4" />
            </Link>
          ))}
          <a href="tel:+4921192039203" className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
            <span className="block text-[10px] uppercase tracking-[0.18em] text-white/50">24/7 erreichbar</span>
            <span className="mt-1 block text-xl">+49 211 9203 9203</span>
          </a>
          <div className="mt-6 flex gap-2">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="social-btn">
                <img src={social.src} alt="" className="h-4 w-4" />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
