export const priceOptions = [
  { label: "Dưới 100,000 đ", min: 0, max: 100000 },
  { label: "100,000 đ – 300,000 đ", min: 100000, max: 300000 },
  { label: "300,000 đ – 500,000 đ", min: 300000, max: 500000 },
  { label: "Trên 500,000 đ", min: 500000, max: Infinity },
];

export const yearOptions = [2025, 2024, 2023, 2022, 2021, 2020, 2018];

export const originOptions = ["Nhật Bản", "Trung Quốc"];

export interface SortOption {
  key: string;
  label: string;
}

export const SORT_OPTIONS: SortOption[] = [
  { key: "relevance", label: "Liên quan" },
  { key: "best-selling", label: "Bán chạy" },
  { key: "newest", label: "Mới nhất" },
  { key: "highlight", label: "Nổi bật" },
];

export type PriceSort = "none" | "price-asc" | "price-desc";