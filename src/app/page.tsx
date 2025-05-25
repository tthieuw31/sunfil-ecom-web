import Breadcrumb from "@/components/component/Breadcrumb";
import FeaturedProduct from "@/components/component/FeaturedProduct";
import FilterSidebar from "@/components/component/FilterSidebar";
import NavBar from "@/components/component/NavBar";
import ProductListing from "@/components/component/ProductListing";
import ServiceHighlights from "@/components/component/ServiceHighlights";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Sản phẩm", active: true },
  ];

  return (
    <div className="w-full">
      <NavBar />

      <main className="bg-[#F4F6F8] min-h-screen">
        <div className="flex w-full justify-center">
          <div className="max-w-7xl w-full pt-4">
            <Breadcrumb items={breadcrumbItems} />
            <section className="mt-7">
              <FeaturedProduct />
            </section>

            <section className="mt-7 flex gap-4">
              <aside className="w-1/4">
                <FilterSidebar />
              </aside>
              <div className="w-3/4">
                <ProductListing />
              </div>
            </section>

            <section className="mt-10">
              <ServiceHighlights />
            </section>
          </div>
        </div>

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
      </main>

      <Footer />
    </div>
  );
}
