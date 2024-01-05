import { Award, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactButton from "./contactButton";
export const Hero = () => {
  const box_style =
    "bg-slate-700/60 flex border border-white p-5 items-center justify-center";
  return (
    <div className="w-full overflow-hidden">
      <div className=" text-white mx-auto max-w-[1500px] bg-cover animate-ken-burns bg-center bg-blend-overlay bg-slate-400/30 min-h-screen  z-10 bg-[url(/novotherm-title.webp)]">
        {/* <h2 className="text-2xl uppercase  text-right font-semibold mb-10 border-b pb-2">
          <NovoTec /> :: Wofür stehen wir?
        </h2> */}
        <div className="min-h-screen container flex items-center justify-center">
          <div className="max-w-[1000px] text-lg text-center">
            <div className={box_style}>
              {/* <div>
                <ThumbsUp
                  className="text-novo-blue hidden md:block md:mr-4 "
                  size={80}
                />
              </div> */}
              <div>
                <h1 className="font-semibold uppercase text-xl leading-10 text-white">
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
      <section className="my-20 container">
        <h1 className="text-center text-3xl md:text-5xl font-bold">
          Herzlich Willkommen bei NovoTherm
        </h1>
        <p className="text-center text-2xl my-10">
          Folgende Bereiche decken unsere Leistungen ab:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
          <Link href="/heizung">
            <div className="flex relative h-[400px] items-center justify-center">
              <Image
                src="/heating/Heizung Nachher (3).jpg"
                alt="Heizungsinstallation"
                fill
                className="object-cover -z-10 rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className="text-white uppercase text-3xl bg-slate-300 bg-opacity-50 w-[200px] p-8">
                Heizung
              </p>
            </div>
          </Link>

          <Link href="/sanitaer">
            <div className="flex relative h-[400px] items-center justify-center">
              <Image
                src="/sanitary/Sanierung Bad & WC (4).jpg"
                alt="Sanierung Bad & WC"
                fill
                className="object-cover -z-10 rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className="text-white uppercase text-3xl bg-slate-300 bg-opacity-50 w-[200px] p-8">
                Sanitär
              </p>
            </div>
          </Link>
          {/* <Link href="/klima">
            <div className="flex relative h-[400px] items-center justify-center">
              <Image
                src="/sanitary/Sanierung Bad & WC (4).jpg"
                alt="Sanierung Bad & WC"
                fill
                className="object-cover -z-10 rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className="text-white uppercase text-3xl bg-slate-300 bg-opacity-50 w-[200px] p-8">
                Klima
              </p>
            </div>
          </Link> */}
        </div>
      </section>

      <section className="mb-10 ">
        <div className="flex items-center justify-center mb-10">
          <Award className="text-novo-blue" width={80} height={80} />
          <p className="text-2xl md:text-5xl font-bold text-center">
            Nur das Beste für Sie
          </p>
        </div>

        <p className="text-xl text-center">
          Unser Team von hochqualifizierten Techniker steht Ihnen zur Verfügung,
          um Ihre Bedürfnisse zuverlässig und professionell zu erfüllen.
          Kontaktieren Sie uns für eine umfassende Beratung oder um einen Termin
          für unsere Dienstleistungen zu vereinbaren.
        </p>
      </section>

      <ContactButton />
      {/* <section className="py-20">
                </div>
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
