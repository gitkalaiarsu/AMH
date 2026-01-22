"use client";

import { cn } from "@/lib/utils";
import { mockSearchHistory } from "@/utils/mock-data";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import * as layoutReducer from "@/store/reducers/layout-reducer";
import { SearchHeader } from "./search-header";
import { SearchAction } from "./search-action";
import SearchHistoryGroup from "./search-history";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import Image from "next/image";

export function SearchHistorySidebar() {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const { isSidebarOpen, searchHistory } = useAppSelector((state: RootState) => state.layout);

  useEffect(() => {
    if(mockSearchHistory?.length > 0){
      dispatch(layoutReducer.setSearchHistory(mockSearchHistory));
    }
  }, [dispatch]); 

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    
    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches && isSidebarOpen) {
        dispatch(layoutReducer.setSidebar(false));
      }
    };

    handleMediaChange(mediaQuery);

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [isSidebarOpen, dispatch]);

  const todayItems = searchHistory.filter(
    (item) => item.category === "today",
  );
  const yesterdayItems = searchHistory.filter(
    (item) => item.category === "yesterday",
  );

  const closeSidebar = () => {
    dispatch(layoutReducer.setSidebar(false));
  };

  const openSidebar = () => {
    dispatch(layoutReducer.setSidebar(true));
  };

  return (
    <>
      {isSidebarOpen && (
        <button
          onClick={closeSidebar}
          onKeyDown={(e) => e.key === "Escape" && closeSidebar()}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          aria-label="Close sidebar"
          type="button"
        />
      )}

      <aside
        className={cn(
          "shrink-0 overflow-hidden transition-all duration-300 ease-in-out",
          "bg-(--sidebar-bg)",
          "hidden md:block md:relative",
          isSidebarOpen ? "md:w-sidebar-open" : "md:w-sidebar-closed", 
          isSidebarOpen &&
            "block absolute top-0 left-0 bottom-0 z-50 w-[85vw] max-w-89.75 md:relative md:top-auto md:left-auto md:bottom-auto",
          isSidebarOpen
            ? "border border-(--sidebar-border-color) md:border md:border-(--sidebar-border-color)"
            : "md:border-r md:border-(--sidebar-border-color)",
        )}
      >
        <div className="flex flex-col h-full overflow-hidden">
          
          {isSidebarOpen ? (
            <>
              <SearchHeader title="Search History" onClose={closeSidebar} />

              <SearchAction 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />

              <div className="flex-1 overflow-y-auto px-4 md:px-5.5 pb-4 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {todayItems.length > 0 && (
                  <SearchHistoryGroup title="TODAY" items={todayItems} />
                )}

                {yesterdayItems.length > 0 && (
                  <SearchHistoryGroup
                    title="YESTERDAY"
                    items={yesterdayItems}
                  />
                )}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center w-full pt-4">
              <button
                onClick={openSidebar}
                className="flex items-center justify-center p-2 transition-colors rounded-md hover:bg-white/5 group"
                aria-label="Open Sidebar"
                title="Open Search History"
              >
                <Image
                  src="/sidebar-icons.svg"
                  alt="Open Menu"
                  width={20}
                  height={20}
                  className="w-5 h-5 transition-opacity cursor-pointer group-hover:opacity-100"
                />
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}