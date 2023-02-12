import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "styles/colors";

const Base = styled.button`
  cursor: pointer;
  border-radius: 50px;
  background-color: ${colors.cyan};
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
      background-color: ${colors.beige};
      border: 2px solid ${colors.cyan};
    `}
`;

const Button = ({ children, ...rest }) => {
  return <Base {...rest}>{children}</Base>;
};

export default Button;
