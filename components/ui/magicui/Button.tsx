"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
export default function Button({
  buttonText,
  buttonLink,
}: {
  buttonText: string;
  buttonLink: string;
}) {
  return (
    <div className="call-to-action">
      <a
        href={buttonLink}
        className={cn(
          buttonVariants({
            size: "lg",
            variant: "outline",
          }),
          "group mt-4 rounded-[2rem] px-6"
        )}
      >
        {buttonText}
        <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
      </a>
    </div>
  );
}