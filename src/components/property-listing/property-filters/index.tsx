import Image from "next/image";

interface PropertyFiltersProps {
  activeFilters: { type: string; value: string }[];
  removeFilter: (type: string, value?: string) => void;
  setIsDialogOpen: (open: boolean) => void;
}

const PropertyFilters = ({
  activeFilters,
  removeFilter,
  setIsDialogOpen,
}: Readonly<PropertyFiltersProps>) => {
  return (
    <div className="w-full bg-(--filters-bg) min-h-13.25 rounded-[10px] px-4 py-3 md:py-0 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-[12px] font-medium text-(--filters-label) font-satoshi mr-2 shrink-0">
          Filters:
        </span>

        {activeFilters.map((filter, index) => (
          <div
            key={index + 1}
            className="h-7.5 bg-(--filters-chip-bg) rounded-[5px] px-2.5 flex items-center gap-2"
          >
            <span className="text-[12px] font-medium text-(--filters-chip-text) font-satoshi whitespace-nowrap leading-none">
              {filter.value}
            </span>
            <button
              onClick={() =>
                removeFilter(
                  filter.type,
                  filter.type === "amenity" ? filter.value : undefined
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
            border border-(--filters-edit-primary) rounded-[5px] 
            flex items-center justify-center gap-2 
            text-(--filters-edit-primary) 
            hover:bg-(--filters-edit-bg-hover) 
            transition-colors
            shrink-0 cursor-pointer
        "
        onClick={() => setIsDialogOpen(true)}
      >
        <span className="text-[12px] font-satoshi leading-none">
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