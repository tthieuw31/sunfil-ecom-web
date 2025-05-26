"use client";

import { ChevronDown, ChevronRight, ChevronsRight, Menu } from "lucide-react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { typeCategories } from "@/app/api/splitProductCategories";

const categories = [
  { name: "Bộ Lọc Dầu", icon: "/icons/icon-1.png" },
  { name: "Bộ Lọc Không Khí", icon: "/icons/icon-2.png" },
  { name: "Bộ Lọc Nhiên Liệu", icon: "/icons/icon-3.png" },
  { name: "Bộ Lọc Trong Cabin", icon: "/icons/icon-4.png" },
  { name: "Bộ Lọc Khô", icon: "/icons/icon-5.png" },
];

const subcategories = Array.from({ length: 6 }).map((_, i) => ({
  name: "Bộ lọc gió",
  icon: "/image/oil_filter.png",
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
        <ChevronDown
          className={`w-4 h-4 ml-2 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute top-full left-0 z-50 w-[1000px] bg-[#F4F6F8] border border-gray-200 rounded-md shadow-2xl mt-2 transform transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
      >
        <div className="flex">
          {/* Danh mục chính */}
          <div className="w-1/4 bg-white border-r border-gray-100">
            <ul className="divide-y divide-gray-100 text-sm text-gray-800">
              {typeCategories.map((cat, i) => (
                <li key={i} className="space-x-2">
                  <button className="flex px-4 py-3 items-center justify-between cursor-pointer w-full bg-white hover:bg-gray-50">
                    <div className="flex text-start space-x-2">
                      {/* <img src={cat.icon} className="w-5 h-5" alt={cat.name} /> */}
                      <span>{cat.name}</span>
                    </div>
                    <ChevronRight className="ml-auto w-4 h-4 text-gray-500" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Submenu */}
          <div className="w-3/4 p-4 text-sm">
            <div className="grid grid-cols-3 gap-3">
              {subcategories.map((sub, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-2 hover:text-blue-600 bg-white py-3 px-4 rounded-xl cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
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
