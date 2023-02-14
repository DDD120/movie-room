import styled from "@emotion/styled";
import { colors, fontSize } from "styles/common";
import StarInput from "./StarInput";

const Base = styled.section`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Name = styled.span`
  font-size: ${fontSize.lg};
  line-height: 100%;
`;

const RatingValue = styled.span`
  font-size: ${fontSize.md};
  line-height: 100%;
`;

const RatingField = styled.fieldset`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  border: none;
  transform: translateY(2px);

  input:checked ~ label,
  labeL:hover,
  labeL:hover ~ label {
    transition: 0.2s;
    color: ${colors.orange};
  }
`;

const StarRating = ({ currentRating, register }) => {
  const stars = [5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5];

  return (
    <Base>
      <Name>별점</Name>
      <RatingField>
        {stars.map((star) => (
          <StarInput
            key={star}
            register={register}
            value={star}
            isHalf={!Number.isInteger(star)}
            currentRating={currentRating}
          />
        ))}
      </RatingField>
      <RatingValue>{currentRating}</RatingValue>
    </Base>
  );
};

export default StarRating;
