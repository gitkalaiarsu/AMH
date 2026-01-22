"use client";

import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { Check, ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MultiSelectOption {
  readonly id: string | number;
  readonly value: string;
  readonly label: string;
}

interface MultiSelectProps {
  readonly value: string[];
  readonly onValueChange: (value: string[]) => void;
  readonly options: MultiSelectOption[];
  readonly placeholder?: string;
  readonly className?: string;
  readonly onOpenChange?: (isOpen: boolean) => void;
  readonly onBlur?: () => void;
  readonly name?: string;
  readonly required?: boolean;
  readonly disabled?: boolean;
}

export function MultiSelect({
  value,
  onValueChange,
  options,
  placeholder = "Select",
  className,
  onOpenChange,
  onBlur,
  name,
  required = false,
  disabled = false,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const regularOptions = options.filter((opt) => opt.value !== "all");
  const allOption = options.find((opt) => opt.value === "all");

  const isAllSelected =
    regularOptions.length > 0 &&
    regularOptions.every((opt) => value.includes(opt.value));

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    onOpenChange?.(isOpen);
    if (!isOpen) {
      onBlur?.();
    }
  };

  const handleAllClick = () => {
    if (isAllSelected) {
      onValueChange([]);
    } else {
      onValueChange(regularOptions.map((opt) => opt.value));
    }
  };

  const toggle = (optionValue: string) => {
    if (optionValue === "all") {
      handleAllClick();
      return;
    }
    onValueChange(
      value.includes(optionValue)
        ? value.filter((v) => v !== optionValue)
        : [...value, optionValue]
    );
  };

  const handleClear = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onValueChange([]);
    triggerRef.current?.focus();
  };

  const selectedLabels = regularOptions
    .filter((opt) => value.includes(opt.value))
    .map((opt) => opt.label);

  const getDisplayText = () => {
    if (selectedLabels.length === 0) {
      return <span className="text-(--input-placeholder)">{placeholder}</span>;
    }
    if (isAllSelected && allOption) {
      return <span className="text-(--input-fg)">{allOption.label}</span>;
    }
    return (
      <span className="text-(--input-fg) truncate">{selectedLabels.join(", ")}</span>
    );
  };

  return (
    <div className="relative w-full">
      <select
        name={name}
        multiple
        value={value}
        onChange={(e) => {
          const selectedValues = Array.from(
            e.target.selectedOptions,
            (option) => option.value
          );
          onValueChange(selectedValues);
        }}
        required={required}
        tabIndex={-1}
        className="absolute w-0 h-0 opacity-0 pointer-events-none"
        aria-hidden="true"
      >
        {regularOptions.map((opt) => (
          <option key={opt.id} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <Popover.Root open={open} onOpenChange={handleOpenChange}>
        <Popover.Trigger asChild disabled={disabled}>
          <button
            ref={triggerRef}
            type="button"
            aria-expanded={open}
            aria-haspopup="listbox"
            disabled={disabled}
            className={cn(
              "flex h-10 w-full items-center justify-between rounded-[5px] border px-2.5",
              "pr-16",
              "bg-(--input-bg) text-(--input-fg) font-satoshi text-[11px]",
              "ring-offset-background focus:outline-none focus-visible:outline-none",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "border-(--input-border)",
              "shadow-sm",
              "focus-gradient-border",
              className
            )}
          >
            <span className="text-left truncate">{getDisplayText()}</span>
          </button>
        </Popover.Trigger>

        <div className="absolute flex items-center gap-2 -translate-y-1/2 pointer-events-none right-2 top-1/2">
          {value.length > 0 && (
            <button
              tabIndex={0}
              aria-label="Clear selection"
              className={cn(
                "h-6 w-6 flex items-center justify-center rounded-sm",
                "text-(--input-fg)/60 hover:text-(--input-fg) cursor-pointer pointer-events-auto transition-colors"
              )}
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onClick={handleClear}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onValueChange([]);
                }
              }}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}

          <div className="w-7.5 h-7.5 bg-(--arrow-bg) rounded-[5.68px] flex items-center justify-center shrink-0">
            <ChevronDown
              className={cn(
                "w-3 h-3 text-white transition-transform duration-200",
                open && "rotate-180"
              )}
            />
          </div>
        </div>

        <Popover.Portal>
          <Popover.Content
            className={cn(
              "z-50 w-(--radix-popover-trigger-width) rounded-md border",
              "bg-(--input-bg) border-(--input-border) p-1 shadow-md",
              "data-[state=open]:animate-in data-[state=closed]:animate-out",
              "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
              "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2"
            )}
            sideOffset={4}
            align="start"
          >
            <div
              className={cn(
                "max-h-50 overflow-y-auto overflow-x-hidden",
                "[scrollbar-width:none]",
                "[&::-webkit-scrollbar]:hidden",
                "[-ms-overflow-style:none]"
              )}
            >
              {options.map((option, index) => {
                const isSelected =
                  option.value === "all"
                    ? isAllSelected
                    : value.includes(option.value);
                const isLast = index === options.length - 1;

                return (
                  <div
                    key={option.id}
                    role="option"
                    tabIndex={0}
                    aria-selected={isSelected}
                    onClick={() => toggle(option.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        toggle(option.value);
                      }
                    }}
                    className={cn(
                      "relative flex w-full cursor-pointer select-none items-center",
                      "rounded-sm py-2 pl-8 pr-2 text-[11px] font-satoshi text-[var(--input-fg)]",
                      "outline-none hover:bg-[var(--input-border)] hover:text-[var(--input-fg)]",
                      "focus:bg-[var(--input-border)] focus:text-[var(--input-fg)]",
                      "transition-colors duration-150",
                      isSelected && "bg-[var(--input-border)]/50",
                      !isLast && "mb-1"
                    )}
                  >
                    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                      <span
                        className={cn(
                          "w-3.5 h-3.5 rounded-sm border border-[#6366f1] flex items-center justify-center transition-colors",
                          isSelected && "bg-[#6366f1]"
                        )}
                      >
                        {isSelected && (
                          <Check className="w-2.5 h-2.5 text-white" />
                        )}
                      </span>
                    </span>
                    <span
                      className={option.value === "all" ? "font-medium" : ""}
                    >
                      {option.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}