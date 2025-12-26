"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import * as layoutActions from "@/store/reducers/layoutReducer";

export function Header() {
  const { isSidebarOpen } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const toggleSidebar = () => {
    dispatch(layoutActions.setSidebar(!isSidebarOpen));
  };

  return (
    <header className="relative shrink-0 z-50 w-full bg-[#272630]">
      <div className="relative flex h-13.25 items-center justify-between px-2 sm:px-4 md:px-6">
        <button className="z-10 flex items-center cursor-pointer shrink-0">
          <Image
            src="/property-pulse-logo.svg"
            alt="Property Pulse"
            width={77}
            height={30}
            className="h-6 sm:h-7.5 w-auto"
            priority
          />
        </button>

        <div className="absolute items-center justify-center hidden -translate-x-1/2 lg:flex left-1/2">
          <p className="text-xs font-bold leading-5.5 tracking-[0.5px]  text-[#BEBEC9] uppercase font-satoshi">
            AI Amenities locator
          </p>
        </div>

        <div className="z-10 flex items-center h-full shrink-0">
          <div className="flex items-center px-2 md:px-3">
            <Button
              variant="ghost"
              size="icon"
              className="relative w-8 h-8 text-white cursor-pointer hover:bg-white/10 sm:w-9 sm:h-9 md:w-10 md:h-10"
            >
              <div className="relative flex items-center justify-center w-4 h-4">
                <Image
                  src="/notification-bell.svg"
                  alt="Bell"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                <span className="absolute -top-px -right-0.75 flex items-center justify-center bg-red-500 rounded-full w-3 h-3 border-[1.5px]">
                  <span className="text-[7px] font-bold text-white leading-none pb-[0.5px]">
                    6
                  </span>
                </span>
              </div>
            </Button>
          </div>

          <div className="w-px h-4 bg-white/20" />

          <div className="flex items-center px-2 md:px-3">
            <Button
              variant="ghost"
              size="icon"
              className="relative w-8 h-8 text-white cursor-pointer hover:bg-white/10 sm:w-9 sm:h-9 md:w-10 md:h-10"
            >
              <Image
                src="/theme.svg"
                alt="theme color icon"
                width={19}
                height={19}
                className="w-5 h-5"
              />
            </Button>
          </div>

          <div className="w-px h-4 bg-white/20" />

          <div className="flex items-center gap-2 px-2 md:px-4">
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 md:h-9 md:w-9 shrink-0">
              <Image
                src="/profile.svg"
                alt="User Profile"
                width={36}
                height={36}
                className="object-cover w-full h-full rounded-full"
              />
            </div>

            <div className="flex-col hidden lg:flex">
              <span className="text-sm text-white font-satoshi">Sarath</span>
              <span className="text-[10px] text-white opacity-30 font-medium">
                Sales Manager
              </span>
            </div>
          </div>

          <div className="w-px h-4 bg-white/20" />

          <div className="flex items-center px-2 md:px-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="w-8 h-8 text-white cursor-pointer hover:bg-white/10 sm:w-9 sm:h-9 md:w-10 md:h-10"
            >
              <Image
                src="/menu.svg"
                alt="Menu"
                width={16}
                height={16}
                className="w-5 h-5"
              />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
