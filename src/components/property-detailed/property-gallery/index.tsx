"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PropertyImageGalleryProps {
  images: string[];
  fallbackImage: string;
  alt: string;
  className?: string;
  isSidebarOpen?: boolean;
}

export function PropertyImageGallery({
  images,
  fallbackImage,
  alt,
  className,
  isSidebarOpen = false,
}: Readonly<PropertyImageGalleryProps>) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Check scroll position and update button visibility
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Initialize scroll check on mount and when images change
  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    if (container) {
      const resizeObserver = new ResizeObserver(checkScrollPosition);
      resizeObserver.observe(container);
      return () => resizeObserver.disconnect();
    }
  }, [images]);

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const scrollThumbnailsLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollThumbnailsRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-2.5 h-full w-full",
        "col-span-1 lg:col-span-2",
        className,
      )}
    >
      {/* Main Image Container */}
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-[10px] border border-border/50 shadow-sm group",
          "aspect-521/398",
          // Responsive height adjustments
          "h-62.5 sm:h-75 md:h-87.5 lg:h-99.5",
          // Max width constraints based on sidebar
          isSidebarOpen
            ? "max-w-full xl:max-w-120"
            : "max-w-full lg:max-w-140.5",
        )}
      >
        <Image
          src={images[selectedImage] || fallbackImage}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500"
          priority
        />

        {/* Previous button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                     flex items-center justify-center 
                     bg-black/50 hover:bg-black/70 text-white 
                     transition-colors rounded-r-sm
                     w-6.5 h-5.5"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Next button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
                     flex items-center justify-center 
                     bg-black/50 hover:bg-black/70 text-white 
                     transition-colors rounded-l-sm
                     w-6.5 h-5.5"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Thumbnail Scroll Section */}
      <div
        className={cn(
          "relative group/thumbs w-full",
          "h-15 sm:h-17.5 md:h-20 lg:h-21.25",
          isSidebarOpen
            ? "max-w-full xl:max-w-120"
            : "max-w-full lg:max-w-140.5",
        )}
      >
        {/* Left scroll button */}
        {canScrollLeft && (
          <button
            onClick={scrollThumbnailsLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 
                       flex items-center justify-center 
                       bg-black/50 hover:bg-black/70 text-white 
                       rounded-r-sm backdrop-blur-[1px]
                       w-6.5 h-5.5"
            aria-label="Scroll thumbnails left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}

        {/* Thumbnail container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollPosition}
          className={cn(
            "h-full w-full flex gap-2 sm:gap-2.5 overflow-x-auto",
            "scrollbar-hide",
            "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
          )}
          style={{
            paddingLeft: canScrollLeft ? "30px" : "0",
            paddingRight: canScrollRight ? "30px" : "0",
          }}
        >
          {images.map((image, index) => (
            <button
              key={index + 1}
              onClick={() => setSelectedImage(index)}
              className={cn(
                "relative shrink-0 overflow-hidden rounded-[10px] transition-all duration-300",
                // Responsive thumbnail sizes
                "w-22.5 h-13.75 sm:w-25 sm:h-16.25 md:w-27.5 md:h-18 lg:w-30.5 lg:h-20",
                selectedImage === index
                  ? "border border-white opacity-100 ring-2 ring-primary/20"
                  : "border-transparent opacity-60 hover:opacity-100",
              )}
            >
              <Image
                src={image}
                alt={`View ${index + 1}`}
                fill
                className="object-cover"
              />
              {selectedImage !== index && (
                <div className="absolute inset-0 transition-colors bg-black/20 hover:bg-transparent" />
              )}
            </button>
          ))}
        </div>

        {/* Right scroll button */}
        {canScrollRight && (
          <button
            onClick={scrollThumbnailsRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 
                       flex items-center justify-center 
                       bg-black/50 hover:bg-black/70 text-white 
                       rounded-l-sm backdrop-blur-[1px]
                       w-6.5 h-5.5"
            aria-label="Scroll thumbnails right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
