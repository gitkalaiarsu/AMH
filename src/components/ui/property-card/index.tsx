"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import type { Property, PropertyTag } from "@/types/property";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  className?: string;
}

const getTagStyles = (tag: PropertyTag) => {
  switch (tag) {
    case "AMH Built":
    case "AMH-built":
      return {
        borderColor: "border-[#5EA9FF]",
        textColor: "text-[#5EA9FF]",
        icon: "/built-amh.svg",
      };
    case "Built 2020":
    case "Built 2025":
      return {
        borderColor: "border-[#EEBE00]",
        textColor: "text-[#EEBE00]",
        icon: "/build-calendar.svg",
      };
    case "Vacant":
      return {
        borderColor: "border-[#4AD991]",
        textColor: "text-[#4AD991]",
        icon: "/vacant.svg",
      };
    case "Aged":
    case "Rent":
      return {
        borderColor: "border-[#FF282F]",
        textColor: "text-[#FF282F]",
        icon: "/aged.svg",
      };
    case "Compound":
      return {
        borderColor: "border-[#5EA9FF]",
        textColor: "text-[#5EA9FF]",
        icon: "/compound.svg",
      };
    case "Pool":
      return {
        borderColor: "border-purple-400",
        textColor: "text-purple-400",
        icon: "/vacant.svg",
      };
    default:
      return {
        borderColor: "border-muted-foreground",
        textColor: "text-muted-foreground",
        icon: "/vacant.svg",
      };
  }
};

export function PropertyCard({
  property,
  className,
}: Readonly<PropertyCardProps>) {
  return (
    <Link href={`/property/${property.id}`} className="block w-full">
      <div
        className={cn(
          "group w-full flex flex-col overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 rounded-[9.28px] h-full",
          className,
        )}
      >
        <div className="relative w-full aspect-222/165 overflow-hidden rounded-t-[9.28px] shrink-0">
          <Image
            src={property.imageUrl}
            alt={property.address}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
          />

          {/* Days on Market - Top Right */}
          <div className="absolute z-10 flex items-center gap-1 px-2 py-1 bg-white rounded-full top-2 right-2">
            <Calendar className="h-2.5 w-2.5 text-[#DD1C22]" />
            <span className="text-[8px] font-medium text-[#DD1C22]">
              {property.daysOnMarket} days
            </span>
          </div>

          {/* Days Left - Bottom Right Edge */}
          {property.daysLeft !== undefined && property.daysLeft > 0 && (
            <div className="absolute z-10 flex items-center gap-1.5 bg-[#343540] bottom-0 right-0 rounded-tl-lg px-1.5 py-0.5">
              <span className="text-[10px] text-[#DD1C22]">
                {property.daysLeft}
              </span>
              <span className="text-[10px] font-medium text-[#FFF]">
                Days Left
              </span>
            </div>
          )}
        </div>

        <div className="bg-[#343540] rounded-b-[9.28px] p-3 pt-2.5 flex-1 flex flex-col justify-between">
          <div className="flex flex-col flex-1 min-w-0">
            {/* Address */}
            <h3 className="text-white text-[15px] leading-[147%] truncate font-satoshi font-bold tracking-[-0.01em]">
              {property.address}
            </h3>

            {/* City/State/Zip */}
            <p className="text-[10px] text-[#c1c2ce] opacity-60 leading-[147%] mb-1.5 truncate font-satoshi font-medium tracking-[-0.01em]">
              {property.city}, {property.state} {property.zipCode}
            </p>

            {/* Price */}
            <div className="mb-2 leading-[147%]">
              <span className="text-[18px] text-white font-satoshi font-bold tracking-normal">
                ${property.price.toLocaleString()}
              </span>
              <span className="text-[16px] font-medium text-[#c1c2ce] font-satoshi tracking-normal">
                /month
              </span>
            </div>

            {/* Beds/Baths/Sqft - Fixed layout */}
            <div className="flex items-center text-[9px] font-medium text-[#c1c2ce] tracking-wide mb-2.5">
              <div className="flex items-center gap-[1.5px] shrink-0">
                <Image
                  src="/bed.svg"
                  alt="Beds"
                  width={22}
                  height={12}
                  className="block"
                />
                <span className="whitespace-nowrap leading-[12px]">
                  {property.beds} Beds
                </span>
              </div>
              <div className="flex items-center gap-[6px] shrink-0 ml-[17.24px]">
                <Image
                  src="/bathtubs.svg"
                  alt="Baths"
                  width={11}
                  height={10}
                  className="block"
                />
                <span className="whitespace-nowrap leading-[12px]">
                  {property.baths} bath
                </span>
              </div>
              <div className="flex items-center gap-[3.58px] shrink-0 ml-[9.82px]">
                <Image
                  src="/square-feet.svg"
                  alt="Square Feet"
                  width={22}
                  height={12}
                  className="block"
                />
                <span className="whitespace-nowrap leading-[12px] ml-[-3px]">
                  {property.sqft.toLocaleString()}sqf
                </span>
              </div>
            </div>
          </div>

          {/* Tags - Always at bottom */}
          <div className="flex items-center gap-[6px] w-full flex-wrap mt-auto">
            {property?.tags?.map((tag) => {
              const { borderColor, textColor, icon } = getTagStyles(tag);
              return (
                <div
                  key={tag}
                  className={cn(
                    "inline-flex items-center gap-1 border rounded-full px-1.5 py-0.5 shrink-0 whitespace-nowrap",
                    borderColor,
                  )}
                >
                  <div className="relative w-3 h-3 shrink-0">
                    <Image
                      src={icon}
                      alt={tag}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <span
                    className={cn(
                      "text-[8px] font-medium tracking-wide",
                      textColor,
                    )}
                  >
                    {tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}
