"use client";

import { useMemo, useRef, useState } from "react";
import { mockProducts } from "./api/mockProducts_full";

import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useProductQueryParams } from "@/hooks/useProductQueryParams";
import { useSortParams } from "@/hooks/useSortParams";

import { filterProducts } from "@/utils/filterProducts";
import { sortProducts } from "@/utils/sortProducts";

import NavBar from "@/components/component/NavBar";
import Breadcrumb from "@/components/component/Breadcrumb";
import FeaturedProduct from "@/components/component/FeaturedProduct";
import FilterSidebar from "@/components/component/filter/FilterSidebar";
import SortController from "@/components/component/filter/SortController";
import ProductListing from "@/components/component/ProductListing";
import InfiniteLoader from "@/components/component/InfiniteLoader";
import ServiceHighlights from "@/components/layout/ServiceHighlights";
import LocationSection from "@/components/layout/LocationSection";

export default function Home() {
  const { filter, setBrands, setCategories, setOrigins, setYears, setPrices } =
    useProductQueryParams();
  const { primarySort, priceSort } = useSortParams();
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [visibleCount, setVisibleCount] = useState(16);
  const loaderRef = useRef<HTMLDivElement>(null!);

  const filteredProducts = useMemo(
    () => filterProducts(mockProducts, filter),
    [filter]
  );

  const sortedProducts = useMemo(
    () => sortProducts(filteredProducts, primarySort, priceSort),
    [filteredProducts, primarySort, priceSort]
  );

  useInfiniteScroll(loaderRef, () => {
    setVisibleCount((prev) => Math.min(prev + 16, sortedProducts.length));
  });

  const productsToShow = sortedProducts.slice(0, visibleCount);
  const hasMore = visibleCount < sortedProducts.length;

  return (
    <div className="w-full">
      <NavBar />
      <main className="bg-[#F4F6F8]">
        <div className="flex w-full justify-center">
          <div className="px-2 md:px-0 max-w-7xl w-full pt-4">
            <Breadcrumb />
            <FeaturedProduct />
            <section className="mt-7 md:flex gap-4">
              <aside className="hidden md:block w-1/4">
                <FilterSidebar
                  filter={filter}
                  setCategoriesInUrl={setCategories}
                  setBrandsInUrl={setBrands}
                  setOriginsInUrl={setOrigins}
                  setYearsInUrl={setYears}
                  setPricesInUrl={setPrices}
                />
              </aside>

              <div className="flex w-full justify-end md:hidden mb-4">
                <button
                  onClick={() => setShowMobileFilter(true)}
                  className="flex px-4 py-2 rounded-md font-medium border border-[#919EAB33] bg-white shadow-md hover:shadow-lg transition-shadow duration-300 items-center text-[#1C252E] hover:text-[#0373F3] hover:cursor-pointer"
                >
                  <img
                    src="/image/filter-icon.png"
                    alt="Filter Icon"
                    className="w-auto h-auto mr-2"
                  />
                  <h2 className="text-xl  text-[#0373F3]">Bộ Lọc</h2>
                </button>
              </div>

              {showMobileFilter && (
                <div
                  className="fixed inset-0 bg-black opacity-50 z-40"
                  onClick={() => setShowMobileFilter(false)}
                />
              )}
              <div
                className={`fixed top-0 right-0 w-4/5 h-full bg-white shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out 
                ${
                  showMobileFilter ? "translate-x-0" : "translate-x-full"
                } z-50 md:hidden`}
              >
                <div className="flex justify-start items-center p-4 border-b">
                  <button
                    onClick={() => setShowMobileFilter(false)}
                    className="text-gray-600 hover:text-black text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>
                <div className="overflow-y-auto max-h-[calc(100vh-64px)]">
                  <FilterSidebar
                    filter={filter}
                    setCategoriesInUrl={setCategories}
                    setBrandsInUrl={setBrands}
                    setOriginsInUrl={setOrigins}
                    setYearsInUrl={setYears}
                    setPricesInUrl={setPrices}
                  />
                </div>
              </div>

              <div className="md:hidden">
                <SortController />
                <ProductListing products={productsToShow} />
              </div>

              <div className="hidden md:block w-3/4">
                <SortController />
                <ProductListing products={productsToShow} />
              </div>
            </section>
            <InfiniteLoader loaderRef={loaderRef} hasMore={hasMore} />
            <ServiceHighlights />
          </div>
        </div>
        <LocationSection />
      </main>
    </div>
  );
}
