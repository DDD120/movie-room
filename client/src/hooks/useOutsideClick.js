import { useEffect } from "react";

const useOutsideClick = (ref, setState, exceptionState) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (exceptionState) {
        return;
      }
      if (ref.current && !ref.current.contains(event.target)) {
        setState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setState, exceptionState]);
};

export default useOutsideClick;
