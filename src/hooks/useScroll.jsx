import { useEffect, useState } from "react";

const useScroll = () => {
  const [isShow, setIsShow] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const scrollHandler = () => {
    setScrollY(window.pageYOffset);
    scrollY > 100 ? setIsShow(true) : setIsShow(false);
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", scrollHandler);
    };
    watchScroll();
    return () => {
      window.addEventListener("scroll", scrollHandler);
    };
  });

  return [isShow, scrollY, setScrollY];
};

export default useScroll;
