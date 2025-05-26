import { ChevronDown } from "lucide-react";

type Props = {
  primarySort: string;
  priceSort: "price-asc" | "price-desc" | "none";
  onPrimarySortChange: (key: string) => void;
  onPriceSortChange: (key: "price-asc" | "price-desc" | "none") => void;
};

const SortController = ({
  primarySort,
  priceSort,
  onPrimarySortChange,
  onPriceSortChange,
}: Props) => {
  const buttons = [
    { key: "relevance", label: "Liên quan" },
    { key: "best-selling", label: "Bán chạy" },
    { key: "newest", label: "Mới nhất" },
    { key: "highlight", label: "Nổi bật" },
  ];

  const togglePriceSort = () => {
    if (priceSort === "none") onPriceSortChange("price-asc");
    else if (priceSort === "price-asc") onPriceSortChange("price-desc");
    else onPriceSortChange("none");
  };

  return (
    <div className="flex items-center space-x-3 text-sm">
      <span className="font-medium text-[#1C252E]">Sắp xếp theo</span>
      {buttons.map(({ key, label }) => (
        <button
          key={key}
          className={`font-bold px-3 py-1 rounded-lg ${
            primarySort === key
              ? "bg-blue-100 text-[#0373F3]"
              : "bg-white text-[#1C252E]"
          } hover:bg-blue-50 hover:cursor-pointer`}
          onClick={() => onPrimarySortChange(key)}
        >
          {label}
        </button>
      ))}
      <button
        onClick={togglePriceSort}
        className={`flex items-center font-medium px-3 py-1 rounded-lg ${
          priceSort !== "none"
            ? "bg-blue-100 text-[#0373F3]"
            : "bg-white text-[#1C252E]"
        } hover:bg-blue-50 hover:cursor-pointer`}
      >
        {priceSort === "none"
          ? "Giá"
          : priceSort === "price-asc"
          ? "Giá: Thấp → Cao"
          : "Giá: Cao → Thấp"}
        <ChevronDown
          className={`transition-transform duration-300 ${
            priceSort === "price-asc" ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
};

export default SortController;
