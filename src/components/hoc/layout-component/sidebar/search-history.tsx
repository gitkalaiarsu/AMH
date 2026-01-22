import React from "react";
import SearchHistoryItemComponent from "./search-history-item";
import { SearchHistoryItem } from "@/types/layout-type";

interface SearchHistoryGroupProps {
  title: string;
  items: SearchHistoryItem[];
}
const SearchHistoryGroup = ({
  title,
  items,
}: Readonly<SearchHistoryGroupProps>) => {
  return (
    <div className="mb-7.5">
      <h3 className="text-[12px] font-medium text-white uppercase tracking-wider mb-2.5 font-satoshi font-weight-500">
        {title}
      </h3>
      <div className="space-y-[10px]">
        {items.map((item) => (
          <SearchHistoryItemComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchHistoryGroup;
