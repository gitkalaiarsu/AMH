import { Button } from "@/components/ui/button";
import Image from "next/image";

interface PropertyHeaderProps {
  propertyId: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  onBack: () => void;
}

const PropertyDetailedHeader = ({
  propertyId,
  address,
  city,
  state,
  zipCode,
  onBack,
}: PropertyHeaderProps) => {
  return (
    <div className="flex items-center justify-between w-full gap-4 py-4">
      <div className="flex items-start flex-1 min-w-0 gap-2 md:gap-3">
        <button
          onClick={onBack}
          className="mt-1 md:mt-1.25 p-0.5 cursor-pointer shrink-0"
          aria-label="Go back"
        >
          <div
            className="w-3.5 h-3.5 md:w-3.5 md:h-3.5 bg-(image:--prop-detail-back-icon) bg-contain bg-no-repeat bg-center"
          />
        </button>

        <div className="flex flex-col flex-1 min-w-0">
          <h1 className="text-lg leading-tight truncate sm:text-xl lg:text-2xl font-satoshi bg-(image:--prop-detail-title-bg) text-(--prop-detail-title-color) bg-clip-text">
            Property ID {propertyId}
          </h1>
          <p className="text-sm truncate text-(--prop-detail-desc) font-medium mt-1 leading-none font-satoshi">
            {address}, {city}, {state} {zipCode}
          </p>
        </div>
      </div>
      <Button className="bg-(--prop-detail-btn-bg) hover:bg-(--prop-detail-btn-hover) text-white shrink-0 flex items-center gap-2 rounded-lg px-4 py-3 h-10 shadow-sm transition-colors cursor-pointer border-none">
        <Image
          src="/export-icon.svg"
          alt="export"
          width={12}
          height={12}
          className="mb-0.5"
        />
        <span className="font-satoshi text-[16px] leading-4 tracking-[0.02em] capitalize text-center align-middle font-normal">
          Export
        </span>
      </Button>
    </div>
  );
};

export default PropertyDetailedHeader;