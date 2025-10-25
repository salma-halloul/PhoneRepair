"use client"
import { useState } from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const FloatMessage = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="bg-black text-white rounded-full shadow-lg p-4 hover:p-5 flex items-center justify-center transition cursor-pointer"
        onClick={() => setShowContact((v) => !v)}
        aria-label="Kontakt öffnen"
      >
        <FaEnvelope size={28} />
      </button>
      {showContact && (
        <div className="absolute bottom-16 right-0 mb-4 w-72 bg-white rounded-lg shadow-lg p-4 flex flex-col items-start animate-fade-in">
          {/* Logo en haut */}
          <Image
            src="/logo.jpg"
            alt="Logo Handy Chirurg"
            width={150}
            height={100}
            className="mb-8"
          />
          <span className="mb-3 text-gray-800 font-bold text-xl">Hallo!</span>
          <span className="mb-7 text-gray-800 text-sm font-semibold">
            Sie können uns bequem über folgende Kanäle erreichen:
          </span>
          {/* Contact options box */}
          <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 flex flex-col gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/491234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-800 hover:underline"
            >
              <span className="bg-green-100 rounded-full p-2 flex items-center justify-center">
                <FaWhatsapp className="text-green-600" size={20} />
              </span>
              WhatsApp schreiben
            </a>
            {/* Call us option */}
            <a
              href="tel:+493046995517"
              className="flex items-center gap-2 text-gray-800 hover:underline"
            >
              <span className="bg-blue-100 rounded-full p-2 flex items-center justify-center">
                <i className="fa-solid fa-phone text-lg text-blue-600" />
              </span>
              Rufen Sie uns an
            </a>
            {/* Email */}
            <a
              href="mailto:info@handy-chirurg.de"
              className="flex items-center gap-2 text-gray-800 hover:underline"
            >
              <span className="bg-red-100 rounded-full p-2 flex items-center justify-center">
                <FaEnvelope className="text-secondary" size={20} />
              </span>
              E-Mail senden
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatMessage;