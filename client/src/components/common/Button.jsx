import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors, fontSize } from "styles/common";

const Base = styled.button`
  cursor: pointer;
  border-radius: 50px;
  background-color: ${colors.cyan};
  transition: filter 0.3s;
  font-size: ${fontSize.md};
  font-weight: 700;
  padding: 0 30px;
  height: 50px;

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
      font-size: ${fontSize.base};
    `}

  ${({ variant }) =>
    variant === "cancel" &&
    css`
      background-color: ${colors.beige};
      border: 2px solid ${colors.cyan};
    `}
`;

const Button = ({ children, ...rest }) => {
  return <Base {...rest}>{children}</Base>;
};

export default Button;
