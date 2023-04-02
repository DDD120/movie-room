import { RiArrowDropUpLine } from "react-icons/ri";
import styled from "@emotion/styled";
import { colors, fontSize } from "styles/common";

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

const ToTop = ({ isShow }) => {
  return (
    <Base
      type="button"
      onClick={() => window.scrollTo(0, 0)}
      isShow={isShow}
      aria-label="Top 버튼"
    >
      <RiArrowDropUpLine />
    </Base>
  );
};

export default ToTop;
