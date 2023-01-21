import { RiArrowDropUpLine } from "react-icons/ri";
import styled from "@emotion/styled";
import { colors } from "styles/common";
import { useState, useEffect } from "react";
import { throttle } from "lodash";

const Container = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: ${colors.orange};
  font-size: 2rem;
  border: none;
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 9;
  transition: 0.2s;
  opacity: ${({ btnShow }) => (btnShow ? 1 : 0)};
  pointer-events: ${({ btnShow }) => (btnShow ? "auto" : "none")};
  &:hover {
    color: ${colors.black};
    background-color: ${colors.orange};
  }
`;

const ToTop = () => {
  const [isShow, setIsShow] = useState(false);

  const scrollHandler = () => {
    window.scrollY > 250 ? setIsShow(true) : setIsShow(false);
  };

  const clickHandler = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", throttle(scrollHandler, 500));
    return () => {
      window.addEventListener("scroll", throttle(scrollHandler, 500));
    };
  }, []);

  return (
    <Container type="button" onClick={clickHandler} btnShow={isShow}>
      <RiArrowDropUpLine />
    </Container>
  );
};

export default ToTop;
