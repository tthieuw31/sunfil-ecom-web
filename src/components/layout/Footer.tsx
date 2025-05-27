import { ChevronDown } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="flex w-full justify-center items-center bg-cover bg-center bg-no-repeat text-[#001D52] py-10 md:py-20"
      style={{ backgroundImage: "url('/image/footer-bg.jpg')" }}
    >
      <div className="w-full max-w-7xl flex flex-col md:flex-row md:justify-between md:items-start md:gap-14 px-4 md:px-0">
        <div className="text-base md:text-xl space-y-2 mb-8 md:mb-0">
          <h3 className="font-semibold uppercase text-[#013065] text-lg md:text-xl">
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
              className="w-[120px] md:w-[200px] h-auto"
            />
          </div>
        </div>

        <div className="flex justify-between md:space-x-10">
          <div className="mb-8 md:mb-0">
            <h4 className="font-semibold text-lg md:text-2xl mb-3 text-[#013065]">
              Sitemap
            </h4>
            <ul className="space-y-2 text-[15px] md:text-[16px] text-[#637381]">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Article</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0">
            <h4 className="font-semibold text-lg md:text-2xl mb-3 text-[#013065]">
              Legal
            </h4>
            <ul className="space-y-2 text-[15px] md:text-[16px] text-[#637381]">
              <li className="font-semibold text-[#013065]">
                <a href="#">— Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie policy</a>
              </li>
              <li>
                <a href="#">Delivery policy</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 min-w-[180px]">
          <h4 className="font-semibold text-lg md:text-2xl mb-3 text-[#013065]">
            Download App
          </h4>
          <div className="space-y-2">
            <button className="bg-[#1C252E] py-3 md:py-[18px] px-4 md:px-5 rounded-xl flex w-full items-center justify-center hover:bg-[#001D52] transition hover:cursor-pointer">
              <img
                src="/image/play-store-fill.png"
                alt="Google Play"
                className="w-[24px] md:w-[30px] h-auto"
              />
              <div className="text-white text-start ml-2 md:ml-3">
                <p className="text-xs md:text-sm font-normal">Get it on</p>
                <p className="text-[15px] md:text-[16px] font-semibold">
                  Google Play Store
                </p>
              </div>
            </button>

            <button className="bg-[#0373F3] py-3 md:py-[18px] px-4 md:px-5 rounded-xl flex w-full items-center justify-center hover:bg-[#73a8cc] transition hover:cursor-pointer">
              <img
                src="/image/play-store-fill.png"
                alt="Google Play"
                className="w-[24px] md:w-[30px] h-auto"
              />
              <div className="text-white text-start ml-2 md:ml-3">
                <p className="text-xs md:text-sm font-normal">Download from</p>
                <p className="text-[15px] md:text-[16px] font-semibold">
                  Apple App Store
                </p>
              </div>
            </button>
          </div>
          <div className="mt-4 flex items-center space-x-3">
            <button className="hidden md:flex items-center text-gray-700 hover:text-blue-600 hover:cursor-pointer">
              <img
                src="/icon/ico-country-c-vietnam.svg"
                width={28}
                height={28}
                alt="Vietnam"
                className="md:w-[36px] md:h-[36px]"
              />
              <p className="ml-2 text-[15px] md:text-[16px] font-medium">VI</p>
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
