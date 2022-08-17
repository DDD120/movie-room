import { GoMailRead } from "react-icons/go";
import styled from "@emotion/styled";
import { Common } from "styles/common";
import { useRef, useState } from "react";
import useInterval from "hooks/useInterval";
import Button from "components/common/Button";
import Modal from "./Modal";
import { useEmailMutation, useSignupMutation } from "apis/server-api";

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

const SuccessSendMail = ({ email, password, closeHandler }) => {
  const [timeLimit, setTimeLimit] = useState(180);
  const [isRunning, setIsRunning] = useState(true);
  const inputRef = useRef();
  const [emailTrigger] = useEmailMutation();
  const [signupTrigger] = useSignupMutation();

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
    signupTrigger({
      email,
      password,
      certificationNumber: inputRef.current.value,
    });
  };

  const resendMail = () => {
    emailTrigger(email);
    setTimeLimit(10);
    setIsRunning(true);
  };

  return (
    <Modal closeHandler={closeHandler} backdropTouchClose={false}>
      <Base>
        <ImgWrapper>
          <GoMailRead />
        </ImgWrapper>
        <Head>이메일 인증</Head>

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
          <Button onClick={signup}>확인</Button>
        ) : (
          <Button onClick={resendMail}>인증 메일 재전송</Button>
        )}
      </Base>
    </Modal>
  );
};

export default SuccessSendMail;
