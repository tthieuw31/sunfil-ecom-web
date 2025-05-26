import { useEffect, useState } from "react";

const useScrollToTop = (offset = 200): boolean => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > offset);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return visible;
};

export default useScrollToTop;
