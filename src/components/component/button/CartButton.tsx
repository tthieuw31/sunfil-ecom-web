"use client";

import React, { useState } from "react";
import ProductCard from "../ProductCard";

interface CartButtonProps {
  onClick?: () => void;
  cartCount?: number;
}

const dummyProducts = new Array(1).fill(null).map((_, i) => ({
  id: i + 1,
  name: "Lọc gió động cơ Air Filter – Chevrolet Colorado...",
  image: "/image/oil_filter.png",
  price: 299000,
  originalPrice: 329000,
  discount: 10,
  hot: true,
  type: "full",
}));

const CartButton: React.FC<CartButtonProps> = ({ onClick, cartCount }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center text-gray-700 hover:text-blue-600 hover:cursor-pointer"
        type="button"
      >
        <img src="/icon/Cart.svg" width={36} height={36} alt="UserCircle" />

        {cartCount && (
          <span className="absolute -top-1 left-5 bg-[#FF5630] text-white text-[12px] font-bold px-1.5 py-1  rounded-full leading-none text-center">
            {cartCount}
          </span>
        )}

        <p className="ml-1 text-[16px] font-medium">Giỏ hàng</p>
      </button>

      <div
        className={`absolute top-full left-0 z-50 w-[214px] bg-[#F4F6F8] border border-gray-200 rounded-md shadow-2xl mt-2 transform transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
      >
        <div className="">
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartButton;
