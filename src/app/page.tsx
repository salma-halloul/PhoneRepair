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
    </>
  );
}
