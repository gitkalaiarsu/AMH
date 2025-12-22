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
    <header className="shrink-0 z-50 w-full bg-[#13161C]">
      <div className="relative flex h-13.25 items-center justify-between px-2 sm:px-4 md:px-6">
        {/* Left Section - Logo */}
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

        {/* Center Section - Title (Absolutely centered on lg+) */}
        <div className="absolute items-center justify-center hidden -translate-x-1/2 lg:flex left-1/2">
          <p className="text-sm text-white uppercase font-satoshi whitespace-nowrap">
            AI Amenities locator
          </p>
        </div>

        {/* Right Section */}
        <div className="z-10 flex items-center h-full shrink-0">
          {/* Notification Bell */}
          <div className="flex items-center px-2 md:px-3">
            <Button
              variant="ghost"
              size="icon"
              className="relative w-8 h-8 text-white cursor-pointer hover:bg-white/10 sm:w-9 sm:h-9 md:w-10 md:h-10"
            >
              <Image
                src="/notification-bell.svg"
                alt="Bell"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1.5 md:right-2 h-3.5 w-3.5 flex items-center justify-center rounded-full bg-red-500 border-[1.5px] border-[#13161C]">
                <span className="text-[8px] font-bold text-white">6</span>
              </span>
            </Button>
          </div>

          {/* Divider */}
          <div className="w-px h-4 bg-white/20" />

          {/* Theme Toggle */}
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

          {/* Divider */}
          <div className="w-px h-4 bg-white/20" />

          {/* User Profile */}
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

          {/* Divider */}
          <div className="w-px h-4 bg-white/20" />

          {/* Menu Button */}
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
