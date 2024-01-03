import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRightCircle } from "lucide-react";
import Image from "next/image";
import getContentByType from "@/lib/getContentByType";

export default async function Jobs() {
  const jobs = await getContentByType("job");

  if (jobs?.status === 500) {
    return (
      <div className="flex flex-col my-40 w-full h-[200px] items-center justify-center text-center text-lg">
        <p className="p-20 ">
          Fehler bei der Abfrage der Jobs. Bitte Administrator kontaktieren!
        </p>
      </div>
    );
  }
  if (jobs.length === 0) {
    return (
      <div className="flex flex-col my-40 w-full h-[200px] items-center justify-center text-center text-lg">
        <p className="p-20 ">
          Derzeit bieten wir leider keine freie Stellen an.
        </p>
      </div>
    );
  }
  // const jobsData = await fetch(
  //   "https://my.api.mockaroo.com/jobs.json?key=e31556b0",
  //   { next: { revalidate: 60 } }
  // ).then((res) => res.json());

  return (
    <div className="py-20 mt-10 md:mt-20">
      <div className="container ">
        <h2 className="text-2xl uppercase text-center md:text-left font-semibold mb-10 border-b pb-2">
          Dein Job bei uns - Deine Chance für Veränderung
        </h2>
        <p>
          Wer den Markt verändern will, benötigt kluge Köpfe, die ihm dabei
          helfen. Wir lieben unsere Arbeit und sind uns sicher: Dir wird es
          genauso gehen. Egal, ob Du gerade in den Beruf startest oder bereits
          Berufserfahrung hast – wenn Du mit uns wachsen willst und unsere
          Leidenschaft teilst, findest Du bei uns spannende Möglichkeiten.
        </p>

        {jobs.map((j: any) => (
          <Card key={j.sys.id} className="hyphens-auto my-10 text-left">
            <CardHeader>
              <div className="grid grid-cols-[auto,1fr] gap-4 items-center justify-start">
                <div className="relative h-12 w-12">
                  <Image
                    src="/novotherm_logo_pic_only.png"
                    alt="NovoTherm Logo"
                    fill
                  />
                </div>
                <CardTitle>
                  <div className="flex flex-col space-y-2 text-novo-blue">
                    <h2>{j.fields.title}</h2>
                    <h3 className="text-sm">{j.fields.location}</h3>
                  </div>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-bold py-3">Beschreibung:</p>
              <p>{j.fields.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="p-3 outline-none">
                <div className="flex items-center">
                  <ChevronRightCircle />
                  <Link
                    href={`/jobs/${j.sys.id}`}
                    className="p-3 outline-none rounded-md border-gray-500"
                  >
                    Hier geht&apos;s zur vollständigen Beschreibung
                  </Link>
                </div>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
