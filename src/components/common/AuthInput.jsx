import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "styles/colors";

const Base = styled.input`
  margin: 4px auto;
  max-width: 600px;
  width: 100%;
  border-radius: 50px;
  padding: 14px 30px;
  border: none;
  box-shadow: none;
  color: #fff;
  font-size: 1.025rem;
  background-color: ${colors.orange};
  &::placeholder {
    color: #fff;
  }
  &:-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    box-shadow: 0 0 0 1000px ${colors.orange} inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-box-shadow: 0 0 0 1000px ${colors.orange} inset;
    -webkit-text-fill-color: #fff;
    -webkit-transition: background-color 5000s ease-in-out 0s;
  }

  ${({ submit }) =>
    submit &&
    css`
      cursor: pointer;
      background-color: ${colors.cyan};
      transition: filter 0.3s;
      &:hover {
        filter: brightness(0.9);
      }
      &:disabled {
        filter: grayscale(0.9);
      }
    `}
`;

const AuthInput = ({ register, ...rest }) => {
  return <Base {...register} {...rest} />;
};

export default AuthInput;
