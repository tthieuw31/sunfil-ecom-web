import { ChevronDown } from "lucide-react";
import ProductCard from "./ProductCard";

const dummyProducts = new Array(16).fill(null).map((_, i) => ({
  id: i + 1,
  name: "Lọc gió động cơ Air Filter – Chevrolet Colorado...",
  image: "/image/oil_filter.png",
  price: 299000,
  originalPrice: 329000,
  discount: 10,
  type: "full",
  hot: true,
}));

const ProductListing = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#1C252E]">
          Danh sách sản phẩm
        </h2>
        <div className="flex items-center space-x-3 text-sm">
          <span className="font-medium text-[#1C252E]">Sắp xếp theo</span>
          <button className="font-bold text-[#0373F3] bg-white border border-blue-600 rounded-lg px-3 py-1 hover:bg-blue-50 hover:cursor-pointer">
            Liên quan
          </button>
          <button className="font-bold text-[#1C252E] bg-white hover:bg-blue-50 hover:cursor-pointer rounded-lg px-3 py-1">
            Bán chạy
          </button>
          <button className="font-bold text-[#1C252E] bg-white hover:bg-blue-50 hover:cursor-pointer rounded-lg px-3 py-1">
            Mới nhất
          </button>
          <button className="font-bold text-[#1C252E] bg-white hover:bg-blue-50 hover:cursor-pointer rounded-lg px-3 py-1">
            Nổi bật
          </button>
          <button className="flex font-medium text-[#1C252E] px-3 py-1 hover:cursor-pointer">
            Giá: Thấp → Cao <ChevronDown />
          </button>
        </div>
      </div>

      {/* Grid sản phẩm */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
