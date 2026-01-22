"use client";

export function MapAndCompsCard() {

  return (
    <div className="flex flex-col gap-3 h-auto sm:flex-row lg:flex-col lg:h-124.5">
      <div className="w-full rounded-[10px] overflow-hidden relative h-45 sm:h-50 lg:h-full shadow-[var(--map-card-shadow)]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26730.41002150702!2d-97.06177568948335!3d33.12744937614569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c33c90b58e523%3A0xa9ddd2ea50a2790b!2sLake%20Dallas%2C%20TX%2075065%2C%20USA!5e0!3m2!1sen!2sin!4v1767169085582!5m2!1sen!2sin"
          className="absolute inset-0 object-cover w-full h-full" 
          allowFullScreen
          loading="lazy"
          title="map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Comps Card - Commented out */}
      {/* ... */}
    </div>
  );
}