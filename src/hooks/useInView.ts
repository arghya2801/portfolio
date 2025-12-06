import { useEffect, useState, useRef } from 'react';

export function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, { threshold });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      const element = ref.current;
      if (element) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return { ref, isInView };
}
