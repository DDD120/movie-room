import React from "react";
import styled from "@emotion/styled";
import { colors, fontSize } from "styles/common";

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
  font-size: ${fontSize.md};

  &:focus {
    outline: 2px solid ${colors.orange};
  }
`;

const ContentLength = styled.span`
  color: ${colors.grey};
`;

const WriteForm = ({ value, contentLength, register, ...rest }) => {
  return (
    <Base>
      <TextArea
        {...register}
        name="content"
        id="content"
        type="text"
        cols="30"
        rows="8"
        value={value}
        maxLength="300"
        placeholder="리뷰를 작성하세요"
        {...rest}
      />
      <ContentLength>{contentLength}/300</ContentLength>
    </Base>
  );
};

export default WriteForm;
