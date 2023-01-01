import React from "react";
import styled from "@emotion/styled";
import { Common } from "styles/common";

const Base = styled.div`
  text-align: right;
`;

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  border: none;
  border-radius: 12px;
  padding: 20px;
  margin: 10px 0;
  font-size: 1.2rem;

  &:focus {
    outline: 2px solid ${Common.colors.orange};
  }
`;

const NumberOfCharacters = styled.span`
  color: ${Common.colors.grey};
`;

const WriteForm = ({
  onReviewContentChange,
  value,
  contentLength,
  ...rest
}) => {
  return (
    <Base>
      <TextArea
        name="content"
        id="content"
        type="text"
        cols="30"
        rows="8"
        value={value}
        maxLength="300"
        placeholder="리뷰를 작성하세요"
        onChange={onReviewContentChange}
        {...rest}
      />
      <NumberOfCharacters>{contentLength}/300</NumberOfCharacters>
    </Base>
  );
};

export default WriteForm;
