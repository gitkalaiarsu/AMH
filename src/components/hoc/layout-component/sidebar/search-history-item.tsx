import React from "react";
import type { SearchHistoryItem } from "@/types/property";

interface SearchHistoryItemComponentProps {
  item: SearchHistoryItem;
}

const SearchHistoryItemComponent = ({
  item,
}: Readonly<SearchHistoryItemComponentProps>) => {
  return (
    <button className="w-full max-w-80.75 mx-auto h-18 text-left px-5 py-3.5 rounded-[10px] bg-(--search-bg-inner) hover:bg-(--search-bg-hover) transition-colors relative block">
      <p className="text-[14px] text-white font-medium leading-5.5 truncate pr-8 font-satoshi">
        {item.query}
      </p>
      <p className="text-[12px] font-medium text-white/50 tracking-[-0.02em] leading-4 mt-1 font-satoshi">
        {item.matches} Matches • {item.filters}
      </p>
    </button>
  );
};

export default SearchHistoryItemComponent;
