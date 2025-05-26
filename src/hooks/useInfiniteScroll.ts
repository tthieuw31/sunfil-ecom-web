import { useEffect } from "react";

export function useInfiniteScroll(
  loaderRef: React.RefObject<HTMLDivElement>,
  callback: () => void
) {
  useEffect(() => {
    const handleScroll = () => {
      if (!loaderRef.current) return;
      const rect = loaderRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        callback();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loaderRef, callback]);
}
