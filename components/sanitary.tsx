import React from "react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ContactButton from "./contactButton";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photosBefore = [
  {
    src: "/sanitary/Vor der Sanierung (1).jpg",
    position: "object-center",
  },
  {
    src: "/sanitary/Vor der Sanierung (2).jpg",
    position: "object-center",
  },
  {
    src: "/sanitary/Vor der Sanierung (3).jpg",
    position: "object-center",
  },
  {
    src: "/sanitary/Vor der Sanierung (4).jpg",
    position: "object-center",
  },
  {
    src: "/sanitary/Vor der Sanierung (5).jpg",
    position: "object-bottom",
  },
  {
    src: "/sanitary/Vor der Sanierung (6).jpg",
    position: "object-center",
  },
];
const photosAfter = [
  {
    src: "/sanitary/Sanierung Bad & WC (1).jpg",
    position: "object-bottom",
  },
  {
    src: "/sanitary/Sanierung Bad & WC (2).jpg",
    position: "object-center",
  },
  {
    src: "/sanitary/Sanierung Bad & WC (3).jpg",
    position: "object-center",
  },
  {
    src: "/sanitary/Sanierung Bad & WC (4).jpg",
    position: "object-center",
  },
  {
    src: "/sanitary/Sanierung Bad & WC (5).jpg",
    position: "object-bottom",
  },
  {
    src: "/sanitary/Sanierung Bad & WC (6).jpg",
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
    title: "Installation von Sanitäranlagen",
    items: [
      "Fachgerechte Installation von Toiletten, Waschbecken, Duschen, Badewannen und anderen Sanitäreinrichtungen",
      "Anschluss von Sanitärleitungen und -rohren gemäß den örtlichen Bauvorschriften",
    ],
  },
  {
    title: "Reparatur und Wartung",
    items: [
      "Schnelle Behebung von Leckagen, Rohrbrüchen und anderen sanitären Problemen",
      "Regelmäßige Wartung von Sanitäranlagen, um eine langfristige Funktionalität zu gewährleisten.",
    ],
  },
  {
    title: "Rohrleitungsdienstleistungen",
    items: [
      "Verlegung und Reparatur von Wasser- und Abwasserleitungen",
      "Reinigung von verstopften Rohren und Abflüssen",
    ],
  },
  {
    title: "Badsanierung",
    items: [
      "Modernisierung und Renovierung von Badezimmern",
      "Installation von neuen Fliesen, Armaturen und anderen Sanitärelementen",
    ],
  },
  {
    title: "Wassererwärmungssysteme",
    items: [
      "Installation und Wartung von Durchlauferhitzern, Warmwasserspeichern und anderen Wassererwärmungssystemen",
      "Effiziente Optimierung der Warmwasserbereitstellung",
    ],
  },
  {
    title: "Barrierefreie Bäder",
    items: [
      "Gestaltung und Einrichtung von barrierefreien Badezimmern für Menschen mit eingeschränkter Mobilität",
      "Installation von Haltegriffen, rutschfesten Fliesen und anderen barrierefreien Lösungen",
    ],
  },
  {
    title: "Beratung und Planung",
    items: [
      "Fachkundige Beratung zu Sanitärfragen und -lösungen",
      "Erstellung von individuellen Sanitärplänen entsprechend den Bedürfnissen und Anforderungen der Kunden",
    ],
  },
];

const Sanitary = () => {
  return (
    <div id="sanitary" className="py-20 mt-10 md:mt-20">
      <div className="container ">
        <h2 className="text-2xl uppercase text-left font-semibold mb-10 border-b pb-2">
          Sanitär
        </h2>
        <p className="text-xl my-10">
          Wir bieten Ihnen folgende Sanitärdienstleistungen an:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="space-y-4 bg-novo-blue/10 p-4 rounded-lg  md:h-[180px]"
            >
              <h3 className="text-novo-blue text-xl md:text-2xl font-bold">
                {s.title}
              </h3>
              <ul>
                {s.items.map((s) => (
                  <div className="flex" key={s}>
                    <CheckCircle2 className="text-novo-blue mr-3 shrink-0" />
                    <li>{s}</li>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-12">
          <p className="text-4xl inline-block uppercase font-bold py-4 border-b-2 border-b-novo-blue">
            Vorher:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {photosBefore.map((p) => (
            <div className="w-full h-[300px] relative" key={p.src}>
              <Image
                src={p.src}
                alt="Sanierung Bad & WC"
                fill
                className={cn("object-cover rounded-lg", p.position)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw , 33vw"
              />
            </div>
          ))}
        </div>

        <div className="my-12">
          <p className="text-4xl inline-block uppercase font-bold py-4 border-b-2 border-b-novo-blue">
            Nachher:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {photosAfter.map((p) => (
            <div className="w-full h-[500px] relative" key={p.src}>
              <Image
                src={p.src}
                alt="Sanierung Bad & WC"
                fill
                className={cn("object-cover rounded-lg", p.position)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw , 33vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-14">
          <ContactButton styles="bg-novo-blue md:w-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default Sanitary;
