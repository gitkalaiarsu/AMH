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
    <Link href={`/property/${property.id}`} className="block w-full h-full">
      <div
        className={cn(
          "group w-full h-full flex flex-col overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 rounded-[9.28px]",
          className,
        )}
      >
        <div className="relative w-full aspect-222/165 overflow-hidden rounded-t-[9.28px] shrink-0">
          <Image
            src={property.imageUrl}
            alt={property.address}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />

          {/* Days on Market - Top Right */}
          <div className="absolute z-10 flex items-center gap-1 px-2 py-1 bg-white rounded-full top-2 right-2">
            <Calendar className="h-2.5 w-2.5 text-[#0d1116]" />
            <span className="text-[8px] font-medium text-[#0d1116]">
              {property.daysOnMarket} days
            </span>
          </div>

          {/* Days Left - Bottom Right Edge */}
          {property.daysLeft !== undefined && property.daysLeft > 0 && (
            <div className="absolute z-10 flex items-center gap-1.5 bg-[#343540] bottom-0 right-0 rounded-tl-lg px-1.5 py-0.5">
              <span className="text-sm text-[#FF5C5C]">
                {property.daysLeft}
              </span>
              <span className="text-[10px] font-medium text-[#9ca3af]">
                Days Left
              </span>
            </div>
          )}
        </div>

        <div className="bg-[#343540] rounded-b-[9.28px] p-3 pt-2.5 flex-1 flex flex-col justify-between min-h-[135px]">
          <div className="flex flex-col min-w-0">
            <h3 className="text-white text-sm tracking-wide leading-[147%] truncate font-satoshi">
              {property.address}
            </h3>

            <p className="text-[10px] text-[#c1c2ce] opacity-60 tracking-wide leading-[147%] mb-1.5 truncate font-satoshi">
              {property.city}, {property.state} {property.zipCode}
            </p>

            <div className="mb-2 leading-[147%]">
              <span className="text-base tracking-wide text-white font-satoshi font-weight-700">
                ${property.price.toLocaleString()}
              </span>
              <span className="text-sm font-medium text-[#c1c2ce] tracking-wide font-satoshi font-weight-500">
                /month
              </span>
            </div>

            <div className="flex items-center gap-4 text-[9px] font-medium text-[#c1c2ce] tracking-wide leading-[147%] mb-2.5 whitespace-nowrap">
              <div className="flex items-center gap-1">
                <Image src="/bed.svg" alt="Beds" width={22} height={12} />
                <span>{property.beds} Beds</span>
              </div>
              <div className="flex items-center gap-1">
                <Image src="/bathtub.svg" alt="Baths" width={11} height={10} />
                <span>{property.baths} bath</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="/square-feet.svg"
                  alt="Square Feet"
                  width={22}
                  height={12}
                />
                <span>{property.sqft.toLocaleString()}sqf</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-x-1.5 gap-y-2 flex-wrap w-full">
            {property.tags.map((tag) => {
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
