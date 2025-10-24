"use client"
import React, { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Standorte", href: "#" },
  { label: "Dienstleistungen", href: "#" },
  { label: "Über uns", href: "#" },
  { label: "Kontakt", href: "#" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Mini header */}
      <div className="relative text-xs text-white border-b border-gray-200">
        <div className="absolute inset-0 bg-[var(--primary)] bg-gradient-to-r from-[var(--primary)] via-white/50 to-[var(--primary)] opacity-90 pointer-events-none"></div>
        <div className="relative z-10 py-3 px-4 flex items-center gap-2">
          <i className="fa-solid fa-phone"></i>
          <span>Persönliche Beratung: 0221-6776432</span>
        </div>
      </div>
      {/* Main header */}
      <div className="flex items-center justify-between py-3 bg-white relative">
        {/* Logo à gauche */}
        <div className="flex-none ml-8">
          <Image src="/logo.jpg" alt="Phonecare Logo" height={56} width={120} className="h-14 w-full" />
        </div>
        {/* Desktop navigation */}
        <nav className="hidden md:flex flex-1 justify-center gap-8">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="no-underline text-gray-800 font-medium">
              {link.label}
            </a>
          ))}
        </nav>
        {/* Bouton à droite desktop */}
        <div className="hidden md:flex flex-none mr-8">
          <a
            href="#"
            className="bg-red-500 text-white font-semibold px-5 py-3 rounded shadow hover:bg-red-700 transition"
          >
            Reparatur einleiten
          </a>
        </div>
        {/* Hamburger mobile */}
        <button
          className="md:hidden flex items-center mr-6"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16"/>
          </svg>
        </button>
      </div>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <button
            className="absolute top-6 right-6"
            onClick={() => setMenuOpen(false)}
            aria-label="Menü schließen"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M6 18L18 6"/>
            </svg>
          </button>
          <div className="flex flex-col items-center justify-center h-full">
            <Image src="/logo.jpg" alt="Phonecare Logo" height={64} width={120} className="h-16 mb-8" />
            <nav className="flex flex-col gap-8 items-center">
              {navLinks.map(link => (
                <a key={link.label} href={link.href} className="text-gray-800 font-medium text-2xl" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                className="bg-red-500 text-white font-semibold px-8 py-4 rounded shadow hover:bg-red-700 transition mt-8 text-center text-xl"
                onClick={() => setMenuOpen(false)}
              >
                Reparatur einleiten
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;