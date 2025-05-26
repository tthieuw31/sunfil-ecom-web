"use client";

import { ChevronUpCircle } from "lucide-react";
import useScrollToTop from "@/hooks/useScrollToTop";

const BackToTopButton = () => {
  const isVisible = useScrollToTop(200);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 hover:cursor-pointer text-xl rounded-full text-[#013065] shadow-lg z-50"
      aria-label="Back to top"
    >
      <ChevronUpCircle className="w-10 h-10" />
    </button>
  );
};

export default BackToTopButton;
