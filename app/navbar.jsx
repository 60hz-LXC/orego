'use client';

import Image from 'next/image';
import { Turn as Hamburger } from 'hamburger-react';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './globals.css'

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [menuItemsVisible, setMenuItemsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Delay setting menu items visible to allow the menu to slide in first
      const timer = setTimeout(() => {
        setMenuItemsVisible(true);
      }, 300); // Duration of the slide-in animation
      return () => clearTimeout(timer);
    } else {
      setMenuItemsVisible(false);
    }
  }, [isOpen]);

  const menuItems = [
    { name: 'Schaden Melden', href: '/form' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
  ];

  return (
    <div className="flex flex-row-reverse fixed h-16 bg-black bg-opacity-90 w-full border-0 items-center justify-between pl-9 shadow-2xl z-50 font-Comfortaa highZ">
      <div className="flex flex-row items-center">
        <p className='text-white text-base uppercase font-Comfortaa mt-[.31rem]'>MENU</p>
        <Hamburger size={20} color="#ffffff" toggled={isOpen} toggle={setOpen} />
      </div>
      <div className='h-[1.6rem] mt-1'>
        <Link href='/'>
          <Image src="/oregoLogo.svg" className='h-8 self-start' alt="Orego Logo" width={1415.76} height={425.5} layout="fixed" />
        </Link>
      </div>
      <div className={`fixed top-0 mt-16 right-0 h-screen w-screen bg-black bg-opacity-90 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <nav className="text-white text-2xl space-y-6 p-6 lg:p-20">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className={`flex flex-row content-center group highZ transition-all duration-300 ease-in-out transform ${menuItemsVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
              style={{ transitionDelay: `${menuItemsVisible ? index * 0.2 : 0}s` }}
            >
              <a href={item.href} className="hover:text-gray-300">
                <p>{item.name}</p>
              </a>
              <img src="/arrow.svg" className='h-[1rem] mt-2 ml-3 scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out' alt="" />
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}