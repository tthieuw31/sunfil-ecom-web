"use client";
import React, { useState, FC } from "react";
import Image from "next/image";
import { Menu, X, Camera, Search } from "lucide-react";
import CategoryDropdown from "./CategoryDropdown";
import CartButton from "./button/CartButton";

interface NavLink {
  label: string;
  href: string;
}

interface PromoLink {
  icon: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Về Chúng Tôi", href: "#" },
  { label: "Bài Viết", href: "#" },
  { label: "Catalog", href: "#" },
  { label: "Liên Hệ", href: "#" },
];

const PROMO_LINKS: PromoLink[] = [
  { icon: "/icon/Clock.svg", label: "Hỗ trợ 24/7" },
  { icon: "/icon/HandMoney.svg", label: "Miễn Phí Vận Chuyển" },
  { icon: "/icon/truck_fill.svg", label: "Giao Hàng Nhanh 2h" },
  { icon: "/icon/RefreshCircle.svg", label: "30 Ngày Đổi Trả" },
];

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: FC<LogoProps> = ({ width = 250, height = 111 }) => (
  <div className="hidden md:flex items-center justify-center h-[111px] max-w-[200px] w-full">
    <Image
      src="/image/logo_sunfil.png"
      width={width}
      height={height}
      alt="logo_sunfil"
    />
  </div>
);

// Mobile menu button
interface MobileMenuButtonProps {
  onClick: () => void;
}

const MobileMenuButton: FC<MobileMenuButtonProps> = ({ onClick }) => (
  <button className="block lg:hidden text-gray-700" onClick={onClick}>
    <Menu className="w-6 h-6" />
  </button>
);

// Search bar
const SearchBar: FC = () => (
  <div className="flex items-center border-2 border-blue-500 rounded-full px-2 py-1 md:w-full md:max-w-[700px]">
    <input
      type="text"
      placeholder="Tìm sản phẩm"
      className="flex-1 px-4 py-2 bg-transparent focus:outline-none placeholder:text-gray-400 text-gray-700"
    />
    <button className="mr-2 text-gray-600 hover:text-gray-800">
      <Camera className="w-5 h-5" />
    </button>
    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
      <Search className="w-5 h-5" />
    </button>
  </div>
);

// Desktop extras (country, cart, user)
const DesktopExtras: FC = () => (
  <div className="hidden md:flex items-center justify-between w-full max-w-[320px]">
    <button className="flex items-center text-gray-700 hover:text-blue-600">
      <Image
        src="/icon/ico-country-c-vietnam.svg"
        width={36}
        height={36}
        alt="Vietnam"
      />
      <p className="ml-2 text-[16px] font-medium">VI</p>
    </button>
    <CartButton cartCount={1} />
    <button className="flex items-center text-gray-700 hover:text-blue-600">
      <Image
        src="/icon/UserCircle.svg"
        width={36}
        height={36}
        alt="UserCircle"
      />
      <p className="ml-1 hidden md:inline">Tài khoản</p>
    </button>
  </div>
);

// Desktop navigation section
const DesktopNav: FC = () => (
  <div className="hidden md:flex justify-between items-center space-x-10">
    <nav className="w-full">
      <div className="max-w-7xl mx-auto py-2 flex justify-between items-center text-sm text-gray-800">
        <div className="flex items-center space-x-6 font-medium">
          <CategoryDropdown />
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-6 font-semibold">
          {PROMO_LINKS.map(({ icon, label }) => (
            <button
              key={label}
              className="flex items-center space-x-1 hover:text-blue-600"
            >
              <Image src={icon} width={24} height={24} alt={label} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  </div>
);

// Mobile drawer
interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer: FC<MobileDrawerProps> = ({ isOpen, onClose }) => (
  <>
    {isOpen && (
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={onClose}
      />
    )}
    <div
      className={`fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-lg flex flex-col transform transition-transform duration-300 ease-in-out text-gray-700 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b border-gray-200">
        <Image
          src="/image/logo_sunfil.png"
          width={80}
          height={50}
          alt="logo_sunfil"
        />
        <button onClick={onClose}>
          <X className="w-6 h-6 text-gray-700" />
        </button>
      </div>
      <div className="flex-1 flex-col items-start justify-start w-full py-4 px-2 space-y-4 border-b border-gray-200">
        <button className="flex items-center text-gray-700 hover:text-blue-600">
          <Image
            src="/icon/ico-country-c-vietnam.svg"
            width={24}
            height={24}
            alt="Vietnam"
          />
          <p className="ml-2 text-[16px] font-medium">VI</p>
        </button>
        <CartButton cartCount={1} />
        <button className="flex items-center text-gray-700 hover:text-blue-600">
          <Image
            src="/icon/UserCircle.svg"
            width={24}
            height={24}
            alt="UserCircle"
          />
          <p className="ml-1 inline">Tài khoản</p>
        </button>
        <CategoryDropdown />
      </div>
      <div className="flex flex-col p-4 space-y-4 text-sm font-medium">
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} className="hover:text-blue-600">
            {link.label}
          </a>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200 space-y-3 text-sm font-semibold">
        {PROMO_LINKS.map(({ icon, label }) => (
          <a
            key={label}
            href="#"
            className="flex items-center space-x-2 hover:text-blue-600"
          >
            <Image src={icon} width={20} height={20} alt={label} />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  </>
);

// Main NavBar
const NavBar: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <Logo />
        <MobileMenuButton onClick={() => setIsDrawerOpen(true)} />
        <SearchBar />
        <DesktopExtras />
      </div>
      <DesktopNav />
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </nav>
  );
};

export default NavBar;
