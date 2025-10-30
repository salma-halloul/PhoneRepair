"use client";
import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        branch: "",
    });
    const [sent, setSent] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Ici, vous pouvez ajouter l'envoi du formulaire
        setSent(true);
    };

    return (

        <div className="w-full mt-24 lg:px-10 px-4 py-16">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                Kontaktieren Sie uns
            </h1>
            <p className="text-gray-700 text-md mb-14 text-center">
                Sie können uns telefonisch erreichen oder das Formular ausfüllen. 
                Unser Team hilft Ihnen gerne schnell und persönlich weiter.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-stretch">

                {/* Formulaire de contact */}
                <div className="bg-gradient-to-br from-teal-50 via-white to-red-50 rounded-lg shadow p-8 flex flex-col justify-center md:col-span-3 h-full">
                    {sent ? (
                        <div className="text-green-600 font-semibold mb-4">Vielen Dank für Ihre Nachricht!</div>
                    ) : (
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-gray-800 font-medium mb-1" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-200"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-800 font-medium mb-1" htmlFor="email">
                                    E-Mail
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-200"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-800 font-medium mb-1" htmlFor="message">
                                    Nachricht
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={3}
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-200"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-800 font-medium mb-1" htmlFor="branch">
                                    Bevorzugte Filiale
                                </label>
                                <select
                                    name="branch"
                                    id="branch"
                                    required
                                    value={form.branch}
                                    onChange={handleChange}
                                    className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-200"
                                >
                                    <option value="">Bitte wählen...</option>
                                    <option value="Berlin">Berlin</option>
                                    <option value="Potsdam">Potsdam</option>
                                </select>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-gray-900 text-white font-bold px-6 py-3 rounded shadow hover:bg-black transition"
                                >
                                    Absenden
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                {/* Infos d'assistance */}
                <div className="md:col-span-2 flex flex-col p-0 h-full">
                    <div className="bg-white rounded-lg border border-gray-200 shadow lg:p-8 p-5 h-full flex flex-col justify-between">
                        <h2 className="text-lg font-bold text-gray-900 mb-4 lg:mb-0 flex items-center">
                            Direkter Kontakt & Unterstützung
                        </h2>
                        <div className="mb-8 lg:mb-0">
                            <p className="text-gray-700 lg:text-md text-sm">
                                Für dringende Fragen oder schnelle Unterstützung kontaktieren Sie uns direkt. Unser Team hilft Ihnen gerne weiter.
                            </p>
                        </div>
                        <div className="mb-6 flex items-center gap-4 bg-white rounded-lg border border-teal-100 p-4 shadow-sm">
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-600 text-2xl">
                                <i className="fa-solid fa-location-dot"></i>
                            </span>
                            <div>
                                <h4 className="font-bold text-md mb-1">Berlin</h4>
                                <p className="text-gray-700 text-sm mb-4">
                                    Otto-Suhr-Allee 39, 10585 Berlin, Deutschland
                                </p>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="bg-teal-500 lg:text-md text-xs text-white px-4 py-2 rounded font-semibold shadow">
                                        +49 30 46995517
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-white rounded-lg border border-red-100 p-4 shadow-sm">
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 text-2xl">
                                <i className="fa-solid fa-location-dot"></i>
                            </span>
                            <div>
                                <h4 className="font-bold text-md mb-1">Potsdam</h4>
                                <p className="text-gray-700 text-sm mb-4">
                                    Dortustraße 23, 14467 Potsdam, Deutschland
                                </p>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="bg-red-500 lg:text-md text-xs text-white px-4 py-2 rounded font-semibold shadow">
                                        +49 331 29080953
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
