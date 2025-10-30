"use client"
import HeroSlider from "@/components/HeroSlider";
import ReviewConnectWidget from "@/components/ReviewConnectWidget";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const faqs = [

    {
      question: "Wann habt ihr geöffnet?",
      answer: (
        <>
          <strong>Berlin (Otto-Suhr-Allee 39):</strong><br />
          Montag–Freitag: 10:00–20:00<br />
          Samstag: 10:00–18:00<br />
          Sonntag: Geschlossen<br /><br />
          <strong>Potsdam (Dortustraße 23):</strong><br />
          Montag–Freitag: 10:00–18:30<br />
          Samstag: 10:00–18:00<br />
          Sonntag: Geschlossen
        </>
      ),
    },
    {
      question: "Welche Zahlungsarten akzeptiert ihr?",
      answer:
        "Du kannst bei uns per Banküberweisung, PayPal, Kreditkarte (VISA, Mastercard, American Express), Sofort-Überweisung, Giropay oder bar bezahlen.",
    },
    {
      question: "Ich weiß nicht, was an meinem Gerät defekt ist. Was soll ich tun?",
      answer:
        "Kein Problem! Ruf uns einfach an und schildere die Symptome. Wir geben dir eine kostenlose Erstdiagnose und Einschätzung.",
    },
    {
      question: "Mein Defekt ist nicht auf eurer Liste. Könnt ihr trotzdem helfen?",
      answer:
        "Natürlich! Wir finden für jedes Problem eine Lösung, auch wenn es nicht explizit aufgeführt ist.",
    },
    {
      question: "Verwendet ihr Original-Ersatzteile?",
      answer:
        "Für die meisten Smartphones haben wir Originalteile auf Lager und reparieren nach Herstellervorgaben. Für einige Modelle bieten wir auch günstigere Alternativen von Zweit-Herstellern an.",
    },
    {
      question: "Lohnt sich eine Reparatur immer?",
      answer:
        "Meistens ja. Nach der kostenlosen Erstdiagnose erfährst du die Kosten und kannst selbst entscheiden, ob sich die Reparatur für dich lohnt.",
    },
    {
      question: "Bekomme ich eine Rechnung für die Reparatur?",
      answer:
        "Selbstverständlich! Du erhältst für jede Reparatur eine Rechnung.",
    },
  ];

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <HeroSlider />

      {/* Section Gerät auswählen */}
      <div className="w-full max-w-4xl mx-auto px-4 p-10">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
          Wählen Sie Ihr Gerät aus:
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Smartphone */}
          <div className="group relative flex flex-col items-center bg-white rounded-lg shadow transition cursor-pointer min-h-[170px] p-0 overflow-hidden">
            <Image
              src="/phone.jpg"
              alt="Smartphone"
              fill
              className="w-full h-full object-cover opacity-80 absolute inset-0 transition duration-300 group-hover:blur-sm"
              sizes="(max-width: 768px) 100vw, 25vw"
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
            <Image
              src="/notebook.jpg"
              alt="Notebook"
              fill
              className="w-full h-full object-cover opacity-80 absolute inset-0 transition duration-300 group-hover:blur-sm"
              sizes="(max-width: 768px) 100vw, 25vw"
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
            <Image
              src="/pc.jpg"
              alt="PC"
              fill
              className="w-full h-full object-cover opacity-80 absolute inset-0 transition duration-300 group-hover:blur-sm"
              sizes="(max-width: 768px) 100vw, 25vw"
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
            <Image
              src="/tablet.jpg"
              alt="Tablet"
              fill
              className="w-full h-full object-cover opacity-80 absolute inset-0 transition duration-300 group-hover:blur-sm"
              sizes="(max-width: 768px) 100vw, 25vw"
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
      <div className="w-full mx-auto py-15 px-10">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-10 text-center">
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
              <h3 className="font-bold md:text-lg text-md mb-2">REPARATUR BERATUNG</h3>
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
              <h3 className="font-bold  md:text-lg text-md mb-2">ANKAUF / VERKAUF</h3>
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
              <h3 className="font-bold  md:text-lg text-md mb-2">HANDY-ZUBEHÖR</h3>
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
              <h3 className="font-bold  md:text-lg text-md mb-2">PANZER-FOLIEN</h3>
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
              <h3 className="font-bold  md:text-lg text-md mb-2">DATENRETTUNG</h3>
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
              <h3 className="font-bold  md:text-lg text-md mb-2">SOFTWARE-SERVICE</h3>
              <p className="text-gray-700 text-sm">
                Wir unterstützen Sie bei Software-Problemen, Updates, Virenentfernung und Systemoptimierung für Ihre Geräte.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Datenschutz Section */}
      <div className="w-full relative p-16 flex justify-start">
        <Image
          src="/banner.png"
          alt="Privacy Background"
          fill
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          sizes="100vw"
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
      <div className="w-full bg-white relative overflow-hidden pb-10 pt-15 px-10">
        <div className=" relative z-10">
          <h3 className="text-lg md:text-2xl font-bold text-center mb-9">
            Häufige Reparaturleistungen
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            <div className="flex flex-col items-center text-center">
              <Image src="/phone1.png" alt="Display Reparatur" width={112} height={112} className="w-28 h-28" />
              <span className="font-medium text-md">Mikrofonreparatur</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/phone2.png" alt="Akku Austausch" width={112} height={112} className="w-28 h-28" />
              <span className="font-medium text-md">Display Reparatur</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/tablet2.png" alt="Zuverlässige Fehlerdiagnose" width={112} height={112} className="w-28 h-28" />
              <span className="font-medium text-md">Zuverlässige Fehlerdiagnose</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/pc.png" alt="Handy Datenrettung" width={112} height={112} className="w-28 h-28" />
              <span className="font-medium text-md">PC Datenrettung</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/phone3.png" alt="Akku Austausch" width={112} height={112} className="w-28 h-28" />
              <span className="font-medium text-md">Akku Austausch</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/phone4.png" alt="Wasserschaden Reparatur" width={112} height={112} className="w-28 h-28" />
              <span className="font-medium text-md">Wasserschaden Reparatur</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-8">
            <Image src="/apple.png" alt="Apple" width={56} height={56} className="w-14 h-14 object-contain" />
            <Image src="/samsung.png" alt="Samsung" width={80} height={80} className="w-20 h-20 object-contain" />
            <Image src="/huawei.png" alt="Huawei" width={80} height={80} className="w-20 h-20 object-contain" />
            <Image src="/xiaomi.png" alt="Xiaomi" width={80} height={80} className="w-20 h-20 object-contain" />
            <Image src="/google.png" alt="Google" width={80} height={80} className="w-20 h-20 object-contain" />
            <Image src="/sony.png" alt="Sony" width={80} height={80} className="w-20 h-20 object-contain" />
          </div>
        </div>
      </div>

      {/* Unsere Standorte Section */}
      <div className="w-full mx-auto px-10 py-15 bg-teal-50">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
          Unsere Standorte
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {/* Standort 1 */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <Image
              src="/Berlin.png"
              alt="Standort Berlin"
              width={720}
              height={180}
              className="rounded-lg mb-4 object-cover w-full h-[240px]"
            />
            <h4 className="font-bold text-lg mb-2">Berlin</h4>
            <p className="text-gray-800 text-sm mb-2">
              Otto-Suhr-Allee 39, 10585 Berlin, Deutschland
            </p>
            <div className="flex flex-col md:flex-row gap-4 w-full mt-2">
              <a
                href="tel:+493046995517"
                className="bg-teal-500 text-white font-semibold px-5 py-2 rounded shadow hover:bg-teal-700 transition w-full flex items-center justify-center"
              >
                <i className="fa-solid fa-phone mr-2"></i>
                +49 30 46995517
              </a>
              <a
                href="https://www.google.com/maps/place/HANDY+CHIRURG/@52.51465,13.3142702,17z/data=!4m15!1m8!3m7!1s0x47a8513cb69cc529:0x70b375cebabe786a!2sHANDY+CHIRURG!8m2!3d52.51465!4d13.3142702!10e1!16s%2Fg%2F11pz28pydv!3m5!1s0x47a8513cb69cc529:0x70b375cebabe786a!8m2!3d52.51465!4d13.3142702!16s%2Fg%2F11pz28pydv?entry=ttu&g_ep=EgoyMDI1TAoyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 text-white font-semibold px-5 py-2 rounded shadow hover:bg-red-700 transition w-full flex items-center justify-center"
              >
                <i className="fa-solid fa-location-dot mr-2"></i>
                Route
              </a>
            </div>
          </div>
          {/* Standort 2 */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <Image
              src="/Potsdam.png"
              alt="Standort Potsdam"
              width={720}
              height={180}
              className="rounded-lg mb-4 object-cover w-full h-[240px]"
            />
            <h4 className="font-bold text-lg mb-2">Potsdam</h4>
            <p className="text-gray-700 text-sm mb-2">
              Dortustraße 23, 14467 Potsdam, Deutschland
            </p>
            <div className="flex flex-col md:flex-row gap-4 w-full mt-2">
              <a
                href="tel:+4933129080953"
                className="bg-teal-500 text-white font-semibold px-5 py-2 rounded shadow hover:bg-teal-700 transition w-full flex items-center justify-center"
              >
                <i className="fa-solid fa-phone mr-2"></i>
                +49 331 29080953
              </a>
              <a
                href="https://www.google.com/maps/place/Handy+Chirurg+Potsdam/@52.3997074,13.0531279,17.25z/data=!4m6!3m5!1s0x47a8f5923a5c2a67:0x81abff878300550!8m2!3d52.39961!4d13.0531501!16s%2Fg%2F11txtydphy?entry=ttu&g_ep=EgoyMDI1TAoyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 text-white font-semibold px-5 py-2 rounded shadow hover:bg-red-700 transition w-full flex items-center justify-center"
              >
                <i className="fa-solid fa-location-dot mr-2"></i>
                Route
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ablauf/Etappen Timeline Section */}
      <div className="w-full py-15 px-10">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
          So funktioniert&apos;s
        </h2>
        <div className="relative flex flex-col md:flex-row items-center md:items-stretch justify-between">
          {[
            {
              icon: "fa-envelope-open-text",
              title: "Anfrage senden oder anrufen",
              desc: "Senden Sie eine Reparaturanfrage oder kontaktieren Sie uns telefonisch.",
            },
            {
              icon: "fa-file-invoice-dollar",
              title: "Preisabschätzung erhalten",
              desc: "Sie erhalten von uns eine unverbindliche Preisabschätzung für Ihre Reparatur.",
            },
            {
              icon: "fa-shop",
              title: "Gerät vorbeibringen oder zusenden",
              desc: "Bringen Sie Ihr Gerät in unseren Shop oder senden Sie es uns per Post zu.",
            },
            {
              icon: "fa-screwdriver-wrench",
              title: "Reparatur & Abholung",
              desc: "Ihr Gerät wird repariert und Sie können es wieder abholen oder erhalten es zurückgesendet.",
            },
          ].map((step, idx, arr) => (
            <div key={idx} className="flex-1 flex flex-col items-center text-center relative px-2">
              {/* Timeline connector between numbers */}
              {idx !== arr.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-0 w-full h-1 bg-red-200 z-0"></div>
              )}
              {/* Timeline number in square */}
              <div className="relative z-10">
                <span className="w-16 h-16 rounded-lg bg-red-500 flex items-center justify-center text-white mb-4 mx-auto border-4 border-red-100 text-3xl font-extrabold">
                  {idx + 1}
                </span>
              </div>
              <h4 className="font-bold text-xl mb-2">{step.title}</h4>
              <p className="text-gray-700 text-md md:mb-0 mb-7">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Warum uns wählen Section */}
      <div className="w-full mx-auto px-10 py-15 relative overflow-hidden">
        {/* Image de fond avec effet rouge et transparence */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/header2.jpg"
            alt="Warum uns wählen Hintergrund"
            fill
            className="object-cover opacity-10"
            style={{ zIndex: 0 }}
          />
          <div className="absolute inset-0 bg-red-400 opacity-20"></div>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-10 text-center relative z-10">
          Warum uns wählen?
        </h2>
        <ul className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <li className="flex items-start gap-5">
            <span className="flex items-center justify-center w-26 h-14 rounded-full bg-teal-100 text-teal-600 text-2xl mt-1">
              <i className="fa-solid fa-money-bill-wave"></i>
            </span>
            <div>
              <h4 className="font-bold text-lg mb-1">Transparente Preise</h4>
              <p className="text-gray-700 text-sm">
                Sie erhalten von Anfang an eine klare Information über die Reparaturkosten – keine versteckten Gebühren.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-5">
            <span className="flex items-center justify-center w-26 h-14 rounded-full bg-teal-100 text-teal-600 text-2xl mt-1">
              <i className="fa-solid fa-warehouse"></i>
            </span>
            <div>
              <h4 className="font-bold text-lg mb-1">Großes Ersatzteillager</h4>
              <p className="text-gray-700 text-sm">
                Wir reparieren Ihr Gerät mit Originalteilen, die wir von allen führenden Herstellern vorrätig haben.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-5">
            <span className="flex items-center justify-center w-34 h-14 rounded-full bg-teal-100 text-teal-600 text-2xl mt-1">
              <i className="fa-solid fa-calendar-xmark"></i>
            </span>
            <div>
              <h4 className="font-bold text-lg mb-1">Ohne Termin</h4>
              <p className="text-gray-700 text-sm">
                Sie können Ihr defektes Gerät jederzeit in eine unserer Filialen bringen – ganz ohne vorherige Terminvereinbarung.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-5">
            <span className="flex items-center justify-center w-26 h-14 rounded-full bg-teal-100 text-teal-600 text-2xl mt-1">
              <i className="fa-solid fa-coins"></i>
            </span>
            <div>
              <h4 className="font-bold text-lg mb-1">Kostengünstige Reparatur</h4>
              <p className="text-gray-700 text-sm">
                Wir reparieren nur das, was wirklich notwendig ist – für eine faire und günstige Lösung.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-5">
            <span className="flex items-center justify-center w-26 h-14 rounded-full bg-teal-100 text-teal-600 text-2xl mt-1">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <div>
              <h4 className="font-bold text-lg mb-1">Kostenlose Fehlerdiagnose</h4>
              <p className="text-gray-700 text-sm">
                Ein kurzer Blick genügt, um den Fehler zu erkennen – die erste Diagnose ist für Sie kostenlos!
              </p>
            </div>
          </li>
          <li className="flex items-start gap-5">
            <span className="flex items-center justify-center w-34 h-14 rounded-full bg-teal-100 text-teal-600 text-2xl mt-1">
              <i className="fa-solid fa-user-graduate"></i>
            </span>
            <div>
              <h4 className="font-bold text-lg mb-1">Große Fachkompetenz</h4>
              <p className="text-gray-700 text-sm">
                Ihr Gerät wird von erfahrenen Spezialisten repariert – unser Team kennt sich bestens mit Handys, Laptops und Tablets aus.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Google Reviews Section */}
      <div className="w-full py-20 px-10">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
          Kundenbewertungen
        </h2>
        <ReviewConnectWidget />
      </div>
     

      {/* FAQ Section */}
      <div className="w-full bg-gray-100 py-16 px-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
          Häufig gestellte Fragen
        </h2>
        <div className="space-y-4 max-w-5xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-lg bg-white shadow">
              <button
                className="w-full text-left px-6 py-4 font-semibold text-gray-800 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                aria-expanded={openFaq === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span>{faq.question}</span>
                <span className="ml-4 text-xl">
                  {openFaq === idx ? "−" : "+"}
                </span>
              </button>
              {openFaq === idx && (
                <div
                  id={`faq-answer-${idx}`}
                  className="px-6 pb-4 text-gray-700 animate-fade-in"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Banner Call Section  */}
      <div className="w-full relative flex items-center min-h-[150px]">
        <Image
          src="/image1.png"
          alt="Banner Call"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="flex-1 flex flex-col items-center gap-4 px-10 z-10 relative">
          <span className="text-white lg:text-2xl md:text-md text-xs font-bold mr-6 drop-shadow-lg text-center">
            Rufen Sie uns an und erhalten Sie jetzt ein kostenloses Angebot
          </span>
          <a
            href="tel:+493046995517"
            className="bg-red-500 text-white font-bold px-8 py-3 rounded-md shadow-lg lg:text-md text-sm text-xs hover:bg-red-700"
          >
            Jetzt anrufen
          </a>
        </div>
      </div>


    </>
  );
}
