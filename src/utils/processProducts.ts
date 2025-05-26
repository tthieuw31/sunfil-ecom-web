import { Product } from "@/types/product";
import { ProductFilter } from "@/types/product";
import { filterProducts } from "./filterProducts";
import { sortProducts } from "./sortProducts";

export function processProducts(
  products: Product[],
  filter: ProductFilter,
  primarySort: string,
  priceSort: "price-asc" | "price-desc" | "none"
): Product[] {
  const filtered = filterProducts(products, filter);
  return sortProducts(filtered, primarySort, priceSort);
}
