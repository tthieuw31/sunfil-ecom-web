"use client";

import {
  brandCategories,
  typeCategories,
} from "@/app/api/splitProductCategories";
import FilterSection from "./FilterSection";
import { useState } from "react";
import { ProductFilter } from "@/types/product";

type Props = {
  filter: ProductFilter;
  setFilter: (filter: ProductFilter) => void;
};

const FilterSidebar = ({ filter, setFilter }: Props) => {
  const priceOptions = [
    { label: "Dưới 100,000 đ", min: 0, max: 100000 },
    { label: "100,000 đ – 300,000 đ", min: 100000, max: 300000 },
    { label: "300,000 đ – 500,000 đ", min: 300000, max: 500000 },
    { label: "Trên 500,000 đ", min: 500000, max: Infinity },
  ];

  const [selectedPrices, setSelectedPrices] = useState<number[][]>([]);

  const toggleCategory = (name: string) => {
    setFilter({
      ...filter,
      categories: filter.categories.includes(name)
        ? filter.categories.filter((c) => c !== name)
        : [...filter.categories, name],
    });
  };

  const togglePrice = (min: number, max: number) => {
    const exists = filter.prices.some(([a, b]) => a === min && b === max);
    setFilter({
      ...filter,
      prices: exists
        ? filter.prices.filter(([a, b]) => !(a === min && b === max))
        : [...filter.prices, [min, max]],
    });
  };

  const toggleBrand = (name: string) => {
    setFilter({
      ...filter,
      brands: filter.brands.includes(name)
        ? filter.brands.filter((b) => b !== name)
        : [...filter.brands, name],
    });
  };

  const toggleYear = (year: number) => {
    setFilter({
      ...filter,
      years: filter.years.includes(year)
        ? filter.years.filter((y) => y !== year)
        : [...filter.years, year],
    });
  };

  const toggleOrigin = (origin: string) => {
    setFilter({
      ...filter,
      origins: filter.origins.includes(origin)
        ? filter.origins.filter((o) => o !== origin)
        : [...filter.origins, origin],
    });
  };

  return (
    <div className="space-y-6 bg-white py-3 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex w-full mb-0 p-3 border-b border-[#919EAB33] items-center">
        <img
          src="/image/filter-icon.png"
          alt="Filter Icon"
          className="w-8 h-8 mr-2"
        />
        <h2 className="text-2xl font-bold text-[#0373F3]">Bộ Lọc</h2>
      </div>

      <FilterSection title="Danh mục sản phẩm">
        <ul className="space-y-2 text-sm font-medium text-[#1C252E]">
          {typeCategories.map((category, index) => (
            <li key={index} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={filter.categories.includes(category.name)}
                onChange={() => toggleCategory(category.name)}
              />{" "}
              {category.name}
            </li>
          ))}
        </ul>
      </FilterSection>

      <FilterSection title="Khoảng giá">
        <div className="grid grid-cols-1 gap-2 mt-3">
          {priceOptions.map(({ label, min, max }) => {
            const isSelected = selectedPrices.some(
              ([a, b]) => a === min && b === max
            );
            return (
              <button
                key={label}
                onClick={() => togglePrice(min, max)}
                className={`w-full border px-4 py-2 rounded text-sm text-[#1C252E] font-medium hover:cursor-pointer 
            ${
              isSelected
                ? "bg-[#E6F1FF] border-[#0373F3] text-[#025FCA]"
                : "border-gray-200"
            } 
            hover:border-[#0373F3] transition`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </FilterSection>

      <FilterSection title="Thương hiệu">
        <ul className="space-y-2 text-sm font-medium text-[#1C252E]">
          {brandCategories.map((brand, index) => (
            <li key={index} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={filter.brands.includes(brand.name)}
                onChange={() => toggleBrand(brand.name)}
              />{" "}
              {brand.name}
            </li>
          ))}
        </ul>
      </FilterSection>

      <FilterSection title="Năm sản xuất">
        <ul className="space-y-2 text-sm font-medium text-[#1C252E]">
          {[2025, 2024, 2023, 2022, 2021, 2020, 2018].map((year) => (
            <li key={year} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={filter.years.includes(year)}
                onChange={() => toggleYear(year)}
              />{" "}
              {year}
            </li>
          ))}
        </ul>
      </FilterSection>

      <FilterSection title="Xuất xứ">
        <ul className="space-y-2 text-sm font-medium text-[#1C252E]">
          {["Nhật Bản", "Trung Quốc"].map((origin) => (
            <li key={origin} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={filter.origins.includes(origin)}
                onChange={() => toggleOrigin(origin)}
              />{" "}
              {origin}
            </li>
          ))}
        </ul>
      </FilterSection>
    </div>
  );
};

export default FilterSidebar;
