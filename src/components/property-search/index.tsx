/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import WelcomeInformation from "./welcome-info";
import SearchProperties from "./search-properties";
import PropertyFeatures from "./property-features";
import SavedProperty from "./saved-property";
import { PRIVATE_PATH } from "@/utils/constant";
import { RootState } from "@/store/store";
import { featureCards, forWarning } from "@/utils/common-service";
import * as propertyReducer from "@/store/reducers/property-reducer";
import { mockSavedProperties } from "@/utils/mock-data";
import ManualFilter from "./manual-filter";

export default function PropertySearch() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {user} = useAppSelector((state: RootState) => state.auth);
  const{savedProperties} = useAppSelector((state:RootState) => state.property);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      forWarning("Search query is empty. Please enter a valid search term.");
      return;
    }
    router.push(
      `${PRIVATE_PATH.PROPERTY_LIST}?query=${encodeURIComponent(
        searchQuery.trim()
      )}`
    );
  };

  useEffect(() => {
    dispatch(propertyReducer.setSavedProperties(mockSavedProperties))
  }, []);

  return (
    <div className="flex-1 overflow-y-auto">
      <div
        className="
          container mx-auto px-4 py-6 
          sm:px-5 sm:py-8
          md:px-6 md:py-10
          lg:px-8 lg:py-25
          xl:max-w-268.5
          relative
        "
      >
        {/* Greeting & Search Section */}
        <div
          className="
            flex flex-col mx-auto gap-4
            sm:gap-5
            md:gap-5.5
            mb-8
            sm:mb-10
            md:mb-12 
            lg:mb-16 
            xl:mb-16.75
            max-w-full 
            sm:max-w-135
            md:max-w-170
            lg:max-w-180
          "
        >
          <WelcomeInformation username={user?.name ?? "there"} />
          <h1 className="text-3xl md:text-[42px] font-bold capitalize text-center leading-[100%] tracking-[-1.05px] font-satoshi font-[700] text-[color:var(--hero-text-color)] bg-[image:var(--hero-text-bg)] bg-clip-text">
            Find Properties With AI
          </h1>

          <SearchProperties
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSubmit={handleSearch}
          />

          <PropertyFeatures featureCards={featureCards} />
        </div>
        {/* manual Filter */}
        <ManualFilter />

        {/* Saved Properties Section */}
        <SavedProperty 
          savedProperties={savedProperties}
        />
      </div>
    </div>
  );
}
