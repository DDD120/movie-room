import styled from "@emotion/styled";
import { Common } from "styles/common";

const CertificationNumberBox = styled.div`
  position: relative;
  margin: 20px 0;
`;

const Input = styled.input`
  padding: 10px 10px;
  font-weight: 700;
  border: none;
  border-bottom: 1px solid #000;
  color: ${Common.colors.black};
  background-color: ${Common.colors.beige};
  outline: none;
  font-size: 1.725rem;
`;

const TimeLimit = styled.span`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  color: red;
`;

const AuthorizationNumber = ({ timeLimit, inputRef }) => {
  const formatTime = (time) => {
    const min = String(parseInt(time / 60)).padStart(2, "0");
    const sec = String(time % 60).padStart(2, "0");

    return `${min}:${sec}`;
  };
  return (
    <CertificationNumberBox>
      <Input
        ref={inputRef}
        title="인증코드"
        type="text"
        min={1}
        max={6}
        placeholder="인증코드"
      />
      <TimeLimit>{formatTime(timeLimit)}</TimeLimit>
    </CertificationNumberBox>
  );
};

export default AuthorizationNumber;
