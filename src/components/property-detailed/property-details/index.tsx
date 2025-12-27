"use client";

import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState, useRef, useLayoutEffect } from "react";
import { RootState } from "@/store/store";

interface PropertyDetailsCardProps {
  readonly address: string;
  readonly city: string;
  readonly state: string;
  readonly zipCode: string;
  readonly beds: number;
  readonly baths: number;
  readonly sqft: number;
  readonly description: string;
  readonly price: number;
}

const getSizeClasses = (isSidebarOpen: boolean) => ({
  container: isSidebarOpen ? "p-4 lg:p-3 xl:p-4" : "p-[25px]",
  title: isSidebarOpen
    ? "text-[15px] lg:text-[14px] xl:text-[16px]"
    : "text-[20px] leading-[29px]",
  headerMargin: isSidebarOpen ? "mb-3" : "mb-4",
  specsGap: isSidebarOpen
    ? "gap-2 lg:gap-1.5 xl:gap-3 flex-wrap"
    : "gap-5 mt-4",
  iconSize: isSidebarOpen ? "w-4 h-4" : "w-5 h-5",
  specsText: isSidebarOpen
    ? "text-[12px] lg:text-[11px] xl:text-[13px]"
    : "text-[15px]",
  summaryTitle: isSidebarOpen ? "text-[14px] lg:text-[13px]" : "text-[16px]",
  descriptionText: isSidebarOpen
    ? "text-[11px] lg:text-[10px] xl:text-[12px] leading-[18px]"
    : "text-[13px] leading-[21px]",
  priceCard: isSidebarOpen ? "p-2.5 lg:p-2 xl:p-3" : "p-5",
  priceLabel: isSidebarOpen ? "text-[10px]" : "text-[11.17px]",
  priceAmount: isSidebarOpen
    ? "text-[24px] lg:text-[22px] xl:text-[28px]"
    : "text-[42px]",
  priceUnit: isSidebarOpen
    ? "text-[14px] lg:text-[12px] xl:text-[16px]"
    : "text-[24px]",
});

interface SpecItemProps {
  readonly icon: string;
  readonly alt: string;
  readonly value: string | number;
  readonly label: string;
  readonly color: string;
  readonly iconSize: string;
  readonly textSize: string;
}

function SpecItem({
  icon,
  alt,
  value,
  label,
  color,
  iconSize,
  textSize,
}: SpecItemProps) {
  return (
    <div className="flex items-center gap-1.5">
      <div className={cn("relative shrink-0", iconSize)}>
        <Image src={icon} alt={alt} fill className="object-contain" />
      </div>
      <span className={cn("font-medium whitespace-nowrap", color, textSize)}>
        {value} {label}
      </span>
    </div>
  );
}

export function PropertyDetailsCard({
  address,
  city,
  state,
  zipCode,
  beds,
  baths,
  sqft,
  description,
  price,
}: PropertyDetailsCardProps) {
  const { isSidebarOpen } = useAppSelector((state:RootState) => state?.layout);
  const sizes = getSizeClasses(isSidebarOpen);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const checkOverflow = () => {
      const element = textRef.current;
      if (element) {
        const isLong = element.scrollHeight > element.clientHeight;
        setIsOverflowing(isLong);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [description, isSidebarOpen]);

  return (
    <div
      className={cn(
        "w-full rounded-[10px] flex flex-col overflow-hidden transition-all duration-300",
        "h-auto lg:h-124.5 bg-[#343540]/60",
        isSidebarOpen && "xl:h-124.5",
      )}
    >
      <div
        className={cn(
          "flex flex-col h-full transition-all duration-300",
          sizes.container,
        )}
      >
        <div className={sizes.headerMargin}>
          <h2
            className={cn(
              "text-white font-bold transition-all leading-tight font-satoshi",
              sizes.title,
            )}
          >
            {address}
            <br />
            {city}, {state} {zipCode}
          </h2>

          <div
            className={cn(
              "flex items-center mt-3 transition-all duration-300",
              sizes.specsGap,
            )}
          >
            <SpecItem
              icon="/famicons_bed.svg"
              alt="Bed"
              value={beds}
              label="Beds"
              color="text-[#5EA9FF]"
              iconSize={sizes.iconSize}
              textSize={sizes.specsText}
            />
            <SpecItem
              icon="/bathtub.svg"
              alt="Bath"
              value={baths}
              label="bath"
              color="text-[#EEBE00]"
              iconSize={sizes.iconSize}
              textSize={sizes.specsText}
            />
            <SpecItem
              icon="/famicons_analytics.svg"
              alt="Sqft"
              value={sqft.toLocaleString()}
              label="sqf"
              color="text-[#4AD991]"
              iconSize={sizes.iconSize}
              textSize={sizes.specsText}
            />
          </div>
        </div>

        <div className="flex flex-col flex-1 min-h-0 mb-3">
          <h3
            className={cn(
              "font-bold text-white mb-2 shrink-0",
              sizes.summaryTitle,
            )}
          >
            Property summary
          </h3>

          <div className="relative flex-1 min-h-0">
            <p
              ref={textRef}
              className={cn(
                "text-white font-normal tracking-[-0.03em] transition-all duration-300",
                sizes.descriptionText,
                isExpanded
                  ? "overflow-y-auto h-full pr-1"
                  : "line-clamp-4 lg:line-clamp-none lg:overflow-hidden lg:h-full",
              )}
            >
              {description}
            </p>

            {!isExpanded && isOverflowing && (
              <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#2f303a] via-[#2f303a]/80 to-transparent pointer-events-none" />
            )}
          </div>

          {(isOverflowing || isExpanded) && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={cn(
                "text-[#5EA9FF] hover:text-[#4A9AEE] hover:underline font-medium mt-1 text-left w-fit shrink-0 transition-colors cursor-pointer",
                isSidebarOpen ? "text-[10px]" : "text-[11px]",
              )}
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>

        <div
          className={cn(
            "bg-[#171B21] rounded-[10px] mt-auto shrink-0",
            sizes.priceCard,
          )}
        >
          <p className={cn("font-bold text-white mb-1", sizes.priceLabel)}>
            Current Rent Price
          </p>
          <div className="flex items-baseline gap-1">
            <span
              className={cn(
                "font-bold text-white leading-[100%] transition-all",
                sizes.priceAmount,
              )}
            >
              ${price.toLocaleString()}
            </span>
            <span
              className={cn(
                "font-medium text-[#9E9E9E] leading-[100%] transition-all",
                sizes.priceUnit,
              )}
            >
              /month
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
