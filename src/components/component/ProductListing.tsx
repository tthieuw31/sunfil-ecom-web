"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import SortController from "./filter/SortController";
import { Product } from "@/types/product";
import { sortProducts } from "@/utils/sortProducts";

type ProductListingProps = {
  products: Product[];
};

const ProductListing = ({ products }: ProductListingProps) => {
  const [primarySort, setPrimarySort] = useState("relevance");
  const [priceSort, setPriceSort] = useState<
    "price-asc" | "price-desc" | "none"
  >("none");

  const sortedProducts = useMemo(() => {
    return sortProducts(products, primarySort, priceSort);
  }, [products, primarySort, priceSort]);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#1C252E]">
          Danh sách sản phẩm
        </h2>
        <SortController
          primarySort={primarySort}
          priceSort={priceSort}
          onPrimarySortChange={setPrimarySort}
          onPriceSortChange={setPriceSort}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-8">
            Không tìm thấy sản phẩm phù hợp.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
