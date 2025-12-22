"use client";

import { COLORS, SPACING } from "@/utils/design-tokens";

interface FeatureListProps {
  title: string;
  items: string[];
}

export function FeatureList({ title, items }: Readonly<FeatureListProps>) {
  return (
    <div className="flex flex-col" style={{ gap: SPACING.itemGap }}>
      <h4 className="text-base lg:text-[18px] font-normal text-white capitalize">
        {title}
      </h4>
      <div className="flex flex-col" style={{ gap: SPACING.itemGap }}>
        {items.map((item, index) => (
          <div
            key={index + 1}
            className="flex items-center"
            style={{ gap: SPACING.bulletGap }}
          >
            <span
              className="rounded-full shrink-0 h-2 w-2 lg:h-[8.6px] lg:w-[8.6px]"
              style={{ backgroundColor: COLORS.accent }}
            />
            <span className="text-[13px] lg:text-[14px] font-medium text-white capitalize">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
