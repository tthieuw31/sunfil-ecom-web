import { ChevronDown } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="flex w-full justify-center items-center bg-cover bg-center bg-no-repeat text-[#001D52] py-20"
      style={{ backgroundImage: "url('/image/footer-bg.jpg')" }}
    >
      <div className="max-w-7xl w-full py-10 flex justify-between items-start gap-8">
        {/* Cột 1: Công ty */}
        <div className="text-xl space-y-2">
          <h3 className="mb-10 font-semibold uppercase text-[#013065]">
            VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY
          </h3>
          <div className="flex space-x-2">
            <p className="text-[#637381]">Tax code:</p>
            <p className="text-[#637381] font-bold">0305094228</p>
          </div>
          <div className="flex space-x-2">
            <p className="text-[#637381]">Address:</p>
            <p className="text-[#637381] font-bold">
              13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam.
            </p>
          </div>
          <div className="flex space-x-2">
            <p className="text-[#637381]">Phone number:</p>
            <p className="text-[#637381] font-bold">0283 760 7607</p>
          </div>
          <div className="flex space-x-2">
            <p className="text-[#637381]">Opening hour:</p>
            <p className="text-[#637381] font-bold">
              09:00 – 22:00 from Mon – Fri
            </p>
          </div>
          <div className="mt-3">
            <img
              src="/image/BoCongThuong.png"
              alt="Bộ Công Thương"
              className="w-[200px] h-auto"
            />
          </div>
        </div>

        {/* Cột 2: Sitemap */}
        <div>
          <h4 className="font-semibold text-2xl mb-3 text-[#013065]">
            Sitemap
          </h4>
          <ul className="space-y-2 text-[16px] text-[#637381]">
            <li>About</li>
            <li>Article</li>
            <li>Cart</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Cột 3: Legal */}
        <div>
          <h4 className="font-semibold text-2xl mb-3 text-[#013065]">Legal</h4>
          <ul className="space-y-2 text-[16px] text-[#637381]">
            <li className="font-semibold text-[#013065]">— Privacy Policy</li>
            <li>Cookie policy</li>
            <li>Delivery policy</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Cột 4: Download App */}
        <div>
          <h4 className="font-semibold text-2xl mb-3 text-[#013065]">
            Download App
          </h4>
          <div className="space-y-2">
            <button className="bg-[#1C252E] py-[18px] px-5 rounded-xl flex w-full items-center justify-center hover:bg-[#001D52] transition">
              <img
                src="/image/play-store-fill.png"
                alt="Google Play"
                className="w-[30px] h-auto"
              />
              <div className="text-white text-start ml-3">
                <p className="text-sm font-normal">Get it on</p>
                <p className="text-[16px] font-semibold">Google Play Store</p>
              </div>
            </button>

            <button className="bg-[#0373F3] py-[18px] px-5 rounded-xl flex w-full items-center justify-center hover:bg-[#73a8cc] transition">
              <img
                src="/image/play-store-fill.png"
                alt="Google Play"
                className="w-[30px] h-auto"
              />
              <div className="text-white text-start ml-3">
                <p className="text-sm font-normal">Download from</p>
                <p className="text-[16px] font-semibold">Apple App Store</p>
              </div>
            </button>
          </div>
          <div className="mt-4 flex items-center space-x-3">
            <button className="flex items-center text-gray-700 hover:text-blue-600 hover:cursor-pointer">
              <img
                src="/icon/ico-country-c-vietnam.svg"
                width={36}
                height={36}
                alt="Vietnam"
              />
              <p className="ml-2 text-[16px] font-medium">VI</p>
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>
          </div>
          {/* <div className="mt-4">
            <button className="w-8 h-8 rounded-full border border-[#001D52] flex items-center justify-center hover:bg-[#001D52] hover:text-white transition">
              ↑
            </button>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
