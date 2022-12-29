import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Common } from "styles/common";

const Base = styled.button`
  cursor: pointer;
  border-radius: 50px;
  background-color: ${Common.colors.cyan};
  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    filter: grayscale(0.9);
  }

  ${({ size }) =>
    size === "medium" &&
    css`
      font-size: 1.125rem;
      font-weight: 700;
      padding: 14px 30px;
    `}
  ${({ size }) =>
    size === "small" &&
    css`
      padding: 4px 12px;
      font-size: 0.9rem;
      font-weight: 400;
    `}
`;

const Button = ({ clickEvent, size = "medium", children, ...rest }) => {
  return (
    <Base onClick={clickEvent} size={size} {...rest}>
      {children}
    </Base>
  );
};

export default Button;
