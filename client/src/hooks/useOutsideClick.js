import { useEffect } from "react";

const useOutsideClick = ({ ref, setState, exceptionState }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      exceptionState.forEach((state) => {
        if (state) return;
      });
      if (ref.current && !ref.current.contains(event.target)) {
        setState(false);
      }
    };

    document.addEventListener("mouseup", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref, setState, exceptionState]);
};

export default useOutsideClick;
