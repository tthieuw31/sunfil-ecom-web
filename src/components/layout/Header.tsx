"use client";
import { BadgePercent, Phone, Smartphone } from "lucide-react";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-center py-[4px] text-white bg-gradient-to-r from-[#0D57C6] via-[#37CFFF] to-[#0F5ED6]">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between w-full max-w-7xl px-2 md:px-0">
        <div className="flex items-center flex-1 min-w-0 truncate">
          <BadgePercent className="w-4 h-4 mr-1 text-white shrink-0" />
          <p className="text-[12px] mr-1 hidden xs:inline md:inline">Nhập mã</p>
          <p className="text-[14px] font-bold mr-1 text-yellow-400">NEWBIE</p>
          <p className="text-[12px] hidden xs:inline md:inline">
            giảm ngay 10% cho lần đầu mua hàng.
          </p>
        </div>

        <div className="flex items-center flex-1 justify-end min-w-0 mt-1 md:mt-0">
          <Phone className="w-4 h-4 mr-1 text-white shrink-0" />
          <p className="text-[12px] mr-1 hidden xs:inline md:inline">
            Hotline:
          </p>
          <p className="text-[14px] font-bold mr-6 text-yellow-400 whitespace-nowrap">
            0283 760 7607
          </p>

          <button className="flex items-center md:space-x-2 hover:cursor-pointer px-2 py-1 rounded md:ml-2">
            <Smartphone className="w-4 h-4 md:mr-1 text-white" />
            <p className="text-[12px] hidden xs:inline md:inline">
              Tải ứng dụng
            </p>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
