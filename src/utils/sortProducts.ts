import { Product } from "@/types/product";

/**
 * Sorts an array of products based on primary and secondary criteria.
 *
 * @param products - The array of products to sort.
 * @param primarySort - The primary sorting criterion (e.g., "best-selling", "highlight", "newest", "relevance").
 * @param priceSort - The secondary sorting criterion for price ("price-asc", "price-desc", or "none").
 * @returns A new array of sorted products.
 */

export const sortProducts = (
  products: Product[],
  primarySort: string,
  priceSort: "price-asc" | "price-desc" | "none"
): Product[] => {
  let sorted = [...products];

  switch (primarySort) {
    case "best-selling":
      sorted.sort((a, b) => Number(b.hot) - Number(a.hot));
      break;
    case "highlight":
      sorted.sort((a, b) => b.discount - a.discount);
      break;
    case "newest":
      sorted.sort((a, b) => b.id - a.id);
      break;
    case "relevance":
    default:
      break;
  }

  if (priceSort === "price-asc") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (priceSort === "price-desc") {
    sorted.sort((a, b) => b.price - a.price);
  }

  return sorted;
};
