"use client";

import Image, { type StaticImageData } from "next/image";
import { COLORS } from "@/utils/design-tokens";

interface SectionHeaderProps {
  icon: string | StaticImageData;
  title: string;
}

export function SectionHeader({ icon, title }: Readonly<SectionHeaderProps>) {
  return (
    <div className="relative pb-2">
      <div className="flex items-center gap-2">
        <div className="relative w-5 h-5 lg:h-6 lg:w-6 shrink-0">
          <Image src={icon} alt={title} fill className="object-contain" />
        </div>

        <h3 className="text-base lg:text-[18px] font-medium text-white tracking-[-0.01em] capitalize">
          {title}
        </h3>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full lg:w-[254px] h-[3px]"
        style={{ backgroundColor: COLORS.accent }}
      />
    </div>
  );
}
