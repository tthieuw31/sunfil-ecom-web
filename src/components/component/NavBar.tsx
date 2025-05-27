"use client";
import { Menu, X } from "lucide-react";

import { Camera, Search } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import CategoryDropdown from "./CategoryDropdown";
import CartButton from "./button/CartButton";

const NavBar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md flex justify-center w-full">
      <div className="max-w-7xl w-full px-4 py-5">
        <div className="flex justify-between items-center md:space-x-10">
          {/* Logo */}
          <div className="hidden md:flex items-center justify-center h-[111px] max-w-[200px] w-full">
            <Image
              src="/image/logo_sunfil.png"
              width={250}
              height={111}
              alt="logo_sunfil"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-gray-700"
            onClick={() => setIsDrawerOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Search bar */}
          <div className="flex items-center border-2 border-blue-500 rounded-full px-2 py-1 md:w-full md:max-w-[700px]">
            <input
              type="text"
              placeholder="Tìm sản phẩm"
              className="flex-1 px-4 py-2 bg-transparent focus:outline-none placeholder:text-gray-400 text-gray-700"
            />

            {/* Camera icon */}
            <button className="mr-2 text-gray-600 hover:text-gray-800 hover:cursor-pointer">
              <Camera className="w-5 h-5" />
            </button>

            {/* Search button */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full hover:cursor-pointer">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Search, Cart, User */}
          <div className="hidden md:flex items-center justify-between w-full max-w-[320px]">
            <button className="flex items-center text-gray-700 hover:text-blue-600 hover:cursor-pointer">
              <img
                src="/icon/ico-country-c-vietnam.svg"
                width={36}
                height={36}
                alt="Vietnam"
              />
              <p className="ml-2 text-[16px] font-medium">VI</p>
            </button>
            <CartButton cartCount={1} />
            <button className="flex items-center text-gray-700 hover:text-blue-600 hover:cursor-pointer">
              <img
                src={"/icon/UserCircle.svg"}
                width={36}
                height={36}
                alt="UserCircle"
              />
              <p className="ml-1 hidden md:inline">Tài khoản</p>
            </button>
          </div>
        </div>

        <div className="hidden md:flex justify-between items-center space-x-10">
          <nav className="w-full">
            <div className="max-w-7xl mx-auto py-2 flex justify-between items-center text-sm text-gray-800">
              <div className="flex items-center space-x-6 font-medium">
                <CategoryDropdown />

                {/* Navigation links */}
                <a href="#" className="hover:text-blue-600">
                  Về Chúng Tôi
                </a>
                <a href="#" className="hover:text-blue-600">
                  Bài Viết
                </a>
                <a href="#" className="hover:text-blue-600">
                  Catalog
                </a>
                <a href="#" className="hover:text-blue-600">
                  Liên Hệ
                </a>
              </div>

              {/* Navigation links 2*/}
              <div className="flex items-center space-x-6 font-semibold">
                <button className="flex items-center space-x-1 hover:text-blue-600 hover:cursor-pointer">
                  <img
                    src={"/icon/Clock.svg"}
                    width={24}
                    height={24}
                    alt="Clock"
                  />
                  <span>Hỗ trợ 24/7</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-600 hover:cursor-pointer">
                  <img
                    src={"/icon/HandMoney.svg"}
                    width={24}
                    height={24}
                    alt="HandMoney"
                  />
                  <span>Miễn Phí Vận Chuyển</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-600 hover:cursor-pointer">
                  <img
                    src={"/icon/truck_fill.svg"}
                    width={24}
                    height={24}
                    alt="truck_fill"
                  />
                  <span>Giao Hàng Nhanh 2h</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-600 hover:cursor-pointer">
                  <img
                    src={"/icon/RefreshCircle.svg"}
                    width={24}
                    height={24}
                    alt="RefreshCircle"
                  />
                  <span>30 Ngày Đổi Trả</span>
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* Overlay */}
        {isDrawerOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setIsDrawerOpen(false)}
          />
        )}

        {/* Drawer content */}
        <div
          className={`fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-lg flex flex-col transition-transform duration-300 ease-in-out text-gray-700 ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 flex justify-between items-center border-b border-gray-200">
            <div className="flex items-center">
              <Image
                src="/image/logo_sunfil.png"
                width={80}
                height={50}
                alt="logo_sunfil"
              />
            </div>
            <button onClick={() => setIsDrawerOpen(false)}>
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <div className="flex-1 flex-col items-start justify-start w-full py-4 px-2 space-y-4 border-b border-gray-200">
            <button className="flex text-gray-700 hover:text-blue-600 hover:cursor-pointer">
              <img
                src="/icon/ico-country-c-vietnam.svg"
                width={24}
                height={24}
                alt="Vietnam"
              />
              <p className="ml-2 text-[16px] font-medium">VI</p>
            </button>
            <CartButton cartCount={1} />
            <button className="flex items-center text-gray-700 hover:text-blue-600 hover:cursor-pointer">
              <img
                src={"/icon/UserCircle.svg"}
                width={24}
                height={24}
                alt="UserCircle"
              />
              <p className="ml-1 inline">Tài khoản</p>
            </button>
            <CategoryDropdown />
          </div>

          <div className="flex flex-col p-4 space-y-4 text-sm font-medium ">
            <a href="#">Về Chúng Tôi</a>
            <a href="#">Bài Viết</a>
            <a href="#">Catalog</a>
            <a href="#">Liên Hệ</a>
          </div>
          {/* <hr /> */}

          {/* Navigation links 2 */}
          <div className="p-4 border-t border-gray-200 space-y-3 text-sm font-semibold">
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-blue-600"
            >
              <img src="/icon/Clock.svg" width={20} height={20} />
              <span>Hỗ trợ 24/7</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-blue-600"
            >
              <img src="/icon/HandMoney.svg" width={20} height={20} />
              <span>Miễn Phí Vận Chuyển</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-blue-600"
            >
              <img src="/icon/truck_fill.svg" width={20} height={20} />
              <span>Giao Hàng Nhanh 2h</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-blue-600"
            >
              <img src="/icon/RefreshCircle.svg" width={20} height={20} />
              <span>30 Ngày Đổi Trả</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
