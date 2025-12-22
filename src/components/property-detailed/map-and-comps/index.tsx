"use client";

import Image from "next/image";
import { PieChart } from "../rental-pie-chart";

export function MapAndCompsCard() {
  // Pie chart data configuration
  const pieChartData = [
    {
      label: "Purchase costs",
      value: 75,
      color: "#1867D2",
    },
    {
      label: "Rehab costs",
      value: 25,
      color: "#EEBE00",
    },
  ];

  return (
    <div className="flex flex-col gap-3 h-auto sm:flex-row lg:flex-col lg:h-124.5">
      {/* Map */}
      <div className="w-full sm:w-1/2 lg:w-full rounded-[10px] overflow-hidden relative h-45 sm:h-50 lg:h-56.5">
        <Image
          src="/maps-image.svg"
          alt="Map"
          fill
          className="object-cover opacity-60"
        />
      </div>

      {/* Rental/Sales Comps */}
      <div className="w-full sm:w-1/2 lg:w-full flex-1 rounded-[10px] p-4 sm:p-5 lg:p-6 flex flex-col justify-center bg-[#2D3748]/60 border border-[#4B5563]/30">
        <h3 className="mb-3 text-sm font-medium text-white sm:mb-4 sm:text-base">
          Rental/Sales Comps
        </h3>

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row lg:flex-col xl:flex-row">
          {/* Pie Chart - Responsive sizing */}
          <div className="flex-shrink-0 w-28 h-28 xs:w-32 xs:h-32 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-32 lg:h-32 xl:w-40 xl:h-40">
            <PieChart data={pieChartData} showPercentages={true} />
          </div>

          {/* Legend */}
          <div className="flex flex-col w-full gap-3 sm:w-auto">
            {/* Purchase costs - Blue with diagonal stripe pattern */}
            <div className="flex items-center gap-2.5">
              <div className="flex-shrink-0 w-3 h-3 rounded-full sm:w-3.5 sm:h-3.5 bg-[#1867D2]" />
              <span className="text-xs font-medium sm:text-sm text-white/90">
                Purchase costs
              </span>
            </div>

            {/* Rehab costs - Solid yellow */}
            <div className="flex items-center gap-2.5">
              <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[#EEBE00] sm:w-3.5 sm:h-3.5" />
              <span className="text-xs font-medium sm:text-sm text-white/90">
                Rehab costs
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
