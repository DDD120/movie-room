import styled from "@emotion/styled";
import { Common } from "styles/common";
import StarInput from "./StarInput";

const Base = styled.section`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Name = styled.span`
  font-size: 1.4rem;
  line-height: 100%;
`;

const RatingValue = styled.span`
  font-size: 1.2rem;
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
    color: ${Common.colors.orange};
  }
`;

const StarRating = ({ handleRatingClick, currentRating }) => {
  return (
    <Base>
      <Name>별점</Name>
      <RatingField>
        <StarInput
          onRatingClick={handleRatingClick}
          value={5}
          isHalf={false}
          currentRating={currentRating}
        />
        <StarInput
          onRatingClick={handleRatingClick}
          value={4.5}
          isHalf={true}
          currentRating={currentRating}
        />
        <StarInput
          onRatingClick={handleRatingClick}
          value={4}
          isHalf={false}
          currentRating={currentRating}
        />
        <StarInput
          onRatingClick={handleRatingClick}
          value={3.5}
          isHalf={true}
          currentRating={currentRating}
        />
        <StarInput
          onRatingClick={handleRatingClick}
          value={3}
          isHalf={false}
          currentRating={currentRating}
        />
        <StarInput
          onRatingClick={handleRatingClick}
          value={2.5}
          isHalf={true}
          currentRating={currentRating}
        />
        <StarInput
          onRatingClick={handleRatingClick}
          value={2}
          isHalf={false}
          currentRating={currentRating}
        />
        <StarInput
          onRatingClick={handleRatingClick}
          value={1.5}
          isHalf={true}
          currentRating={currentRating}
        />
        <StarInput
          onRatingClick={handleRatingClick}
          value={1}
          isHalf={false}
          currentRating={currentRating}
        />
        <StarInput
          onRatingClick={handleRatingClick}
          value={0.5}
          isHalf={true}
          currentRating={currentRating}
        />
      </RatingField>
      <RatingValue>{currentRating}</RatingValue>
    </Base>
  );
};

export default StarRating;
