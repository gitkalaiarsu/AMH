import { Button } from "@/components/ui/button";
import Image from "next/image";
import { KeyboardEvent, ChangeEvent } from "react";

interface SearchPropertiesProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSubmit: () => void;
}

const SearchProperties = ({
  searchQuery,
  setSearchQuery,
  onSubmit,
}: Readonly<SearchPropertiesProps>) => {
  
  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  const handleButtonClick = () => {
    onSubmit();
  };

  return (
    <div className="relative w-full">
      <div className="relative w-full rounded-[10.5px] p-[1.05px] bg-(image:--search-border-gradient) shadow-[var(--search-shadow)]">
        <div className="relative bg-(--search-container-bg) rounded-[10px] h-full w-full p-4 md:px-5.25 md:py-[15.75px] min-h-30 md:h-31.5">
          <textarea
            value={searchQuery}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
            placeholder="e.g., houses in Lake Dallas, Texas with swimming pools and currently vacant..."
            className="w-full bg-transparent text-(--search-text) placeholder:text-(--search-placeholder) resize-none focus:outline-none text-base md:text-[16.8px] font-medium tracking-[-0.45px] leading-[23.1px] h-15 md:h-17.5"
            rows={3}
            aria-label="Property search query"
          />
          <Button
            onClick={handleButtonClick}
            size="icon"
            className="absolute bottom-3 right-3 md:bottom-4 md:right-4 rounded-xl bg-[#1867D2] hover:opacity-90 transition-opacity h-10 w-10 md:h-10.5 md:w-10.5 border-none"
            aria-label="Submit search"
          >
            <Image
              src="/send-icon.svg"
              alt="Send"
              width={12}
              height={12}
              className="cursor-pointer"
            />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchProperties;