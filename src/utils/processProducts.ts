import { Product } from "@/types/product";
import { ProductFilter } from "@/types/product";
import { filterProducts } from "./filterProducts";
import { sortProducts } from "./sortProducts";

/**
 * Processes a list of products by filtering and sorting them based on the provided criteria.
 *
 * @param products - The array of products to process.
 * @param filter - The filter criteria to apply to the products.
 * @param primarySort - The primary sorting field (e.g., 'name', 'category').
 * @param priceSort - The price sorting order ('price-asc', 'price-desc', or 'none').
 * @returns A new array of products that have been filtered and sorted.
 */

export function processProducts(
  products: Product[],
  filter: ProductFilter,
  primarySort: string,
  priceSort: "price-asc" | "price-desc" | "none"
): Product[] {
  const filtered = filterProducts(products, filter);
  return sortProducts(filtered, primarySort, priceSort);
}
