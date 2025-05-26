import { Product } from "@/types/product";
import { ProductFilter } from "@/types/product";

export function filterProducts(
  products: Product[],
  filter: ProductFilter
): Product[] {
  return products.filter((product) => {
    const matchesCategory =
      filter.categories.length === 0 ||
      filter.categories.some(
        (kw) =>
          (product.type || "").toLowerCase().includes(kw.toLowerCase()) ||
          (product.name || "").toLowerCase().includes(kw.toLowerCase())
      );

    const matchesPrice =
      filter.prices.length === 0 ||
      filter.prices.some(
        ([min, max]) => product.price >= min && product.price < max
      );

    const matchesBrand =
      filter.brands.length === 0 ||
      filter.brands.some((kw) =>
        (product.brand || "").toLowerCase().includes(kw.toLowerCase())
      );

    const matchesYear =
      filter.years.length === 0 ||
      (product.year && filter.years.includes(product.year));

    const matchesOrigin =
      filter.origins.length === 0 ||
      filter.origins.some((kw) =>
        (product.origin || "").toLowerCase().includes(kw.toLowerCase())
      );

    return (
      matchesCategory &&
      matchesPrice &&
      matchesBrand &&
      matchesYear &&
      matchesOrigin
    );
  });
}
