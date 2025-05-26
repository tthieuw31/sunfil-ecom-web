// page.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ProductFilter } from "@/types/product";

import Breadcrumb from "@/components/component/Breadcrumb";
import BackToTopButton from "@/components/component/button/BackToTopButton";
import FeaturedProduct from "@/components/component/FeaturedProduct";
import FilterSidebar from "@/components/component/filter/FilterSidebar";
import NavBar from "@/components/component/NavBar";
import ProductListing from "@/components/component/ProductListing";
import ServiceHighlights from "@/components/layout/ServiceHighlights";
import Footer from "@/components/layout/Footer";
import { mockProducts } from "./api/mockProducts_full";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import LocationSection from "@/components/layout/LocationSection";
import { processProducts } from "@/utils/processProducts";
import InfiniteLoader from "@/components/component/InfiniteLoader";

export default function Home() {
  const [filter, setFilter] = useState<ProductFilter>({
    categories: [],
    prices: [],
    brands: [],
    years: [],
    origins: [],
  });

  const [primarySort, setPrimarySort] = useState("relevance");
  const [priceSort, setPriceSort] = useState<
    "price-asc" | "price-desc" | "none"
  >("none");

  const [visibleCount, setVisibleCount] = useState(16);
  const loaderRef = useRef<HTMLDivElement>(null!);

  const filteredAndSortedProducts = useMemo(() => {
    return processProducts(mockProducts, filter, primarySort, priceSort);
  }, [filter, primarySort, priceSort]);

  useInfiniteScroll(loaderRef, () => {
    setVisibleCount((prev) =>
      Math.min(prev + 16, filteredAndSortedProducts.length)
    );
  });

  useEffect(() => {
    setVisibleCount(16);
  }, [filter, primarySort, priceSort]);

  const productsToShow = filteredAndSortedProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAndSortedProducts.length;

  return (
    <div className="w-full">
      <NavBar />
      <BackToTopButton />
      <main className="bg-[#F4F6F8] min-h-screen">
        <div className="flex w-full justify-center">
          <div className="max-w-7xl w-full pt-4">
            <Breadcrumb />
            <section className="mt-7">
              <FeaturedProduct />
            </section>

            <section className="mt-7 flex gap-4">
              <aside className="w-1/4">
                <FilterSidebar filter={filter} setFilter={setFilter} />
              </aside>
              <div className="w-3/4">
                <ProductListing
                  products={productsToShow}
                  primarySort={primarySort}
                  setPrimarySort={setPrimarySort}
                  priceSort={priceSort}
                  setPriceSort={setPriceSort}
                />
              </div>
            </section>

            <InfiniteLoader loaderRef={loaderRef} hasMore={hasMore} />
            <section>
              <ServiceHighlights />
            </section>
          </div>
        </div>

        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
