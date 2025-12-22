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
      <div className="flex items-center flex-1 min-w-0 gap-3">
        <button
          onClick={onBack}
          className="p-0.5 cursor-pointer"
          aria-label="Go back"
        >
          <Image
            src="/back-icon.png"
            alt="back"
            width={14}
            height={14}
            className="w-3.5 h-3.5 md:w-auto md:h-3.5"
          />
        </button>

        <div className="flex flex-col min-w-0">
          <h1 className="text-lg leading-tight truncate sm:text-xl lg:text-2xl text-foreground font-satoshi">
            Property ID {propertyId}
          </h1>
          <p className="text-sm truncate text-[#747686] font-medium mt-1 leading-none font-satoshi">
            {address}, {city}, {state} {zipCode}
          </p>
        </div>
      </div>

      <Button
        size="icon"
        className="bg-[#2F6FED] hover:bg-[#265BC7] text-white shrink-0 sm:hidden h-8 w-8 rounded-lg shadow-sm cursor-pointer flex items-center justify-center"
      >
        <Image src="/export-icon.png" alt="export" width={16} height={16} />
        <span className="sr-only">Export</span>
      </Button>

      <Button className="bg-[#2F6FED] hover:bg-[#265BC7] text-white shrink-0 hidden sm:flex items-center gap-2 rounded-lg px-4 py-3 h-10 shadow-sm transition-colors cursor-pointer">
        <Image
          src="/export-icon.png"
          alt="export"
          width={12}
          height={12}
          className="mb-0.5"
        />
        <span className="font-['Satoshi'] text-[16px] leading-4 tracking-[0.02em] capitalize text-center align-middle font-normal">
          Export
        </span>
      </Button>
    </div>
  );
};

export default PropertyDetailedHeader;
