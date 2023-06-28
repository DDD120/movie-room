import styled from "@emotion/styled";
import Container from "components/common/Container";
import { colors, fontSize } from "styles/common";
import { Link, useSearchParams } from "react-router-dom";
import { useLoginMutation } from "apis/server-api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login as storeLogin } from "store/user";
import { useForm } from "react-hook-form";
import { showToast } from "lib/toast";
import AuthInput from "components/common/AuthInput";
import LogoImg from "assets/logo.png";
import useAuthRedirect from "hooks/useAuthRedirect";

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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Signin = styled.span`
  display: block;
  margin-bottom: 10px;
`;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [login, { data: loginRes = {}, isSuccess, isError, error }] =
    useLoginMutation();

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const next = searchParams.get("next") ?? "/";
  useAuthRedirect();

  const toSignupPath = `/signup${next === "/" ? "" : `?next=${next}`}`;

  const handleLoginSubmit = ({ email, password }) => {
    login({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(storeLogin({ user: loginRes.user }));
      showToast(loginRes?.message);
    }
    if (isError) showToast(error.data?.message);
  }, [loginRes, isSuccess, dispatch, isError, error]);

  return (
    <Container>
      <Base>
        <Logo>
          <img src={LogoImg} alt="MOVIE ROOM 로고" />
        </Logo>
        <Head>로그인</Head>
        <Form onSubmit={handleSubmit(handleLoginSubmit)}>
          <AuthInput
            register={register("email", { required: true })}
            type="email"
            title="이메일"
            placeholder="이메일"
            autoFocus
          />
          <AuthInput
            register={register("password", { required: true })}
            type="password"
            title="비밀번호"
            placeholder="비밀번호"
          />
          <AuthInput
            submit
            type="submit"
            title="로그인"
            value="로그인"
            disabled={isSubmitting}
          />
        </Form>
        <Link to={toSignupPath}>
          <Signin>회원가입</Signin>
        </Link>
      </Base>
    </Container>
  );
};

export default Login;
