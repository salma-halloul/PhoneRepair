"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/small-header-banner.png",
    title: "HANDY CHIRURG.",
    subtitle: "Ihre Experten für Reparaturen.",
  },
  {
    image: "/header2.png",
    title: "Express Service.",
    subtitle: "Reparatur in weniger als 1 Stunde.",
  },
  {
    image: "/header3.png",
    title: "Originalteile Garantie.",
    subtitle: "Nur geprüfte Ersatzteile für Ihr Gerät.",
  },
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // Change d'image toutes les 4 secondes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-end bg-transparent mt-26 relative h-[490px] md:h-[400px] overflow-hidden">
      {/* Images en slide horizontal */}
      <div
        className="absolute inset-0 w-full h-full flex transition-transform duration-700"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, idx) => (
          <Image
            key={idx}
            src={slide.image}
            width={600}
            height={600}
            alt={`Header Banner ${idx + 1}`}
            className="w-full h-full object-cover opacity-40 flex-shrink-0"
            style={{ minWidth: "100%" }}
          />
        ))}
      </div>
      {/* Bloc de texte */}
      <div className="relative z-10 w-full flex flex-col items-start pt-10 lg:pt-32 md:pt-24 pb-10">
        <div className="p-6 md:ml-8 md:text-left text-center">
          <h1 className="md:text-5xl text-2xl font-bold text-black md:mb-3">
            {slides[current].title}
          </h1>
          <h1 className="md:text-5xl text-2xl font-bold text-gray-900 md:mb-4 mb-14">
            {slides[current].subtitle}
          </h1>
          {current === 0 ? (
            <>
              <ul className="text-gray-800 text-md grid md:grid-cols-2 md:gap-x-8 gap-y-3">
                <li className="flex items-center gap-2 font-bold">
                  <i className="fa-solid fa-check text-teal-600"></i>
                  <span>Zertifizierte Techniker</span>
                </li>
                <li className="flex items-center gap-2 font-bold">
                  <i className="fa-solid fa-check text-teal-600"></i>
                  <span>Schnelle Express-Reparatur</span>
                </li>
                <li className="flex items-center gap-2 font-bold">
                  <i className="fa-solid fa-check text-teal-600"></i>
                  <span>Original-Ersatzteile</span>
                </li>
                <li className="flex items-center gap-2 font-bold">
                  <i className="fa-solid fa-check text-teal-600"></i>
                  <span>2 Standorte deutschlandweit</span>
                </li>
              </ul>
            </>
          ) : current === 1 ? (
            <div className="mt-8 text-lg font-medium text-gray-800">
              <p>
                Profitieren Sie von unserem{" "}
                <span className="text-teal-600 font-bold">
                  Express Reparaturservice
                </span>{" "}
                – schnell, zuverlässig und ohne Termin!
              </p>
            </div>
          ) : (
            <div className="mt-8 text-lg font-medium text-gray-800">
              <p>
                Wir verwenden ausschließlich{" "}
                <span className="text-teal-600 font-bold">Originalteile</span> und
                bieten Ihnen{" "}
                <span className="text-teal-600 font-bold">Garantie</span> auf
                alle Reparaturen.
              </p>
            </div>
          )}
          {/* Bouton mobile sous la liste - affiché sur toutes les images */}
          <a
            href="#"
            className="bg-red-500 text-white mt-12 font-semibold px-5 py-3 rounded shadow hover:bg-red-700 transition mt-8 block md:hidden"
          >
            Reparatur einleiten
          </a>
        </div>
      </div>
      {/* Points d'indicateur */}
      <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Aller à la slide ${idx + 1}`}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none
              ${current === idx ? "bg-teal-500" : "bg-teal-300"}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;