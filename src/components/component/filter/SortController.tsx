"use client";

import { Check, ChevronDown } from "lucide-react";
import { useSortParams } from "@/hooks/useSortParams";

const sortButtons = [
  { key: "relevance", label: "Liên quan" },
  { key: "best-selling", label: "Bán chạy" },
  { key: "newest", label: "Mới nhất" },
  { key: "highlight", label: "Nổi bật" },
];

const SortController = () => {
  const { primarySort, priceSort, setPrimarySort, togglePriceSort } =
    useSortParams();

  return (
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-semibold text-[#1C252E]">
        Danh sách sản phẩm
      </h2>
      <div className="flex items-center space-x-3 text-sm">
        <span className="font-medium text-[#1C252E]">Sắp xếp theo</span>
        {sortButtons.map(({ key, label }) => (
          <button
            key={key}
            className={`relative font-bold px-3 py-1 rounded-lg border border-transparent
              ${
                primarySort === key
                  ? "bg-blue-100 text-[#0373F3]"
                  : "bg-white text-[#1C252E]"
              }
              hover:bg-blue-50 hover:cursor-pointer`}
            onClick={() => setPrimarySort(key)}
          >
            {label}

            {primarySort === key && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[10px] shadow-md">
                <Check className="w-3 h-3" strokeWidth={3} />
              </div>
            )}
          </button>
        ))}
        <button
          onClick={togglePriceSort}
          className={`flex items-center font-medium px-3 py-1 rounded-lg ${
            priceSort !== "none"
              ? "bg-blue-100 text-[#0373F3]"
              : "bg-white text-[#1C252E]"
          } hover:bg-blue-50`}
        >
          {priceSort === "none"
            ? "Giá"
            : priceSort === "price-asc"
            ? "Giá: Thấp → Cao"
            : "Giá: Cao → Thấp"}
          <ChevronDown
            className={`ml-1 transition-transform duration-300 ${
              priceSort === "price-asc" ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default SortController;
