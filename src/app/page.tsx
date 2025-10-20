export default function Home() {
  return (
    <>
      <div className="w-full flex justify-end bg-transparent relative h-[490px] md:h-[400px]">
        {/* Image de fond avec opacité réduite */}
        <img
          src="/small-header-banner2.png"
          alt="Header Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        {/* Bloc de texte */}
        <div className="relative z-10 w-full flex flex-col items-start pt-10 md:pt-32 pb-10">
          <div className="p-6 md:ml-8 md:text-left text-center">
            <h1 className="md:text-5xl text-2xl font-bold text-black md:mb-3">
              HANDY CHIRURG.
            </h1>
            <h1 className="md:text-5xl text-2xl font-bold text-gray-900 md:mb-4 mb-14">
              Ihre Experten für Reparaturen.
            </h1>
            <ul className="text-gray-800 text-md grid md:grid-cols-2 md:gap-x-8 gap-y-3">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <span>Zertifizierte Techniker</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <span>Schnelle Express-Reparatur</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <span>Original-Ersatzteile</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <span>2 Standorte deutschlandweit</span>
              </li>
            </ul>
            {/* Bouton mobile sous la liste */}
            <a
              href="#"
              className="bg-red-500 text-white mt-12 font-semibold px-5 py-3 rounded shadow hover:bg-red-700 transition mt-8 block md:hidden"
            >
              Reparatur einleiten
            </a>
          </div>
        </div>
      </div>
      {/* Section Gerät auswählen */}
      <div className="w-full max-w-4xl mx-auto px-4 p-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-center">
          Wählen Sie Ihr Gerät aus:
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Smartphone */}
          <div className="group relative flex flex-col items-center bg-white rounded-lg shadow transition cursor-pointer min-h-[170px] p-0 overflow-hidden">
            <img
              src="/phone.png"
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
              src="/notebook.png"
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
              src="/pc.png"
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
              src="/tablet.png"
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
    </>
  );
}
