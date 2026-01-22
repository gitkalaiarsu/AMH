import React, { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { GroupedMultiSelect } from "@/components/ui/grouped-multi-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AMENITIES_OPTIONS,
  BATH_OPTIONS,
  BED_OPTIONS,
  STATUS_OPTIONS,
} from "@/utils/common-service";

export interface FilterState {
  market: string;
  bed: string;
  bath: string;
  minSqFt: string;
  maxSqFt: string;
  status: string[];
  amenities: string[];
}

// Helper function to get all amenity values
const getAllAmenityValues = () => {
  return AMENITIES_OPTIONS.flatMap((group) =>
    group.options.map((option) => option.value)
  );
};

// Initial state with defaults
const getInitialFilters = (): FilterState => ({
  market: "",
  bed: "all", 
  bath: "all", 
  minSqFt: "",
  maxSqFt: "",
  status: [], 
  amenities: [],
});

export const FilterForm = () => {
  const [filters, setFilters] = useState<FilterState>(getInitialFilters());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (fieldName: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleMultiSelectChange = (
    fieldName: keyof FilterState,
    value: string[]
  ) => {
    setFilters((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleReset = () => {
    setFilters(getInitialFilters());
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Filter Values:", filters);
    console.log("Amenities selected:", filters.amenities);
    console.log("Status selected:", filters.status);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 sm:gap-3.75 animate-in fade-in slide-in-from-top-4 duration-300 ease-in-out"
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-3.75">
        <div className="flex flex-col w-full min-w-0 gap-2 sm:flex-1">
          <label
            htmlFor="market"
            className="font-satoshi text-[11px] font-medium leading-[16.7px] tracking-[-0.02em] capitalize text-brand-gradient w-fit"
          >
            State / Market
          </label>
          <Input
            type="text"
            placeholder="City, State or Zipcode"
            name="market"
            id="market"
            value={filters.market}
            onChange={handleInputChange}
            className="w-full h-10 rounded-[5px] px-2.5 bg-(--input-bg) text-(--input-fg) font-satoshi text-[11px] placeholder:font-satoshi placeholder:text-[10px] placeholder:text-[var(--input-placeholder)] border-[var(--input-border)] focus-gradient-border"
          />
        </div>

        <div className="flex flex-col w-full sm:w-41.75 gap-2 shrink-0 min-w-0">
          <label
            htmlFor="bed"
            className="font-satoshi text-[11px] font-medium leading-[16.7px] tracking-[-0.02em] capitalize text-brand-gradient w-fit"
          >
            Bed
          </label>
          <Select
            value={filters.bed}
            onValueChange={(value) => handleSelectChange("bed", value)}
          >
            <SelectTrigger className="w-full h-10 rounded-[5px] px-2.5 bg-(--input-bg) text-(--input-fg) font-satoshi text-[11px] border-(--input-border) focus-gradient-border">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-(--input-bg) border-(--input-border) text-(--input-fg)">
              {BED_OPTIONS.map((option) => (
                <SelectItem
                  key={option.id}
                  value={option.value}
                  className="font-satoshi text-[11px] focus:bg-(--input-border) focus:text-(--input-fg)"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col w-full sm:w-41.75 gap-2 shrink-0 min-w-0">
          <label
            htmlFor="bath"
            className="font-satoshi text-[11px] font-medium leading-[16.7px] tracking-[-0.02em] capitalize text-brand-gradient w-fit"
          >
            Bath
          </label>
          <Select
            value={filters.bath}
            onValueChange={(value) => handleSelectChange("bath", value)}
          >
            <SelectTrigger className="w-full h-10 rounded-[5px] px-2.5 bg-(--input-bg) text-(--input-fg) font-satoshi text-[11px] border-(--input-border) focus-gradient-border">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-(--input-bg) border-(--input-border) text-(--input-fg)">
              {BATH_OPTIONS.map((option) => (
                <SelectItem
                  key={option.id}
                  value={option.value}
                  className="font-satoshi text-[11px] focus:bg-(--input-border) focus:text-(--input-fg)"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-3.75 min-w-0">
        <div className="flex flex-col w-full sm:w-54.25 gap-2 shrink-0">
          <label
            htmlFor="minSqFt"
            className="font-satoshi text-[11px] font-medium leading-[16.7px] tracking-[-0.02em] capitalize text-brand-gradient w-fit"
          >
            Size (Sq Ft)
          </label>
          <div className="flex items-start gap-2">
            <div className="flex flex-col flex-1 min-w-0">
              <Input
                type="number"
                placeholder="Min"
                name="minSqFt"
                id="minSqFt"
                value={filters.minSqFt}
                onChange={handleInputChange}
                className="w-full h-10 rounded-[5px] px-2.5 bg-(--input-bg) text-(--input-fg) font-satoshi text-[11px] placeholder:text-[10px] placeholder:text-(--input-placeholder) [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-(--input-border) focus-gradient-border"
              />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <Input
                type="number"
                placeholder="Max"
                name="maxSqFt"
                id="maxSqFt"
                value={filters.maxSqFt}
                onChange={handleInputChange}
                className="w-full h-10 rounded-[5px] px-2.5 bg-(--input-bg) text-(--input-fg) font-satoshi text-[11px] placeholder:text-[10px] placeholder:text-(--input-placeholder) [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-(--input-border) focus-gradient-border"
              />
            </div>
          </div>
        </div>

        {/* AMENITIES - Grouped Multi Select */}
        <div className="flex flex-col w-full min-w-0 gap-2 sm:flex-1">
          <label
            htmlFor="amenities"
            className="font-satoshi text-[11px] font-medium leading-[16.7px] tracking-[-0.02em] capitalize text-brand-gradient w-fit"
          >
            Amenities
          </label>
          <div className="max-w-full min-w-0">
            <GroupedMultiSelect
              value={filters.amenities}
              onValueChange={(value) =>
                handleMultiSelectChange("amenities", value)
              }
              options={AMENITIES_OPTIONS}
              placeholder="Select"
              className="border-(--input-border) focus-gradient-border"
            />
          </div>
        </div>

        {/* VACANCY/STATUS - Grouped Multi Select */}
        <div className="flex flex-col w-full sm:w-54.25 gap-2 shrink-0 min-w-0">
          <label
            htmlFor="status"
            className="font-satoshi text-[11px] font-medium leading-[16.7px] tracking-[-0.02em] capitalize text-brand-gradient w-fit"
          >
            Vacancy
          </label>
          <div className="max-w-full min-w-0">
            <GroupedMultiSelect
              value={filters.status}
              onValueChange={(value) => handleMultiSelectChange("status", value)}
              options={STATUS_OPTIONS}
              placeholder="Select"
              className="border-(--input-border) focus-gradient-border"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-3.75 w-full mt-2">
        <button
          type="button"
          onClick={handleReset}
          className="w-full cursor-pointer sm:flex-1 h-10 rounded-[5px] border border-primary text-primary text-xs font-satoshi font-medium hover:bg-primary/10 transition-colors tracking-wider"
        >
          Reset
        </button>
        <button
          type="submit"
          className="w-full cursor-pointer sm:flex-1 h-10 rounded-[5px] bg-primary text-primary-foreground text-xs font-satoshi font-medium hover:bg-primary/90 transition-colors tracking-wider shadow-lg shadow-primary/20"
        >
          Search
        </button>
      </div>
    </form>
  );
};