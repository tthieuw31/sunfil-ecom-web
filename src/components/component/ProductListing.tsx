// ProductListing.tsx
"use client";

import { useMemo } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import { useSortParams } from "@/hooks/useSortParams";
import { sortProducts } from "@/utils/sortProducts";

const ProductListing = ({ products }: { products: Product[] }) => {
  const { primarySort, priceSort } = useSortParams();

  const sortedProducts = useMemo(() => {
    return sortProducts(products, primarySort, priceSort);
  }, [products, primarySort, priceSort]);

  if (!products || products.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        Không có sản phẩm nào để hiển thị.
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-gray-600 mb-2">
        Hiển thị {sortedProducts.length} sản phẩm
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-4">
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
