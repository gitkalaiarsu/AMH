"use client";

import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { Check, ChevronDown, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MultiSelectOption {
  readonly id: string | number;
  readonly value: string;
  readonly label: string;
}

export interface GroupedMultiSelectOption {
  readonly id: string;
  readonly label: string;
  readonly options: MultiSelectOption[];
}

interface GroupedMultiSelectProps {
  readonly value: string[];
  readonly onValueChange: (value: string[]) => void;
  readonly options: GroupedMultiSelectOption[];
  readonly placeholder?: string;
  readonly className?: string;
  readonly onOpenChange?: (isOpen: boolean) => void;
  readonly onBlur?: () => void;
  readonly name?: string;
  readonly required?: boolean;
  readonly disabled?: boolean;
  readonly defaultExpandedGroups?: string[];
  readonly showAllSelectedText?: boolean;
}

export function GroupedMultiSelect({
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
  defaultExpandedGroups = [],
  showAllSelectedText = true,
}: GroupedMultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [expandedGroups, setExpandedGroups] = React.useState<string[]>(
    defaultExpandedGroups
  );
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const allOptions = React.useMemo(
    () => options.flatMap((group) => group.options),
    [options]
  );

  const getGroupSelectedCount = (groupId: string) => {
    const group = options.find((g) => g.id === groupId);
    if (!group) return 0;
    return group.options.filter((opt) => value.includes(opt.value)).length;
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    onOpenChange?.(isOpen);
    if (!isOpen) {
      onBlur?.();
    }
  };

  const toggleGroupExpand = (groupId: string) => {
    setExpandedGroups((prev) =>
      prev.includes(groupId)
        ? prev.filter((id) => id !== groupId)
        : [...prev, groupId]
    );
  };

  const toggleOption = (optionValue: string) => {
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

  const getDisplayText = () => {
    if (value.length === 0) {
      return placeholder;
    }

    if (showAllSelectedText && value.length === allOptions.length) {
      return "All selected";
    }

    const selectedLabels = allOptions
      .filter((opt) => value.includes(opt.value))
      .map((opt) => opt.label);

    return selectedLabels.join(", ");
  };

  const displayText = getDisplayText();
  const isPlaceholder = value.length === 0;

  return (
    <div className="relative w-full max-w-full min-w-0">
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
        {allOptions.map((opt) => (
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
              "flex w-full items-center justify-between rounded-[5px] border px-2.5",
              "h-10",
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
            <span
              className={cn(
                "text-left truncate flex-1 min-w-0",
                isPlaceholder ? "text-(--input-placeholder)" : "text-(--input-fg)"
              )}
            >
              {displayText}
            </span>
          </button>
        </Popover.Trigger>

        <div className="absolute flex items-center gap-2 -translate-y-1/2 pointer-events-none right-2 top-1/2">
          {value.length > 0 && (
            <button
              type="button"
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
              "bg-(--input-bg) border-(--input-border) shadow-md",
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
                "max-h-64 overflow-y-auto overflow-x-hidden py-1",
                "[&::-webkit-scrollbar]:hidden",
                "[-ms-overflow-style:'none'] [scrollbar-width:'none']"
              )}
            >
              {options.map((group) => {
                const isExpanded = expandedGroups.includes(group.id);
                const selectedCount = getGroupSelectedCount(group.id);

                return (
                  <div key={group.id}>
                    <div
                      onClick={() => toggleGroupExpand(group.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleGroupExpand(group.id);
                        }
                      }}
                      className={cn(
                        "flex items-center justify-between w-full cursor-pointer select-none",
                        "px-3 py-2 text-[11px] font-satoshi font-semibold text-(--input-fg)",
                        "hover:bg-(--input-border)/30 transition-colors duration-150"
                      )}
                    >
                      <div className="flex items-center">
                        {isExpanded ? (
                          <ChevronDown className="w-3.5 h-3.5 mr-2 shrink-0" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5 mr-2 shrink-0" />
                        )}
                        <span>{group.label}</span>
                      </div>

                      {selectedCount > 0 && (
                        <span className="px-1.5 py-0.5 text-[9px] font-medium bg-[#6366f1] text-white rounded-full">
                          {selectedCount}
                        </span>
                      )}
                    </div>

                    {isExpanded && (
                      <div className="pb-1">
                        {group.options.map((option) => {
                          const isSelected = value.includes(option.value);

                          return (
                            <div
                              key={option.id}
                              role="option"
                              tabIndex={0}
                              aria-selected={isSelected}
                              onClick={() => toggleOption(option.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  toggleOption(option.value);
                                }
                              }}
                              className={cn(
                                "flex items-center w-full cursor-pointer select-none",
                                "pl-8 pr-3 py-2 text-[11px] font-satoshi text-(--input-fg)",
                                "outline-none hover:bg-(--input-border)/50 transition-colors duration-150"
                              )}
                            >
                              <span
                                className={cn(
                                  "w-4 h-4 rounded border-2 flex items-center justify-center mr-3 shrink-0 transition-colors",
                                  isSelected
                                    ? "bg-[#6366f1] border-[#6366f1]"
                                    : "border-gray-400 bg-transparent"
                                )}
                              >
                                {isSelected && (
                                  <Check
                                    className="w-3 h-3 text-white"
                                    strokeWidth={3}
                                  />
                                )}
                              </span>
                              <span>{option.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
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