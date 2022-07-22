import { GoMailRead } from "react-icons/go";
import styled from "@emotion/styled";
import { Common } from "styles/common";
import { useState } from "react";
import useInterval from "hooks/useInterval";
import Button from "components/common/Button";
import { useDispatch, useSelector } from "react-redux";
import { requestSignup, sendEmailCertificationNumber } from "store/signup";
import { useRef } from "react";

const Base = styled.main``;

const Head = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const ImgWrapper = styled.div`
  color: ${Common.colors.black};
  font-size: 3rem;
`;

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

const SuccessSendMail = ({ msg }) => {
  const [timeLimit, setTimeLimit] = useState(180);
  const [isRunning, setIsRunning] = useState(true);
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.signup);
  console.log(email, password);
  const inputRef = useRef();

  const formatTime = (time) => {
    const min = String(parseInt(time / 60)).padStart(2, "0");
    const sec = String(time % 60).padStart(2, "0");

    return `${min}:${sec}`;
  };

  useInterval(
    () => {
      if (timeLimit === 1) setIsRunning(false);
      setTimeLimit((prev) => prev - 1);
    },
    isRunning ? 1000 : null
  );

  const signup = () => {
    dispatch(
      requestSignup({
        email,
        password,
        certificationNumber: inputRef.current.value,
      })
    );
  };

  const resendMail = () => {
    dispatch(sendEmailCertificationNumber(email));
    setTimeLimit(10);
    setIsRunning(true);
  };

  return (
    <Base>
      <ImgWrapper>
        <GoMailRead />
      </ImgWrapper>
      <Head>이메일 인증</Head>
      <p>{msg}</p>
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
      {isRunning ? (
        <Button clickEvent={signup}>확인</Button>
      ) : (
        <Button clickEvent={resendMail}>인증 메일 재전송</Button>
      )}
    </Base>
  );
};

export default SuccessSendMail;
