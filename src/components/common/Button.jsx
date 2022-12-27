import styled from "@emotion/styled";
import { Common } from "styles/common";

const Base = styled.button`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  border-radius: 50px;
  padding: 14px 30px;
  background-color: ${Common.colors.cyan};

  &:disabled {
    filter: grayscale(0.9);
  }
`;

const Button = ({ clickEvent, children, ...rest }) => {
  return (
    <Base onClick={clickEvent} {...rest}>
      {children}
    </Base>
  );
};

export default Button;
