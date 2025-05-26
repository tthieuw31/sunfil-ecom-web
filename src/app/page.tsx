// page.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ProductFilter } from "@/types/product";
import { Product } from "@/types/product";

import Breadcrumb from "@/components/component/Breadcrumb";
import BackToTopButton from "@/components/component/button/BackToTopButton";
import FeaturedProduct from "@/components/component/FeaturedProduct";
import FilterSidebar from "@/components/component/filter/FilterSidebar";
import NavBar from "@/components/component/NavBar";
import ProductListing from "@/components/component/ProductListing";
import ServiceHighlights from "@/components/layout/ServiceHighlights";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import { mockProducts } from "./api/mockProducts_full";
import { filterProducts } from "@/utils/filterProducts";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import LocationSection from "@/components/layout/LocationSection";

export default function Home() {
  const [filter, setFilter] = useState<ProductFilter>({
    categories: [],
    prices: [],
    brands: [],
    years: [],
    origins: [],
  });

  const [visibleCount, setVisibleCount] = useState(16);
  const loaderRef = useRef<HTMLDivElement>(null!);

  const filteredProducts = useMemo(
    () => filterProducts(mockProducts, filter),
    [filter]
  );

  useInfiniteScroll(loaderRef, () => {
    setVisibleCount((prev) =>
      prev + 16 > filteredProducts.length ? filteredProducts.length : prev + 16
    );
  });

  useEffect(() => {
    setVisibleCount(16);
  }, [filter]);

  const productsToShow = filteredProducts.slice(0, visibleCount);

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
                <ProductListing products={productsToShow} />
              </div>
            </section>

            <section className="mt-10">
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
