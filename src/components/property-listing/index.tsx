/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { Loader2 } from "lucide-react";
import { PropertyCard } from "@/components/ui/property-card";
import { mockProperties } from "@/utils/mock-data";
import PropertyHeader from "./property-header";
import PropertyFilters from "./property-filters";
import MatchingProperty from "./matching-property";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import * as layoutActions from "@/store/reducers/layoutReducer";

const PropertyListing = () => {
  const { isSidebarOpen } = useAppSelector((state: RootState) => state.layout);
  const dispatch = useAppDispatch();

  const [filters, setFilters] = useState({
    location: "Lake Dallas, TX",
    status: "Vacant",
    amenities: ["Pool"],
  });

  const [displayCount, setDisplayCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(layoutActions.setSidebar(false));
  }, []);

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

  const totalResults = extendedProperties.length;
  const displayedProperties = extendedProperties.slice(0, displayCount);
  const hasMore = displayCount < totalResults;

  // Load more items
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    // Simulate loading delay
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
        <PropertyHeader />

        {/* Filters */}
        <PropertyFilters
          activeFilters={activeFilters}
          removeFilter={removeFilter}
        />

        {/* Results Header */}
        <MatchingProperty totalResults={totalResults} />

        {/* Property Grid */}
        <div
          className={`
              grid pb-8 transition-all duration-300 ease-in-out
              gap-4 md:gap-5
              
              /* Perfect balance for all screens */
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              
              ${
                isSidebarOpen
                  ? "xl:grid-cols-4 2xl:grid-cols-4"
                  : "xl:grid-cols-5 2xl:grid-cols-6"
              }
            `}
        >
          {displayedProperties.map((property) => (
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
    </div>
  );
};

export default PropertyListing;
