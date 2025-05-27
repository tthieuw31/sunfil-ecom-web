"use client";

import React, { FC } from "react";
import { Check, ChevronDown } from "lucide-react";
import { useSortParams } from "@/hooks/useSortParams";
import { PriceSort, SORT_OPTIONS } from "@/types/common";

interface SortButtonProps {
  isActive: boolean;
  label: string;
  onClick: () => void;
}

const SortButton: FC<SortButtonProps> = ({ isActive, label, onClick }) => (
  <button
    onClick={onClick}
    className={`relative font-bold px-3 py-1 rounded-lg border border-transparent transition hover:bg-blue-50 hover:cursor-pointer
      ${isActive ? "bg-blue-100 text-[#0373F3]" : "bg-white text-[#1C252E]"}`}
  >
    {label}
    {isActive && (
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[10px] shadow-md">
        <Check className="w-3 h-3" strokeWidth={3} />
      </div>
    )}
  </button>
);

const PriceSortButton: FC<{ priceSort: PriceSort; onToggle: () => void }> = ({
  priceSort,
  onToggle,
}) => {
  const label =
    priceSort === "price-asc"
      ? "Giá: Thấp → Cao"
      : priceSort === "price-desc"
      ? "Giá: Cao → Thấp"
      : "Giá";

  return (
    <button
      onClick={onToggle}
      className={`flex items-center font-medium px-3 py-1 rounded-lg transition hover:bg-blue-50 hover:cursor-pointer
        ${
          priceSort !== "none"
            ? "bg-blue-100 text-[#0373F3]"
            : "bg-white text-[#1C252E]"
        }`}
    >
      {label}
      <ChevronDown
        className={`ml-1 transition-transform duration-300
          ${priceSort === "price-asc" ? "rotate-180" : ""}`}
      />
    </button>
  );
};

const SortController: FC = () => {
  const { primarySort, priceSort, setPrimarySort, togglePriceSort } =
    useSortParams();

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
      {/* Title for desktop */}
      <h2 className="hidden md:flex text-xl font-semibold text-[#1C252E]">
        Danh sách sản phẩm
      </h2>

      {/* Desktop controls */}
      <div className="hidden md:flex items-center space-x-3 text-sm">
        <span className="font-medium text-[#1C252E]">Sắp xếp theo</span>
        {SORT_OPTIONS.map(({ key, label }) => (
          <SortButton
            key={key}
            isActive={primarySort === key}
            label={label}
            onClick={() => setPrimarySort(key)}
          />
        ))}
        <PriceSortButton
          priceSort={priceSort as PriceSort}
          onToggle={togglePriceSort}
        />
      </div>

      {/* Mobile controls */}
      <div className="flex flex-col w-full md:hidden text-sm gap-2 mt-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium text-[#1C252E] whitespace-nowrap mr-2">
            Sắp xếp theo
          </span>
          {SORT_OPTIONS.map(({ key, label }) => (
            <SortButton
              key={key}
              isActive={primarySort === key}
              label={label}
              onClick={() => setPrimarySort(key)}
            />
          ))}
          <PriceSortButton
            priceSort={priceSort as PriceSort}
            onToggle={togglePriceSort}
          />
        </div>
        {/* Title for mobile */}
        <h2 className="flex text-xl font-semibold text-[#1C252E]">
          Danh sách sản phẩm
        </h2>
      </div>
    </div>
  );
};

export default SortController;
