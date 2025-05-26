import Image from "next/image";

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  type?: string;
  hot?: boolean;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="max-w-[252px] h-auto w-full bg-white rounded-lg p-4 shrink-0 drop-shadow-sm hover:drop-shadow-xl hover:cursor-pointer transition-shadow duration-500 ease-in-out">
      <div className="flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="mx-auto object-contain"
        />
      </div>

      <div className="mt-3">
        {product.hot && (
          <div className="flex w-fit py-0.5 px-2.5 rounded-full items-center bg-gradient-to-r from-[#FFD666] to-[#FFAB00]">
            <img
              src={"/image/fire-icon.png"}
              className="w-4 h-4"
              alt="fire-icon"
            />{" "}
            <span className=" text-[#7A0916] text-sm font-semibold px-2 py-1 rounded-full">
              Giá cực sốc
            </span>
          </div>
        )}

        <p className="mt-2 text-sm text-[#1C252E] font-semibold line-clamp-2">
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
        {product.type === "full" && (
          <button className="mt-3 bg-[#E6F1FF] text-[#025FCA] py-2.5 rounded-md w-full font-bold text-sm hover:cursor-pointer">
            Mua ngay
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
