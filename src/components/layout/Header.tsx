"use client";
import { BadgePercent, Phone, Smartphone } from "lucide-react";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-center py-[4px] text-white bg-gradient-to-r from-[#0D57C6] via-[#37CFFF] to-[#0F5ED6]">
      <div className="flex items-center justify-between w-full max-w-7xl">
        <div className="flex items-center">
          <BadgePercent className="w-4 h-4 mr-1 text-white" />
          <p className="text-[12px] mr-1">Nhập mã</p>
          <p className="text-[14px] font-bold mr-1 text-yellow-400">NEWBIE</p>
          <p className="text-[12px]">giảm ngay 10% cho lần đầu mua hàng.</p>
        </div>

        <div className="flex items-center">
          <Phone className="w-4 h-4 mr-1 text-white" />
          <p className="text-[12px] mr-1">Hotline:</p>
          <p className="text-[14px] font-bold mr-6 text-yellow-400">
            0283 760 7607
          </p>

          <Smartphone className="w-4 h-4 mr-1 text-white" />
          <p className="text-[12px]">Tải ứng dụng</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
