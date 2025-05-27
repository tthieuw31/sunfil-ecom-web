"use client";

import React, { FC, useMemo, useRef, useState } from "react";
import { Product } from "@/types/product";
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

const PAGE_SIZE = 16;

const HomePage: FC = () => {
  const { filter, setBrands, setCategories, setOrigins, setYears, setPrices } =
    useProductQueryParams();
  const { primarySort, priceSort } = useSortParams();

  // Mobile filter drawer
  const [showMobileFilter, setShowMobileFilter] = useState<boolean>(false);

  // Visible count for infinite scroll
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);
  const loaderRef = useRef<HTMLDivElement>(null!);

  // Filter & sort data
  const filtered = useMemo<Product[]>(
    () => filterProducts(mockProducts, filter),
    [filter]
  );
  const sorted = useMemo<Product[]>(
    () => sortProducts(filtered, primarySort, priceSort),
    [filtered, primarySort, priceSort]
  );

  useInfiniteScroll(loaderRef, () => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, sorted.length));
  });

  const productsToShow = sorted.slice(0, visibleCount);
  const hasMore = visibleCount < sorted.length;

  const openMobileFilter = () => setShowMobileFilter(true);
  const closeMobileFilter = () => setShowMobileFilter(false);

  return (
    <div className="w-full">
      <NavBar />
      <main className="bg-[#F4F6F8]">
        <div className="flex justify-center">
          <div className="max-w-7xl w-full px-2 md:px-0 pt-4">
            <Breadcrumb />
            <FeaturedProduct />

            <section className="mt-7 flex flex-col md:flex-row gap-4">
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

              {/* Mobile filter button */}
              <div className="md:hidden mb-4 flex justify-end">
                <button
                  onClick={openMobileFilter}
                  className="flex items-center px-4 py-2 font-medium border border-[#919EAB33] bg-white shadow-md rounded-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src="/image/filter-icon.png"
                    alt="Filter Icon"
                    className="mr-2"
                  />
                  <span className="text-xl text-[#0373F3]">Bộ Lọc</span>
                </button>
              </div>

              {/* Mobile drawer overlay & panel */}
              {showMobileFilter && (
                <div
                  className="fixed inset-0 bg-black opacity-50 z-40"
                  onClick={closeMobileFilter}
                />
              )}
              <div
                className={`fixed top-0 right-0 z-50 h-full w-4/5 bg-white shadow-lg transform transition-transform ease-in-out duration-300 md:hidden ${
                  showMobileFilter ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="flex items-center p-4 border-b">
                  <button
                    onClick={closeMobileFilter}
                    className="text-2xl font-bold text-gray-600 hover:text-black"
                  >
                    ×
                  </button>
                </div>
                <div className="overflow-y-auto max-h-[calc(100vh-64px)] p-4">
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

              <div className="w-full md:w-3/4">
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
};

export default HomePage;
