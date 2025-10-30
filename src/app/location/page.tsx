"use client";
import Image from "next/image";

export default function Location() {
  return (
    <div className="w-full mx-auto px-10 py-20 mt-24">
      {/* Introduction */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
        Unsere Standorte
      </h1>
      <p className="text-gray-700 text-md mb-10 text-center">
        Besuchen Sie uns in Berlin oder Potsdam! Unsere Filialen sind zentral
        gelegen und einfach zu erreichen. Wir freuen uns auf Ihren Besuch und
        stehen Ihnen für alle Fragen rund um Reparaturen, Ankauf und Zubehör zur
        Verfügung.
      </p>
      {/* Berlin */}
      <div className="bg-white rounded-lg inset-shadow-xs shadow mb-8 flex flex-col md:flex-row overflow-hidden items-center justify-center">
        {/* Image */}
        <div className="md:w-1/3 w-full relative flex items-center justify-center">
          <Image
            src="/Berlin.png"
            alt="Standort Berlin"
            width={1000}
            height={220}
            className="object-cover w-full h-[220px] brightness-75"
          />
        </div>
        {/* Texte + bouton centré verticalement mais aligné à gauche */}
        <div className="md:w-1/3 w-full flex flex-col items-center md:items-start md:text-left text-center px-8 py-3">
          <h2 className="font-bold text-xl md:text-2xl text-gray-900 mb-2">
            Berlin
          </h2>
          <p className="text-gray-800 text-sm mb-2">
            Otto-Suhr-Allee 39, 10585 Berlin, Deutschland
          </p>
          <div className="mb-2 text-gray-700 text-sm">
            <strong>Öffnungszeiten:</strong>
            <br />
            Mo–Fr: 10:00–20:00
            <br />
            Sa: 10:00–18:00
            <br />
            So: Geschlossen
          </div>
          <div className="flex flex-col mt-4">
            <a
              href="tel:+493046995517"
              className="bg-teal-500 text-white font-semibold px-5 py-2 rounded shadow hover:bg-teal-700 transition"
            >
              <i className="fa-solid fa-phone mr-2"></i>
              Jetzt anrufen
            </a>
          </div>
        </div>
        {/* Map */}
        <div className="md:w-1/3 w-full flex items-center justify-center min-h-[220px]">
          <div className="w-full h-full flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.813546353177!2d13.3142702!3d52.51465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8513cb69cc529%3A0x70b375cebabe786a!2sHANDY%20CHIRURG!5e0!3m2!1sde!2sde!4v1718030000000!5m2!1sde!2sde"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      {/* Potsdam */}
      <div className="bg-white inset-shadow-xs shadow rounded-lg p-0 mb-8 flex flex-col md:flex-row overflow-hidden items-center justify-center">
        {/* Image */}
        <div className="md:w-1/3 w-full relative flex items-center justify-center">
          <Image
            src="/Potsdam.png"
            alt="Standort Potsdam"
            width={1000}
            height={220}
            className="object-cover w-full h-[220px] brightness-75"
          />
        </div>
        {/* Texte + bouton centré verticalement mais aligné à gauche */}
        <div className="md:w-1/3 w-full flex flex-col items-center md:items-start md:text-left text-center px-8 py-3">
          <h2 className="font-bold text-xl md:text-2xl text-gray-900 mb-2 text-center">
            Potsdam
          </h2>
          <p className="text-gray-800 text-sm mb-2">
            Dortustraße 23, 14467 Potsdam, Deutschland
          </p>
          <div className="mb-2 text-gray-700 text-sm">
            <strong>Öffnungszeiten:</strong>
            <br />
            Mo–Fr: 10:00–18:30
            <br />
            Sa: 10:00–18:00
            <br />
            So: Geschlossen
          </div>
          <div className="flex flex-col mt-4">
            <a
              href="tel:+4933129080953"
              className="bg-teal-500 text-white font-semibold px-5 py-2 rounded shadow hover:bg-teal-700 transition"
            >
              <i className="fa-solid fa-phone mr-2"></i>
              Jetzt anrufen
            </a>
          </div>
        </div>
        {/* Map */}
        <div className="md:w-1/3 w-full flex items-center justify-center min-h-[220px]">
          <div className="w-full h-full flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.813546353177!2d13.0531279!3d52.3997074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f5923a5c2a67%3A0x81abff878300550!2sHandy%20Chirurg%20Potsdam!5e0!3m2!1sde!2sde!4v1718030000000!5m2!1sde!2sde"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      {/* Section contact rapide */}
      <div className="mt-12 bg-teal-50 rounded-lg p-6 text-center shadow">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Kontaktieren Sie uns direkt
        </h3>
        <p className="text-gray-700 mb-4">
          Sie haben Fragen oder möchten einen Reparaturtermin vereinbaren? Rufen
          Sie uns einfach an oder schreiben Sie uns eine E-Mail!
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+493046995517"
            className="bg-teal-500 text-white font-bold px-6 py-2 rounded shadow hover:bg-teal-700 transition flex items-center justify-center"
          >
            <i className="fa-solid fa-phone mr-2"></i>
            Berlin: +49 30 46995517
          </a>
          <a
            href="tel:+4933129080953"
            className="bg-teal-500 text-white font-bold px-6 py-2 rounded shadow hover:bg-teal-700 transition flex items-center justify-center"
          >
            <i className="fa-solid fa-phone mr-2"></i>
            Potsdam: +49 331 29080953
          </a>
          <a
            href="mailto:info@handy-chirurg.de"
            className="bg-red-500 text-white font-bold px-6 py-2 rounded shadow hover:bg-red-700 transition flex items-center justify-center"
          >
            <i className="fa-solid fa-envelope mr-2"></i>
            info@handy-chirurg.de
          </a>
        </div>
      </div>
    </div>
  );
}
