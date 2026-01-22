import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FilterForm } from "@/components/ui/manual-filter-form";

const ManualFilter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-190.5 mx-auto px-4 py-6 sm:px-6 sm:py-8 flex flex-col gap-6 lg:gap-7.5">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full gap-3 p-0 transition-opacity bg-transparent border-none cursor-pointer sm:gap-4 group hover:opacity-80"
      >
        <div className="h-[0.7px] bg-(--input-fg)/20 grow"></div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium sm:text-sm font-satoshi whitespace-nowrap text-brand-gradient">
            Or, use manual filters
          </span>
          <ChevronDown
            className={`w-4 h-4 text-(--icon-color) transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        <div className="h-[0.7px] bg-(--input-fg)/20 grow"></div>
      </button>

      {isOpen && <FilterForm />}
    </div>
  );
};

export default ManualFilter;
