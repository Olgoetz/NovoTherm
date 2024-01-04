import Heating from "@/components/heating";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heizung",
  description: "Dienstleistungen von NovoTherm bezüglich Heizung",
  keywords: [
    "NovoTherm",
    "Heizung",
    "Energie",
    "Energieeffizienz",
    "Heizungsinstallation",
  ],
};

const page = () => {
  return (
    <div>
      <Heating />
    </div>
  );
};

export default page;
