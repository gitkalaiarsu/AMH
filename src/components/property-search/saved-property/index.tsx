import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { mockSavedProperties } from "@/utils/mock-data";
import { PropertyCard } from "@/components/ui/property-card";

const SavedProperty = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Image
            src="/saved.svg"
            alt="saved"
            width={20}
            height={20}
            className="object-contain w-5 h-5"
          />
          <h2 className="text-lg text-white font-satoshi">Saved Property</h2>
        </div>
        <Button
          variant="link"
          className="h-auto p-0 underline text-primary hover:text-primary/80 font-satoshi"
          // onClick={() => router.push("/saved")}
        >
          View All
        </Button>
      </div>

      {/* Property Cards Grid - Mobile Responsive */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 justify-items-center">
        {mockSavedProperties.map((saved) => (
          <PropertyCard key={saved.id} property={saved.property} />
        ))}
      </div>
    </div>
  );
};

export default SavedProperty;
