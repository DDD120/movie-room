import styled from "@emotion/styled";
import { useEmailMutation } from "apis/server-api";
import Container from "components/common/Container";
import MailAuthenticationModal from "components/modal/MailAuthenticationModal";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import { colors, fontSize } from "styles/common";
import { showToast } from "lib/toast";
import AuthInput from "components/common/AuthInput";
import { AnimatePresence } from "framer-motion";
import LogoImg from "assets/logo.png";

const Base = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 200px;
  margin: 40px 0 10px;
  img {
    width: 100%;
  }
`;

const Head = styled.h1`
  font-weight: 700;
  font-size: ${fontSize.lg};
  color: ${colors.black};
  margin: 10px 0;
`;

const Form = styled.form`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

export const ERROR_MSG = {
  required: "필수정보입니다.",
  invalidEmail: "이메일 형식이 아닙니다.",
  invalidPw: "6~10자 영문, 숫자 조합으로 입력하세요.",
  invalidConfirmPw: "비밀번호와 일치하지 않습니다.",
};

const Signup = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [emailTrigger, { isSuccess, isError, error }] = useEmailMutation();
  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });
  const [searchParams] = useSearchParams();
  const next = searchParams.get("next") ?? "/";

  const toLoginPath = `/login${next === "/" ? "" : `?next=${next}`}`;

  const onSubmit = async (data) => {
    emailTrigger({ email: data.email });
  };

  useEffect(() => {
    if (isSuccess) setIsShowModal(true);
    if (isError) showToast(error.data?.message);
  }, [isSuccess, isError, error]);

  return (
    <Container>
      <Base>
        <Logo>
          <img src={LogoImg} alt="MOVIE ROOM 로고" />
        </Logo>
        <Head>회원가입</Head>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <AuthInput
            type="email"
            title="이메일"
            placeholder="이메일"
            autoFocus
            register={register("email", {
              required: ERROR_MSG.required,
              pattern: {
                value: EMAIL_REGEX,
                message: ERROR_MSG.invalidEmail,
              },
            })}
          />
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
          <AuthInput
            type="password"
            title="비밀번호"
            placeholder="비밀번호"
            register={register("pw", {
              required: ERROR_MSG.required,
              pattern: {
                value: PW_REGEX,
                message: ERROR_MSG.invalidPw,
              },
              onBlur: () => trigger("confirmPw"),
            })}
          />
          {errors.pw && <ErrorMsg>{errors.pw.message}</ErrorMsg>}
          <AuthInput
            type="password"
            title="비밀번호 확인"
            placeholder="비밀번호 확인"
            register={register("confirmPw", {
              required: ERROR_MSG.required,
              validate: {
                confirmPw: (v) =>
                  v === getValues("pw") || ERROR_MSG.invalidConfirmPw,
              },
            })}
          />
          {errors.confirmPw && <ErrorMsg>{errors.confirmPw.message}</ErrorMsg>}
          <AuthInput
            submit
            type="submit"
            title="회원가입"
            value="회원가입"
            disabled={isSubmitting}
          />
        </Form>
        <Link to={toLoginPath}>
          <ToLogin>로그인 하러가기</ToLogin>
        </Link>
        <AnimatePresence>
          {isShowModal && (
            <MailAuthenticationModal
              email={getValues("email")}
              password={getValues("pw")}
              onClose={() => setIsShowModal(false)}
            />
          )}
        </AnimatePresence>
      </Base>
    </Container>
  );
};

export default Signup;
