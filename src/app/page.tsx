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
          <div className="max-w-7xl w-full pt-4">
            <Breadcrumb />
            <FeaturedProduct />
            <section className="mt-7 flex gap-4">
              <aside className="w-1/4">
                <FilterSidebar
                  filter={filter}
                  setCategoriesInUrl={setCategories}
                  setBrandsInUrl={setBrands}
                  setOriginsInUrl={setOrigins}
                  setYearsInUrl={setYears}
                  setPricesInUrl={setPrices}
                />
              </aside>
              <div className="w-3/4">
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
