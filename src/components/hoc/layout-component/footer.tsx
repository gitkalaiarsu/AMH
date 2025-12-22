"use client";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="shrink-0 border-t border-white/15 bg-[#000000] w-full text-xs font-medium text-gray-400">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-3 py-3 md:flex-row min-h-11 md:py-0 md:gap-0">
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-0">
            <div className="whitespace-nowrap font-satoshi text-(--footer-copy-text-color)">
              Copyright AMH
            </div>

            <div className="hidden w-px h-3 mx-4 md:block bg-white/20" />

            <button className="flex items-center gap-2 text-white transition-colors hover:text-white/80">
              <Image
                src="/message-icon.svg"
                alt="Message Square"
                width={14}
                height={14}
                className="cursor-pointer"
              />
              <span className="text-sm text-white font-satoshi leading-3.5">
                Give feedback
              </span>
            </button>

            <div className="hidden w-px h-3 mx-4 md:block bg-white/20" />

            <div className="flex items-center gap-4 md:gap-6">
              <Link
                href="#"
                className="transition-colors hover:text-white font-satoshi text-(--footer-copy-text-color)"
              >
                Footer item 1
              </Link>
              <Link
                href="#"
                className="transition-colors hover:text-white font-satoshi text-(--footer-copy-text-color)"
              >
                Footer item 2
              </Link>
              <Link
                href="#"
                className="transition-colors hover:text-white font-satoshi text-(--footer-copy-text-color)"
              >
                Footer item 3
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
