import { Button } from "@/components/ui/button";
import Image from "next/image";

interface SearchPropertiesProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: () => void;
}
const SearchProperties = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
}: Readonly<SearchPropertiesProps>) => {
  return (
    <>
      <h1 className="text-3xl md:text-[42px] font-bold text-white capitalize text-center leading-[100%] tracking-[-1.05px] font-satoshi font-weight-700">
        Find Properties With AI
      </h1>

      {/* Search Box */}
      <div className="relative w-full">
        <div className="relative w-full rounded-[10.5px] p-[1.05px] bg-linear-to-r from-[#1867D2] to-[#004779] shadow-[0px_0px_4.2px_0px_rgba(0,0,0,0.25)]">
          <div className="relative bg-[#262730] rounded-[10px] h-full w-full p-4 md:px-5.25 md:py-[15.75px] min-h-30 md:h-31.5">
            <textarea
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g., houses in Lake Dallas, Texas with swimming pools and currently vacant..."
              className="w-full bg-transparent text-[#FFFFFF80] placeholder:text-white/50 placeholder:opacity-50 resize-none focus:outline-none text-base md:text-[16.8px] font-medium tracking-[-0.45px] leading-[23.1px] h-15 md:h-17.5"
              rows={3}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSearch();
                }
              }}
            />
            <Button
              onClick={handleSearch}
              size="icon"
              className="absolute bottom-3 right-3 md:bottom-4 md:right-4 rounded-xl bg-[#1867D2] hover:opacity-90 transition-opacity h-10 w-10 md:h-[42px] md:w-[42px] border-none"
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
    </>
  );
};

export default SearchProperties;
