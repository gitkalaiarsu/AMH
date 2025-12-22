import Image from "next/image";

export const SearchAction = () => {
  return (
    <div className="px-4 md:px-4.75 pt-5 pb-5.5 shrink-0">
      <div className="relative w-full max-w-80.75 mx-auto h-11 rounded-[10px] bg-linear-to-r from-[var(--search-gradient-start)] via-[var(--search-gradient-start)] to-[var(--search-gradient-end)] p-px">
        <div className="relative w-full h-full bg-(--search-bg-inner) rounded-[10px] flex items-center px-5 shadow-[0px_0px_4px_0px_#00000040]">
          <div className="mr-3 shrink-0">
            <Image
              src="/added-search.svg"
              alt="Search"
              width={20}
              height={20}
            />
          </div>

          <input
            type="text"
            placeholder="Search history"
            className="flex-1 w-full text-sm text-white bg-transparent border-none outline-none placeholder:text-white font-satoshi"
          />
        </div>
      </div>
    </div>
  );
};
