import { FeatureCardType } from "@/types/property-search";
import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  card: FeatureCardType;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ card }) => {
  return (
    <div
      className="w-full rounded-[10.5px] p-5 flex flex-col gap-3 cursor-pointer border-[0.7px] bg-(--feature-card-bg) border-(--feature-card-border) shadow-[var(--feature-card-shadow)]"
    >
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

      <h3 className="font-satoshi text-xs leading-[17.14px] tracking-[-0.02em] font-semibold text-(--feature-card-title)">
        {card.title}
      </h3>

      <p className="font-satoshi text-[11px] leading-[17.14px] tracking-[-0.02em] text-(--feature-card-desc)">
        {card.description}
      </p>
    </div>
  );
};

export default FeatureCard;