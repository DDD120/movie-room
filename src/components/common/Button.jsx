import styled from "@emotion/styled";
import { Common } from "styles/common";

const Btn = styled.button`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  border-radius: 50px;
  padding: 14px 30px;
  background-color: ${Common.colors.cyan};
`;

const Button = ({ clickEvent, children }) => {
  return <Btn onClick={clickEvent}>{children}</Btn>;
};

export default Button;
