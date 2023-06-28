import { GoMailRead } from "react-icons/go";
import styled from "@emotion/styled";
import { colors, fontSize } from "styles/common";
import { useRef, useEffect } from "react";
import Button from "components/common/Button";
import Modal from "../Modal";
import { useEmailMutation, useSignupMutation } from "apis/server-api";
import AuthorizationNumber from "./AuthorizationNumber";
import useTimer from "hooks/useTimer";
import { useDispatch } from "react-redux";
import { login } from "store/user";
import { showToast } from "lib/toast";
import useAuthRedirect from "hooks/useAuthRedirect";

const Base = styled.main`
  padding: 40px 12px;
`;

const Head = styled.h1`
  font-size: ${fontSize.xl};
  margin-bottom: 10px;
`;

const Explanation = styled.p`
  width: 80%;
  margin: 0 auto;
  word-break: keep-all;
`;

const MailIcon = styled.div`
  color: ${colors.black};
  font-size: ${fontSize.xl};
`;

const MailAuthenticationModal = ({ email, password, onClose }) => {
  const { timeLimit, isRunning, reset } = useTimer();
  const dispatch = useDispatch();
  const inputRef = useRef();
  useAuthRedirect();

  const [
    emailTrigger,
    {
      data: emailRes = {},
      isSuccess: isEmailSuccess,
      isError: isEmailError,
      error: emailError,
    },
  ] = useEmailMutation();
  const [
    signupTrigger,
    {
      data: signupRes = {},
      isSuccess: isSignupSuccess,
      isError: isSignupError,
      error: signupError,
    },
  ] = useSignupMutation();

  const handleCheckClick = () => {
    signupTrigger({
      email,
      password,
      inputNumber: inputRef.current.value,
    });
  };

  const handleResendMailClick = () => {
    emailTrigger({ email });
    reset();
  };

  useEffect(() => {
    if (isEmailSuccess) showToast(emailRes?.message);
    if (isEmailError) showToast(emailError.data?.message);
    if (isSignupError) showToast(signupError.data?.message);
  }, [
    emailRes,
    isEmailSuccess,
    isEmailError,
    emailError,
    isSignupError,
    signupError,
  ]);

  useEffect(() => {
    if (isSignupSuccess) {
      showToast(signupRes?.message);
      onClose();
      dispatch(login({ user: signupRes.user }));
    }
  }, [isSignupSuccess, signupRes, onClose, dispatch]);

  return (
    <Modal onClose={onClose}>
      <Base>
        <MailIcon>
          <GoMailRead />
        </MailIcon>
        <Head>이메일 인증</Head>
        <Explanation>
          이메일 인증을 위한 코드가 <b>{email}</b>으로 전송되었습니다.
        </Explanation>
        <AuthorizationNumber timeLimit={timeLimit} inputRef={inputRef} />
        {isRunning ? (
          <Button onClick={handleCheckClick}>확인</Button>
        ) : (
          <Button onClick={handleResendMailClick}>인증 메일 재전송</Button>
        )}
      </Base>
    </Modal>
  );
};

export default MailAuthenticationModal;
