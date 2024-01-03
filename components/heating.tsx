import React from "react";
import { CheckCircle2 } from "lucide-react";

import Image from "next/image";
import { cn } from "@/lib/utils";
import ContactButton from "./contactButton";

const photosBefore = [
  {
    src: "/heating/Heizung Vorher (1).jpg",
    position: "object-center",
  },
  {
    src: "/heating/Heizung Vorher (2).jpg",
    position: "object-center",
  },
  {
    src: "/heating/Heizung Vorher (3).jpg",
    position: "object-center",
  },
];
const photosAfter = [
  {
    src: "/heating/Heizung Nachher (1).jpg",
    position: "object-center",
  },
  {
    src: "/heating/Heizung Nachher (2).jpg",
    position: "object-center",
  },
  {
    src: "/heating/Heizung Nachher (3).jpg",
    position: "object-center",
  },
];
// const photos = unsplashPhotos.map((photo) => ({
//   src: unsplashLink(photo.id, photo.width, photo.height),
//   width: photo.width,
//   height: photo.height,
//   srcSet: breakpoints.map((breakpoint) => {
//     const height = Math.round((photo.height / photo.width) * breakpoint);
//     return {
//       src: unsplashLink(photo.id, breakpoint, height),
//       width: breakpoint,
//       height,
//     };
//   }),
// }))

const services = [
  {
    title: "Heizungsinstallation",
    items: [
      "Fachgerechte Installation von Heizungsanlagen, inklusive Heizkesseln, Heizkörpern und Fußbodenheizungen",
      "Anschluss von Heizungsleitungen und -rohren gemäß den örtlichen Bauvorschriften",
    ],
  },
  {
    title: "Heizungswartung und -reparatur",
    items: [
      "Regelmäßige Wartung von Heizungsanlagen, um eine effiziente und störungsfreie Funktion sicherzustellen",
      "Schnelle Behebung von Störungen, Leckagen und anderen Heizungsproblemen",
    ],
  },
  {
    title: "Energieeffizienzoptimierung",
    items: [
      "Überprüfung und Optimierung bestehender Heizungsanlagen für eine verbesserte Energieeffizienz",
      "Installation von energieeffizienten Heizungskomponenten und -regelungen",
    ],
  },
  {
    title: "Umstellung auf erneuerbare Energien",
    items: [
      "Beratung und Installation von Heizungsanlagen, die erneuerbare Energien nutzen, wie Solarthermie oder Wärmepumpen",
      "Integration von nachhaltigen Heizungslösungen zur Reduzierung der Umweltauswirkungen",
    ],
  },
  {
    title: "Heizungssanierung und Modernisierung",
    items: [
      "Renovierung und Aktualisierung alter oder ineffizienter Heizungsanlagen",
      "Integration moderner Technologien und smarter Heizungssteuerungen",
    ],
  },
  {
    title: "Heizungswasseraufbereitung",
    items: [
      "Installation von Systemen zur Wasserenthärtung und -reinigung für eine optimale Leistung der Heizungsanlage",
      "Verhinderung von Kalkablagerungen und Korrosion",
    ],
  },
  {
    title: "Beratung und Planung",
    items: [
      "Fachkundige Beratung zu Heizungsanlagen und -lösungen",
      "Erstellung von individuellen Installationsplänen entsprechend den Bedürfnissen und Anforderungen der Kunden",
    ],
  },
];

const Heating = () => {
  return (
    <div id="heizung" className="py-20 mt-10 md:mt-20">
      <div className="container ">
        <h2 className="text-2xl uppercase text-center md:text-left font-semibold mb-10 border-b pb-2">
          Heizung
        </h2>
        <p className="text-xl my-10">
          Wir bieten Ihnen folgende heizungsnahe Dienstleistungen an:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="space-y-4 bg-novo-red/10 p-4 rounded-lg  md:h-[180px]"
            >
              <h3 className="text-novo-red text-xl md:text-2xl font-bold">
                {s.title}
              </h3>
              <ul>
                {s.items.map((s) => (
                  <div className="flex" key={s}>
                    <CheckCircle2 className="text-novo-red mr-3 shrink-0" />
                    <li>{s}</li>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-12">
          <p className="text-4xl inline-block uppercase font-bold py-4 border-b-2 border-b-novo-red">
            Vorher:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {photosBefore.map((p) => (
            <div className="w-full h-[500px] relative" key={p.src}>
              <Image
                src={p.src}
                alt="Heizungsinstallation"
                fill
                className={cn("object-cover rounded-lg", p.position)}
              />
            </div>
          ))}
        </div>

        <div className="my-12">
          <p className="text-4xl inline-block uppercase font-bold py-4 border-b-2 border-b-novo-red">
            Nachher:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {photosAfter.map((p) => (
            <div className="w-full h-[300px] relative" key={p.src}>
              <Image
                src={p.src}
                alt="Heizungsinstallation"
                fill
                className={cn("object-cover rounded-lg", p.position)}
              />
            </div>
          ))}
        </div>

        <div className="mt-14">
          <ContactButton styles="bg-novo-red md:w-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default Heating;
