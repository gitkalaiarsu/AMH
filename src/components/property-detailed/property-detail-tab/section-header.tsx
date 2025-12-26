"use client";

import Image, { type StaticImageData } from "next/image";

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

      <div className="absolute bottom-0 left-0 w-full lg:w-63.5 h-0.75 bg-[#1867d2]" />
    </div>
  );
}
