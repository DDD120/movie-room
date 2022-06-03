import styled from "@emotion/styled";
import { Common } from "styles/common";
import { BsPen } from "react-icons/bs";

const Button = styled.button`
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
  position: absolute;
  bottom: 2px;
  &:hover {
    background-color: ${Common.colors.cyan};
  }
`;

const IconContainer = styled.div`
  margin: 3px 8px 0 0;
`;

const Span = styled.span``;

const WriteReview = () => {
  return (
    <Button>
      <IconContainer>
        <BsPen />
      </IconContainer>
      <Span>리뷰 작성</Span>
    </Button>
  );
};

export default WriteReview;
