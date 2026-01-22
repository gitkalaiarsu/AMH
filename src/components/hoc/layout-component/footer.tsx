"use client";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="shrink-0 w-full text-xs font-medium border-t border-(--footer-border) bg-(--footer-bg) text-(--footer-text-secondary) transition-colors duration-300">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-3 py-3 md:flex-row min-h-11 md:py-0 md:gap-0">
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-0">
            {/* Copyright Text */}
            <div className="whitespace-nowrap font-satoshi text-(--footer-copy-text-color)">
              Copyright AMH
            </div>

            {/* Vertical Divider */}
            <div className="hidden w-px h-3 mx-4 md:block bg-(--footer-border)" />

            {/* Feedback Button */}
            <button className="flex items-center gap-2 transition-colors text-(--footer-text-primary) hover:opacity-80">
              <Image
                src="/message-icon.svg"
                alt="Message Square"
                width={14}
                height={14}
                className="cursor-pointer" 
              />              
              <span className="text-sm font-satoshi leading-3.5">
                Give feedback
              </span>
            </button>

            {/* Vertical Divider */}
            <div className="hidden w-px h-3 mx-4 md:block bg-(--footer-border)" />

            {/* Links */}
            <div className="flex items-center gap-4 md:gap-6">
              <Link
                href="#"
                className="transition-colors hover:text-(--footer-text-primary) font-satoshi text-(--footer-copy-text-color)"
              >
                Footer item 1
              </Link>
              <Link
                href="#"
                className="transition-colors hover:text-(--footer-text-primary) font-satoshi text-(--footer-copy-text-color)"
              >
                Footer item 2
              </Link>
              <Link
                href="#"
                className="transition-colors hover:text-(--footer-text-primary) font-satoshi text-(--footer-copy-text-color)"
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