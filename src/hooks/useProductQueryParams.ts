import { useSearchParams, useRouter } from "next/navigation";
import { ProductFilter } from "@/types/product";

/**
 * Parses query parameters from the URL into a structured format.
 * This hook provides methods to read and update product filter parameters.
 *
 * @returns An object containing the current filter state and methods to update it.
 */

const parseArray = (param: string | null): string[] =>
  param ? param.split(",").filter(Boolean) : [];

const parseNumberArray = (param: string | null): number[] =>
  param ? param.split(",").map(Number).filter(Boolean) : [];

const parsePriceArray = (param: string | null): [number, number][] =>
  param
    ? param.split(",").map((p) => {
        const [min, max] = p.split("-").map(Number);
        return [min, max] as [number, number];
      })
    : [];

export const useProductQueryParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const filterFromUrl: ProductFilter = {
    categories: parseArray(searchParams.get("category")),
    prices: parsePriceArray(searchParams.get("price")),
    brands: parseArray(searchParams.get("brand")),
    years: parseNumberArray(searchParams.get("year")),
    origins: parseArray(searchParams.get("origin")),
  };

  const updateParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.replace("?" + params.toString(), { scroll: false });
  };

  return {
    filter: filterFromUrl,
    setCategories: (list: string[]) =>
      updateParam("category", list.length ? list.join(",") : null),
    setBrands: (list: string[]) =>
      updateParam("brand", list.length ? list.join(",") : null),
    setOrigins: (list: string[]) =>
      updateParam("origin", list.length ? list.join(",") : null),
    setYears: (list: number[]) =>
      updateParam("year", list.length ? list.join(",") : null),
    setPrices: (list: [number, number][]) =>
      updateParam(
        "price",
        list.length ? list.map(([a, b]) => `${a}-${b}`).join(",") : null
      ),
  };
};
