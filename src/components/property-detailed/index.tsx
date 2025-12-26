/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getPropertyById, mockProperties } from "@/utils/mock-data";
import PropertyDetailedHeader from "./property-details-header";
import { PropertyImageGallery } from "./property-gallery";
import { PropertyDetailsCard } from "./property-details";
import { PropertyFeaturesTab } from "./property-detail-tab";
import { MapAndCompsCard } from "./map-and-comps";
import { NearbyPlacesCard } from "./near-places";
import { useAppDispatch } from "@/store/hooks";
import * as layoutActions from "@/store/reducers/layoutReducer";

interface PropertyPageProps {
  params: Promise<{ id: string }>;
}

export default function DetailedProperty({
  params,
}: Readonly<PropertyPageProps>) {
  const { id } = use(params);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const property = getPropertyById(id) || mockProperties[0];

  useEffect(() => {
    dispatch(layoutActions.setSidebar(false));
  }, []);

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

        {/* First Row - Image Gallery, Details, Map */}
        <div className="grid items-stretch h-auto grid-cols-1 gap-4 mb-4 lg:grid-cols-12 lg:h-125">
          <div className="lg:col-span-5">
            <PropertyImageGallery
              images={property.images}
              fallbackImage={property.imageUrl}
              alt={property.address}
            />
          </div>
          <div className="lg:col-span-4">
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
          </div>
          <div className="lg:col-span-3">
            <MapAndCompsCard />
          </div>
        </div>

        {/* Second Row - Features and Nearby Places with equal heights */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-8">
            <PropertyFeaturesTab features={property.features} />
          </div>
          <div className="lg:col-span-4">
            <NearbyPlacesCard />
          </div>
        </div>
      </div>
    </div>
  );
}
