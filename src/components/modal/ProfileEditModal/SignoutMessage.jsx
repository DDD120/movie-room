import styled from "@emotion/styled";
import Button from "components/common/Button";
import React from "react";
import { Common } from "styles/common";

const Base = styled.div`
  border-radius: 12px;
  padding: 20px 24px;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${Common.colors.beige};
  text-align: center;
  box-shadow: 0px 0px 10px ${Common.colors.greyOpacity};

  p {
    font-size: 0.9rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const SignoutMessage = ({
  isSignoutLoading,
  onCancelBtnClick,
  onDeleteBtnClick,
}) => {
  return (
    <Base>
      <b>계정을 삭제하시겠습니까?</b>
      <p>이전에 작성한 리뷰들이 모두 사라집니다.</p>
      <ButtonContainer>
        <Button
          type="button"
          size="small"
          variant="cancel"
          disabled={isSignoutLoading}
          onClick={onCancelBtnClick}
        >
          취소
        </Button>
        <Button
          type="button"
          size="small"
          disabled={isSignoutLoading}
          onClick={onDeleteBtnClick}
        >
          삭제
        </Button>
      </ButtonContainer>
    </Base>
  );
};

export default SignoutMessage;
