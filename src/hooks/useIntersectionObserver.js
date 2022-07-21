import { useEffect, useState } from "react";

const useIntersectionObserver = ({ onIntersect }) => {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    if (!target) return;
    const observer = new IntersectionObserver(onIntersect);
    observer.observe(target);
    return () => observer.unobserve(target);
  }, [onIntersect, target]);

  return { setTarget };
};

export default useIntersectionObserver;
