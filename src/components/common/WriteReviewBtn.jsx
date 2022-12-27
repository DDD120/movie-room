import styled from "@emotion/styled";
import { Common } from "styles/common";
import { BsPen } from "react-icons/bs";

const Base = styled.button`
  cursor: pointer;
  font-weight: 700;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  color: ${Common.colors.white};
  background-color: ${Common.colors.orange};
  display: flex;
  justify-content: center;
  transition: 0.2s;
  &:hover {
    background-color: ${Common.colors.cyan};
  }
`;

const PenIcon = styled.div`
  margin: 3px 8px 0 0;
`;

const Title = styled.span``;

const WriteReviewBtn = ({ clickEvent }) => {
  return (
    <Base onClick={clickEvent}>
      <PenIcon>
        <BsPen />
      </PenIcon>
      <Title>리뷰 작성</Title>
    </Base>
  );
};

export default WriteReviewBtn;
