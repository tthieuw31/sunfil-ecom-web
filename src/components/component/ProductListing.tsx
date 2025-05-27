"use client";

import React, { FC, useMemo } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import { useSortParams } from "@/hooks/useSortParams";
import { sortProducts } from "@/utils/sortProducts";

interface ProductListingProps {
  products: Product[];
}

const EmptyState: FC<{ message: string }> = ({ message }) => (
  <div className="col-span-full text-center text-gray-500 py-8">{message}</div>
);

const ProductsGrid: FC<{ products: Product[] }> = ({ products }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

const ProductListing: FC<ProductListingProps> = ({ products }) => {
  const { primarySort, priceSort } = useSortParams();

  const sortedProducts = useMemo<Product[]>(
    () => sortProducts(products, primarySort, priceSort),
    [products, primarySort, priceSort]
  );

  if (!products || products.length === 0) {
    return <EmptyState message="Không có sản phẩm nào để hiển thị." />;
  }

  return (
    <>
      <p className="text-sm text-gray-600 mb-2">
        Hiển thị {sortedProducts.length} sản phẩm
      </p>

      {sortedProducts.length > 0 ? (
        <ProductsGrid products={sortedProducts} />
      ) : (
        <EmptyState message="Không tìm thấy sản phẩm phù hợp." />
      )}
    </>
  );
};

export default ProductListing;
