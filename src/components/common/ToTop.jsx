import { RiArrowDropUpLine } from "react-icons/ri";
import styled from "@emotion/styled";
import { colors, fontSize } from "styles/common";
import { useState, useEffect } from "react";
import { throttle } from "lodash";

const Base = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: ${colors.orange};
  font-size: ${fontSize.xl};
  border: none;
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 9;
  transition: 0.2s;
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  pointer-events: ${({ isShow }) => (isShow ? "auto" : "none")};
  &:hover {
    color: ${colors.black};
    background-color: ${colors.orange};
  }
`;

const ToTop = () => {
  const [isShow, setIsShow] = useState(false);

  const handleScroll = () => {
    window.scrollY > 250 ? setIsShow(true) : setIsShow(false);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", throttle(handleScroll, 500));
    return () => {
      window.addEventListener("scroll", throttle(handleScroll, 500));
    };
  }, []);

  return (
    <Base
      type="button"
      onClick={handleClick}
      isShow={isShow}
      aria-label="Top 버튼"
    >
      <RiArrowDropUpLine />
    </Base>
  );
};

export default ToTop;
