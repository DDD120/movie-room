import styled from "@emotion/styled";
import Button from "components/common/Button";
import React from "react";
import { colors, fontSize } from "styles/common";

const Base = styled.div`
  max-width: 360px;
  width: 100%;
  border-radius: 12px;
  padding: 20px 24px;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.beige};
  text-align: center;
  box-shadow: 0px 0px 10px ${colors.greyOpacity};

  p {
    font-size: ${fontSize.base};
  }
`;

const ButtonBox = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const SignoutMessage = ({ isSignoutLoading, onCancelClick, onDeleteClick }) => {
  return (
    <Base>
      <b>계정을 삭제하시겠습니까?</b>
      <p>이전에 작성한 리뷰들이 모두 사라집니다.</p>
      <ButtonBox>
        <Button
          type="button"
          size="small"
          variant="cancel"
          disabled={isSignoutLoading}
          onClick={onCancelClick}
        >
          취소
        </Button>
        <Button
          type="button"
          size="small"
          disabled={isSignoutLoading}
          onClick={onDeleteClick}
        >
          삭제
        </Button>
      </ButtonBox>
    </Base>
  );
};

export default SignoutMessage;
