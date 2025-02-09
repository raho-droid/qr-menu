"use client";
import React from "react";

export default function ContactPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">İletişim</h1>

      <p className="text-gray-700 mb-6">
        Rubba Cafe ile iletişime geçmek için aşağıdaki yöntemleri
        kullanabilirsiniz. Sorularınızı, önerilerinizi ya da geri
        bildirimlerinizi bizlerle paylaşmaktan memnuniyet duyarız!
      </p>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Adres:</h3>
        <p className="text-gray-700">
          Rubba Cafe, İstiklal Caddesi No: 10, İstanbul, Türkiye
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Telefon:</h3>
        <p className="text-gray-700">+90 212 123 45 67</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">E-posta:</h3>
        <p className="text-gray-700">iletisim@rubbacafe.com</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Çalışma Saatlerimiz:</h3>
        <p className="text-gray-700">Pazartesi - Cuma: 08:00 - 22:00</p>
        <p className="text-gray-700">Cumartesi - Pazar: 10:00 - 23:00</p>
      </div>
    </div>
  );
}
