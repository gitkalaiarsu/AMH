
export interface LayoutInitialState {
  isSidebarOpen: boolean;
  searchHistory: SearchHistoryItem[];
}

export interface SearchHistoryItem {
  id: string;
  query: string;
  matches: number;
  filters: string;
  timestamp: Date;
  category: string;
}