import { Product } from "@/types/product";
import { ProductFilter } from "@/types/product";

/**
 * Filters an array of products based on the provided filter criteria.
 *
 * @param products - The array of products to filter.
 * @param filter - The filter criteria containing categories, prices, brands, years, and origins.
 * @returns An array of products that match the filter criteria.
 */

export function filterProducts(
  products: Product[],
  filter: ProductFilter
): Product[] {
  return products.filter((product) => {
    const { categories, prices, brands, years, origins } = filter;

    return (
      (categories.length === 0 ||
        categories.some(
          (kw) =>
            (product.type || "").toLowerCase().includes(kw.toLowerCase()) ||
            (product.name || "").toLowerCase().includes(kw.toLowerCase())
        )) &&
      (prices.length === 0 ||
        prices.some(
          ([min, max]) => product.price >= min && product.price < max
        )) &&
      (brands.length === 0 ||
        brands.some((kw) =>
          (product.brand || "").toLowerCase().includes(kw.toLowerCase())
        )) &&
      (years.length === 0 || (product.year && years.includes(product.year))) &&
      (origins.length === 0 ||
        origins.some((kw) =>
          (product.origin || "").toLowerCase().includes(kw.toLowerCase())
        ))
    );
  });
}
