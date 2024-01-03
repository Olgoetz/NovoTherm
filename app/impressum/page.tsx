import React from "react";

const page = () => {
  return (
    <div className="py-20 md:py-40 mt-20">
      <div className="container leading-relaxed">
        <h1 className="text-2xl uppercase text-center md:text-left font-semibold mb-10 border-b pb-2">
          Impressum
        </h1>
        <p className="font-semibold mt-5">Angaben gemäß § 5 TMG:</p>
        <p>
          NovoTherm GmbH Walter-Meckauer-Str. 33a 51067 Köln <br />
          Geschäftsführung: Oliver Altenrath & Thomas Jaworski
        </p>
        <p className="font-semibold mt-5">Kontakt:</p>
        <p>
          Telefon: +49 0221 29202130 <br />
          E-Mail: info@novotherm-koeln.de <br />
        </p>
        <p className="font-semibold mt-5">Registereintrag:</p>
        <p>
          Eintragung im Handelsregister <br />
          Registergericht: Amtsgericht Köln <br />
          Registernummer: HRB 114741 <br />
        </p>
        <p className="font-semibold mt-5">Steuerliche Angaben:</p>
        <p>Steuernummer: 218/5728/2891</p>
        <p className="font-semibold mt-5">EU-Streitschlichtung</p>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:
          https://ec.europa.eu/consumers/odr/. <br /> Unsere E-Mail-Adresse
          finden Sie oben im Impressum.
        </p>
        <p className="font-semibold mt-5">
          Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
        </p>
        <p>
          Wir nehmen an einem Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teil. Zuständig ist die
          Universalschlichtungsstelle des Zentrums für Schlichtung e.V.,
          Straßburger Straße 8, 77694 Kehl am Rhein
          (https://www.verbraucher-schlichter.de).
        </p>
      </div>
    </div>
  );
};

export default page;
