import FilterSection from "./FilterSection";

const FilterSidebar = () => {
  return (
    <div className="space-y-6 bg-white py-3 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex w-full mb-0 p-3 border-b border-[#919EAB33] items-center">
        <img
          src="/image/filter-icon.png"
          alt="Filter Icon"
          className="w-8 h-8 mr-2"
        />
        <h2 className="text-2xl font-bold text-[#0373F3]">Bộ Lọc</h2>
      </div>

      <FilterSection title="Danh mục sản phẩm">
        <ul className="space-y-2 text-sm font-medium text-[#1C252E]">
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" /> Lọc gió Động cơ
          </li>
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" /> Lọc Nhiên Liệu
          </li>
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" /> Bộ lọc dầu
          </li>
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" /> Chưa phân loại
          </li>
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" /> Khác
          </li>
        </ul>
      </FilterSection>

      <FilterSection title="Khoảng giá">
        <ul className="space-y-2 text-sm font-medium text-[#1C252E]">
          <li className="flex items-center">
            <input type="radio" name="price" /> Dưới 100.000 đ
          </li>
          <li className="flex items-center">
            <input type="radio" name="price" /> 100.000 – 300.000 đ
          </li>
          <li className="flex items-center">
            <input type="radio" name="price" /> 300.000 – 500.000 đ
          </li>
          <li className="flex items-center">
            <input type="radio" name="price" /> Trên 500.000 đ
          </li>
        </ul>
      </FilterSection>

      <FilterSection title="Thương hiệu">
        <ul className="space-y-2 text-sm font-medium text-[#1C252E]">
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" /> Asakashi
          </li>
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" /> Bosch
          </li>
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" /> Hyundai
          </li>
        </ul>
      </FilterSection>

      <FilterSection title="Năm sản xuất">
        <ul className="space-y-2 text-sm font-medium text-[#1C252E]">
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" /> 2021
          </li>
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" /> 2020
          </li>
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" /> 2018
          </li>
        </ul>
      </FilterSection>

      <FilterSection title="Xuất xứ">
        <ul className="space-y-2 text-sm font-medium text-[#1C252E]">
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" /> Nhật Bản
          </li>
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" /> Trung Quốc
          </li>
        </ul>
      </FilterSection>
    </div>
  );
};

export default FilterSidebar;
