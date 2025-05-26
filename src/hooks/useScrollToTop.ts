import { useEffect, useState } from "react";

/**
 * Custom hook to determine if the scroll position is beyond a specified offset.
 * It returns a boolean indicating whether the scroll position is greater than the offset.
 *
 * @param {number} offset - The scroll position offset to check against. Default is 200 pixels.
 * @returns {boolean} - True if the scroll position is greater than the offset, false otherwise.
 */

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
