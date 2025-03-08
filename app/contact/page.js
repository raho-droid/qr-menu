"use client";
import React from "react";

export default function ContactPage() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">İletişim</h1>

      <p className="text-gray-700 mb-6 text-center">
        Rubba Cafe ile iletişime geçmek için aşağıdaki yöntemleri
        kullanabilirsiniz. Sorularınızı, önerilerinizi ya da geri
        bildirimlerinizi bizlerle paylaşmaktan memnuniyet duyarız!
      </p>

      <div className="mb-6 p-4 border rounded-lg shadow-md bg-white">
        <h3 className="text-xl font-semibold mb-2">Adres:</h3>
        <p className="text-gray-700 mb-2">
          Merkez Mah. Genç Osman Cad. No: 18, Söz Düğün Salonu Karşısı,
          Arnavutköy Lunapark İçi
        </p>
        <a
          href="https://www.google.com/maps/search/Vip+Çay+Bahçesi+Nargile+Ve+Playstation+Cafe/@41.1818872,28.7383905,17z?hl=tr&entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-medium"
        >
          📍 Haritayı Aç
        </a>
      </div>

      <div className="mb-6 p-4 border rounded-lg shadow-md bg-white">
        <h3 className="text-xl font-semibold mb-2">Telefon:</h3>
        <a
          href="tel:+905315835434"
          className="text-gray-700 hover:text-blue-600"
        >
          📞 0531 583 54 34
        </a>
      </div>
    </div>
  );
}
