import { Product } from "@/types/product";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  const handleCardClick = () => {
    console.log("Card clicked:", product.name);
  };

  const handleBuyNowClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    console.log("Buy now clicked:", product.name);
  };

  return (
    <div
      onClick={handleCardClick}
      className="w-full max-w-[252px] bg-white rounded-lg p-4 flex flex-col shrink-0 drop-shadow-sm hover:drop-shadow-xl hover:cursor-pointer transition-shadow duration-500 ease-in-out"
    >
      <div className="flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="mx-auto object-contain"
        />
      </div>

      <div className="mt-3 flex flex-col flex-1">
        {product.hot && (
          <div className="flex w-fit items-center bg-gradient-to-r from-[#FFD666] to-[#FFAB00] py-0.5 px-2.5 rounded-full mb-2">
            <img
              src={"/image/fire-icon.png"}
              className="w-4 h-4"
              alt="fire-icon"
            />
            <span className="text-[#7A0916] text-sm font-semibold px-2">
              Giá cực sốc
            </span>
          </div>
        )}

        <p
          className="mt-auto text-sm text-[#1C252E] font-semibold line-clamp-2"
          title={product.name}
        >
          {product.name}
        </p>

        <div className="text-[#B71D18] font-bold text-xl mt-2">
          {product.price.toLocaleString()} đ
        </div>

        <div className="flex items-center mt-1">
          <span className="text-sm text-[#919EAB] line-through">
            {product.originalPrice.toLocaleString()} đ
          </span>
          <span className="text-sm text-[#B71D18] ml-2">
            -{product.discount}%
          </span>
        </div>

        {/* Nút mua ngay */}
        {product.type === "full" && (
          <button
            onClick={handleBuyNowClick}
            className="mt-3 bg-[#E6F1FF] text-[#025FCA] py-2.5 rounded-md w-full font-bold text-sm hover:cursor-pointer hover:bg-[#D1E6FF] hover:text-[#013D9E] transition-colors duration-200"
          >
            Mua ngay
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
