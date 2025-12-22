"use client";
import Image from "next/image";

interface SearchHeaderProps {
  title: string;
  onClose: () => void;
}

export const SearchHeader = ({ title, onClose }: SearchHeaderProps) => {
  return (
    <div className="flex items-center justify-between shrink-0 w-full max-w-80.75 mx-auto h-13.5 px-6 md:px-4 py-4">
      <h2 className="text-[16px] text-white leading-5.5 font-satoshi">
        {title}
      </h2>
      <button
        onClick={onClose}
        className="p-2 ml-3 transition-colors duration-200 ease-in-out rounded-md cursor-pointer shrink-0 hover:bg-white/10"
        aria-label="Close sidebar"
      >
        <Image src="/sidebarCancel.svg" alt="Toggle" width={17} height={17} />
      </button>
    </div>
  );
};
