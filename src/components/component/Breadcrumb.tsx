import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

const breadcrumbItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Sản phẩm", active: true },
];

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="text-sm text-gray-500 flex items-center space-x-1">
      {breadcrumbItems.map((item, index) => (
        <div className="flex items-center" key={index}>
          {index > 0 && <ChevronRight className="w-4 h-4 mx-1 text-gray-600" />}

          {item.href && !item.active ? (
            <Link href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ) : (
            <span
              className={`${
                item.active ? "text-[#024897] font-semibold" : "text-gray-400"
              }`}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
