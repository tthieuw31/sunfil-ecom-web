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

      <div className="bg-[#025FCA] w-full rounded-b-xl md:p-12 p-5 ">
        <ProductSlider />
      </div>
    </div>
  );
};

export default FeaturedProduct;
