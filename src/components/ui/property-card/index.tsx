"use client";

import Image from "next/image";
import Link from "next/link";
import type { Property, PropertyTag } from "@/types/property";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
}

const getTagStyles = (tag: PropertyTag) => {
  switch (tag) {
    case "AMH Built":
    case "AMH-built":
      return {
        borderColor: "border-[#5EA9FF]",
        textColor: "text-[#5EA9FF]",
        iconClass: "bg-(image:--icon-amh-tag)",
      };
    case "Built 2020":
    case "Built 2025":
      return {
        borderColor: "border-[#CCD3CD]",
        textColor: "text-[#CCD3CD]",
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

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link href={`/property/${property?.id}`} className="block w-full h-full">
      <div
        className={cn(
          "group w-full flex flex-col overflow-hidden transition-all duration-300 rounded-[9.28px] h-full shadow-[var(--prop-card-shadow)] dark:hover:shadow-lg dark:hover:shadow-primary/5",
        )}
      >
        <div className="relative w-full aspect-222/165 overflow-hidden rounded-t-[9.28px] shrink-0">
          <Image
            src={property?.imageUrl}
            alt={property?.address}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
          />

          <div className="absolute z-10 flex items-center gap-1 px-2 py-1 bg-white rounded-full top-2 right-2">
            <Image src="/calendar_new_icon.svg" alt="Calendar" width={12} height={12}/>
            <span className="text-[8px] font-medium text-[#0D1116]">
              {property?.daysOnMarket} days
            </span>
          </div>

          {property?.daysLeft !== undefined && property?.daysLeft > 0 && (
            <div className="absolute z-10 flex items-center gap-1.5 bg-(--days-left-bg) bottom-0 right-0 rounded-tl-lg px-1.5 py-0.5">
              <span className="text-[10px] text-[#DD1C22]">
                {property?.daysLeft}
              </span>
              <span className="text-[10px] font-medium text-(--days-left-text)">
                Days Left
              </span>
            </div>
          )}
        </div>

        <div className="bg-(--prop-card-bg) rounded-b-[9.28px] p-3 flex-1 flex flex-col min-h-0">
          <div className="flex flex-col flex-1 min-w-0">
            <h3 className="text-(--prop-card-address) font-bold text-[13.92px] leading-[147%] font-satoshi tracking-[-0.01em] line-clamp-1 mb-0.5">
              {property?.address}
            </h3>

            <p className="text-[10px] text-(--prop-card-detail) opacity-60 leading-[147%] mb-1.5 truncate font-satoshi font-medium tracking-[-0.01em]">
              {property?.city}, {property?.state} {property?.zipCode}
            </p>

            <div className="mb-1.5 leading-[147%]">
              <span className="text-[17px] font-bold text-(--prop-card-price) font-satoshi tracking-normal">
                ${property?.price?.toLocaleString()}
              </span>
              <span className="text-[15px] font-medium text-(--prop-card-sub-price) font-satoshi tracking-normal">
                /month
              </span>
            </div>

            <div className="flex items-center w-full text-[9.27px] font-medium text-(--prop-card-detail) tracking-[-0.01em] mb-2 leading-[147%] gap-2">
              <div className="flex items-center gap-0.5 shrink-0">
                <div
                  className="w-[20.65px] h-3 bg-(image:--icon-bed) bg-contain bg-no-repeat bg-center"
                  aria-hidden="true"
                />
                <span className="whitespace-nowrap">{property?.beds} Beds</span>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <div
                  className="w-[10.21px] h-2.75 bg-(image:--icon-bath) bg-contain bg-no-repeat bg-center"
                  aria-hidden="true"
                />
                <span className="whitespace-nowrap">{property?.baths} bath</span>
              </div>

              <div className="flex items-center shrink-0">
                <div
                  className="w-[20.65px] h-3 bg-(image:--icon-sqft) bg-contain bg-no-repeat bg-center"
                  aria-hidden="true"
                />
                <span className="whitespace-nowrap -ml-0.5">
                  {property?.sqft?.toLocaleString()} sqf
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center w-full gap-1 mt-auto">
            {property.tags?.map((tag) => {
              const { borderColor, textColor, icon, iconClass } = getTagStyles(tag);
              return (
                <div
                  key={tag}
                  className={cn(
                    "inline-flex items-center gap-0.5 border rounded-full px-1.5 py-0.5 shrink-0 whitespace-nowrap",
                    borderColor
                  )}
                >
                  <div className="relative w-3 h-3 shrink-0">
                    {iconClass ? (
                      <div
                        className={cn(
                          "w-full h-full bg-contain bg-no-repeat bg-center",
                          iconClass
                        )}
                        aria-hidden="true"
                      />
                    ) : (
                      <Image
                        src={icon!}
                        alt={tag}
                        fill
                        className="object-contain"
                      />
                    )}
                  </div>

                  <span
                    className={cn(
                      "text-[8px] font-medium tracking-wide",
                      textColor
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
};