// PriceCard.jsx
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@radix-ui/react-icons";

export const toHumanPrice = (price, decimals = 2) => {
  return Number(price / 100).toFixed(decimals);
};

export default function PriceCard({ price, interval }) {
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState(null);

  const onSubscribeClick = async (priceId) => {
    setIsLoading(true);
    setId(priceId);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <div
      className={`relative flex w-full max-w-[400px] flex-col gap-4 overflow-hidden rounded-2xl border p-4 text-black dark:text-white ${
        price.isMostPopular ? "border-2 border-neutral-700 shadow-lg" : ""
      }`}
    >
      <div className="flex items-center">
        <div className="ml-4">
          <h2 className="text-base font-semibold leading-7">{price.name}</h2>
        </div>
      </div>

      <a href="/contact">
        <Button
          className="group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter"
          disabled={isLoading}
          onClick={() => onSubscribeClick(price.id)}
        >
          {isLoading && id === price.id ? (
            <Loader className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Contact Us"
          )}
        </Button>
      </a>

      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
      
      {price.features && (
        <ul className="flex flex-col gap-2 font-normal">
          {price.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
              <CheckIcon className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
