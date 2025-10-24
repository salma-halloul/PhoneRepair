import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <>
      <HeroSlider/>

      {/* Section Gerät auswählen */}
      <div className="w-full max-w-4xl mx-auto px-4 p-10">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
          Wählen Sie Ihr Gerät aus:
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Smartphone */}
          <div className="group relative flex flex-col items-center bg-white rounded-lg shadow transition cursor-pointer min-h-[170px] p-0 overflow-hidden">
            <img
              src="/phone.jpg"
              alt="Smartphone"
              className="w-full h-full object-cover opacity-80 absolute inset-0 transition duration-300 group-hover:blur-sm"
            />
            <span className="absolute bottom-0 left-0 w-full flex justify-center">
              <span className="backdrop-blur-md bg-white/60 px-42 py-2 rounded-t-lg font-medium text-gray-800 text-lg">
                Smartphone
              </span>
            </span>
            <a
              href="#"
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <span className="bg-red-500 text-white text-sm font-semibold px-5 py-3 rounded shadow hover:bg-red-700 transition">
                Reparatur einleiten
              </span>
            </a>
          </div>
          {/* Notebook */}
          <div className="group relative flex flex-col items-center bg-white rounded-lg shadow transition cursor-pointer min-h-[170px] p-0 overflow-hidden">
            <img
              src="/notebook.jpg"
              alt="Notebook"
              className="w-full h-full object-cover opacity-80 absolute inset-0 transition duration-300 group-hover:blur-sm"
            />
            <span className="absolute bottom-0 left-0 w-full flex justify-center">
              <span className="backdrop-blur-md bg-white/60 px-42 py-2 rounded-t-lg font-medium text-gray-800 text-lg">
                Notebook
              </span>
            </span>
            <a
              href="#"
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <span className="bg-red-500 text-white text-sm font-semibold px-5 py-3 rounded shadow hover:bg-red-700 transition">
                Reparatur einleiten
              </span>
            </a>
          </div>
          {/* PC */}
          <div className="group relative flex flex-col items-center bg-white rounded-lg shadow transition cursor-pointer min-h-[170px] p-0 overflow-hidden">
            <img
              src="/pc.jpg"
              alt="PC"
              className="w-full h-full object-cover opacity-80 absolute inset-0 transition duration-300 group-hover:blur-sm"
            />
            <span className="absolute bottom-0 left-0 w-full flex justify-center">
              <span className="backdrop-blur-md bg-white/60 px-42 py-2 rounded-t-lg font-medium text-gray-800 text-lg">
                PC
              </span>
            </span>
            <a
              href="#"
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <span className="bg-red-500 text-white text-sm font-semibold px-5 py-3 rounded shadow hover:bg-red-700 transition">
                Reparatur einleiten
              </span>
            </a>
          </div>
          {/* Tablet */}
          <div className="group relative flex flex-col items-center bg-white shadow transition cursor-pointer min-h-[170px] p-0 overflow-hidden">
            <img
              src="/tablet.jpg"
              alt="Tablet"
              className="w-full h-full object-cover opacity-80 absolute inset-0 transition duration-300 group-hover:blur-sm"
            />
            <span className="absolute bottom-0 left-0 w-full flex justify-center">
              <span className="backdrop-blur-md bg-white/60 px-42 py-2 rounded-t-lg font-medium text-gray-800 text-lg">
                Tablet
              </span>
            </span>
            <a
              href="#"
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <span className="bg-red-500 text-white text-sm rounded font-semibold px-5 py-3 shadow hover:bg-red-700 transition">
                Reparatur einleiten
              </span>
            </a>
          </div>
        </div>
      </div>


      {/* Info Section: Schnelle und günstige Handy Reparatur in Berlin */}
      <div className="w-full p-10 bg-gradient-to-t from-red-50 via-red-100 to-white">
        <h2 className="text-xl md:text-2xl font-bold text-red-900 mb-4 text-center">
          Schnelle und günstige Handy Reparatur in Berlin
        </h2>
        <p className="text-gray-900 text-md mb-3 text-center">
          Willkommen bei Handy Chirurg – Ihrer professionellen Handy Werkstatt in
          Berlin. Wir sind spezialisiert auf die Reparatur von Smartphones,
          Tablets und Laptops aller führenden Marken. Egal ob Apple iPhone, iPad,
          MacBook, Samsung Galaxy, Huawei, Xiaomi, Google Pixel, OnePlus, Sony
          oder andere Hersteller – unsere erfahrenen Techniker bringen Ihr Gerät
          schnell und zuverlässig wieder in Topform.
        </p>
        <p className="text-gray-900 text-md mb-3 text-center">
          Ob iPhone Display Reparatur, Akku Austausch, defekter Ladeanschluss oder
          Wasserschaden – wir kümmern uns mit höchster Präzision und Sorgfalt um
          jede Reparatur. Unsere zertifizierten Techniker verwenden ausschließlich
          hochwertige Ersatzteile, um eine langfristige Leistung und volle
          Kundenzufriedenheit zu gewährleisten.
        </p>
        {/* 3 Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {/* Techniciens Qualifiés */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <i className="fa-solid fa-user-gear text-3xl text-[var(--primary)] mb-4"></i>
            <h4 className="font-bold text-lg mb-2">Qualifizierte Techniker</h4>
            <p className="text-gray-700 text-sm">
              Unsere Experten beherrschen selbst die komplexesten Reparaturen und setzen fortschrittliche Techniken für optimalen Service ein.
            </p>
          </div>
          {/* Pièces de Qualité */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <i className="fa-solid fa-microchip text-3xl text-[var(--primary)] mb-4"></i>
            <h4 className="font-bold text-lg mb-2">Hochwertige Ersatzteile</h4>
            <p className="text-gray-700 text-sm">
              Wir verwenden ausschließlich 100% originale oder hochwertige Komponenten, um die Langlebigkeit Ihres Geräts zu gewährleisten.
            </p>
          </div>
          {/* Intervention Rapide */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <i className="fa-solid fa-bolt text-3xl text-[var(--primary)] mb-4"></i>
            <h4 className="font-bold text-lg mb-2">Schnelle Abwicklung</h4>
            <p className="text-gray-700 text-sm">
              Profitieren Sie von unserem Express-Service und erhalten Sie Ihr Gerät schnellstmöglich in einwandfreiem Zustand zurück.
            </p>
          </div>
        </div>
      </div>


      {/* Services Section */}
      <div className="w-full mx-auto p-10">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
          Was wir reparieren & anbieten
        </h2>
        {/* Services grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* REPARATUR BERATUNG */}
          <div className="flex items-start gap-6 relative">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100">
                <i className="fa-solid fa-screwdriver-wrench text-2xl text-red-500"></i>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">REPARATUR BERATUNG</h3>
              <p className="text-gray-700 text-sm">
                Wir beraten Sie kompetent zu allen Reparaturmöglichkeiten für Ihr Gerät und finden gemeinsam die beste Lösung.
              </p>
            </div>
          </div>
          {/* ANKAUF / VERKAUF */}
          <div className="flex items-start gap-6 relative">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100">
                <i className="fa-solid fa-arrows-rotate text-2xl text-red-500"></i>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">ANKAUF / VERKAUF</h3>
              <p className="text-gray-700 text-sm">
                Wir kaufen Ihr altes Gerät an oder bieten Ihnen geprüfte, gebrauchte Geräte zu attraktiven Preisen an.
              </p>
            </div>
          </div>
          {/* HANDY-ZUBEHÖR */}
          <div className="flex items-start gap-6 relative">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100">
                <i className="fa-solid fa-mobile-screen-button text-2xl text-red-500"></i>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">HANDY-ZUBEHÖR</h3>
              <p className="text-gray-700 text-sm">
                Entdecken Sie unser großes Sortiment an hochwertigem Zubehör für Ihr Smartphone, Tablet oder Notebook.
              </p>
            </div>
          </div>
          {/* PANZER-FOLIEN */}
          <div className="flex items-start gap-6 relative">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100">
                <i className="fa-solid fa-shield-halved text-2xl text-red-500"></i>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">PANZER-FOLIEN</h3>
              <p className="text-gray-700 text-sm">
                Wir bieten professionelle Anbringung von Panzer-Folien für optimalen Schutz Ihres Displays – direkt vor Ort.
              </p>
            </div>
          </div>
          {/* DATENRETTUNG */}
          <div className="flex items-start gap-6 relative">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100">
                <i className="fa-solid fa-database text-2xl text-red-500"></i>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">DATENRETTUNG</h3>
              <p className="text-gray-700 text-sm">
                Wir retten Ihre wichtigen Daten von defekten oder beschädigten Geräten – schnell, sicher und zuverlässig.
              </p>
            </div>
          </div>
          {/* SOFTWARE-SERVICE */}
          <div className="flex items-start gap-6 relative">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100">
                <i className="fa-solid fa-laptop-code text-2xl text-red-500"></i>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">SOFTWARE-SERVICE</h3>
              <p className="text-gray-700 text-sm">
                Wir unterstützen Sie bei Software-Problemen, Updates, Virenentfernung und Systemoptimierung für Ihre Geräte.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Datenschutz Section */}
      <div className="w-full relative p-16 flex justify-start">
        <img
          src="/banner.png"
          alt="Privacy Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-xl text-left">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Datenschutz
          </h2>
          <p className="text-gray-800 text-md">
            Unser Unternehmen legt besonderen Wert auf den Schutz Ihrer Daten. Keine Informationen von Ihrem Gerät werden an Dritte weitergegeben. Wir respektieren unsere Kunden und deren Privatsphäre.
          </p>
        </div>
      </div>

      {/* Häufige Reparaturleistungen Section */}
      <div className="w-full bg-white relative overflow-hidden p-10">
        <div className=" relative z-10">
          <h3 className="text-lg md:text-2xl font-bold text-center mb-8">
            Häufige Reparaturleistungen
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            <div className="flex flex-col items-center text-center">
              <img src="/phone1.png" alt="Display Reparatur" className="w-28 h-28" />
              <span className="font-medium text-md">Mikrofonreparatur</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/phone2.png" alt="Akku Austausch" className="w-28 h-28" />
              <span className="font-medium text-md">Display Reparatur</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/tablet2.png" alt="Zuverlässige Fehlerdiagnose" className="w-28 h-28" />
              <span className="font-medium text-md">Zuverlässige Fehlerdiagnose</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/pc.png" alt="Handy Datenrettung" className="w-28 h-28" />
              <span className="font-medium text-md">PC Datenrettung</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/phone3.png" alt="Akku Austausch" className="w-28 h-28" />
              <span className="font-medium text-md">Akku Austausch</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/phone4.png" alt="Wasserschaden Reparatur" className="w-28 h-28" />
              <span className="font-medium text-md">Wasserschaden Reparatur</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-8">
            <img src="/apple.png" alt="Apple" className="w-14 h-14 object-contain" />
            <img src="/samsung.png" alt="Samsung" className="w-20 h-20 object-contain" />
            <img src="/huawei.png" alt="Huawei" className="w-20 h-20 object-contain" />
            <img src="/xiaomi.png" alt="Xiaomi" className="w-20 h-20 object-contain" />
            <img src="/google.png" alt="Google" className="w-20 h-20 object-contain" />
            <img src="/sony.png" alt="Sony" className="w-20 h-20 object-contain" />
          </div>
        </div>
      </div>

    </>
  );
}
