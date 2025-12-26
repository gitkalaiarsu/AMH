"use client";
import { cn } from "@/lib/utils";
import { mockSearchHistory } from "@/utils/mock-data";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import * as layoutActions from "@/store/reducers/layoutReducer";
import { SearchHeader } from "./search-header";
import { SearchAction } from "./search-action";
import SearchHistoryGroup from "./search-history";

export function SearchHistorySidebar() {
  const dispatch = useAppDispatch();
  const { isSidebarOpen } = useAppSelector((state) => state.layout);

  const todayItems = mockSearchHistory.filter(
    (item) => item.category === "today",
  );
  const yesterdayItems = mockSearchHistory.filter(
    (item) => item.category === "yesterday",
  );

  const closeSidebar = () => {
    dispatch(layoutActions.setSidebar(false));
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
          "bg-[#13161C]",
          "hidden md:block md:relative",
          isSidebarOpen ? "md:w-sidebar-open" : "md:w-sidebar-closed",
          isSidebarOpen &&
            "block absolute top-0 left-0 bottom-0 z-50 w-[85vw] max-w-89.75 md:relative md:top-auto md:left-auto md:bottom-auto",
          isSidebarOpen
            ? "border border-sidebar-border-highlight md:border md:border-sidebar-border-highlight"
            : "md:border-r md:border-sidebar-border-highlight",
        )}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {isSidebarOpen && (
            <>
              <SearchHeader title="Search History" onClose={closeSidebar} />

              <SearchAction />

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
          )}
        </div>
      </aside>
    </>
  );
}
