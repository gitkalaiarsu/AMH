"use client";

import Image from "next/image";

export function NearbyPlacesCard() {
  return (
    <div className="w-full rounded-[10px] bg-[#FFFFFF] p-2 sm:p-5 md:p-6">
      <div className="flex items-center justify-between mb-2 sm:mb-2">
        <h3 className="font-bold text-[#041523] text-base sm:text-lg leading-[13.86px] font-satoshi">
          Nearby Places
        </h3>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col pt-3 pb-3 border-b border-[#CECECE]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="flex items-center justify-center w-5 h-5 sm:w-4 sm:h-4 shrink-0">
                <Image src="/school.svg" alt="School" width={19} height={19} />
              </div>
              <span className="text-xs sm:text-sm text-[#F68708] whitespace-nowrap">
                School
              </span>
            </div>

            <div className="items-center hidden gap-3 lg:flex">
              <div className="flex justify-center w-15">
                <button
                  className="p-0 transition-opacity hover:opacity-70"
                  aria-label="Walking distance"
                >
                  <Image
                    src="/person.svg"
                    alt="Walk"
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5"
                  />
                </button>
              </div>

              <div className="w-12.5 flex justify-center">
                <button
                  className="p-0 transition-opacity hover:opacity-70"
                  aria-label="Driving distance"
                >
                  <Image
                    src="/car.svg"
                    alt="Car"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pl-7 sm:pl-9">
            <PlaceRow
              name="Eastman High School"
              time="10min"
              distance="2.5mi"
            />
            <PlaceRow
              name="Westside Elementary"
              time="15min"
              distance="3.8mi"
            />
          </div>
        </div>

        <div className="flex flex-col pt-3 pb-3 border-b border-[#CECECE]">
          <div className="flex items-center mb-2 gap-1.5 sm:gap-2">
            <div className="flex items-center justify-center w-5 h-5 sm:w-4 sm:h-4 shrink-0">
              <Image src="/retail.png" alt="Retail" width={19} height={19} />
            </div>
            <span className="text-xs sm:text-sm text-[#17AD8F]">Retail</span>
          </div>

          <div className="flex flex-col gap-3 pl-7 sm:pl-9">
            <PlaceRow
              name="Mesa Market Place Swap"
              time="10min"
              distance="0.5mi"
            />
            <PlaceRow name="City Center Mall" time="25min" distance="5.0mi" />
          </div>
        </div>

        <div className="flex flex-col pt-3 pb-3 border-b border-[#CECECE]">
          <div className="flex items-center mb-2 gap-1.5 sm:gap-2">
            <div className="flex items-center justify-center w-5 h-5 sm:w-4 sm:h-4 shrink-0">
              <Image src="/parking.svg" alt="Parking" width={19} height={19} />
            </div>
            <span className="text-xs sm:text-sm text-[#1867D2]">
              Parking Lot
            </span>
          </div>

          <div className="flex flex-col gap-3 pl-7 sm:pl-9">
            <PlaceRow
              name="Central Parking Garage"
              time="5min"
              distance="1.2mi"
            />
          </div>
        </div>

        <div className="flex flex-col pt-3 pb-3">
          <div className="flex items-center mb-2 gap-1.5 sm:gap-2">
            <div className="flex items-center justify-center w-5 h-5 sm:w-4 sm:h-4 shrink-0">
              <Image src="/gym.svg" alt="Gym" width={19} height={19} />
            </div>
            <span className="text-xs sm:text-sm text-[#B445FF]">Gym</span>
          </div>

          <div className="flex flex-col gap-3 pl-7 sm:pl-9">
            <PlaceRow name="Gold's Gym" time="8min" distance="2.0mi" />
            <PlaceRow name="Fitness 24/7" time="12min" distance="3.1mi" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PlaceRow({
  name,
  time,
  distance,
}: Readonly<{ name: string; time: string; distance: string }>) {
  return (
    <div className="w-full">
      <div className="flex items-start justify-between gap-2 lg:hidden">
        <span className="font-medium text-[13px] text-[#68737A] leading-[13.86px] tracking-[-0.02em] flex-1 min-w-0 truncate">
          {name}
        </span>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <span className="font-medium text-[13px] text-[#68737A] leading-[13.86px] tracking-[-0.02em] text-right whitespace-nowrap">
            {time}
          </span>
          <span className="font-medium text-[13px] text-[#68737A] leading-[13.86px] tracking-[-0.02em] text-right w-[45px] sm:w-[50px]">
            {distance}
          </span>
        </div>
      </div>

      <div className="items-center justify-between hidden gap-2 lg:flex">
        <span className="font-medium text-[13px] text-[#68737A] leading-[13.86px] tracking-[-0.02em] flex-1 min-w-0 truncate">
          {name}
        </span>

        <div className="flex items-center gap-3 shrink-0">
          <span className="font-medium text-[13px] text-[#68737A] leading-[13.86px] tracking-[-0.02em] text-center w-[60px]">
            {time}
          </span>

          <span className="font-medium text-[13px] text-[#68737A] leading-[13.86px] tracking-[-0.02em] text-center w-[50px]">
            {distance}
          </span>
        </div>
      </div>
    </div>
  );
}
