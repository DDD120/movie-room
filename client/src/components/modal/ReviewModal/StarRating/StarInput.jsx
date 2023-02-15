import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors, fontSize } from "styles/common";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
  font-size: ${fontSize.lg};
  color: ${colors.lightgray};

  ${({ isHalf }) =>
    isHalf &&
    css`
      position: absolute;
      width: 12px;
      overflow: hidden;

      &:nth-of-type(10) {
        transform: translate(-108px);
      }
      &:nth-of-type(8) {
        transform: translate(-84px);
      }
      &:nth-of-type(6) {
        transform: translate(-60px);
      }
      &:nth-of-type(4) {
        transform: translate(-36px);
      }
      &:nth-of-type(2) {
        transform: translate(-12px);
      }
    `}
`;

const StarInput = ({ value, isHalf, currentRating, register }) => {
  return (
    <>
      <Input
        {...register}
        type="radio"
        name="rating"
        id={`star${value}`}
        value={value}
        defaultChecked={value === currentRating}
      />
      <Label isHalf={isHalf} htmlFor={`star${value}`}>
        {isHalf ? <FaStarHalf /> : <FaStar />}
      </Label>
    </>
  );
};

export default StarInput;
