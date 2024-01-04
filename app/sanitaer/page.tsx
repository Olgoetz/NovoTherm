import Sanitary from "@/components/sanitary";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanitär",
  description: "Sanitärdienstleistungen von NovoTherm",
  keywords: [
    "NovoTherm",
    "Sanitär",
    "Sanierung",
    "Dusche",
    "Bad",
    "WC",
    "Umbau",
    "Bauwesen",
  ],
};
const page = () => {
  return (
    <div>
      <Sanitary />
    </div>
  );
};

export default page;
