"use client";

import Image from "next/image";
import { PieChart } from "../rental-pie-chart";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";

export function MapAndCompsCard() {
  const { isSidebarOpen } = useAppSelector((state: RootState) => state?.layout);

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
      <div className="w-full sm:w-1/2 lg:w-full rounded-[10px] overflow-hidden relative h-45 sm:h-50 lg:h-56.5">
        <Image src="/maps-image.svg" alt="Map" fill className="object-cover" />
      </div>

      <div className="w-full sm:w-1/2 lg:w-full flex-1 rounded-[10px] p-4 sm:p-5 lg:p-6 flex flex-col justify-center bg-[#2D3748]/60 border border-[#4B5563]/30 min-w-0 overflow-hidden">
        <h3 className="mb-3 text-sm font-medium text-white sm:mb-4 sm:text-base">
          Rental/Sales Comps
        </h3>

        <div
          className={`flex gap-4 min-w-0 ${
            isSidebarOpen
              ? "flex-col items-center"
              : "flex-col items-center xl:flex-row xl:justify-between"
          }`}
        >
          <div
            className={`shrink-0 ${
              isSidebarOpen
                ? "w-27.5 h-27.5 sm:w-30 sm:h-30"
                : "w-30 h-30 sm:w-35 sm:h-35 lg:w-37.5 lg:h-37.5 xl:w-40 xl:h-40"
            }`}
          >
            <PieChart data={pieChartData} showPercentages={true} />
          </div>

          <div
            className={`flex flex-col gap-3 min-w-0 ${
              isSidebarOpen ? "w-full" : "w-full xl:flex-1 xl:max-w-45"
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className={`shrink-0 rounded-full bg-[#1867D2] ${
                  isSidebarOpen ? "w-2.5 h-2.5" : "w-3 h-3 sm:w-3.5 sm:h-3.5"
                }`}
              />
              <span
                className={`text-white/90 whitespace-nowrap ${
                  isSidebarOpen
                    ? "text-[10px] sm:text-xs"
                    : "text-xs sm:text-sm"
                }`}
              >
                Purchase costs
              </span>
            </div>

            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className={`shrink-0 rounded-full bg-[#EEBE00] ${
                  isSidebarOpen ? "w-2.5 h-2.5" : "w-3 h-3 sm:w-3.5 sm:h-3.5"
                }`}
              />
              <span
                className={`font-medium text-white/90 whitespace-nowrap ${
                  isSidebarOpen
                    ? "text-[10px] sm:text-xs"
                    : "text-xs sm:text-sm"
                }`}
              >
                Rehab costs
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
