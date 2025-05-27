import React, { FC } from "react";
import { ProductFilter } from "@/types/product";
import {
  brandCategories,
  typeCategories,
} from "@/app/api/splitProductCategories";
import { originOptions, priceOptions, yearOptions } from "@/types/common";
import FilterSection from "./FilterSection";

type PriceRange = [number, number];

interface Props {
  filter: ProductFilter;
  setCategoriesInUrl: (categories: string[]) => void;
  setBrandsInUrl: (brands: string[]) => void;
  setOriginsInUrl: (origins: string[]) => void;
  setYearsInUrl: (years: number[]) => void;
  setPricesInUrl: (prices: PriceRange[]) => void;
}

const createToggle = <T,>(
  selected: T[],
  value: T,
  setter: (items: T[]) => void
) => {
  const exists = selected.includes(value);
  const updated = exists
    ? selected.filter((item) => item !== value)
    : [...selected, value];
  setter(updated);
};

const FilterSidebar: FC<Props> = ({
  filter,
  setCategoriesInUrl,
  setBrandsInUrl,
  setOriginsInUrl,
  setYearsInUrl,
  setPricesInUrl,
}) => {
  const onCategoryToggle = (c: string) =>
    createToggle(filter.categories, c, setCategoriesInUrl);
  const onBrandToggle = (b: string) =>
    createToggle(filter.brands, b, setBrandsInUrl);
  const onOriginToggle = (o: string) =>
    createToggle(filter.origins, o, setOriginsInUrl);
  const onYearToggle = (y: number) =>
    createToggle(filter.years, y, setYearsInUrl);
  const onPriceToggle = (range: PriceRange) => {
    const exists = filter.prices.some(
      ([min, max]) => min === range[0] && max === range[1]
    );
    const updated = exists
      ? filter.prices.filter(
          ([min, max]) => !(min === range[0] && max === range[1])
        )
      : [...filter.prices, range];
    setPricesInUrl(updated);
  };

  return (
    <div className="space-y-6 bg-white py-3 rounded-lg shadow-md">
      {/* Header */}
      <div className="hidden md:flex items-center p-3 border-b border-[#919EAB33]">
        <img
          src="/image/filter-icon.png"
          alt="Filter Icon"
          className="w-8 h-8 mr-2"
        />
        <h2 className="text-2xl font-bold text-[#0373F3]">Bộ Lọc</h2>
      </div>

      {/* Sections */}
      <FilterSection title="Danh mục sản phẩm">
        <ul className="space-y-2 text-sm font-medium text-[#1C252E]">
          {typeCategories.map(({ name }) => (
            <li key={name} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={filter.categories.includes(name)}
                onChange={() => onCategoryToggle(name)}
              />
              {name}
            </li>
          ))}
        </ul>
      </FilterSection>

      <FilterSection title="Khoảng giá">
        <div className="grid gap-2 mt-3">
          {priceOptions.map(({ label, min, max }) => {
            const range: PriceRange = [min, max];
            const selected = filter.prices.some(
              ([a, b]) => a === min && b === max
            );
            return (
              <button
                key={label}
                onClick={() => onPriceToggle(range)}
                className={`w-full border px-4 py-2 rounded text-sm font-medium transition hover:cursor-pointer hover:border-[#0373F3] ${
                  selected
                    ? "bg-[#E6F1FF] border-[#0373F3] text-[#025FCA]"
                    : "border-gray-200 text-gray-700"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </FilterSection>

      <FilterSection title="Thương hiệu">
        <ul className="space-y-2 text-sm font-medium text-[#1C252E]">
          {brandCategories.map(({ name }) => (
            <li key={name} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={filter.brands.includes(name)}
                onChange={() => onBrandToggle(name)}
              />
              {name}
            </li>
          ))}
        </ul>
      </FilterSection>

      <FilterSection title="Năm sản xuất">
        <ul className="space-y-2 text-sm font-medium text-[#1C252E]">
          {yearOptions.map((y) => (
            <li key={y} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={filter.years.includes(y)}
                onChange={() => onYearToggle(y)}
              />
              {y}
            </li>
          ))}
        </ul>
      </FilterSection>

      <FilterSection title="Xuất xứ">
        <ul className="space-y-2 text-sm font-medium text-[#1C252E]">
          {originOptions.map((o) => (
            <li key={o} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={filter.origins.includes(o)}
                onChange={() => onOriginToggle(o)}
              />
              {o}
            </li>
          ))}
        </ul>
      </FilterSection>
    </div>
  );
};

export default FilterSidebar;
