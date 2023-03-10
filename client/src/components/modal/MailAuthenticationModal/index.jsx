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
import { useNavigate } from "react-router-dom";
import { showToast } from "lib/toast";

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
  const navigate = useNavigate();
  const inputRef = useRef();
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
    if (isEmailSuccess) {
      showToast(emailRes.message);
    }
  }, [emailRes, isEmailSuccess]);

  useEffect(() => {
    if (isEmailError) {
      showToast(emailError.data.message);
    }
  }, [isEmailError, emailError]);

  useEffect(() => {
    if (isSignupSuccess) {
      showToast(signupRes.message);
      onClose();
      navigate("/");
      dispatch(login({ user: signupRes.user }));
    }
  }, [isSignupSuccess, signupRes, onClose, navigate, dispatch]);

  useEffect(() => {
    if (isSignupError) {
      showToast(signupError.data.message);
    }
  }, [isSignupError, signupError]);

  return (
    <Modal onClose={onClose}>
      <Base>
        <MailIcon>
          <GoMailRead />
        </MailIcon>
        <Head>????????? ??????</Head>
        <Explanation>
          ????????? ????????? ?????? ????????? <b>{email}</b>?????? ?????????????????????.
        </Explanation>
        <AuthorizationNumber timeLimit={timeLimit} inputRef={inputRef} />
        {isRunning ? (
          <Button onClick={handleCheckClick}>??????</Button>
        ) : (
          <Button onClick={handleResendMailClick}>?????? ?????? ?????????</Button>
        )}
      </Base>
    </Modal>
  );
};

export default MailAuthenticationModal;
