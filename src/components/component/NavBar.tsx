import {
  Camera,
  ChevronDown,
  Clock,
  HandCoinsIcon,
  Info,
  Menu,
  RefreshCcw,
  Search,
  ShoppingBag,
  Truck,
  UserCircle,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import CategoryDropdown from "./CategoryDropdown";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md flex justify-center w-full">
      <div className="max-w-7xl w-full py-5">
        <div className="flex justify-between items-center space-x-10">
          {/* Logo */}
          <div className="flex items-center justify-center h-[111px] max-w-[200px] w-full">
            <Image
              src="/image/logo_sunfil.png"
              width={250}
              height={111}
              alt="logo_sunfil"
              // className="h-[111px] w-full object-contain"
            />
          </div>

          {/* Search bar */}
          <div className="flex items-center border-2 border-blue-500 rounded-full px-2 py-1 w-full max-w-[700px]">
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

          {/* Right Side: Search, Cart, User */}
          <div className="flex items-center justify-between w-full max-w-[320px]">
            <button className="flex items-center text-gray-700 hover:text-blue-600 hover:cursor-pointer">
              <img
                src="/icon/ico-country-c-vietnam.svg"
                width={36}
                height={36}
                alt="Vietnam"
              />
              <p className="ml-2 text-[16px] font-medium">VI</p>
            </button>
            <button className="flex items-center text-gray-700 hover:text-blue-600 hover:cursor-pointer">
              <img
                src={"/icon/Cart.svg"}
                width={36}
                height={36}
                alt="UserCircle"
              />
              <p className="ml-1 text-[16px] font-medium">Giỏ hàng</p>
            </button>
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

        <div className="flex justify-between items-center space-x-10">
          <nav className="w-full">
            <div className="max-w-7xl mx-auto py-2 flex justify-between items-center text-sm text-gray-800">
              {/* Left: Danh mục sản phẩm + các liên kết */}
              <div className="flex items-center space-x-6 font-medium">
                {/* Danh mục button */}
                {/* <button className="flex items-center bg-[#0155C6] text-white px-4 py-3 rounded-md hover:bg-blue-700">
                  <Menu className="w-[18px] h-[18px] mr-2" />
                  Danh Mục Sản Phẩm
                  <ChevronDown className="w-4 h-4 ml-2" />
                </button> */}

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

              {/* Right: Các tiện ích */}
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
      </div>
    </nav>
  );
};

export default NavBar;
