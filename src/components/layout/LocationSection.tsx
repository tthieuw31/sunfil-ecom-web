import { ArrowRight } from "lucide-react";
import React from "react";

const LocationSection: React.FC = () => {
  return (
    <section>
      <div className="bg-[#E6F1FF] flex w-full justify-center py-6 md:py-8">
        <div className="max-w-7xl flex flex-col md:flex-row w-full items-center justify-between gap-4 px-4 md:px-0">
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <img
              src={"icon/location_icon.svg"}
              alt="Location Icon"
              className="w-12 h-12"
            />
            <p className="text-[#1C252E] text-[28px] font-medium text-center md:text-left">
              Xem hệ thống 88 cửa hàng trên toàn quốc
            </p>
          </div>

          <button className="bg-white text-[#025FCA] px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300 text-sm md:text-base">
            Xem ngay{" "}
            <ArrowRight className="inline ml-2 w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
