"use client";

interface SectionHeaderProps {
  // Changed from icon path to variant string
  variant: "house" | "interior";
  title: string;
}

export function SectionHeader({ variant, title }: Readonly<SectionHeaderProps>) {
  // Map variant to the corresponding CSS variable class
  const iconVar =
    variant === "house"
      ? "bg-[image:var(--icon-house-future)]"
      : "bg-[image:var(--icon-interior)]";

  return (
    <div className="relative pb-2">
      <div className="flex items-center gap-2">
        <div className="relative w-5 h-5 lg:h-6 lg:w-6 shrink-0">
          {/* Using div with background image variable for theme switching */}
          <div
            className={`w-full h-full bg-contain bg-no-repeat bg-center ${iconVar}`}
          />
        </div>

        <h3 className="text-base lg:text-[18px] font-medium text-[color:var(--features-text-primary)] tracking-[-0.01em] capitalize">
          {title}
        </h3>
      </div>

      <div className="absolute bottom-0 left-0 w-full lg:w-63.5 h-0.75 bg-[color:var(--features-accent)]" />
    </div>
  );
}