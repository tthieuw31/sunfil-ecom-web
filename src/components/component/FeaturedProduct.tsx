import Image from "next/image";
import ProductSlider from "./ProductSlider";

const FeaturedProduct = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/image/banner.png"
        alt="Banner background"
        width={1200}
        height={400}
        className="w-full h-auto rounded-t-xl"
        priority
      />

      <div className="bg-[#025FCA] w-full rounded-b-xl p-12 ">
        <ProductSlider />
      </div>

      {/* <div className="absolute top-0 left-0 w-full h-full flex items-center px-6 sm:px-12">
        <div className="text-white max-w-xl space-y-4 z-10">
          <div className="bg-[#FFD700] text-red-600 text-sm font-bold px-3 py-1 inline-block rounded">
            MỚI CỰC HOT!
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            TẢI APP NHẬN QUÀ
          </h2>
          <p className="text-base sm:text-lg">
            Tích điểm ngay trên app{" "}
            <span className="font-bold text-yellow-300">SUNFIL1</span>
            <br />
            <em>*100K = 10 điểm</em>
          </p>
        </div>
        <div className="hidden sm:block absolute bottom-0 right-4 z-10 w-[300px]">
          <Image
            src="/image/Frame.png"
            alt="Oil"
            width={300}
            height={300}
            className="absolute -top-20 -left-10 w-[180px] rotate-[15deg]"
          />
          <Image
            src="/image/gold_water.png"
            alt="Filters"
            width={300}
            height={300}
            className="relative z-20"
          />
        </div>
      </div> */}
    </div>
  );
};

export default FeaturedProduct;
