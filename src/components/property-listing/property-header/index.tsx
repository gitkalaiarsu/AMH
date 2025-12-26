"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PropertyHeader = () => {
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
          <Image
            src="/back-icon.svg"
            alt="back"
            width={14}
            height={14}
            className="w-3.5 h-3.5 md:w-auto md:h-3.5"
          />
        </button>

        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-start gap-2 md:items-center md:gap-3">
            <h1 className="text-lg md:text-[22px] text-white leading-tight wrap-break-word font-satoshi">
              Lake Dallas Homes
            </h1>

            <button className="shrink-0 mt-0.5 md:mt-0">
              <Image
                src="/bookmark.svg"
                alt="bookmark"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 md:mt-1.5 text-[11px] md:text-xs text-[#747686]">
            <div className="flex items-center gap-1 whitespace-nowrap">
              <span className="font-normal text-[#747686] font-satoshi">
                Amenities:
              </span>
              <span className="font-medium text-white font-satoshi">Pool</span>
            </div>

            <div className="h-3 w-px bg-[#747686]/40" />

            <div className="flex items-center gap-1 whitespace-nowrap">
              <span className="font-normal text-[#747686] font-satoshi">
                Status:
              </span>
              <span className="font-medium text-white font-satoshi">
                Vacant
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;
