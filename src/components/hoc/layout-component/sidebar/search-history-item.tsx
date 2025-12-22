import React from "react";
import type { SearchHistoryItem } from "@/types/property";

interface SearchHistoryItemComponentProps {
  item: SearchHistoryItem;
}

const SearchHistoryItemComponent = ({
  item,
}: Readonly<SearchHistoryItemComponentProps>) => {
  return (
    <button className="w-full max-w-[323px] mx-auto h-[72px] text-left px-5 py-3.5 rounded-[10px] bg-[var(--search-bg-inner)] hover:bg-[var(--search-bg-hover)] transition-colors relative block">
      <p className="text-[14px] text-white font-medium leading-[22px] truncate pr-8 font-satoshi">
        {item.query}
      </p>
      <p className="text-[12px] font-medium text-white/50 tracking-[-0.02em] leading-4 mt-1 font-satoshi">
        {item.matches} Matches • {item.filters}
      </p>
    </button>
  );
};

export default SearchHistoryItemComponent;
