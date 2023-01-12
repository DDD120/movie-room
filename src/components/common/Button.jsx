import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Common } from "styles/common";

const Base = styled.button`
  cursor: pointer;
  border-radius: 50px;
  background-color: ${Common.colors.cyan};
  transition: filter 0.3s;
  font-size: 1.125rem;
  font-weight: 700;
  padding: 14px 30px;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    filter: grayscale(0.9);
  }

  ${({ size }) =>
    size === "small" &&
    css`
      padding: 8px 20px;
      font-size: 1rem;
    `}

  ${({ variant }) =>
    variant === "cancel" &&
    css`
      background-color: ${Common.colors.beige};
      border: 2px solid ${Common.colors.cyan};
    `}
`;

const Button = ({ clickEvent, children, ...rest }) => {
  return (
    <Base onClick={clickEvent} {...rest}>
      {children}
    </Base>
  );
};

export default Button;
