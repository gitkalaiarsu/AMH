import Image from "next/image";

interface PropertyFiltersProps {
  activeFilters: { type: string; value: string }[];
  removeFilter: (type: string, value?: string) => void;
}

const PropertyFilters = ({
  activeFilters,
  removeFilter,
}: Readonly<PropertyFiltersProps>) => {
  return (
    <div className="w-full bg-[#343540] min-h-13.25 rounded-[10px] px-4 py-3 md:py-0 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-[12px] font-medium text-[#CCCFEE] font-satoshi mr-2 shrink-0">
          Filters:
        </span>

        {activeFilters.map((filter, index) => (
          <div
            key={index + 1}
            className="h-7.5 bg-[#4A4B55] rounded-[5px] px-2.5 flex items-center gap-2"
          >
            <span className="text-[12px] font-medium text-white font-satoshi whitespace-nowrap leading-none">
              {filter.value}
            </span>
            <button
              onClick={() =>
                removeFilter(
                  filter.type,
                  filter.type === "amenity" ? filter.value : undefined,
                )
              }
              className="transition-colors text-white/70 hover:text-white"
            >
              <Image
                src="/sidebarCancel.svg"
                alt="cancel"
                width={12}
                height={12}
                className="cursor-pointer"
              />
            </button>
          </div>
        ))}
      </div>

      <button
        className="
                    h-7.5 w-full md:w-27.5 
                    border border-[#1867D2] rounded-[5px] 
                    flex items-center justify-center gap-2 
                    text-[#1867D2] hover:bg-[#1867D2]/10 transition-colors
                    shrink-0
                "
      >
        <span className="text-[12px] font-satoshi leading-none cursor-pointer">
          Edit Filters
        </span>
        <Image
          src="/edit-filter.svg"
          alt="edit-filter"
          width={12}
          height={12}
        />
      </button>
    </div>
  );
};

export default PropertyFilters;
