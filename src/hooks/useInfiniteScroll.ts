import { useEffect } from "react";

/**
 * Custom hook to implement infinite scroll functionality.
 * It observes a loader element and triggers a callback when the element is in view.
 */
export function useInfiniteScroll(
  loaderRef: React.RefObject<HTMLElement>,
  callback: () => void
) {
  useEffect(() => {
    const node = loaderRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          callback();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [callback]);
}
