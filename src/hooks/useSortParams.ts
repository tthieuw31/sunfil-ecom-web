import { useRouter, useSearchParams } from "next/navigation";

export function useSortParams() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const primarySort = searchParams.get("sort") || "relevance";
  const priceSort =
    (searchParams.get("priceSort") as "price-asc" | "price-desc" | "none") ||
    "none";

  const updateParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "none") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.replace("?" + params.toString(), { scroll: false });
  };

  const setPrimarySort = (key: string) => updateParam("sort", key);
  const togglePriceSort = () => {
    if (priceSort === "none") updateParam("priceSort", "price-asc");
    else if (priceSort === "price-asc") updateParam("priceSort", "price-desc");
    else updateParam("priceSort", null);
  };

  return { primarySort, priceSort, setPrimarySort, togglePriceSort };
}
