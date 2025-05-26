"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import ProductCard from "./ProductCard";
import { mockProducts } from "@/app/api/mockProducts_full";


const ProductSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 252;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative max-w-[1324px] mx-auto">
      <button
        onClick={() => scroll("left")}
        className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center hover:cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 text-blue-900" />
      </button>

      <div ref={scrollRef} className="flex overflow-x-auto no-scrollbar gap-4">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center hover:cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 text-blue-900" />
      </button>
    </div>
  );
};

export default ProductSlider;
