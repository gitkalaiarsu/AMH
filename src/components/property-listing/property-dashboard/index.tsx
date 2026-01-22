import Image from "next/image";
import React from "react";

const PropertyDashboard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-4.25 mb-8 font-satoshi px-4 sm:px-0">
      <div className="relative w-full h-32.5 rounded-[10px] bg-[#3b82f6] text-white shadow-lg">
        <div className="absolute top-5 left-5 flex flex-col gap-3.75 w-41.5">
          <span className="font-inter font-semibold text-[11.17px] leading-[13.86px]">
            Matching properties
          </span>
          <div className="font-bold text-[32px] sm:text-[42px] leading-[70%]">26</div>
          <div className="font-inter font-semibold text-[11.17px] leading-[13.86px] opacity-90">
            Lake Dallas, TX • Pool • Vacant
          </div>
        </div>
        <div className="absolute top-3.5 right-5 w-[31.04px] h-[31.04px] bg-white rounded-[5px] flex items-center justify-center">
          <Image
            src="/trend-graph.svg"
            alt="Trend"
            width={14.9}
            height={14.9}
            className="w-[14.9px] h-[14.9px]"
          />
        </div>
      </div>

      <div className="relative w-full h-32.5 rounded-[10px] p-[0.7px] bg-[linear-gradient(293.44deg,rgba(72,77,83,0.64)_26.3%,#919CAA_54.06%,rgba(72,77,83,0.57)_81.82%)]">
        <div className="relative w-full h-full bg-[#262730] rounded-[9px]">
          <div className="absolute top-5 left-5 flex flex-col gap-3.75 w-41.5">
            <span className="font-inter font-semibold text-[11.17px] leading-[13.86px] text-white">
              Median DOM
            </span>
            <div className="font-bold text-[32px] sm:text-[42px] leading-[70%] text-white">
              14 days
            </div>
            <div className="font-inter font-semibold text-[11.17px] leading-[13.86px] text-[#DD1C23]">
              Watch: 6 aging listings
            </div>
          </div>
          <div className="absolute top-3.75 right-5 w-[31.04px] h-[31.04px] bg-[#427EFF] rounded-[5px] flex items-center justify-center">
            <Image
              src="/timer.svg"
              alt="Timer"
              width={16}
              height={16}
              className="w-4 h-4 invert brightness-0"
            />
          </div>
        </div>
      </div>

      <div className="relative w-full h-32.5 rounded-[10px] p-[0.7px] bg-[linear-gradient(293.44deg,rgba(72,77,83,0.64)_26.3%,#919CAA_54.06%,rgba(72,77,83,0.57)_81.82%)]">
        <div className="relative w-full h-full bg-[#262730] rounded-[9px]">
          <div className="absolute top-5 left-5 flex flex-col gap-3.75 w-auto max-w-60.5">
            <span className="font-inter font-semibold text-[11.17px] leading-[13.86px] text-white">
              Avg rent price
            </span>
            <div className="flex flex-wrap items-baseline text-white">
              <span className="font-satoshi font-bold text-[32px] sm:text-[42px] leading-[70%]">
                $2,500
              </span>
              <span className="font-satoshi font-medium text-[20px] sm:text-[24px] leading-[70%]">
                /month
              </span>
            </div>
            <div className="font-inter font-semibold text-[11.17px] leading-[13.86px] text-[#44F565]">
              +3.2% MoM
            </div>
          </div>
          <div className="absolute top-3.5 right-5 w-[31.04px] h-[31.04px] bg-[#427EFF] rounded-[5px] flex items-center justify-center">
            <Image
              src="/price-tag.svg"
              alt="Price"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>

      <div className="relative w-full h-32.5 rounded-[10px] p-[0.7px] bg-[linear-gradient(293.44deg,rgba(72,77,83,0.64)_26.3%,#919CAA_54.06%,rgba(72,77,83,0.57)_81.82%)]">
        <div className="relative w-full h-full bg-[#262730] rounded-[9px] overflow-hidden">
          <div className="absolute z-10 top-5 left-5 flex flex-col gap-2 sm:gap-3 max-w-[calc(100%-80px)]">
            <div className="font-inter font-semibold text-[10px] sm:text-[11.17px] leading-[13.86px] text-white">
              House Rent YoY - Lake Dallas
            </div>
            <div className="font-satoshi font-bold text-[32px] sm:text-[42px] leading-[70%] text-white">
              $2,350
            </div>
            <div className="font-inter font-semibold text-[10px] sm:text-[11.17px] leading-[13.86px] text-white opacity-80 flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <span className="whitespace-nowrap">3+ bed</span>
              <div className="h-3 w-0 border-l-[0.64px] border-[#FFFFFF33]"></div>
              <span className="whitespace-nowrap">2 bath</span>
              <div className="h-3 w-0 border-l-[0.64px] border-[#FFFFFF33]"></div>
              <span className="whitespace-nowrap">2000sqf</span>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-full h-15 sm:h-19.75">
            <Image
              src="/Chart.svg"
              alt="Chart"
              width={385.5}
              height={79}
              className="object-cover w-full h-full object-bottom-right"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDashboard;