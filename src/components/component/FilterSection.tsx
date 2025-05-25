"use client";

import { ChevronDown } from "lucide-react";
import { useState, ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const FilterSection = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full p-3 mb-0 border-b border-[#919EAB33]">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="font-semibold text-[#1C252E] text-xl flex items-center justify-between w-full hover:cursor-pointer"
      >
        {title}
        <ChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[300px] mt-2" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default FilterSection;
