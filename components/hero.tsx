import NovoTec from "@/components/novotec";
import {
  Construction,
  DoorOpen,
  Droplet,
  DropletIcon,
  PencilRuler,
  Star,
  ThumbsUp,
} from "lucide-react";

import { BuildingIcon, PresentationIcon, Leaf, FlameIcon } from "lucide-react";
import Image from "next/image";
import coreCompetencies from "@/data/coreCompetencies";
import { cn } from "@/lib/utils";
export const Hero = () => {
  const box_style =
    "bg-slate-800/40 flex border border-white p-5 items-center space-x-4 justify-center";
  return (
    <div className="w-full overflow-hidden">
      <div className=" text-white mt-20 inset-0 animate-ken-burns bg-center md:bg-left-top  bg-blend-overlay bg-slate-200/30 min-h-screen z-10 bg-cover bg-[url(/novotherm-heizung-sanitaer-klima-koeln-titelbild-scaled.jpg)]">
        {/* <h2 className="text-2xl uppercase  text-right font-semibold mb-10 border-b pb-2">
          <NovoTec /> :: Wofür stehen wir?
        </h2> */}
        <div className="min-h-screen container flex items-center justify-center">
          <div className="max-w-[800px] gap-4 text-sm text-center">
            <div className={box_style}>
              <div>
                <ThumbsUp className="text-novo-blue" size={80} />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl leading-10 text-white">
                  Wir sind ihr zuverlässiger Partner in Köln & Umgebung
                </h1>
                <p>
                  Ob Heizung, Sanitär oder Klimatechnik - wir kümmern uns darum.
                  Und wenn es mehr sein darf, setzen wir auch komplette
                  Sanierungen um.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="py-20">
        <div className="flex flex-col md:flex-row justify-center items-center text-3xl">
          <h1>Herzlich Willkommen bei </h1>
          <NovoTec classes="ml-2" />
        </div>
        <div className="text-center leading-8 my-10">
          <p>
            Wir sind ein Kölner Qualitätsdienstleister im Bereich Aus- und
            Sanierungsmanagement mit über 10 Jahren Erfahrung.
          </p>
          <p>Unser Angebot umfasst 6 Kernkompetenzen:</p>
        </div>

        <div className="mt-10 font-semibold grid md:grid-cols-3 gap-7 px-2 text-center md:max-w-[1000px] mx-auto ">
          {coreCompetencies.map((c) => (
            <div
              key={c.title}
              className="h-[80px] bg-slate-100 flex items-center justify-center px-1  border rounded-md shadow-lg"
            >
              <div
                className={cn(
                  "flex items-center justify-start w-[270px]",
                  c.containerStyles
                )}
              >
                {c.icon && <c.icon className={cn("mr-5", c.iconStyles1)} />}
                {c.image && (
                  <c.image
                    src="/fenster.png"
                    alt="Fenster Icon"
                    width={28}
                    height={28}
                    className="ml-[4px] mr-5"
                  />
                )}

                <h3>{c.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};
