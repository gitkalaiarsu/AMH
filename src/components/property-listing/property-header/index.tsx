"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PropertyHeaderProps {
  title: string;
  amenities: string;
  status: string;
  isBookmarked?: boolean;
  onBookmarkToggle?: () => void;
}

const PropertyHeader = ({
  title,
  amenities,
  status,
  isBookmarked = false,
  onBookmarkToggle,
}: PropertyHeaderProps) => {
  const router = useRouter();

  return (
    <div className="w-full max-w-full mb-4 overflow-hidden md:mb-6">
      <div className="flex items-start gap-2 md:gap-3">
        <button
          className="mt-1 md:mt-1.25 p-0.5 cursor-pointer shrink-0"
          aria-label="Go back"
          onClick={() => {
            router.back();
          }}
        >
          {/* Replaced Image with Div to use the CSS variable for theme switching */}
          <div 
            className="w-3.5 h-3.5 md:w-3.5 md:h-3.5 bg-(image:--prop-detail-back-icon) bg-contain bg-no-repeat bg-center"
            aria-label="back"
          />
        </button>

        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-start gap-2 md:items-center md:gap-3">
            <h1 className="text-lg font-bold md:text-[22px] leading-tight wrap-break-word font-satoshi bg-(image:--prop-header-title-bg) text-[color:var(--prop-header-title-color)] bg-clip-text">
              {title}
            </h1>

            <button 
              className="shrink-0 mt-0.5 md:mt-0"
              onClick={onBookmarkToggle}
            >
              <Image
                src={isBookmarked ? "/bookmark-filled.svg" : "/bookmark.svg"}
                alt="bookmark"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 md:mt-1.5 text-[11px] md:text-xs text-[#747686]">
            <div className="flex items-center gap-1 whitespace-nowrap">
              <span className="font-normal text-(--prop-header-label) font-satoshi">
                Amenities:
              </span>
              <span className="font-medium text-(--prop-header-value) font-satoshi">
                {amenities}
              </span>
            </div>

            <div className="h-3 w-px bg-[#747686]/40" />

            <div className="flex items-center gap-1 whitespace-nowrap">
              <span className="font-normal text-(--prop-header-label) font-satoshi">
                Status:
              </span>
              <span className="font-medium text-(--prop-header-value) font-satoshi">
                {status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;