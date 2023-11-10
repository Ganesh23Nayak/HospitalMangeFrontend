import { useEffect, useMemo, useState } from "react";

export default function useInView({ ref }) {
  const [inView, setInView] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => setInView(entry.isIntersecting)),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return inView;
}
