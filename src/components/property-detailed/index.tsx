"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { getPropertyById, mockProperties } from "@/utils/mock-data";
import PropertyDetailedHeader from "./property-details-header";
import { PropertyImageGallery } from "./property-gallery";
import { PropertyDetailsCard } from "./property-details";
import { PropertyFeaturesTab } from "./property-detail-tab";
import { MapAndCompsCard } from "./map-and-comps";
import { NearbyPlacesCard } from "./near-places";

interface PropertyPageProps {
  params: Promise<{ id: string }>;
}

export default function DetailedProperty({
  params,
}: Readonly<PropertyPageProps>) {
  const { id } = use(params);
  const router = useRouter();
  const property = getPropertyById(id) || mockProperties[0];

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-6 mx-auto md:px-6">
        {/* Header */}
        <PropertyDetailedHeader
          propertyId={property.propertyId}
          address={property.address}
          city={property.city}
          state={property.state}
          zipCode={property.zipCode}
          onBack={() => router.back()}
        />

        <div className="grid items-stretch h-auto grid-cols-1 gap-4 mb-4 lg:grid-cols-4 lg:h-125">
          <PropertyImageGallery
            images={property.images}
            fallbackImage={property.imageUrl}
            alt={property.address}
          />

          <PropertyDetailsCard
            address={property.address}
            city={property.city}
            state={property.state}
            zipCode={property.zipCode}
            beds={property.beds}
            baths={property.baths}
            sqft={property.sqft}
            description={property.description}
            price={property.price}
          />

          <MapAndCompsCard />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          <PropertyFeaturesTab features={property.features} />
          <NearbyPlacesCard />
        </div>
      </div>
    </div>
  );
}
