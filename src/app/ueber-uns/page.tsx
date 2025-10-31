import Image from "next/image";

export default function UeberUnsPage() {
  return (
    <main className=" mt-24 py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
        Über uns
      </h1>
      <p className="text-center text-gray-700 mb-14">
        Ihr Spezialist für die Reparatur von Smartphones, Tablets und Elektronik
        – kompetent, schnell und transparent.
      </p>
      <div className="flex flex-col md:flex-row lg:gap-8 gap-4 lg:px-10 px-5">
        <Image
          src="/handychirurg.webp"
          alt="Handychirurg"
          width={420}
          height={220}
          className=" shadow-md"
        />
        <div className="p-6 flex-1 border-l-4 border-red-400 flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <span className="text-red-500 mr-2">
              <i className="fa-solid fa-screwdriver-wrench text-xl"></i>
            </span>
            <span className="font-semibold text-lg">Warum Handy Chirurg?</span>
          </div>
          <p className="mb-3 text-sm lg:text-md">
            Mit jahrelanger Erfahrung in der Reparatur von elektronischen Geräten
            ist Handy Chirurg Ihr vertrauenswürdiger Experte, um Smartphones, Tablets
            und andere Geräte wieder zum Leben zu erwecken.
          </p>
          <p className="mb-3 text-sm lg:text-md">
            Wir beherrschen sowohl komplexe Hardware-Reparaturen als auch die
            schwierigsten Softwareprobleme und bieten stets maßgeschneiderte und
            nachhaltige Lösungen an.
          </p>
          <p className="mb-3 text-sm lg:text-md">
            Unser Anspruch: Kompetenz, Schnelligkeit und Transparenz zu vereinen,
            um Ihnen einen hochwertigen Service zu garantieren – unabhängig von
            der Art des Defekts.
          </p>
          <p className="italic text-gray-600 mt-2 text-sm lg:text-md">
            Vertrauen Sie auf unsere Expertise – Ihr Gerät ist bei uns in besten
            Händen!
          </p>
        </div>
      </div>

      {/* Zahlen Section */}
      <section className="lg:px-10 px-5 py-10">
        <h2 className="text-xl font-bold text-center mb-6">
          Unsere Zahlen
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-8 gap-4">
          <div className="bg-white rounded shadow p-5 flex flex-col items-center">
            <i className="fa-solid fa-mobile-screen text-3xl text-red-500 mb-3"></i>
            <span className="lg:text-4xl text-2xl font-semibold text-black mb-2">+5.000</span>
            <span className="text-gray-700 font-medium lg:text-md text-sm text-center">Geräte repariert</span>
          </div>
          <div className="bg-white rounded shadow p-5 flex flex-col items-center">
            <i className="fa-solid fa-hourglass-half text-3xl text-red-500 mb-3"></i>
            <span className="lg:text-4xl text-2xl font-semibold text-black mb-2">10</span>
            <span className="text-gray-700 font-medium lg:text-md text-sm text-center">Jahre Erfahrung</span>
          </div>
          <div className="bg-white rounded shadow p-5 flex flex-col items-center">
            <i className="fa-solid fa-face-smile text-3xl text-red-500 mb-3"></i>
            <span className="lg:text-4xl text-2xl font-semibold text-black mb-2">99%</span>
            <span className="text-gray-700 font-medium lg:text-md text-sm text-center">Zufriedene Kunden</span>
          </div>
          <div className="bg-white rounded shadow p-5 flex flex-col items-center">
            <i className="fa-solid fa-star text-3xl text-red-500 mb-3"></i>
            <span className="lg:text-4xl text-2xl font-semibold text-black mb-2">4,9</span>
            <span className="text-gray-700 font-medium lg:text-md text-sm text-center">Durchschnittliche Bewertung</span>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section className="lg:px-10 px-5 py-5">
        <div className="bg-gray-100 rounded-xl shadow p-5">
          <div className="flex flex-col md:flex-row items-center lg:gap-17 gap-5">
            <div className="flex-1 flex justify-center">
              <Image
                src="/contact.jpg"
                alt="Kontakt"
                width={520}
                height={220}
                className="rounded shadow-md object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center items-start">
              <h2 className="lg:text-xl text-lg font-bold mb-4 text-black">
                <i className="fa-solid fa-phone text-red-500 mr-3 lg:text-xl text-lg"></i>
                Reparatur? Rufen Sie uns an
              </h2>
              <p className="mb-6 text-black lg:text-md text-sm">
                Rufen Sie uns an unter für sofortige Unterstützung und persönlichen Service in unserer Filiale. Wir sind hier, um Ihnen zu helfen!
              </p>
              <div className="flex flex-col">
                <a
                  href="tel:02216776432"
                  className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-8 rounded shadow lg:text-lg text-md flex items-center gap-3 transition"
                >
                  Rufen Sie uns an
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
