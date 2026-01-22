/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Loader2 } from "lucide-react";
import { PropertyCard } from "@/components/ui/property-card";
import { mockProperties } from "@/utils/mock-data";
import PropertyHeader from "./property-header";
import PropertyFilters from "./property-filters";
import MatchingProperty from "./matching-property";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import * as layoutReducer from "@/store/reducers/layout-reducer";
import * as propertyReducer from "@/store/reducers/property-reducer";
import { Property } from "@/types/property";
import { cn } from "@/lib/utils";
import { EditFiltersDialog } from "./property-filters/edit-filters-dialog";

const PropertyListing = () => {
  const dispatch = useAppDispatch();
  const { properties } = useAppSelector((state: RootState) => state.property);
  const { isSidebarOpen } = useAppSelector((state: RootState) => state.layout);

  // Infinite scroll state
  const [displayCount, setDisplayCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const [filters, setFilters] = useState({
    location: "Lake Dallas, TX",
    status: "Vacant",
    amenities: ["Pool"],
  });

  useEffect(() => {
    dispatch(layoutReducer.setSidebar(false));
  }, []);

  // Extended properties for demonstration (optional - remove if not needed)
  const extendedProperties = useMemo(() => {
    const extended = [];
    for (let i = 0; i < 5; i++) {
      extended.push(
        ...mockProperties.map((p, idx) => ({
          ...p,
          id: `${p.id}-${i}-${idx}`,
        })),
      );
    }
    return extended;
  }, []);

  useEffect(() => {
    // Use extendedProperties for demo, or mockProperties for real data
    dispatch(propertyReducer.setProperties(extendedProperties));
  }, []);

  const totalResults = properties.length;
  const displayedProperties = properties.slice(0, displayCount);
  const hasMore = displayCount < totalResults;

  // Load more function
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    // Simulate loading delay (replace with actual API call if needed)
    setTimeout(() => {
      setDisplayCount((prev) => Math.min(prev + 8, totalResults));
      setIsLoading(false);
    }, 500);
  }, [isLoading, hasMore, totalResults]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1 },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoading, loadMore]);

  const removeFilter = (type: string, value?: string) => {
    if (type === "location") {
      setFilters((prev) => ({ ...prev, location: "" }));
    } else if (type === "status") {
      setFilters((prev) => ({ ...prev, status: "" }));
    } else if (type === "amenity" && value) {
      setFilters((prev) => ({
        ...prev,
        amenities: prev.amenities.filter((a) => a !== value),
      }));
    }
  };

  type FilterItem = { type: "location" | "status" | "amenity"; value: string };

  const activeFilters: FilterItem[] = [
    ...(filters.location
      ? [{ type: "location" as const, value: filters.location }]
      : []),
    ...(filters.status
      ? [{ type: "status" as const, value: `Status: ${filters.status}` }]
      : []),
    ...filters.amenities.map((a) => ({ type: "amenity" as const, value: a })),
  ];

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-6 mx-auto md:px-6">
        {/* Header */}
        <PropertyHeader
          title="Lake Dallas Homes"
          amenities="Pool"
          status="Vacant"
          isBookmarked={false}
          onBookmarkToggle={() => {}}
        />
        {/* <PropertyDashboard /> */}

        {/* Filters */}
        <PropertyFilters
          activeFilters={activeFilters}
          removeFilter={removeFilter}
          setIsDialogOpen={setIsDialogOpen}
        />

        {/* Results Header */}
        <MatchingProperty totalResults={totalResults} />

        {/* Property Grid */}
       <div
  className={cn(
    "grid gap-4 md:gap-5 pb-8 transition-all duration-300 ease-in-out",
    "grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))]"
  )}
>

  {displayedProperties.map((property: Property) => (
    <PropertyCard key={property.id} property={property} />
  ))}
</div>

        {/* Infinite Scroll Loader */}
        {hasMore && (
          <div
            ref={loaderRef}
            className="flex items-center justify-center py-8"
          >
            {isLoading ? (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="text-sm">Loading more properties...</span>
              </div>
            ) : (
              <span className="text-sm text-muted-foreground">
                Scroll for more
              </span>
            )}
          </div>
        )}

        {/* End of Results */}
        {!hasMore && displayCount > 8 && (
          <div className="flex items-center justify-center py-8">
            <span className="text-sm text-muted-foreground">
              Showing all {totalResults} properties
            </span>
          </div>
        )}
      </div>
      {/* Edit Filters Dialog */}
      <EditFiltersDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  );
};

export default PropertyListing;
