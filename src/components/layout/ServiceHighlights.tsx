import Image from "next/image";

const ServiceHighlights = () => {
  const items = [
    {
      icon: "/image/money_icon.png",
      title: "Miễn phí vận chuyển",
      description: "Với hoá đơn từ 1 triệu",
    },
    {
      icon: "/image/support_icon.png",
      title: "Hỗ trợ 24/7",
      description:
        "Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm",
    },
    {
      icon: "/image/delivery_icon.png",
      title: "Giao hàng nhanh 2h",
      description: "Trong vòng bán kính 10km nội thành TP HCM",
    },
    {
      icon: "/image/package_icon.png",
      title: "30 ngày đổi trả",
      description:
        "Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển",
    },
  ];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-white rounded-lg shadow-md gap-3"
          >
            <Image src={item.icon} alt="icon" width={48} height={48} />
            <div>
              <h4 className="font-bold text-[16px] text-[#1C252E] mb-1">
                {item.title}
              </h4>
              <p className="text-sm font-medium text-[#637381]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceHighlights;
