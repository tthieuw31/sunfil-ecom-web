import { useEffect } from "react";

/**
 * Custom hook to implement infinite scroll functionality.
 * It observes a loader element and triggers a callback when the element is in view.
 *
 * @param {React.RefObject<HTMLElement>} loaderRef - Reference to the loader element.
 * @param {() => void} callback - Callback function to call when the loader is in view.
 */

export function useInfiniteScroll(
  loaderRef: React.RefObject<HTMLElement>,
  callback: () => void
) {
  useEffect(() => {
    if (!loaderRef.current) return;

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

    observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loaderRef, callback]);
}
