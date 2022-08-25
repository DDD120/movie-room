import styled from "@emotion/styled";
import { useEmailMutation } from "apis/server-api";
import Container from "components/common/Container";
import SuccessSendMail from "components/modal/SuccessSnedMail/SuccessSendMail";
import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Common } from "styles/common";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 200px;
  margin: 40px 0 10px;
  & > img {
    width: 100%;
  }
`;

const Head = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${Common.colors.black};
  margin: 10px 0;
`;

const Form = styled.form`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Input = styled.input`
  margin: 4px auto;
  width: 100%;
  border-radius: 50px;
  padding: 14px 30px;
  border: none;
  box-shadow: none;
  color: #fff;
  font-size: 1.025rem;
  cursor: ${({ submit }) => submit && "pointer"};
  background-color: ${({ submit }) =>
    submit ? `${Common.colors.cyan}` : `${Common.colors.orange}`};
  &::placeholder {
    color: #fff;
  }
  &:-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    box-shadow: 0 0 0 1000px ${Common.colors.orange} inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-box-shadow: 0 0 0 1000px ${Common.colors.orange} inset;
    -webkit-text-fill-color: #fff;
    -webkit-transition: background-color 5000s ease-in-out 0s;
  }
`;

const ToLogin = styled.span`
  display: block;
  margin-bottom: 10px;
`;

const ErrorMsg = styled.p`
  color: #da0000;
  text-align: left;
  padding: 0 30px;
`;

const EMAIL_REGEX = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;

const PW_REGEX = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,10}$/;

const ERROR_MSG = {
  required: "필수정보입니다.",
  invalidEmail: "이메일 형식이 아닙니다.",
  invalidPw: "6~10자 영문, 숫자 조합으로 입력하세요.",
  invalidConfirmPw: "비밀번호와 일치하지 않습니다.",
};

const Signup = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [emailTrigger, { data: emailRes = {} }] = useEmailMutation();

  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    emailTrigger({ email: data.email });
  };

  const closeHandler = () => {
    setIsOpenModal(false);
  };

  const showErrorNotify = useCallback((msg) => {
    toast.error(msg, {
      autoClose: 3000,
      hideProgressBar: true,
    });
  }, []);

  useEffect(() => {
    emailRes.type === "SUCCESS_SEND_EMAIL"
      ? setIsOpenModal(true)
      : showErrorNotify(emailRes.msg);
  }, [emailRes, showErrorNotify]);

  return (
    <Container>
      <Layout>
        <Logo>
          <img src="/assets/logo.png" alt="로고" />
        </Logo>
        <Head>회원가입</Head>
        <Form onSubmit={handleSubmit(onSubmit)} action="">
          <Input
            type="email"
            title="이메일"
            placeholder="이메일"
            autoFocus
            {...register("email", {
              required: ERROR_MSG.required,
              pattern: {
                value: EMAIL_REGEX,
                message: ERROR_MSG.invalidEmail,
              },
            })}
          />
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
          <Input
            type="password"
            title="비밀번호"
            placeholder="비밀번호"
            {...register("pw", {
              required: ERROR_MSG.required,
              pattern: {
                value: PW_REGEX,
                message: ERROR_MSG.invalidPw,
              },
              onBlur: () => trigger("confirmPw"),
            })}
          />
          {errors.pw && <ErrorMsg>{errors.pw.message}</ErrorMsg>}
          <Input
            type="password"
            title="비밀번호 확인"
            placeholder="비밀번호 확인"
            {...register("confirmPw", {
              required: ERROR_MSG.required,
              validate: {
                confirmPw: (v) =>
                  v === getValues("pw") || ERROR_MSG.invalidConfirmPw,
              },
            })}
          />
          {errors.confirmPw && <ErrorMsg>{errors.confirmPw.message}</ErrorMsg>}
          <Input
            submit
            type="submit"
            title="회원가입"
            value="회원가입"
            disabled={isSubmitting}
          />
        </Form>
        <Link to="/login">
          <ToLogin>로그인 하러가기</ToLogin>
        </Link>
        {isOpenModal && (
          <SuccessSendMail
            email={getValues("email")}
            password={getValues("pw")}
            closeHandler={closeHandler}
          />
        )}
      </Layout>
    </Container>
  );
};

export default Signup;
