import { GoMailRead } from "react-icons/go";
import styled from "@emotion/styled";
import { Common } from "styles/common";
import { useRef, useEffect, useCallback } from "react";
import Button from "components/common/Button";
import Modal from "../Modal";
import { useEmailMutation, useSignupMutation } from "apis/server-api";
import AuthorizationNumber from "./AuthorizationNumber";
import useTimer from "hooks/useTimer";
import { useDispatch } from "react-redux";
import { updateUserState } from "store/user";
import { toast } from "react-toastify";

const Base = styled.main``;

const Head = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Explanation = styled.p`
  word-break: keep-all;
`;

const MailIcon = styled.div`
  color: ${Common.colors.black};
  font-size: 3rem;
`;

const MailAuthenticationModal = ({ email, password, closeHandler }) => {
  const { timeLimit, isRunning, reset } = useTimer();
  const dispatch = useDispatch();

  const inputRef = useRef();
  const [emailTrigger, { data: emailRes = {} }] = useEmailMutation();
  const [signupTrigger, { data: signupRes = {} }] = useSignupMutation();

  const signup = () => {
    signupTrigger({
      email,
      password,
      inputNumber: inputRef.current.value,
    });
  };

  const resendMail = () => {
    emailTrigger({ email });
    reset();
  };

  const showSuccessNotify = useCallback((msg) => {
    toast.success(msg, {
      autoClose: 3000,
      hideProgressBar: true,
    });
  }, []);

  const showErrorNotify = useCallback((msg) => {
    toast.error(msg, {
      autoClose: 3000,
      hideProgressBar: true,
    });
  }, []);

  useEffect(() => {
    emailRes.type === "SUCCESS_SEND_EMAIL"
      ? showSuccessNotify(emailRes.msg)
      : showErrorNotify(emailRes.msg);
  }, [emailRes, showSuccessNotify, showErrorNotify]);

  useEffect(() => {
    if (signupRes.type === "SUCCESS_SIGNUP") {
      showSuccessNotify(signupRes.msg);
      closeHandler();
      dispatch(updateUserState(signupRes.user));
    } else {
      showErrorNotify(signupRes.msg);
    }
  }, [signupRes, showSuccessNotify, showErrorNotify, closeHandler, dispatch]);

  return (
    <Modal closeHandler={closeHandler} backdropTouchClose={false}>
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
          <Button clickEvent={signup}>확인</Button>
        ) : (
          <Button clickEvent={resendMail}>인증 메일 재전송</Button>
        )}
      </Base>
    </Modal>
  );
};

export default MailAuthenticationModal;
