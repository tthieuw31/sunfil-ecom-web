"use client";

import { ChevronDown, ChevronsRight, Menu } from "lucide-react";
import { useState } from "react";
import ProductCard from "./ProductCard";

const categories = [
  { name: "Bộ Lọc Dầu", icon: "/icons/icon-1.png" },
  { name: "Bộ Lọc Không Khí", icon: "/icons/icon-2.png" },
  { name: "Bộ Lọc Nhiên Liệu", icon: "/icons/icon-3.png" },
  { name: "Bộ Lọc Trong Cabin", icon: "/icons/icon-4.png" },
  { name: "Bộ Lọc Khô", icon: "/icons/icon-5.png" },
];

const subcategories = Array.from({ length: 8 }).map((_, i) => ({
  name: "Bộ lọc gió",
  icon: "/icons/filter-small.png",
}));

const dummyProducts = new Array(4).fill(null).map((_, i) => ({
  id: i + 1,
  name: "Lọc gió động cơ Air Filter – Chevrolet Colorado...",
  image: "/image/oil_filter.png",
  price: 299000,
  originalPrice: 329000,
  discount: 10,
  hot: false,
}));

const CategoryDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center bg-[#0155C6] text-white px-4 py-3 rounded-md hover:bg-blue-700">
        <Menu className="w-[18px] h-[18px] mr-2" />
        Danh Mục Sản Phẩm
        <ChevronDown className="w-4 h-4 ml-2" />
      </button>

      {/* Dropdown */}
      {/* <div
        className={`absolute top-full left-0 z-50 w-[800px] bg-white border border-gray-200 rounded-md shadow-lg mt-2 transform transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
      > */}
      <div
        className={`absolute top-full left-0 z-50 w-[1375px] bg-white border border-gray-200 rounded-md shadow-lg mt-2 transform transition-all duration-300 ease-in-out`}
      >
        <div className="flex">
          {/* Danh mục chính */}
          <div className="w-1/3 border-r border-gray-100">
            <ul className="divide-y divide-gray-100 text-sm text-gray-800">
              {categories.map((cat, i) => (
                <li
                  key={i}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
                >
                  <img src={cat.icon} className="w-5 h-5" alt={cat.name} />
                  <span>{cat.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Submenu */}
          <div className="w-2/3 p-4 text-sm">
            <div className="grid grid-cols-3 gap-3">
              {subcategories.map((sub, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-2 hover:text-blue-600 cursor-pointer"
                >
                  <img src={sub.icon} className="w-5 h-5" alt={sub.name} />
                  <span>{sub.name}</span>
                </div>
              ))}
            </div>

            <hr className="col-span-2 border-t border-gray-200 my-5" />

            <div className="flex items-center justify-between mb-4">
              <p className="text-2xl font-semibold text-[#1C252E]">
                Sản phẩm bán chạy
              </p>
              <button className="text-[16px] font-semibold text-blue-600 hover:underline hover:cursor-pointer">
                Xem tất cả
                <ChevronsRight className="inline ml-1 w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {dummyProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdown;
