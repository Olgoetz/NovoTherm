"use client";

import Link from "next/link";
import Image from "next/image";

import React, { useState } from "react";

import { Mail, Menu, Phone, X } from "lucide-react";

import SocialMedia from "./social-media";

const routes = [
  {
    label: "Start",
    link: "/",
  },
  {
    label: "Heizung",
    link: "/heizung",
  },
  {
    label: "Sanitär",
    link: "/sanitaer",
  },
  // {
  //   label: "Klima",
  //   link: "/klima",
  // },
  // {
  //   label: "Referenzen",
  //   link: "/referenzen",
  // },
  // {
  //   label: "Jobs",
  //   link: "/jobs",
  // },
  {
    label: "Kontakt",
    link: "/kontakt",
  },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  // const [isScrolling, setIsScrolling] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 70) {
  //       setIsScrolling(true);
  //     } else {
  //       setIsScrolling(false);
  //     }
  //   };

  //   // Attach the scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up the event listener on unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div
        id="top"
        className="z-[2000] fixed top-0 left-0 w-full md:h-[150px] h-[80px] bg-white"
      >
        <div className="grid-flow-row grid-rows-2 text-center justify-between items-center">
          {/* row 1 */}
          <div className="hidden md:flex items-center justify-around mb-3">
            <div className="bg-novo-blue text-center p-2  w-[70%]   text-white">
              <div className="grid grid-cols-2">
                <div className="flex justify-end mr-5">
                  <Phone className="mr-3" />
                  <p>(+49) 0 214 875 498 - 0</p>
                </div>
                <div className="flex justify-start">
                  <Mail className="mr-3" />
                  <p>
                    <a href="mailto:info@novotherm-shk.de">
                      info@novotherm-shk.de
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="separator h-10" />
            <div className="social-media bg-primary-foreground p-2 w-[30%] items-center justify-center flex text-white">
              {/* <div className="relative h-6 w-6 ml-4">
                <Link href="https://novotherm-koeln.de/">
                  <Image
                    fill
                    src="/immoankauf.png"
                    alt="Immoankauf"
                    style={{ objectFit: "cover" }}
                    quality={100}
                  />
                </Link>
              </div> */}
              <Link href="https://novotec-koeln.de/">
                <div className="relative h-6 w-6 ml-4 mr-6">
                  <Image
                    fill
                    src="/novotec_logo_pic_only.svg"
                    alt="Novotec Logo"
                    style={{ objectFit: "cover" }}
                    quality={100}
                    sizes="100vw"
                  />
                </div>
              </Link>
              <SocialMedia classes={"text-white"} />
            </div>
          </div>
          {/* row 2 */}
          <div className="px-5 hidden md:flex flex-1 items-center justify-between">
            <div className="mr-4 ">
              <Link href="/">
                <img
                  width={200}
                  height={20}
                  alt="NovoTherm Logo"
                  src="/novotherm_logo.png"
                  sizes="100vw"
                />
              </Link>
            </div>

            <div className="text-gray-600">
              <div className="max-w-[800px] space-x-10 hidden md:flex text-center">
                {routes.map((route) => (
                  <Link
                    key={route.label}
                    className="group p-3 font-medium hover:text-novo-blue hover:bg-secondary/10 rounded-lg transition"
                    href={route.link}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="text-black cursor-pointer md:hidden w-full px-5 py-5">
          {!nav ? (
            <div className="flex justify-between h-8 items-center">
              <Menu onClick={() => setNav(!nav)} />
              <div className="">
                <Link href="/">
                  <Image
                    width={150}
                    height={10}
                    alt="Logo"
                    src="/novotherm_logo.png"
                    quality={100}
                    sizes="100vw"
                  />
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <X onClick={() => setNav(!nav)} />
              <div className="">
                <Link href="/">
                  <Image
                    width={150}
                    height={10}
                    alt="Logo"
                    src="/novotherm_logo.png"
                    quality={100}
                  />
                </Link>
              </div>
            </div>
          )}
        </div>

        {nav && (
          <div className="fixed top-[80px] left-0 bg-white w-full">
            <ul className="flex flex-col text-2xl gap-y-7 ml-3 mt-10 items-center h-screen">
              {routes.map((route) => (
                <Link
                  onClick={() => setNav(!nav)}
                  key={route.label}
                  className="group p-3 w-full border-b font-medium hover:text-primary-foreground hover:bg-secondary/10 rounded-lg transition"
                  href={route.link}
                >
                  {route.label}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
