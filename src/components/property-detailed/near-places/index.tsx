"use client";

import Image from "next/image";

export function NearbyPlacesCard() {
  return (
    <div className="w-full rounded-[10px] bg-[#FFFFFF] p-2 sm:p-5 md:p-6">
      <div className="flex items-center justify-between mb-2 sm:mb-2">
        <h3 className="font-bold text-[#041523] text-base sm:text-lg leading-none font-satoshi">
          Nearby Places
        </h3>
      </div>

      <div className="flex flex-col">
        {/* SCHOOL SECTION */}
        <div className="flex flex-col pt-3 pb-3 border-b border-[#CECECE]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-5 h-5 shrink-0">
                <Image
                  src="/school.svg"
                  alt="School"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <span className="text-base font-bold text-[#F68708] font-satoshi whitespace-nowrap leading-none">
                School
              </span>
            </div>

            {/* Icons - visible on all screen sizes */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex justify-center w-11.25 sm:w-15">
                <button
                  className="p-0 transition-opacity hover:opacity-70"
                  aria-label="Walking distance"
                >
                  <Image
                    src="/person.svg"
                    alt="Walk"
                    width={23}
                    height={23}
                    className="w-5 h-5"
                  />
                </button>
              </div>
              <div className="w-11.25 sm:w-12.5 flex justify-center">
                <button
                  className="p-0 transition-opacity hover:opacity-70"
                  aria-label="Driving distance"
                >
                  <Image
                    src="/car.svg"
                    alt="Car"
                    width={23}
                    height={23}
                    className="w-5 h-5"
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
            <PlaceRow
              name="Monte Vista Village Center"
              time="15min"
              distance="3.8mi"
            />
          </div>
        </div>

        {/* RETAIL SECTION */}
        <div className="flex flex-col pt-3 pb-3 border-b border-[#CECECE]">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center justify-center w-5 h-5 shrink-0">
              <Image
                src="/retail.svg"
                alt="Retail"
                width={20}
                height={16}
                className="object-contain"
              />
            </div>
            <span className="text-base font-bold text-[#17AD8F] font-satoshi leading-none">
              Retail
            </span>
          </div>
          <div className="flex flex-col gap-3 pl-7 sm:pl-9">
            <PlaceRow
              name="Mesa Market Place Swap"
              time="10min"
              distance="0.5mi"
            />
            <PlaceRow name="City Center Mall" time="25min" distance="5.0mi" />
            <PlaceRow
              name="Eastmark High School"
              time="25min"
              distance="5.0mi"
            />
          </div>
        </div>

        {/* PARKING LOT SECTION */}
        <div className="flex flex-col pt-3 pb-3 border-b border-[#CECECE]">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center justify-center w-5 h-5 shrink-0">
              <Image
                src="/parking.svg"
                alt="Parking"
                width={18}
                height={18}
                className="object-contain"
              />
            </div>
            <span className="text-base font-bold text-[#1867D2] font-satoshi leading-none">
              Parking Lot
            </span>
          </div>
          <div className="flex flex-col gap-3 pl-7 sm:pl-9">
            <PlaceRow
              name="Central Parking Garage"
              time="5min"
              distance="1.2mi"
            />
            <PlaceRow name="Westside Parking" time="12min" distance="2.8mi" />
          </div>
        </div>

        {/* GYM SECTION */}
        <div className="flex flex-col pt-3 pb-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center justify-center w-5 h-5 shrink-0">
              <Image
                src="/gym.svg"
                alt="Gym"
                width={21}
                height={16}
                className="object-contain"
              />
            </div>
            <span className="text-base font-bold text-[#B445FF] font-satoshi leading-none">
              Gym
            </span>
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
    <div className="flex items-start justify-between w-full gap-2">
      <span className="font-medium text-[13px] text-[#68737A] leading-none tracking-[-0.02em] flex-1 min-w-0">
        {name}
      </span>

      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <span className="font-medium text-[13px] text-[#68737A] leading-none tracking-[-0.02em] text-center w-11.25 sm:w-15">
          {time}
        </span>

        <span className="font-medium text-[13px] text-[#68737A] leading-none tracking-[-0.02em] text-center w-[45px] sm:w-[50px]">
          {distance}
        </span>
      </div>
    </div>
  );
}
