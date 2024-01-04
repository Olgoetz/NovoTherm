import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NovoTherm - Heizung & Sanitär",
    short_name: "NovoTherm",
    description: "NovoTherm - Heizung & Sanitär im Raum Köln und Umgebung",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
