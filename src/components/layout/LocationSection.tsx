import { ArrowRight } from "lucide-react";
import React from "react";

const LocationSection: React.FC = () => {
  return (
    <section>
      <div className="bg-[#E6F1FF] flex w-full justify-center py-8">
        <div className="max-w-7xl flex w-full items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={"icon/location_icon.svg"}
              alt="Location Icon"
              className="w-12 h-12"
            />
            <p className="text-[#1C252E] text-[28px] font-medium">
              Xem hệ thống 88 cửa hàng trên toàn quốc
            </p>
          </div>

          <button className="bg-white text-[#025FCA] px-6 py-3 rounded-full font-semibold hover:cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300">
            Xem ngay <ArrowRight className="inline ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
