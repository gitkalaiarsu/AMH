/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import WelcomeInformation from "./welcome-info";
import SearchProperties from "./search-properties";
import PropertyFeatures from "./property-features";
import SavedProperty from "./saved-property";
import * as layoutActions from "@/store/reducers/layoutReducer";
import { PRIVATE_PATH } from "@/utils/constant";

export default function PropertySearch() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
      router.push(PRIVATE_PATH.PROPERTY_LIST);
  };

  const featureCards = [
    {
      iconSrc: "/house.svg",
      title: "Property ID / Address Example",
      description:
        "Search by property ID, full address, or zip code to view detailed listings instantly.",
      iconBgColor: "rgba(74, 217, 145, 0.21)",
    },
    {
      iconSrc: "/ep_location.svg",
      title: "City / Zip Example",
      description:
        "Find properties in Mesa, Arizona 85209 under $3000 with at least 3 bedrooms.",
      iconBgColor: "rgba(254, 197, 61, 0.21)",
    },
    {
      iconSrc: "/swimming-pool.svg",
      title: "Amenities / Nearby Example",
      description:
        "List houses near shopping center that include a backyard patio or swimming pool.",
      iconBgColor: "rgba(130, 128, 255, 0.21)",
    },
  ];

  useEffect(() => {
    dispatch(layoutActions.setSidebar(true));
  }, []);

  return (
    <div className="flex-1 overflow-y-auto">
      <div
        className="
          container mx-auto px-4 py-6 
          sm:px-5 sm:py-8
          md:px-6 md:py-10
          lg:px-8 lg:py-25
          xl:max-w-238.5
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
          {/* Greeting Text */}
          <WelcomeInformation username={user?.name ?? "there"} />

          {/* Search Input & Heading */}
          <SearchProperties
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
          />

          {/* Feature Cards */}
          <PropertyFeatures featureCards={featureCards} />
        </div>

        {/* Saved Properties Section */}
        <SavedProperty />
      </div>
    </div>
  );
}
