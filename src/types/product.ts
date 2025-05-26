export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  type?: string;
  brand?: string;
  year?: number;
  origin?: string;
  hot?: boolean;
};

export type ProductFilter = {
  categories: string[];
  prices: [number, number][];
  brands: string[];
  years: number[];
  origins: string[];
};
