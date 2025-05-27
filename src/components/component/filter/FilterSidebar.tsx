import FilterSection from "./FilterSection";
import { ProductFilter } from "@/types/product";
import {
  brandCategories,
  typeCategories,
} from "@/app/api/splitProductCategories";
import { originOptions, priceOptions, yearOptions } from "@/types/common";

type Props = {
  filter: ProductFilter;
  setCategoriesInUrl: (categories: string[]) => void;
  setBrandsInUrl: (brands: string[]) => void;
  setOriginsInUrl: (origins: string[]) => void;
  setYearsInUrl: (years: number[]) => void;
  setPricesInUrl: (prices: [number, number][]) => void;
};

const FilterSidebar = ({
  filter,
  setCategoriesInUrl,
  setBrandsInUrl,
  setOriginsInUrl,
  setYearsInUrl,
  setPricesInUrl,
}: Props) => {
  const toggleCategory = (category: string) => {
    const current = filter.categories;
    const newCategories = current.includes(category)
      ? current.filter((c) => c !== category)
      : [...current, category];
    setCategoriesInUrl(newCategories);
  };

  const toggleBrand = (brand: string) => {
    const current = filter.brands;
    const newBrands = current.includes(brand)
      ? current.filter((b) => b !== brand)
      : [...current, brand];
    setBrandsInUrl(newBrands);
  };

  const toggleOrigin = (origin: string) => {
    const current = filter.origins;
    const newOrigins = current.includes(origin)
      ? current.filter((o) => o !== origin)
      : [...current, origin];
    setOriginsInUrl(newOrigins);
  };

  const toggleYear = (year: number) => {
    const current = filter.years;
    const newYears = current.includes(year)
      ? current.filter((y) => y !== year)
      : [...current, year];
    setYearsInUrl(newYears);
  };

  const togglePrice = (min: number, max: number) => {
    const exists = filter.prices.some(([a, b]) => a === min && b === max);
    const newPrices: [number, number][] = exists
      ? filter.prices.filter(([a, b]) => !(a === min && b === max))
      : [...filter.prices, [min, max] as [number, number]];
    setPricesInUrl(newPrices);
  };

  return (
    <div className="space-y-6 bg-white py-3 rounded-lg shadow-md">
      <div className="hidden md:flex w-full mb-0 p-3 border-b border-[#919EAB33] items-center">
        <img
          src="/image/filter-icon.png"
          alt="Filter Icon"
          className="w-8 h-8 mr-2"
        />
        <h2 className="text-2xl font-bold text-[#0373F3]">Bộ Lọc</h2>
      </div>

      <FilterSection title="Danh mục sản phẩm">
        <ul className="space-y-2 text-sm font-medium text-[#1C252E]">
          {typeCategories.map((category) => (
            <li key={category.name} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={filter.categories.includes(category.name)}
                onChange={() => toggleCategory(category.name)}
              />
              {category.name}
            </li>
          ))}
        </ul>
      </FilterSection>

      <FilterSection title="Khoảng giá">
        <div className="grid grid-cols-1 gap-2 mt-3">
          {priceOptions.map(({ label, min, max }) => {
            const isSelected = filter.prices.some(
              ([a, b]) => a === min && b === max
            );
            return (
              <button
                key={label}
                onClick={() => togglePrice(min, max)}
                className={`w-full text-gray-700 border px-4 py-2 rounded text-sm font-medium hover:cursor-pointer 
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
          {brandCategories.map((brand) => (
            <li key={brand.name} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={filter.brands.includes(brand.name)}
                onChange={() => toggleBrand(brand.name)}
              />
              {brand.name}
            </li>
          ))}
        </ul>
      </FilterSection>

      <FilterSection title="Năm sản xuất">
        <ul className="space-y-2 text-sm font-medium text-[#1C252E]">
          {yearOptions.map((year) => (
            <li key={year} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={filter.years.includes(year)}
                onChange={() => toggleYear(year)}
              />
              {year}
            </li>
          ))}
        </ul>
      </FilterSection>

      <FilterSection title="Xuất xứ">
        <ul className="space-y-2 text-sm font-medium text-[#1C252E]">
          {originOptions.map((origin) => (
            <li key={origin} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={filter.origins.includes(origin)}
                onChange={() => toggleOrigin(origin)}
              />
              {origin}
            </li>
          ))}
        </ul>
      </FilterSection>
    </div>
  );
};

export default FilterSidebar;
