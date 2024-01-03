import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ContactButton({ styles }: { styles?: string }) {
  if (!styles) {
    styles = "bg-novo-blue";
  }
  return (
    <div className="flex items-center justify-center">
      <Link href="/kontakt">
        <Button className={cn("text-white text-xl p-8", styles)}>
          Jetzt anfragen
        </Button>
      </Link>
    </div>
  );
}
