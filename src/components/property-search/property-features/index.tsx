import React from "react";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";

interface PropertyFeaturesProps {
  featureCards: {
    iconSrc: string;
    title: string;
    description: string;
    iconBgColor?: string; // Add this for dynamic bg color
  }[];
}

const PropertyFeatures = ({
  featureCards,
}: Readonly<PropertyFeaturesProps>) => {
  const { isSidebarOpen } = useAppSelector((state: RootState) => state.layout);

  return (
    <div
      className={`grid gap-3 w-full ${
        isSidebarOpen
          ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {featureCards.map((card, index) => (
        <div
          key={index + 1}
          className="w-full bg-[#13161C] border-[0.7px] border-[#484D53] rounded-[10.5px] p-5 flex flex-col gap-3 cursor-pointer"
        >
          {/* Icon with background */}
          <div
            className="flex items-center justify-center rounded-lg w-9 h-9 shrink-0"
            style={{ backgroundColor: card.iconBgColor }}
          >
            <Image
              src={card.iconSrc}
              alt={card.title}
              width={20}
              height={20}
              className="shrink-0"
            />
          </div>

          {/* Title */}
          <h3 className="font-satoshi text-xs leading-[19.14px] tracking-normal text-white">
            {card.title}
          </h3>

          {/* Description */}
          <p className="font-satoshi text-[11px] leading-[19.14px] tracking-normal text-white opacity-80">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PropertyFeatures;
