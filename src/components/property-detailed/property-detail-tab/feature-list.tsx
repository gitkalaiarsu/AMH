"use client";

interface FeatureListProps {
  title: string;
  items: string[];
}

export function FeatureList({ title, items }: Readonly<FeatureListProps>) {
  return (
    <div className="flex flex-col gap-[13.5px]">
      <h4 className="text-base lg:text-[18px] font-normal text-[color:var(--features-text-primary)] capitalize">
        {title}
      </h4>

      <div className="flex flex-col gap-[13.5px]">
        {items.map((item, index) => (
          <div key={index + 1} className="flex items-center gap-1.75">
            <span className="rounded-full shrink-0 h-2 w-2 lg:h-[8.6px] lg:w-[8.6px] bg-[color:var(--features-accent)]" />
            <span className="text-[13px] lg:text-[14px] font-medium text-[color:var(--features-text-primary)] capitalize">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}